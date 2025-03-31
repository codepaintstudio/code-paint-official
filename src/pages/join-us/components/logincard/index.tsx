import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react';

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const titleRef = useRef(null);
  useGSAP(() => {
    gsap.from(titleRef.current, {
      text: ' ',
      duration: 3,
    });
  }, []);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="absolute top-1/8 left-1/8 bottom-1/8 right-1/8 flex justify-between bg-black py-1.5 pr-3 rounded-xl">
      {/* left */}
      <div className="w-1/2 h-full flex justify-center">
        <img className="shrink" src="/public/images/login/cp.webp" alt="cp" />
      </div>
      {/* right */}
      <div className=" relative w-1/2 h-full bg-font-primary rounded-xl">
        <div className="w-full">
          <div
            ref={titleRef}
            className="mx-auto mt-7 text-4xl  font-medium text-center text-transparent font-PingFangSC text-stroke-tertiary tracking-tighter text-nowrap opacity-40"
          >
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
            <p className="text-base font-semibold">登录以开始使用</p>
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
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="密码"
                className="w-full py-2 px-3 border-none placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                autoComplete="new-password"
              />
              <div
                className="flex items-center h-4/5 mr-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff size={24} className="text-white mx-2" />
                ) : (
                  <Eye size={24} className="text-white mx-2" />
                )}
              </div>
            </div>
            {/* 登录 */}
            <div className="w-full h-10 mt-10 bg-white rounded-xl text-font-primary text-center hover:opacity-80">
              <input
                className="h-full w-full my-auto font-semibold text-base cursor-pointer"
                type="submit"
                value="登录"
              />
            </div>
          </form>
        </div>
        {/* 小药丸 */}
        <div className="absolute bottom-0 h-1/5 flex w-full mx-auto font-PingFangSC font-semibold text-xs text-center text-white/40">
          {/* 加入码绘 马上就会 */}
          <div
            className="absolute left-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
            [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] origin-left -rotate-20"
          >
            加入码绘，码上就绘
          </div>
          {/* 码绘欢迎你的到来 */}
          <div
            className=" absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
            [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-18"
          >
            码绘欢迎你的到来
          </div>
          {/* 加入码绘 */}
          <div
            className="absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
            [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-12 translate-x-44 origin-left rotate-6"
          >
            加入码绘
          </div>
          {/* 加入码绘，马上就会 */}
          <div
            className="absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
            [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-56 origin-right rotate-12"
          >
            加入码绘，码上就绘
          </div>
          {/* 技术指导 */}
          <div
            className="absolute bottom-0 right-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
            [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-12 -translate-x-44 origin-left -rotate-12"
          >
            技术指导
          </div>
          {/* 码绘欢迎你的到来 */}
          <div
            className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
            [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-10 -translate-x-16 origin-left -rotate-12"
          >
            码绘欢迎你的到来
          </div>
          {/* UI设计 */}
          <div
            className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
            [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-6 -translate-x-20 origin-left rotate-12"
          >
            UI设计
          </div>
          {/* 码绘欢迎你到来 */}
          <div
            className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
            [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-6 translate-y-2 origin-left -rotate-12"
          >
            码绘欢迎你到来
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
