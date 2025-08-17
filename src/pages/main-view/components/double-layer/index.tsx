import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import { useNavigate } from "react-router";
import MainView from "@/pages/main-view/index";
import MouseFollowing from "@/pages/main-view/components/mousefollowing";
import SEO from "@/components/SEO";

// 注册自定义缓动曲线（需在组件外初始化）
gsap.registerPlugin(CustomEase);
CustomEase.create("smoothEase", "0.4,0,0.2,1");

interface ImagePaths {
  FRONT: string;
  BACK: string;
  CP: string;
  BTN: string;
}

interface ImageState {
  front: HTMLImageElement | null;
  back: HTMLImageElement | null;
}

const View = () => {
  // 检测是否是首次访问
  const [isGlobalFlipped, setIsGlobalFlipped] = useState<boolean>();
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [images, setImages] = useState<ImageState>({ front: null, back: null });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cpRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);
  const mainViewRef = useRef<HTMLDivElement | null>(null);
  const rollRef = useRef<HTMLDivElement | null>(null);
  const CENTER = { x: 2.5, y: 2.5 };
  const navigate = useNavigate();

  const handleBtnHover = useCallback(
    (isHover: boolean) => {
      if (!isGlobalFlipped) return;

      gsap.to(btnRef.current, {
        scale: isHover ? 1.15 : 1.05,
        duration: 0.3,
        ease: "back.out(3)",
      });
    },
    [isGlobalFlipped]
  );

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isAnimating || isGlobalFlipped || gsap.isTweening(e.currentTarget))
        return;

      const tile = e.currentTarget as HTMLDivElement;
      gsap.killTweensOf(tile);

      const tl = gsap.timeline({
        defaults: {
          ease: "none",
          overwrite: "auto",
          force3D: true,
        },
      });

      tl.set(tile, {
        rotationX: 360,
        immediateRender: true,
        transformPerspective: 1000,
      });

      tl.add(() => tile.offsetHeight as unknown as void);

      tl.to(tile, {
        rotationX: 0,
        duration: 0.8,
        ease: "elastic.easeIn",
        onStart: () => {
          gsap.set(tile, { willChange: "transform" });
          return void 0;
        },
        onComplete: () => {
          gsap.set(tile, { willChange: "auto" });
          return void 0;
        },
      });
    },
    [isGlobalFlipped, isAnimating]
  );

  const IMAGE_PATHS: ImagePaths = {
    FRONT: "images/mainview/front.webp",
    BACK: "images/mainview/back.webp",
    CP: "images/mainview/cp.webp",
    BTN: "images/mainview/btn.webp",
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const [front, back] = await Promise.all([
          loadImage(IMAGE_PATHS.FRONT),
          loadImage(IMAGE_PATHS.BACK),
        ]);
        setImages({ front, back });
      } catch (error) {
        console.error("图片加载失败:", error);
      }
    };
    loadImages();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  };

  const performTileAnimation = useCallback(
    (tile: HTMLDivElement, index: number, targetFlip: number) => {
      const x = index % 6;
      const y = Math.floor(index / 6);
      const distance = Math.abs(x - CENTER.x) + Math.abs(y - CENTER.y);
      const delay = distance * 120;

      return gsap.to(tile, {
        duration: 1.5,
        rotateX: targetFlip,
        ease: "elastic.out(0.8, 0.3)",
        delay: delay / 1000,
      });
    },
    //  eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (isAnimating) return;

      const targetFlip = e.deltaY > 0 ? 180 : 0;
      if (isGlobalFlipped === (targetFlip === 180)) return;

      setIsGlobalFlipped(targetFlip === 180);
      setIsAnimating(true);

      gsap.to(containerRef.current, {
        duration: 2,
        backgroundColor: targetFlip === 180 ? "#0030ae" : "#111111",
        gap: targetFlip === 180 ? 0 : 2,
        ease: "expo.out",
      });

      gsap.to(cpRef.current, {
        duration: 0.3,
        opacity: targetFlip === 180 ? 0 : 1,
        ease: "power1.in",
      });

      const btnAnimation = gsap.timeline();
      if (targetFlip === 180) {
        btnAnimation
          .set(btnRef.current, { y: -10 })
          .to(btnRef.current, {
            duration: 0.3,
            opacity: 1,
            ease: "sine.inOut",
            onComplete: () => {
              if (btnRef.current) {
                btnRef.current.style.pointerEvents = "auto";
                gsap.killTweensOf(btnRef.current, { y: true });
                gsap.to(btnRef.current, {
                  duration: 1.2,
                  y: 10,
                  ease: "sine.inOut",
                  yoyo: true,
                  repeat: -1,
                  repeatRefresh: true,
                });
              }
            },
          })
          .to(
            rollRef.current,
            {
              duration: 0.3,
              opacity: 1,
              ease: "sine.inOut",
            },
            "<"
          );
      } else {
        btnAnimation
          .to(btnRef.current, {
            duration: 0.3,
            opacity: 0,
            ease: "sine.inOut",
            onComplete: () => {
              if (btnRef.current) {
                btnRef.current.style.pointerEvents = "none";
                gsap.killTweensOf(btnRef.current, { y: true });
              }
            },
          })
          .to(
            rollRef.current,
            {
              duration: 0.3,
              opacity: 0,
              ease: "sine.inOut",
            },
            "<"
          );
      }

      const tileAnimations: gsap.core.Tween[] = [];

      tilesRef.current.forEach((tile, index) => {
        if (!tile) return;

        const animation = performTileAnimation(tile, index, targetFlip);
        tileAnimations.push(animation);
      });

      Promise.all(tileAnimations.map((anim) => anim.then())).then(() => {
        setIsAnimating(false);
      });
    },
    [isAnimating, isGlobalFlipped, performTileAnimation]
  );

  const debounce = useCallback(
    (func: (...args: unknown[]) => void, wait: number) => {
      let timeout: ReturnType<typeof setTimeout>;
      return (...args: unknown[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    },
    []
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      // 这里可以添加布局调整逻辑
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [debounce]);

  const createTile = useCallback(
    (row: number, col: number) => {
      const frontPos = {
        x: (col * 100) / 5,
        y: (row * 100) / 5,
      };

      return (
        <div
          key={`${row}-${col}`}
          ref={(el) => {
            tilesRef.current[row * 6 + col] = el;
          }}
          className="hidden md:block relative w-full h-full transform-style-[preserve-3d] cursor-pointer min-h-0 will-change-transform backface-hidden"
          onMouseEnter={handleMouseEnter}
          style={{
            transformStyle: "preserve-3d",
            pointerEvents: isGlobalFlipped ? "none" : "auto",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="bg-b-secondary w-full h-full md:hidden" />
          <div
            className="absolute w-full h-full backface-hidden overflow-hidden bg-[length:600%_600%] bg-center transform translate-z-0 rounded-[7px] "
            style={{
              backgroundImage: `url(${images.front?.src})`,
              backgroundPosition: `${frontPos.x}% ${frontPos.y}%`,
              transform: "translateZ(0.1px)",
            }}
          />
          <div
            className="absolute w-full h-full backface-hidden overflow-hidden bg-[length:600%_600%] bg-center transform translate-z-0 rotate-x-180 translate-x-[1px]"
            style={{
              backgroundImage: `url(${images.back?.src})`,
              backgroundPosition: `${frontPos.x}% ${frontPos.y}%`,
              transform: "rotateX(180deg) translateZ(0.1px)",
            }}
          />
        </div>
      );
    },
    [images.front, images.back, isGlobalFlipped, handleMouseEnter]
  );

  const tiles = useMemo(() => {
    if (!images.front || !images.back) return null;

    return Array.from({ length: 6 }, (_, row) =>
      Array.from({ length: 6 }, (_, col) => createTile(row, col))
    );
  }, [images.front, images.back, createTile]);

  useEffect(() => {
    // 在闭包内固定当前 ref 值
    const currentTiles = tilesRef.current;
    const currentContainer = containerRef.current;

    return () => {
      currentTiles.forEach((tile) => gsap.killTweensOf(tile));
      gsap.killTweensOf(currentContainer);
    };
  }, []);

  useEffect(() => {
    // 在 effect 内部固定当前 DOM 节点
    const node = containerRef.current; // 🌟 关键：捕获当前值
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.style.overflow = entry.isIntersecting ? "hidden" : "auto";
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // ✅ 直接使用闭包中的 node
      document.body.style.overflow = "auto"; // 恢复滚动条（可选）
    };
  }, []); // ✅ 空依赖，仅在挂载/卸载时运行

  useEffect(() => {
    const node = mainViewRef.current; // 🌟 关键：用局部变量固定节点
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.body.style.overflow = entry.isIntersecting ? "auto" : "hidden";
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node); // ✅ 直接使用局部变量
      document.body.style.overflow = "auto"; // 清理副作用
    };
  }, []); // ✅ 空依赖：仅在挂载/卸载时执行

  if (!images.front || !images.back)
    return <div className="text-white">Loading...</div>;

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CodePaint码绘 - 首页",
    description:
      "CodePaint码绘工作室首页，专业的数字创新团队，提供前端开发、后端开发、UI设计、AIGC和自动化办公等技术服务",
    url: "https://cp.hub.feashow.cn",
    mainEntity: {
      "@type": "Organization",
      name: "CodePaint Studio",
      alternateName: "码绘工作室",
    },
  };

  return (
    <div>
      <SEO
        title="CodePaint码绘 | 专业前端开发与UI设计工作室"
        description="CodePaint码绘是一家专业的数字创新工作室，专注于前端开发、后端开发、UI设计、AIGC和自动化办公等技术领域。加入码绘，码上就绘！"
        keywords="CodePaint,码绘,前端开发,后端开发,UI设计,AIGC,自动化办公,工作室,数字化解决方案,React,Vue,Node.js,Python,设计,开发"
        ogUrl="https://cp.hub.feashow.cn"
        structuredData={homeStructuredData}
      />
      <div
        ref={containerRef}
        className="hidden mid:block md:grid grid-cols-6 gap-0.5 w-full h-screen p-3.5 box-border auto-rows-fr perspective-distant bg-b-tertiary m-0"
        onWheel={handleWheel}
        onMouseEnter={() => {
          document.body.style.overflow = "hidden";
        }}
      >
        {tiles}
        <div
          ref={cpRef}
          className="hidden md:block absolute bottom-44 left-1/2 -translate-x-1/2 pointer-events-none max-w-full max-h-[40vh]"
        >
          <img src={IMAGE_PATHS.CP} alt="cp" className="max-w-full h-auto" />
        </div>
        <div
          ref={btnRef}
          className="hidden md:block absolute bottom-52 left-1/2 -translate-x-1/2 cursor-pointer opacity-0 pointer-events-auto scale-100 max-w-[80%]"
          onMouseEnter={() => handleBtnHover(true)}
          onMouseLeave={() => handleBtnHover(false)}
          onClick={() => {
            if (mainViewRef.current) {
              mainViewRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <img
            src={IMAGE_PATHS.BTN}
            alt="action button"
            className="drop-shadow-lg hover:drop-shadow-xl transition-all max-w-full h-auto"
          />
        </div>
        {/*CodePaint滚动*/}
        <div
          ref={rollRef}
          className="hidden md:block opacity-0 marquee-section absolute h-32 z-0 -bottom-2.5 right-0 text-transparent/10 text-stroke-fifth text-9xl pointer-events-none select-none overflow-hidden w-full font-black tracking-wider"
        >
          <div className="flex marquee-container whitespace-nowrap">
            <div className="flex">
              <span className="me-40">CodePaint</span>
              <span className="me-40">CodePaint</span>
              <span className="me-40">CodePaint</span>
              <span className="me-40">CodePaint</span>
            </div>
            <div className="flex">
              <span className="me-40">CodePaint</span>
              <span className="me-40">CodePaint</span>
              <span className="me-40">CodePaint</span>
              <span className="me-40">CodePaint</span>
            </div>
          </div>
        </div>
      </div>
      <MouseFollowing />
      <div className="hidden md:block">
        <MainView ref={mainViewRef} />
      </div>

      {/*移动端样式*/}
      <div className="md:hidden grid grid-cols-3 gap-0.5 p-1 bg-black h-screen overflow-hidden">
        {Array.from({ length: 27 }).map((_, index) => (
          <div
            key={`mobile-tile-${index}`}
            className="bg-b-secondary w-full h-[calc(100vh/9)]"
          />
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center font-PingFangSC">
          <h1 className="text-6xl font-bold text-white/90 tracking-wider my-6 text-nowrap">
            Code Paint
          </h1>
          <h3 className="text-xl font-medium text-white/90 tracking-widest">
            加入码绘 码上就绘。
          </h3>
          <button
            onClick={() => {
              navigate("/mainview");
            }}
            className="text-sm text-white font-light bg-white/30 w-24 h-9 rounded-xl mt-12 align-middle tracking-wider backdrop-blur-2xl "
          >
            <p className="backdrop-blur-none">进入码绘</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
