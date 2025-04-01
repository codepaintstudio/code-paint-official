import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from '@/components/header/index';
import MobileHeader from '@/components/mobileheader/mobileheader';
const Bgmain = () => {
  const svgRef1 = useRef<SVGSVGElement>(null);

  const resumeText1Ref = useRef<HTMLParagraphElement>(null);
  const resumeText2Ref = useRef<HTMLParagraphElement>(null);
  const resumeText3Ref = useRef<HTMLParagraphElement>(null);
  const resumeText4Ref = useRef<HTMLParagraphElement>(null);
  const resumeText5Ref = useRef<HTMLParagraphElement>(null);
  const resumeText6Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 给第一个SVG添加漂浮动画
    if (svgRef1.current) {
      // 创建无限循环的漂浮动画
      gsap.to(svgRef1.current, {
        y: -20,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }

    // 为Resume submission文字添加动画
    const resumeTexts = [
      resumeText1Ref.current,
      resumeText2Ref.current,
      resumeText3Ref.current,
      resumeText4Ref.current,
      resumeText5Ref.current,
      resumeText6Ref.current,
    ];

    // 初始透明度设置
    gsap.set(resumeTexts, { opacity: 0 });

    // 为每个文本元素创建动画
    resumeTexts.forEach((text, index) => {
      if (text) {
        gsap.to(text, {
          opacity: 1,
          duration: 1.2,
          delay: 0.3 * index,
          ease: 'power2.inOut',
        });

        // 添加永久的浮动效果
        gsap.to(text, {
          x: `+=${10 + Math.random() * 15}`,
          duration: 3 + Math.random() * 2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 0.4 * index,
        });
      }
    });

    // 清理函数
    return () => {
      if (svgRef1.current) {
        gsap.killTweensOf(svgRef1.current);
      }
      resumeTexts.forEach((text) => {
        if (text) {
          gsap.killTweensOf(text);
        }
      });
    };
  }, []);

  return (
    <div>
      <Header />
      <MobileHeader />
      <div className="hidden md:block fixed w-screen">
        <svg
          ref={svgRef1}
          className="w-full h-full object-cover"
          width="1920"
          height="802"
          viewBox="0 0 1920 802"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M830.528 625.188C358.924 672.252 -95.5474 298.216 -314 0C-271.698 49.2662 111.815 42.8441 289.5 253C401.865 385.899 624.867 536.158 830.528 625.188C951.927 613.073 1074.46 573.054 1194.4 496.656C1340.16 403.804 1537.47 513.393 1743.5 626.169C1906.58 672.236 2078.59 740.272 2204.32 801.247C2057.88 797.352 1898.23 710.862 1743.5 626.169C1518.16 562.514 1309.87 540.803 1264.26 637.618C1215.71 740.687 1031.39 712.14 830.528 625.188Z"
            fill="#FF6A00"
          />
        </svg>
      </div>
      {/* 左侧文字 */}
      <div className="hidden md:flex fixed top-1/3 overflow-y-hidden font-PingFangSC overflow-clip w-full h-full object-cover flex-col justify-around glow shrink text-font-primary text-stroke font-bold sm:text-3xl md:text-4xl lg:text-7xl opacity-15 pt-1/2 tracking-widest">
        <p ref={resumeText1Ref} className="md:py-1.5 sm:py-1 lg:py-2">
          Resume submission
        </p>
        <p
          ref={resumeText2Ref}
          className="transform -translate-x-11 md:py-4 sm:py-2 lg:py-4 text-stroke bg-gradient-to-b from-font-primary to-font-tertiary bg-clip-text text-transparent "
        >
          Resume submission
        </p>
        <p
          ref={resumeText3Ref}
          className="transform -translate-x-16 md:py-2 sm:py-1 lg:py-4 text-stroke bg-gradient-to-b from-white via-font-tertiary to-font-primary bg-clip-text text-transparent "
        >
          Resume submission
        </p>
        <p
          ref={resumeText4Ref}
          className="transform -translate-x-28 md:py-4 sm:py-2 lg:py-4 text-stroke text-transparent"
        >
          Resume submission
        </p>
        <p
          ref={resumeText5Ref}
          className="transform -translate-x-24 md:py-4 sm:py-2 lg:py-4 text-stroke text-transparent"
        >
          Resume submission
        </p>
        <p ref={resumeText6Ref} className="text-stroke text-transparent">
          Resume submission
        </p>
      </div>
    </div>
  );
};
export default Bgmain;
