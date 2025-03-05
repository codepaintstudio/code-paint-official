import gsap from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

const MainView = () => {
  return (
    <>
      {/* <!-- 外层容器 --> */}
      <div className="relative h-[1080px] w-[1920px] bg-[#0030ae] mx-auto ">
        {/* <!-- 容器 --> */}
        <div className="absolute top-[22px] left-[22px] right-[22px] bottom-[22px] rounded-[16px] border-[0.6px] border-white">
          {/* <!-- 导航栏 --> */}
          <div className="flex items-center h-[90px] w-full border-b-[0.6px] border-white text-white leading-[90px] mx-auto">
            {/* <!-- 左侧图标和文字 --> */}
            <div className="absolute h-[90px] w-[300px]">
              <div className="absolute top-1/2 -translate-y-1/2 left-[35px] w-[81px] h-[81px]">
                <img
                  src="public/images/Mainview/nav_left.png"
                  alt="nav icon"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[116px] text-white ml-[25px]">
                <p className="font-PingFangSC h-[28px] leading-[28px] text-[20px] font-semibold">
                  码绘
                </p>
                <p className="font-PingFangSC h-[22px] leading-[22px]">
                  CodePaint Studio
                </p>
              </div>
            </div>
            {/* <!-- 导航中间部分 --> */}
            <div className="font-PingFangSC h-[90px] mx-auto">
              <a href="#" className="text-[18px] pr-[50px] pl-[50px]">
                首页
              </a>
              <a href="#" className="text-[18px] pr-[50px] pl-[50px]">
                活动中心
              </a>
              <a href="#" className="text-[18px] pr-[50px] pl-[50px]">
                产品
              </a>
              <a href="#" className="text-[18px] pr-[50px] pl-[50px]">
                加入我们
              </a>
            </div>
            {/* <!-- 用户头像 --> */}
            <div className="absolute right-[12px] w-[55px] h-[55px] rounded-full bg-white">
              <img
                src="public/images/Mainview/User.png"
                alt="user"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* <!-- 主体内容 --> */}
        <div className="absolute left-[88px] right-[88px] top-[112px] bottom-[22px] border-l-[0.6px] border-r-[0.6px] border-white flex justify-center flex-wrap">
          {/* <!-- 中间内容 --> */}
          <div className="relative h-[500px] w-[1240px] mt-[168px] mx-auto mb-[240px]">
            {/* <!-- 左侧内容 --> */}
            <div className="w-[286px] h-[497px] inline-block">
              <img
                src="public/images/Mainview/shouye_left.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            {/* {mid} */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-block">
              {/* <!-- 码绘工作室 --> */}
              <div className="w-full h-[166px] flex items-end justify-around">
                <div>
                  <img
                    src="public/images/Mainview/mahui.png"
                    alt="mahui"
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <img
                    src="public/images/Mainview/gzs.png"
                    alt="gzs"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
              {/* <!-- 致力于。。。 --> */}
              <div className="w-full h-[177px] flex items-center">
                <img
                  src="public/images/Mainview/main.png"
                  alt="main"
                  className="w-auto h-auto"
                />
              </div>
              {/* <!-- 圆 --> */}
              <div className="w-[152px] h-[152px] mx-auto">
                <img
                  src="public/images/Mainview/circle.png"
                  alt="circle"
                  className="w-full h-full"
                />
              </div>
              {/* <!-- 边 --> */}
              <div className="w-[125px] h-[9px] mx-auto">
                <img
                  src="public/images/Mainview/side.png"
                  alt="side"
                  className="w-full h-full"
                />
              </div>
            </div>
            {/* <!-- 右侧内容 --> */}
            <div className="w-[286px] h-[497px] float-right">
              <img
                src="public/images/Mainview/shouye_right.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          {/* <!-- 底部内容 --> */}
          <div className="w-[830px] h-[175px] absolute bottom-[-15px] left-[-89px]">
            <img
              src="public/images/Mainview/CodePaint.png"
              alt="footer"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainView;
