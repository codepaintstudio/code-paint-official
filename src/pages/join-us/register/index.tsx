import { Lock, Mail, EyeOff } from 'lucide-react';
import { NavLink } from 'react-router';
const Register = () => {
  return (
    <>
      <div className="w-screen">
        {/* 背景文字 */}
        <div className="absolute top-2.5 w-full text-9xl font-bold text-center text-transparent font-PingFangSC text-stroke tracking-[-0.07em] text-nowrap opacity-15">
          Welcome to Code Painting
        </div>
        {/* 背景 线条*/}
        <div className="absolute top-1/8 left-0 bottom-1/8 right-0 ">
          <svg
            className="absolute w-full h-full object-cover "
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
          <svg
            className="w-full h-full object-cover"
            width="1920"
            height="802"
            viewBox="0 0 1920 802"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.1"
              d="M819.257 625.188C1290.86 672.252 1745.33 298.216 1963.79 0C1921.48 49.2662 1537.97 42.8441 1360.29 253C1247.92 385.899 1024.92 536.158 819.257 625.188C697.858 613.073 575.324 573.054 455.389 496.656C309.623 403.804 112.32 513.393 -93.7127 626.169C-256.792 672.236 -428.8 740.272 -554.533 801.247C-408.09 797.352 -248.44 710.862 -93.7127 626.169C131.624 562.514 339.914 540.803 385.523 637.618C434.077 740.687 618.397 712.14 819.257 625.188Z"
              fill="#FF6A00"
            />
          </svg>
        </div>
        {/* main */}
        <div className="absolute top-1/8 left-1/8 bottom-1/8 right-1/8 flex justify-between bg-black py-1.5 pr-3 rounded-xl">
          {/* left */}
          <div className="w-1/2 h-full flex justify-center">
            <img
              className="shrink"
              src="/public/images/login/cp.webp"
              alt="cp"
            />
          </div>
          {/* right */}
          <div className=" relative w-1/2 h-full bg-font-primary rounded-xl">
            <div className="w-full">
              <div className="mx-auto mt-7 text-4xl  font-medium text-center text-transparent font-PingFangSC text-stroke-tertiary tracking-tighter text-nowrap opacity-40">
                Welcome to Code Painting
              </div>
            </div>
            <div className="w-full text-white font-PingFangSC">
              {/* 码绘 */}
              <div className="w-3/5 mx-auto my-5 flex items-center -translate-x-3">
                <div>
                  <img
                    className="scale-90"
                    src="/public/images/login/nav_left.webp"
                    alt="nav_left"
                  />
                  {''}
                </div>
                <div>
                  <p className="font-bold text-2xl">码绘</p>
                  <p className="text-sm">CodePaint Studio</p>
                </div>
              </div>
              {/* 表单 */}
              <form className="w-3/5 mx-auto">
                <p className="text-base font-semibold">创建用户以开始使用</p>
                {/* 邮箱 */}
                <div className="flex text-white items-center h-10 mx-auto my-4  border-white border-1 rounded-xl">
                  <div className="flex items-center h-4/5">
                    {/* 信icon */}
                    <Mail size={20} className="mx-2" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="电子邮件"
                    className="w-full py-2 px-3 placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                </div>
                {/* 密码 */}
                <div className="flex items-center h-10 mx-auto my-4 border-white border-1 rounded-xl">
                  <div className="flex items-center h-4/5">
                    <Lock size={20} className="mx-2" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="密码"
                    className="w-full py-2 px-3 border-none placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                  <EyeOff size={26} className="mx-2" />
                </div>
                {/* 注册 */}
                <div className="w-full h-10 mt-10 bg-white rounded-xl text-font-primary text-center hover:opacity-80">
                  <input
                    className="h-full w-full my-auto font-semibold text-base cursor-pointer"
                    type="submit"
                    value="注册"
                  />
                </div>
              </form>
              <div className="w-3/5 mt-3 mx-auto text-center text-xs text-white cursor-pointer">
                <NavLink to="/login" className="hover:opacity-80">
                  已经有一个账户？
                </NavLink>
              </div>
            </div>
            {/* 小药丸 */}
            <div className="absolute bottom-0 h-1/5 flex w-full mx-auto font-PingFangSC font-semibold text-xs text-center text-white/40">
              {/* 加入码绘 马上就会 */}
              <div
                className="absolute left-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
                [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] origin-left -rotate-20">
                加入码绘，码上就绘
              </div>
              {/* 码绘欢迎你的到来 */}
              <div
                className=" absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
                [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-18">
                码绘欢迎你的到来
              </div>
              {/* 加入码绘 */}
              <div
                className="absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
                [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-12 translate-x-44 origin-left rotate-6">
                加入码绘
              </div>
              {/* 加入码绘，马上就会 */}
              <div
                className="absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
                [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-56 origin-right rotate-12">
                加入码绘，码上就绘
              </div>
              {/* 技术指导 */}
              <div
                className="absolute bottom-0 right-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
                [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-12 -translate-x-44 origin-left -rotate-12">
                技术指导
              </div>
              {/* 码绘欢迎你的到来 */}
              <div
                className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
                [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-10 -translate-x-16 origin-left -rotate-12">
                码绘欢迎你的到来
              </div>
              {/* UI设计 */}
              <div
                className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
                [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-6 -translate-x-20 origin-left rotate-12">
                UI设计
              </div>
              {/* 码绘欢迎你到来 */}
              <div
                className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
                [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-6 translate-y-2 origin-left -rotate-12">
                码绘欢迎你到来
              </div>
            </div>
          </div>
        </div>
        {/* 背景文字 */}
        <div className="fixed bottom-0 translate-y-1/2 w-full text-9xl font-bold text-center text-transparent font-PingFangSC text-stroke tracking-[-0.07em] text-nowrap opacity-15">
          Welcome to Code Painting
        </div>
      </div>
    </>
  );
};

export default Register;
