import { useState, useRef } from 'react';
import { Keyboard, Palette, CalendarDays } from 'lucide-react';
import LoginPop from '../login-pop/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { isAuthenticated } from '../login-check/index';
import { useNavigate } from 'react-router';

const Content = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
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
  const mobilecircleRef1 = useRef<HTMLDivElement>(null);
  const mobilecircleRef2 = useRef<HTMLDivElement>(null);
  const mobilecircleRef3 = useRef<HTMLDivElement>(null);
  const svgRef2 = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const paragraph1Ref = useRef<HTMLDivElement>(null);
  const paragraph2Ref = useRef<HTMLDivElement>(null);
  const paragraph3Ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useGSAP(() => {
    // 桌面端动画
    gsap.from(paragraph3Ref.current, {
      text: '',
      duration: 2,
    });
    gsap.from(paragraph1Ref.current, {
      text: '',
      duration: 2.5,
    });

    gsap.from(paragraph2Ref.current, {
      text: '',
      duration: 1.5,
      delay: 2.5,
    });

    // 移动端动画
    if (
      svgRef2.current &&
      mobilecircleRef1.current &&
      mobilecircleRef2.current &&
      mobilecircleRef3.current
    ) {
      const mobilePath = svgRef2.current.querySelector('path');
      if (!mobilePath) return;

      // 获取移动端圆圈的位置
      const mobileCircle1Rect =
        mobilecircleRef1.current.getBoundingClientRect();
      const mobileCircle2Rect =
        mobilecircleRef2.current.getBoundingClientRect();
      const mobileCircle3Rect =
        mobilecircleRef3.current.getBoundingClientRect();
      const mobileSvgRect = svgRef2.current.getBoundingClientRect();

      // 将坐标转换为相对于SVG视口的坐标
      const mobileCircle1X =
        (mobileCircle1Rect.left +
          mobileCircle1Rect.width / 2 -
          mobileSvgRect.left) *
        (428 / mobileSvgRect.width);
      const mobileCircle1Y =
        (mobileCircle1Rect.top +
          mobileCircle1Rect.height / 2 -
          mobileSvgRect.top) *
        (926 / mobileSvgRect.height);

      const mobileCircle2X =
        (mobileCircle2Rect.left +
          mobileCircle2Rect.width / 2 -
          mobileSvgRect.left) *
        (428 / mobileSvgRect.width);
      const mobileCircle2Y =
        (mobileCircle2Rect.top +
          mobileCircle2Rect.height / 2 -
          mobileSvgRect.top) *
        (926 / mobileSvgRect.height);

      const mobileCircle3X =
        (mobileCircle3Rect.left +
          mobileCircle3Rect.width / 2 -
          mobileSvgRect.left) *
        (428 / mobileSvgRect.width);
      const mobileCircle3Y =
        (mobileCircle3Rect.top +
          mobileCircle3Rect.height / 2 -
          mobileSvgRect.top) *
        (926 / mobileSvgRect.height);

      // 创建移动端路径
      const mobilePathData = `
        M265.5 -28.0006
        C302 ${mobileCircle1Y - 300} ${mobileCircle1X - 36} ${
          mobileCircle1Y * 1.2
        } ${mobileCircle1X} ${mobileCircle1Y + 30}
        C${mobileCircle1X * 1.2} ${mobileCircle1Y + 50} ${
          mobileCircle2X * 0.8
        } ${mobileCircle2Y - 50} ${mobileCircle2X} ${mobileCircle2Y}
        C${mobileCircle2X * 1.2} ${mobileCircle2Y + 100} ${
          mobileCircle3X * 0.8
        } ${mobileCircle3Y - 100} ${mobileCircle3X} ${mobileCircle3Y}
        C${mobileCircle3X * 1.2} ${mobileCircle3Y + 150} 27.5 942 -44 929.5
      `
        .replace(/\s+/g, ' ')
        .trim();

      // 更新SVG路径
      mobilePath.setAttribute('d', mobilePathData);

      // 设置路径初始状态
      gsap.set(mobilePath, {
        strokeDasharray: mobilePath.getTotalLength(),
        strokeDashoffset: mobilePath.getTotalLength(),
        stroke: '#0030AE',
        strokeWidth: 1,
      });

      // 创建移动端路径绘制时间线
      const mobileTl = gsap.timeline();

      // 绘制路径
      mobileTl.to(mobilePath, {
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power2.inOut',
      });

      // 计算动画触发时间点
      const mobilePathLength = mobilePath.getTotalLength();
      const mobileCircle1Distance = getDistanceAtPoint(
        mobilePath,
        mobileCircle1X,
        mobileCircle1Y,
      );
      const mobileCircle2Distance = getDistanceAtPoint(
        mobilePath,
        mobileCircle2X,
        mobileCircle2Y,
      );
      const mobileCircle3Distance = getDistanceAtPoint(
        mobilePath,
        mobileCircle3X,
        mobileCircle3Y,
      );

      // 计算线条刚好经过圆圈的时间点
      const mobileCircle1Time = (mobileCircle1Distance / mobilePathLength) * 3;
      const mobileCircle2Time = (mobileCircle2Distance / mobilePathLength) * 3;
      const mobileCircle3Time = (mobileCircle3Distance / mobilePathLength) * 3;

      // 初始化圆圈颜色为白色
      gsap.set(
        [
          mobilecircleRef1.current,
          mobilecircleRef2.current,
          mobilecircleRef3.current,
        ],
        {
          backgroundColor: '#FFFFFF',
        },
      );

      // 圆圈在被路径刚接触时立即变色
      mobileTl.to(
        mobilecircleRef1.current,
        {
          backgroundColor: '#0030AE',
          delay: 0.5,
          duration: 0.01,
          ease: 'none',
        },
        mobileCircle1Time,
      );

      mobileTl.to(
        mobilecircleRef2.current,
        {
          backgroundColor: '#0030AE',
          duration: 0.01,
          ease: 'none',
        },
        mobileCircle2Time,
      );

      mobileTl.to(
        mobilecircleRef3.current,
        {
          backgroundColor: '#0030AE',
          duration: 0.01,
          ease: 'none',
        },
        mobileCircle3Time - 0.5,
      );
    }

    // 桌面端动画
    if (
      !svgRef1.current ||
      !pathRef.current ||
      !circleRef1.current ||
      !circleRef2.current ||
      !circleRef3.current ||
      !backRef1.current ||
      !backRef2.current ||
      !backRef3.current ||
      !containerRef.current ||
      !boxRef1.current ||
      !boxRef2.current ||
      !boxRef3.current
    )
      return;

    // 设置组件初始透明度为0
    gsap.set(containerRef.current, {
      opacity: 0,
    });

    // 组件渐渐出现的动画
    gsap.to(containerRef.current, {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
    });

    // 三个盒子依次出现
    gsap.set([boxRef1.current, boxRef2.current, boxRef3.current], {
      opacity: 0,
    });

    gsap.to([boxRef1.current, boxRef2.current, boxRef3.current], {
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
    });

    // 获取每个圆圈的位置
    const circle1Rect = circleRef1.current.getBoundingClientRect();
    const circle2Rect = circleRef2.current.getBoundingClientRect();
    const circle3Rect = circleRef3.current.getBoundingClientRect();
    const svgRect = svgRef1.current.getBoundingClientRect();

    // 设置backRefs的变换原点为左上角
    gsap.set([backRef1.current, backRef2.current, backRef3.current], {
      transformOrigin: 'top left',
    });

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

    // 同时触发backRef1的旋转动画
    tl.to(
      backRef1.current,
      {
        rotation: 12,
        duration: 1,
        ease: 'power2.in',
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

    // 同时触发backRef2的旋转动画
    tl.to(
      backRef2.current,
      {
        rotation: 6,
        duration: 0.7,
        ease: 'power2.in',
      },
      circle2Time,
    );
    tl.to(
      frontRef2.current,
      {
        rotation: -6,
        duration: 0.7,
        ease: 'power2.in',
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
      circle3Time - 0.3,
    );

    // 同时触发backRef3的旋转动画
    tl.to(
      backRef3.current,
      {
        rotation: -6,
        duration: 1,
        ease: 'power2.in',
      },
      circle3Time - 0.3,
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

  const handleButtonClick = (recrType: number) => {
    if (isAuthenticated()) {
      navigate('/submission', { state: { recrType } });
    } else {
      setModalVisible(true);
    }
  };

  return (
    <div className="mt-16 md:mt-0">
      {/* 中间小标题 */}
      <div className="w-full relative top-16 md:top-0 font-bold font-PingFangSC flex justify-center">
        <div
          ref={paragraph3Ref}
          className="absolute text-center text-stroke text-transparent text-xl md:text-3xl opacity-20 tracking-widest"
        >
          Resume submission
        </div>
        <div className="text-3xl md:text-4xl text-font-primary tracking-wider font-black">
          简历投递
        </div>
      </div>
      <div className="p-20 md:p-0 w-full mx-auto text-center flex flex-col items-center text-sm font-thin">
        <p ref={paragraph1Ref} className="leading-6 md:p-2.5">
          展示可投递岗位和岗位内容简介展示可投递岗位和岗位内
        </p>
        <p ref={paragraph2Ref} className="hidden md:block md:p-2.5">
          容简介展示可投递容简介简介
        </p>
      </div>
      {/* 桌面端样式 */}
      <div
        ref={containerRef}
        className="hidden md:flex justify-evenly items-center flex-auto text-white absolute bottom-0 top-1/9 w-full font-PingFangSC px-28"
      >
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
          className="relative flex basis-1/6 h-2/3 text-font-tertiary font-semibold translate-y-5 rounded-tr-4xl"
        >
          {/* 第一层 */}
          <div
            ref={frontRef1}
            className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 w-full h-full bg-black z-10 rounded-tr-4xl"
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
              onClick={() => handleButtonClick(1)}
              className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80"
            >
              投递
            </button>
          </div>
          {/* 第二层 */}
          <div
            ref={backRef1}
            className="absolute flex items-center top-0 left-0 px-4 w-full h-full bg-font-primary rounded-tr-4xl text-xs/7"
          >
            <p className="text-center opacity-50">
              展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
            </p>
          </div>
        </div>
        {/* <!-- 第 2 组 --> */}
        <div
          ref={boxRef2}
          className="relative flex basis-1/6 h-2/3 text-font-tertiary font-semibold translate-y-24 rounded-tr-4xl"
        >
          {/* 第一层 */}
          <div
            ref={frontRef2}
            className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 w-full h-full bg-black z-10 rounded-tr-4xl origin-top-left"
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
              onClick={() => handleButtonClick(2)}
              className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80"
            >
              投递
            </button>
          </div>
          {/* 第二层 */}
          <div
            ref={backRef2}
            className="absolute flex items-center top-0 left-0 w-full h-full px-4 bg-font-primary rounded-tr-4xl text-xs/7"
          >
            <p className="text-center opacity-50">
              展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
            </p>
          </div>
        </div>
        {/* <!-- 第 3 组 --> */}
        <div
          ref={boxRef3}
          className="relative flex basis-1/6 h-2/3 text-font-tertiary font-semibold translate-y-12 rounded-tr-4xl"
        >
          {/* 第一层 */}
          <div
            ref={frontRef3}
            className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 w-full h-full bg-black z-10 rounded-tr-4xl"
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
              onClick={() => handleButtonClick(3)}
              className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80"
            >
              投递
            </button>
          </div>
          {/* 第二层 */}
          <div
            ref={backRef3}
            className="absolute flex items-center top-0 left-0 w-full h-full px-4 bg-font-primary rounded-tr-4xl text-xs/7"
          >
            <p className="text-center opacity-50">
              展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
            </p>
          </div>
        </div>
        {isModalVisible ? (
          <LoginPop onClose={() => setModalVisible(false)} />
        ) : null}
      </div>
      {/* 移动端 */}
      <div className="md:hidden">
        <div>
          <div className="absolute w-full top-0">
            <svg
              ref={svgRef2}
              className="w-full h-full object-cover"
              width="428"
              height="926"
              viewBox="0 0 428 926"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M465.5 -28.0006C302 -115 39.3 148.8 46.5 216C55.5 300 410.5 285 375.5 466C340.5 647 90.5 525.5 45 696.5C8.6 833.3 27.5 942 -44 929.5"
                stroke="#0030AE"
              />
            </svg>
          </div>
          {/* <!-- 第 1 组 --> */}
          <div className="relative -top-12 w-full flex justify-center">
            {/* 第一层 */}
            <div className="relative flex flex-wrap justify-between w-4/5 h-44 bg-black z-10 rounded-md overflow-hidden mb-15">
              {/*圆孔 */}
              <div
                ref={mobilecircleRef1}
                className="w-4 h-4 absolute top-1 left-1 rounded-full bg-white"
              />

              <div className="flex justify-between items-center text-center text-sm px-1 py-4 pb-12 h-full w-full z-10">
                <p className="text-4xl text-white pl-3">前端</p>
                <p className="opacity-50 text-font-tertiary font-semibold w-2/3 self-start leading-5 tracking-widest text-left ">
                  展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
                </p>
              </div>

              <Keyboard
                color="#47484b"
                size={130}
                className="opacity-80 absolute -left-2  -bottom-6 rotate-12"
              />

              <button
                onClick={() => handleButtonClick(1)}
                className="absolute right-4 bottom-4 border-font-quaternary text-font-quaternary border-1 w-20 h-8 rounded-lg text-sm z-20 cursor-pointer hover:opacity-80"
              >
                投递
              </button>
            </div>

            {/* 第二层 */}
            <div className="absolute flex justify-between px-4 w-4/5 h-44 bg-font-primary rounded-md origin-top-left rotate-3  -translate-y-2" />
          </div>
          {/* 第2组 */}
          <div className="relative -top-12 w-full flex justify-center mb-15">
            {/* 第一层 */}
            <div className="relative flex flex-wrap justify-between w-4/5 h-44 bg-black z-10  rounded-md overflow-hidden ">
              {/*圆孔 */}
              <div
                ref={mobilecircleRef2}
                className="w-4 h-4 absolute top-1 right-1 rounded-full bg-white"
              />

              <div className="flex justify-between items-center text-center text-sm py-4 pb-12 h-full w-full z-10">
                <p className="opacity-50 text-font-tertiary font-semibold w-2/3 self-start p-0 ml-4 leading-5 tracking-widest text-left ">
                  展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
                </p>
                <p className="font-medium text-5xl text-white pr-3">UI</p>
              </div>

              <Palette
                color="#47484b"
                size={130}
                className="opacity-80 absolute -right-2  -bottom-6 -rotate-12"
              />

              <button
                onClick={() => handleButtonClick(2)}
                className="absolute left-4 bottom-4 border-font-quaternary text-font-quaternary border-1 w-20 h-8 rounded-lg text-sm cursor-pointer hover:opacity-80 z-50"
              >
                投递
              </button>
            </div>

            {/* 第二层 */}
            <div className="absolute flex justify-between px-4 w-4/5 h-44 bg-font-primary rounded-md origin-top-right -rotate-3  -translate-y-2" />
          </div>
          {/* 第3组 */}
          <div className="relative -top-12 w-full flex justify-center">
            {/* 第一层 */}
            <div className="relative flex flex-wrap justify-between w-4/5 h-44 bg-black z-10 rounded-md overflow-hidden mb-15">
              {/*圆孔 */}
              <div
                ref={mobilecircleRef3}
                className="w-4 h-4 absolute top-1 left-1 rounded-full bg-white"
              />

              <div className="flex justify-between items-center text-center text-sm px-1 py-4 pb-12 h-full w-full z-10">
                <p className="text-4xl text-white pl-8 vertical-text tracking-wide font-medium">办公室</p>
                <p className="opacity-50 text-font-tertiary font-semibold w-2/3 self-start leading-5 tracking-widest text-left ">
                  展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
                </p>
              </div>

              <CalendarDays
                color="#47484b"
                size={130}
                className="opacity-80 absolute -left-2  -bottom-6 rotate-12"
              />

              <button
                onClick={() => handleButtonClick(3)}
                className="absolute right-4 bottom-4 border-font-quaternary text-font-quaternary border-1 w-20 h-8 rounded-lg text-sm cursor-pointer hover:opacity-80 z-50"
              >
                投递
              </button>
            </div>

            {/* 第二层 */}
            <div className="absolute flex justify-between px-4 w-4/5 h-44 bg-font-primary rounded-md origin-top-left rotate-3  -translate-y-2" />
          </div>
        </div>
        {isModalVisible ? (
          <LoginPop onClose={() => setModalVisible(false)} />
        ) : null}
      </div>
    </div>
  );
};

export default Content;
