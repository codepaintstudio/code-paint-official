import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const RollBg = () => {
  const topBgTextRef = useRef(null); // 添加背景文字的ref
  const bottomBgTextRef = useRef(null); // 添加底部背景文字的ref

  useGSAP(
    () => {
      // 顶部背景文字无限轮播动画 - 从右到左滚动
      gsap.to(topBgTextRef.current, {
        xPercent: -100, // 从0位置滚动到-100%位置(向左移动一个完整宽度)
        duration: 100,
        ease: 'linear',
        repeat: -1, // 无限重复
        repeatDelay: 0, // 重复之间没有延迟
      });

      // 底部背景文字无限轮播动画 - 向右滚动
      gsap.to(bottomBgTextRef.current, {
        xPercent: 100, // 从0位置滚动到100%位置(向右移动一个完整宽度)
        duration: 100,
        ease: 'linear',
        repeat: -1, // 无限重复
        repeatDelay: 0, // 重复之间没有延迟
      });
    },
    [],
  ); // 添加scope和cleanup选项确保组件卸载时清除动画

  return (
    <div>
      {/* 背景文字 */}
      <div className="absolute top-2.5 w-full overflow-hidden whitespace-nowrap">
        <div
          ref={topBgTextRef}
          className="inline-block text-9xl font-bold text-transparent font-PingFangSC text-stroke tracking-[-0.07em] opacity-15 min-w-[200%]" // 确保文字足够长以实现无缝循环
        >
          Welcome to Code Painting Welcome to Code Painting Welcome to Code
          Painting Welcome to Code Painting
        </div>
      </div>
      {/* 背景 线条*/}
      <div className="absolute top-1/8 left-0 bottom-1/8 right-0 ">
        <svg
          className="absolute w-full h-full object-cover "
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
        <svg
          className="w-full h-full object-cover"
          width="1920"
          height="802"
          viewBox="0 0 1920 802"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M819.257 625.188C1290.86 672.252 1745.33 298.216 1963.79 0C1921.48 49.2662 1537.97 42.8441 1360.29 253C1247.92 385.899 1024.92 536.158 819.257 625.188C697.858 613.073 575.324 573.054 455.389 496.656C309.623 403.804 112.32 513.393 -93.7127 626.169C-256.792 672.236 -428.8 740.272 -554.533 801.247C-408.09 797.352 -248.44 710.862 -93.7127 626.169C131.624 562.514 339.914 540.803 385.523 637.618C434.077 740.687 618.397 712.14 819.257 625.188Z"
            fill="#FF6A00"
          />
        </svg>
      </div>

      {/* 背景文字 */}
      <div className="fixed bottom-0 translate-y-1/3 w-full overflow-hidden whitespace-nowrap">
        <div
          ref={bottomBgTextRef}
          className="inline-block text-9xl font-bold text-transparent font-PingFangSC text-stroke tracking-[-0.07em] opacity-15 min-w-[200%] -translate-x-5/7"
        >
          Welcome to Code Painting Welcome to Code Painting Welcome to Code
          Painting Welcome to Code Painting
        </div>
      </div>
    </div>
  );
};

export default RollBg;
