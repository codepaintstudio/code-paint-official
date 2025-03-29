import { useState, useRef } from 'react';
import { Keyboard, Palette, CalendarDays } from 'lucide-react';
import LoginModal from '../login-modal/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Content = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const svgRef1 = useRef<SVGSVGElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const frontRef1 = useRef<HTMLDivElement>(null);
  const frontRef2 = useRef<HTMLDivElement>(null);
  const frontRef3 = useRef<HTMLDivElement>(null);
  const backRef1 = useRef<HTMLDivElement>(null);
  const backRef2 = useRef<HTMLDivElement>(null);
  const backRef3 = useRef<HTMLDivElement>(null);
  const circleRef1 = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const circleRef3 = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  useGSAP(() => {

    if (
      !svgRef1.current ||
      !pathRef.current ||
      !circleRef1.current ||
      !circleRef2.current ||
      !circleRef3.current
    )
      return;

    // 获取每个圆圈的位置
    const circle1Rect = circleRef1.current.getBoundingClientRect();
    const circle2Rect = circleRef2.current.getBoundingClientRect();
    const circle3Rect = circleRef3.current.getBoundingClientRect();
    const svgRect = svgRef1.current.getBoundingClientRect();

    // 将坐标转换为相对于SVG视口的坐标
    const circle1X =
      (circle1Rect.left + circle1Rect.width / 2 - svgRect.left) *
      (1920 / svgRect.width);
    const circle1Y =
      (circle1Rect.top + circle1Rect.height / 2 - svgRect.top) *
      (343 / svgRect.height);

    const circle2X =
      (circle2Rect.left + circle2Rect.width / 2 - svgRect.left) *
      (1920 / svgRect.width);
    const circle2Y =
      (circle2Rect.top + circle2Rect.height / 2 - svgRect.top) *
      (343 / svgRect.height);

    const circle3X =
      (circle3Rect.left + circle3Rect.width / 2 - svgRect.left) *
      (1920 / svgRect.width);
    const circle3Y =
      (circle3Rect.top + circle3Rect.height / 2 - svgRect.top) *
      (343 / svgRect.height);

    // 创建一个经过三个圆点的路径，同时保持原有曲线特性
    const originalPath =
      'M0 1C25.3333 76.8333 124.6 220.5 319 188.5C562 148.5 758.901 241.124 853.5 290C973.5 352 1382.5 251 1382.5 208.5C1538.17 134.667 1912.5 126 1927.5 342';

    // 创建临时路径元素用于计算
    const originalPathClone = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path',
    );
    originalPathClone.setAttribute('d', originalPath);

    // 利用原始路径的控制点，创建一条经过圆点但保持原有风格的路径
    const path = `
     M0 1
     C25.3333 ${circle1Y - 80} ${circle1X * 0.4} ${
        circle1Y * 1.1
      } ${circle1X} ${circle1Y}
     C${circle1X * 1.6} ${circle1Y - 40} ${
        circle2X - (circle2X - circle1X) * 0.5
      } ${circle2Y - 50} ${circle2X} ${circle2Y}
     C${circle2X * 1.1} ${circle2Y + 20} ${circle3X * 0.8} ${
        circle3Y + 120
      } ${circle3X} ${circle3Y}
     C${circle3X * 1.2} ${circle3Y - 100} ${circle3X * 1.4} ${
        circle3Y - 100
      } 1927.5 342
   `
      .replace(/\s+/g, ' ')
      .trim();
    // 更新路径
    pathRef.current.setAttribute('d', path);

    // 调整SVG的zIndex，使其在圆圈上方
    if (svgRef1.current.parentElement) {
      svgRef1.current.parentElement.style.zIndex = '15';
    }

    // 设置路径初始状态
    gsap.set(pathRef.current, {
      strokeDasharray: pathRef.current.getTotalLength(),
      strokeDashoffset: pathRef.current.getTotalLength(),
      stroke: '#0030AE',
      strokeWidth: 1,
    });

    // 创建路径绘制时间线
    const tl = gsap.timeline();

    // 逐段绘制路径，穿过每个圆圈
    tl.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 3,
      ease: 'power2.inOut',
    });

    // 计算动画触发时间点
    const pathLength = pathRef.current.getTotalLength();
    const circle1Distance = getDistanceAtPoint(
      pathRef.current,
      circle1X,
      circle1Y,
    );
    const circle2Distance = getDistanceAtPoint(
      pathRef.current,
      circle2X,
      circle2Y,
    );
    const circle3Distance = getDistanceAtPoint(
      pathRef.current,
      circle3X,
      circle3Y,
    );

    // 计算线条刚好经过圆圈的时间点
    const circle1Time = (circle1Distance / pathLength) * 3;
    const circle2Time = (circle2Distance / pathLength) * 3;
    const circle3Time = (circle3Distance / pathLength) * 3;

    // 初始化圆圈颜色为白色
    gsap.set([circleRef1.current, circleRef2.current, circleRef3.current], {
      backgroundColor: '#FFFFFF',
    });

    // 圆圈在被路径刚接触时立即变色
    tl.to(
      circleRef1.current,
      {
        delay: 0.5,
        backgroundColor: '#0030AE',
        duration: 0.01,
        ease: 'none',
      },
      circle1Time,
    );

    tl.to(
      circleRef2.current,
      {
        backgroundColor: '#0030AE',
        duration: 0.01,
        ease: 'none',
      },
      circle2Time,
    );

    tl.to(
      circleRef3.current,
      {
        backgroundColor: '#0030AE',
        duration: 0.01,
        ease: 'none',
      },
      circle3Time-0.3,
    );
  }, []);

  // 辅助函数：计算路径上最接近指定点的距离
  const getDistanceAtPoint = (
    pathElement: SVGPathElement,
    x: number,
    y: number,
  ) => {
    const pathLength = pathElement.getTotalLength();
    let precision = 8;
    let bestLength = 0;
    let bestDistance = Infinity;

    // 二分查找路径上最接近目标点的位置
    for (let i = 0; i < pathLength; i += precision) {
      const point = pathElement.getPointAtLength(i);
      const dx = point.x - x;
      const dy = point.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestLength = i;
      }
    }

    // 精细化查找
    precision = 1;
    const startLength = Math.max(0, bestLength - precision);
    const endLength = Math.min(pathLength, bestLength + precision);

    for (let i = startLength; i <= endLength; i += precision / 10) {
      const point = pathElement.getPointAtLength(i);
      const dx = point.x - x;
      const dy = point.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestLength = i;
      }
    }

    return bestLength;
  };

  const handleLoginModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <div className="flex justify-evenly items-center flex-auto text-white absolute bottom-0 top-1/9 w-full font-PingFangSC px-28">
      <div className="absolute w-full top-0">
        <svg
          ref={svgRef1}
          className="w-full h-full object-cover"
          width="1920"
          height="343"
          viewBox="0 0 1920 343"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M0 1C25.3333 76.8333 124.6 220.5 319 188.5C562 148.5 758.901 241.124 853.5 290C973.5 352 1382.5 251 1382.5 208.5C1538.17 134.667 1912.5 126 1927.5 342"
            stroke="#0030AE"
          />
        </svg>
      </div>
      {/* <!-- 第 1 组 --> */}
      <div
        ref={boxRef1}
        className="relative flex basis-1/6 bg-font-primary h-2/3 text-font-tertiary font-semibold translate-y-5 rounded-tr-4xl"
      >
        {/* 第一层 */}
        <div
          ref={frontRef1}
          className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 h-full bg-black z-10 rounded-tr-4xl"
        >
          {/*圆孔 */}
          <div
            ref={circleRef1}
            className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white"
          >
            {''}
          </div>
          <div className="absolute top-9 left-1 text-xs text-white tracking-wider">
            FRONT END
          </div>
          <div className="text-center text-xs/7">
            <p className="text-4xl mb-6 text-white">前端</p>
            <p className="opacity-50">
              展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
            </p>
          </div>
          <div>
            <Keyboard color="#47484b" size={80} className="opacity-80" />
          </div>
          <button
            onClick={handleLoginModal}
            className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80"
          >
            投递
          </button>
        </div>
        {/* 第二层 */}
        <div
          ref={backRef1}
          className="absolute flex items-center top-0 left-0 px-4 w-full h-full bg-font-primary rounded-tr-4xl text-xs/7 origin-top-left rotate-12"
        >
          <p className="text-center opacity-50">
            展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
          </p>
        </div>
      </div>
      {/* <!-- 第 2 组 --> */}
      <div
        ref={boxRef2}
        className="relative flex basis-1/6  bg-font-primary h-2/3 text-font-tertiary font-semibold translate-y-24 rounded-tr-4xl"
      >
        {/* 第一层 */}
        <div
          ref={frontRef2}
          className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 h-full bg-black z-10 rounded-tr-4xl"
        >
          {/*圆孔 */}
          <div
            ref={circleRef2}
            className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white"
          >
            {''}
          </div>
          <div className="absolute top-9 left-1 text-xs text-white tracking-wider">
            UI DESIGN
          </div>
          <div className="text-center text-xs/7">
            <p className="text-4xl mb-6 text-white">UI</p>
            <p className="opacity-50">
              展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
            </p>
          </div>
          <div>
            <Palette color="#47484b" size={80} className="opacity-80" />
          </div>
          <button
            onClick={handleLoginModal}
            className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80"
          >
            投递
          </button>
        </div>
        {/* 第二层 */}
        <div
          ref={backRef2}
          className="absolute flex items-center top-0 left-0 w-full h-full px-4 bg-font-primary rounded-tr-4xl text-xs/7 origin-top-left rotate-6"
        >
          <p className="text-center opacity-50">
            展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
          </p>
        </div>
      </div>
      {/* <!-- 第 3 组 --> */}
      <div
        ref={boxRef3}
        className="relative flex basis-1/6 bg-font-primary h-2/3 text-font-tertiary font-semibold translate-y-12 rounded-tr-4xl"
      >
        {/* 第一层 */}
        <div
          ref={frontRef3}
          className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 h-full bg-black z-10 rounded-tr-4xl"
        >
          {/*圆孔 */}
          <div
            ref={circleRef3}
            className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white"
          >
            {''}
          </div>
          <div className="absolute top-9 left-1 text-xs text-white tracking-wider">
            OFFICE
          </div>
          <div className="text-center text-xs/7">
            <p className="text-4xl mb-6 text-white">办公室</p>
            <p className="opacity-50">
              展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
            </p>
          </div>
          <div className="scale-75">
            <CalendarDays color="#47484b" size={100} className="opacity-80" />
          </div>
          <button
            onClick={handleLoginModal}
            className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80"
          >
            投递
          </button>
        </div>
        {/* 第二层 */}
        <div
          ref={backRef3}
          className="absolute flex items-center top-0 left-0 w-full h-full px-4 bg-font-primary rounded-tr-4xl text-xs/7 origin-top-left -rotate-6"
        >
          <p className="text-center opacity-50">
            展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
          </p>
        </div>
      </div>
      {isModalVisible ? <LoginModal /> : null}
    </div>
  );
};

export default Content;
