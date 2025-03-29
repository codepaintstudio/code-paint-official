import Header from '@/components/header/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef, useEffect, useCallback, useState } from 'react';
import ProductsList from './components/products-list';
import Lists from './components/lists';
import ScrollBar from '@/pages/products/components/ScrollBar';

const Products = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  // 状态
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Refs
  const titleRef = useRef<HTMLDivElement>(null);
  const paragraph1Ref = useRef<HTMLDivElement>(null);
  const paragraph2Ref = useRef<HTMLDivElement>(null);
  const paragraph3Ref = useRef<HTMLDivElement>(null);
  const floatingTextRef = useRef<HTMLHeadingElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const productItemsRef = useRef<HTMLDivElement[]>([]);
  const scrollingTimerRef = useRef<number | null>(null);

  // 添加设置ref数组的函数
  const setProductItemRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      productItemsRef.current[index] = el;
    }
  };

  // 滚动条处理函数，使用useCallback来优化性能
  const handleScroll = useCallback(() => {
    if (!productRef.current) return;

    // 设置滚动状态
    setIsScrolling(true);

    // 如果存在定时器则清除
    if (scrollingTimerRef.current) {
      window.clearTimeout(scrollingTimerRef.current);
    }

    // 设置滚动结束后的定时器
    scrollingTimerRef.current = window.setTimeout(() => {
      setIsScrolling(false);
    }, 200);

    // 获取容器滚动信息
    const container = productRef.current;

    // 计算滚动百分比，确保最大值为1（100%）
    const scrollTotal = container.scrollHeight - container.clientHeight;
    const scrollPercentage = Math.min(container.scrollTop / scrollTotal, 1);

    // 更新滚动位置状态
    setScrollPosition(scrollPercentage);

    // 确定当前显示的产品索引
    if (productItemsRef.current.length > 0) {
      // 获取可视区域中心点
      const viewportCenter = container.scrollTop + container.clientHeight / 2;

      // 查找最接近中心点的产品元素
      let closestIndex = 0;
      let minDistance = Infinity;

      productItemsRef.current.forEach((item, index) => {
        if (item) {
          const itemTop = item.offsetTop;
          const itemCenter = itemTop + item.offsetHeight / 2;
          const distance = Math.abs(viewportCenter - itemCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      // 更新当前产品索引
      if (closestIndex !== currentProductIndex) {
        setCurrentProductIndex(closestIndex);
      }
    }
  }, [currentProductIndex]);

  // 设置滚动监听器
  useEffect(() => {
    const productElement = productRef.current;
    if (!productElement) return;

    // 添加滚动事件监听
    productElement.addEventListener('scroll', handleScroll);

    // 页面加载时初始化一次滚动条位置
    setTimeout(handleScroll, 100);

    // 组件卸载时移除监听
    return () => {
      productElement.removeEventListener('scroll', handleScroll);
      if (scrollingTimerRef.current) {
        window.clearTimeout(scrollingTimerRef.current);
      }
    };
  }, [handleScroll]);

  // GSAP动画
  useGSAP(() => {
    // 文本动画
    gsap.from(titleRef.current, {
      text: '',
      duration: 1.5,
    });

    gsap.from(paragraph1Ref.current, {
      text: '',
      duration: 1.5,
      delay: 1.5,
    });

    gsap.from(paragraph2Ref.current, {
      text: '',
      duration: 3,
      delay: 3,
    });

    gsap.from(paragraph3Ref.current, {
      text: '',
      duration: 2,
      delay: 6,
    });

    // 添加漂浮动画
    gsap.to(floatingTextRef.current, {
      y: 20,
      x: 10,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      repeatRefresh: true,
    });

    // 添加滚动文本动画
    gsap.to('.marquee-container', {
      x: '-50%',
      duration: 15,
      ease: 'linear',
      repeat: -1,
    });

    // 为SVG背景添加飘动效果
    gsap.to('.floating-svg', {
      y: 15,
      x: 5,
      duration: 5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    // 为SVG路径添加轻微变形效果
    gsap.to('.floating-path', {
      scale: 1.03,
      opacity: 0.08,
      duration: 4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      transformOrigin: 'center center',
    });
  }, []);

  // 获取当前产品信息
  const currentProduct = Lists[currentProductIndex] || null;

  return (
    <div className="h-screen">
      <Header />
      {/* 产品介绍区域 */}
      <div className="bg-font-primary text-white w-full min-h-2/3 relative py-3 flex items-center z-20 overflow-hidden">
        {/* 头部 */}
        <div className="float-left w-4/11 p-14 pl-0 h-full rounded-r-[500px] border-1 border-b-primary border-l-0">
          <div className="rounded-r-[500px] border-1 border-b-primary p-14 pl-0 border-l-0">
            <div className="rounded-r-[500px] border-1 border-b-primary p-14 pl-0 border-l-0">
              <div className="relative rounded-r-[500px] border-1 border-b-primary p-14 pl-0 border-l-0">
                <h3 className="absolute -top-24 text-4xl left-20 font-bold">
                  PRODUCT
                </h3>
                <div className="absolute -top-8 left-20 text-base font-semibold font-PingFangSC">
                  码绘产品
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 头部浮动文字 */}
        <div className="absolute bottom-1/4 -right-1/6 w-full">
          <h1
            ref={floatingTextRef}
            className="text-9xl text-white opacity-10 text-clip font-PingFangSC tracking-wider text-nowrap -rotate-25 font-black will-change-transform"
          >
            Code drawing products
          </h1>
        </div>

        {/* 头部文字内容 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div ref={titleRef} className="text-center font-medium text-4xl">
            欢迎来到码绘产品中心
          </div>
          <div className="mt-6">
            <div ref={paragraph1Ref} className="text-center pt-6 text-xs">
              这里是创意与技术的结晶，是实用与美学的完美结合
            </div>
            <div ref={paragraph2Ref} className="text-center pt-6 text-xs">
              我们致力于将前沿的编程技术与独特的艺术视角相结合打造出令人耳目一新的产品
            </div>
            <div ref={paragraph3Ref} className="text-center pt-6 text-xs">
              为用户带来前所未有的体验
            </div>
          </div>
        </div>
      </div>
      {/* 产品展示区域 */}
      <div
        ref={productRef}
        className="px-20 pt-20 font-PingFangSC overflow-y-auto overflow-x-hidden h-screen flex relative"
      >
        <svg
          className="absolute top-0 left-0 w-full h-full z-0 floating-svg"
          viewBox="0 0 1917 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 280.5C122.361 331.623 344.431 406.11 549.836 432.338C752.839 329.438 947.127 152.49 1065.5 105.5C1148.75 72.454 1374.51 48.6749 1587.27 33.6107C1651.06 17.8785 1722.26 6.19261 1803 0C1896.6 0 1917.67 10.6667 1916.5 16C1832.04 18.9548 1711.89 24.7881 1587.27 33.6107C1244.21 118.228 1115.77 319.902 872.5 413.5C786.773 446.483 671.214 447.836 549.836 432.338C469.874 472.87 388.559 501.913 310 507C87.6 521.4 10.6667 499.667 0 487V280.5Z"
            fill="#FF6A00"
            fillOpacity="0.1"
            className="floating-path"
          />
        </svg>

        {/* 滚动条组件 */}
        <ScrollBar
          position={scrollPosition}
          currentProduct={currentProduct}
          isScrolling={isScrolling}
        />
        {/* 中央浮动文字 */}
        <div className="marquee-section h-32 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent/10 text-stroke-sixth text-9xl pointer-events-none select-none overflow-hidden w-full font-black tracking-wider opacity-20 z-[5]">
          <div className="flex marquee-container whitespace-nowrap">
            <div className="flex animate-marquee">
              <span className="me-36">CodePaint</span>
              <span className="me-36">CodePaint</span>
              <span className="me-36">CodePaint</span>
              <span className="me-36">CodePaint</span>
            </div>
            <div className="flex">
              <span className="me-36">CodePaint</span>
              <span className="me-36">CodePaint</span>
              <span className="me-36">CodePaint</span>
              <span className="me-36">CodePaint</span>
            </div>
          </div>
        </div>
        {/* 产品列表内容区域 */}
        <div className="w-[calc(100%-2rem)] ml-10 z-10">
          <ProductsList setProductItemRef={setProductItemRef} />
        </div>
      </div>
    </div>
  );
};

export default Products;
