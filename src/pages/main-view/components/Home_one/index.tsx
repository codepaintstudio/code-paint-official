import { NavLink } from 'react-router';
const Homeone = () => {
  return (
    <>
      {/* <!-- 外层容器 --> */}

      <div className="relative p-3.5 bg-[#0030ae]">
        {/* <!-- 容器 --> */}
        <div className=" rounded-2xl border-[0.6px] border-white">
          {/* <!-- 导航栏 --> */}
          <div className="relative flex items-center  h-16 w-full border-b-[0.6px] border-white text-white">
            {/* <!-- 左侧图标和文字 --> */}
            <div >
              <img
                src="public\images\Mainview\nav_left.webp"
                alt="nav icon"
                className="ml-7 w-3/5 h-3/5"
              />
            </div>
            <div className=" text-white ml-2">
              <p className="font-PingFangSC  text-base  font-semibold">码绘</p>
              <p className="font-PingFangSC text-sm font-semibold">
                CodePaint Studio
              </p>
            </div>

            {/* <!-- 导航中间部分 --> */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-PingFangSC text-sm font-semibold mx-auto">
              <NavLink to={'/'} className=" pr-[50px] pl-[50px]">
                首页
              </NavLink>
              <NavLink to={'/'} className=" pr-[50px] pl-[50px]">
                活动中心
              </NavLink>
              <NavLink to={'/products'} className=" pr-[50px] pl-[50px]">
                产品
              </NavLink>
              <NavLink to={'/join'} className=" pr-[50px] pl-[50px]">
                加入我们
              </NavLink>
            </div>
            {/* <!-- 用户头像 --> */}
            <div className="absolute rounded-full bg-white right-3">
              <img
                src="public/images/Mainview/User.webp"
                alt="user"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* <!-- 主体内容 --> */}
          <div className="px-16 ">
            <div className="pt-32 pb-16 border-l-[0.6px] border-r-[0.6px] border-white mx-auto">
              {/* <!-- 中间内容 --> */}
              <div className="max-w-11/12 mx-auto flex justify-center items-end  pb-32">
                {/* <!-- 左侧内容 --> */}
                <div>
                  <img
                    src="public/images/Mainview/shouye_left.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* {mid} */}
                <div className=" text-white font-PingFangSC font-regular mx-10 ">
                  {/* <!-- 码绘工作室 --> */}
                  <div className="w-full  flex items-end justify-between  mb-5">
                    <div className=" italic md:text-8xl text-transparent [-webkit-text-stroke:1px_#ffffff]">码绘</div>
                    <div className="text-6xl">工作室</div>
                  </div>
                  {/* <!-- 致力于。。。 --> */}
                  <div className="px-8 flex flex-col items-center  flex-wrap text-2xl">
                    <div className="w-full my-5 ">
                      一个致力于前端和UI技术开发的
                    </div>
                    <div>软创工作室</div>
                  </div>
                  {/* <!-- 圆 --> */}
                  <div className="w-28 h-28 mx-auto">
                    <img
                      src="public/images/Mainview/circle.webp"
                      alt="circle"
                      className="w-full h-full scale-75"
                    />
                  </div>
                  {/* <!-- 边 --> */}
                  <div className="w-24 h-2 mx-auto">
                    <img
                      src="public/images/Mainview/side.webp"
                      alt="side"
                      className="w-full h-full scale-75"
                    />
                  </div>
                </div>
                {/* <!-- 右侧内容 --> */}
                <div className="">
                  <img
                    src="public/images/Mainview/shouye_right.webp"
                    alt=""
                    className=""
                  />
                </div>
              </div>
              {/* <!-- 底部内容 --> */}
              <div className="absolute left-0 bottom-1.5 ">
                <img
                  src="public/images/Mainview/CodePaint.webp"
                  alt="footer"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homeone;
