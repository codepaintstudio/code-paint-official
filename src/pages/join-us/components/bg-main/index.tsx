import Header from '@/components/header/index';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Bgmain = () => {
  const svgRef1 = useRef<SVGSVGElement>(null);
  const paragraph1Ref = useRef<HTMLDivElement>(null);
  const paragraph2Ref = useRef<HTMLDivElement>(null);
  const paragraph3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(paragraph1Ref.current, {
      text: '',
      duration: 2.5,
    });

    gsap.from(paragraph2Ref.current, {
      text: '',
      duration: 1.5,
      delay: 2.5,
    });
  });

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

    // 清理函数
    return () => {
      if (svgRef1.current) {
        gsap.killTweensOf(svgRef1.current);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="fixed w-screen">
        <svg
          ref={svgRef1}
          className="w-full h-full object-cover"
          width="1920"
          height="802"
          viewBox="0 0 1920 802"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.1"
            d="M830.528 625.188C358.924 672.252 -95.5474 298.216 -314 0C-271.698 49.2662 111.815 42.8441 289.5 253C401.865 385.899 624.867 536.158 830.528 625.188C951.927 613.073 1074.46 573.054 1194.4 496.656C1340.16 403.804 1537.47 513.393 1743.5 626.169C1906.58 672.236 2078.59 740.272 2204.32 801.247C2057.88 797.352 1898.23 710.862 1743.5 626.169C1518.16 562.514 1309.87 540.803 1264.26 637.618C1215.71 740.687 1031.39 712.14 830.528 625.188Z"
            fill="#FF6A00"
          />
        </svg>
      </div>

      {/* 中间小标题 */}
      <div className="w-full relative font-bold font-PingFangSC flex justify-center">
        <div
          ref={paragraph3Ref}
          className="absolute text-center text-stroke text-transparent text-3xl opacity-20 tracking-widest">
          Resume submission
        </div>
        <div className="text-4xl text-font-primary tracking-wider font-black">
          简历投递
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col items-center text-sm font-thin">
        <p ref={paragraph1Ref} className="p-2.5">
          展示可投递岗位和岗位内容简介展示可投递岗位和岗位内
        </p>
        <p ref={paragraph2Ref} className="p-2.5">
          容简介展示可投递容简介简介
        </p>
      </div>
      <div className="">
        {/* 左侧文字 */}
        <div className=" fixed font-PingFangSC overflow-clip w-full h-full object-cover  flex flex-col justify-around glow shrink text-font-primary text-stroke font-bold sm:text-3xl md:text-4xl lg:text-7xl opacity-15 pt-1/2 tracking-widest">
          <p className="md:py-1.5 sm:py-1 lg:py-2">Resume submission</p>
          <p className="transform -translate-x-11 md:py-4 sm:py-2 lg:py-4 text-stroke bg-gradient-to-b from-font-primary to-font-tertiary bg-clip-text text-transparent ">
            Resume submission
          </p>
          <p className="transform -translate-x-16 md:py-2 sm:py-1 lg:py-4 text-stroke bg-gradient-to-b from-white via-font-tertiary to-font-primary bg-clip-text text-transparent ">
            Resume submission
          </p>
          <p className="transform -translate-x-28 md:py-4 sm:py-2 lg:py-4 text-stroke text-transparent">
            Resume submission
          </p>
          <p className="transform -translate-x-24 md:py-4 sm:py-2 lg:py-4 text-stroke text-transparent">
            Resume submission
          </p>
          <p className="text-stroke text-transparent">Resume submission</p>
        </div>
      </div>
    </div>
  );
};
export default Bgmain;
