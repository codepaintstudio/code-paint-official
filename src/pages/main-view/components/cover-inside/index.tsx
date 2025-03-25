import { NavLink } from 'react-router';
const CoverInside = () => {
  return (
    <>
      {/* <!-- 外层容器 --> */}

      <div className="relative p-3.5 bg-[#0030ae] h-screen">
        {/* <!-- 容器 --> */}
        <div className="relative flex rounded-2xl border-[0.6px] border-white h-full">
          {/* <!-- 导航栏 --> */}
          <div className="relative flex items-center h-20 w-full border-b-[0.6px] border-white text-white">
            {/* <!-- 左侧图标和文字 --> */}
            <a href="/">
              <img
                src="/public/images/mainview/nav_left.webp"
                alt="nav_left"
                className="ml-7 w-3/4 h-3/4"
              />
            </a>
            <div className=" text-white mx-2">
              <p className="font-PingFangSC  text-base  font-medium">码绘</p>
              <p className="font-PingFangSC text-base font-medium">
                CodePaint Studio
              </p>
            </div>

            {/* <!-- 导航中间部分 --> */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1/2 flex justify-around font-PingFangSC text-base font-medium">
              <NavLink to={'/'}>
                首页
              </NavLink>
              <NavLink to={'/activity'} >
                活动中心
              </NavLink>
              <NavLink to={'/products'}>
                产品
              </NavLink>
              <NavLink to={'/join'}>
                加入我们
              </NavLink>
            </div>
            {/* <!-- 用户头像 --> */}
            <div className="absolute h-10 w-10 rounded-full bg-white right-3">
              {}
            </div>
          </div>

          {/* <!-- 主体内容 --> */}
          <div className="absolute inset-x-16 bottom-0 top-20 flex border-x-[0.6px] border-white">
            {/* <!-- 中间内容 --> */}
            <div className="w-full mx-auto flex justify-center items-center">
              {/* <!-- 左侧内容 --> */}
              <div>
                <img
                  src="/public/images/mainview/shouye_left.webp"
                  alt="shouye_left"
                  className="w-full h-full"
                />
              </div>
              {/* {mid} */}
              <div className=" text-white font-PingFangSC font-regular mx-10 italic">
                {/* <!-- 码绘工作室 --> */}
                <div className="w-full flex  items-end justify-center font-black mb-5">
                  <h1 className="italic lg:text-9xl text-transparent text-stroke-quaternary tracking-wide">
                    码绘
                  </h1>
                  <h2 className="text-6xl ml-10 tracking-widest">工作室</h2>
                </div>
                {/* <!-- 致力于。。。 --> */}
                <div className="px-8 flex flex-col items-center  flex-wrap text-2xl tracking-wider font-bold">
                  <h4 className="w-full my-5 ">
                    一个致力于
                    <div className="inline-block text-4xl">前端</div>和
                    <div className="inline-block text-4xl">UI技术</div>开发的
                  </h4>
                  <div>软创工作室</div>
                </div>
                {/* <!-- 圆 --> */}
                <div className="w-28 h-28 mx-auto my-4">
                  <img
                    src="/public/images/mainview/circle.webp"
                    alt="circle"
                    className="w-full h-full"
                  />
                </div>
                {/* <!-- 边 --> */}
                <div className="w-24 h-2 mx-auto">
                  <img
                    src="/public/images/mainview/side.webp"
                    alt="side"
                    className="w-full h-full"
                  />
                </div>
              </div>
              {/* <!-- 右侧内容 --> */}
              <div>
                <img
                  src="public/images/mainview/shouye_right.webp"
                  alt="shouye_right"
                />
              </div>

              {/* <!-- 底部内容 --> */}
            </div>
          </div>
          {/*CodePaint滚动*/}
          <div className="marquee-section absolute h-32 z-0 -bottom-2.5 right-0 text-transparent/10 text-stroke-fifth text-9xl pointer-events-none select-none overflow-hidden w-full font-black tracking-wider">
            <div className="flex marquee-container whitespace-nowrap">
              <div className="flex">
                <span className="me-10">CodePaint</span>
                <span className="me-10">CodePaint</span>
                <span className="me-10">CodePaint</span>
                <span className="me-10">CodePaint</span>
              </div>
              <div className="flex">
                <span className="me-10">CodePaint</span>
                <span className="me-10">CodePaint</span>
                <span className="me-10">CodePaint</span>
                <span className="me-10">CodePaint</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoverInside;
