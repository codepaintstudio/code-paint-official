import { useRef, useState, FormEvent, ChangeEvent } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useNavigate} from 'react-router';
import axios from 'axios';
import { Lock, UserRound, Eye, EyeOff,ArrowLeft } from 'lucide-react';
import {API_URL} from '@/const/index';
// import { AxiosError } from 'axios';


const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  // 表单状态管理
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  // 处理输入变化
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  // 处理表单提交
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/login`,
        {
          userName: credentials.username,
          userPassword: credentials.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.data.success) {
        // 存储双令牌
        localStorage.setItem('access_token', response.data.data.access_token);
        localStorage.setItem('refresh_token', response.data.data.refresh_token);
        localStorage.setItem('userId', response.data.data.userId);
        setErrorMsg('');
        alert('登录成功');
        navigate('/submission');
      } else {
        setErrorMsg(response.data.message || '登录失败');
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.data?.code === 401) {
          setErrorMsg('密码错误');
        } else if (err.response?.data?.code === 500) {
          setErrorMsg('该用户不存在');
        }
      }
    }
  };
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
    <div>
      {/* pc登录页面样式 */}
      <div className="hidden md:flex absolute top-1/8 left-1/8 bottom-1/8 right-1/8 justify-between bg-black py-1.5 pr-3 rounded-xl">
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

            <form className="w-3/5 mx-auto" onSubmit={handleSubmit}>
              <p className="text-base font-semibold">登录以开始使用</p>
              {/* 用户名 */}
              <div className="flex text-white items-center h-10 mx-auto my-4  border-white border-1 rounded-xl">
                <div className="flex items-center h-4/5">
                  {/* 个人icon */}
                  <UserRound size={20} className="mx-2" />
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="用户名"
                  className="w-full py-2 px-3 placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent"
                  required
                  value={credentials.username}
                  onChange={handleInputChange}
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
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
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
              {errorMsg && (
                <div className="text-xs text-red-500 mt-2 whitespace-pre-line text-center">{errorMsg}</div>
              )}
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
      {/* 移动端注册页面样式 */}
      <div className="md:hidden bg-b-secondary w-full h-screen overflow-hidden pt-6 pl-3">
        <div>
          <div onClick={() =>navigate(-1)} className="cursor-pointer hover:opacity-80 px-3 py-2 w-fit bg-white/15 rounded-2xl z-50"><ArrowLeft size={30} color="#fff" strokeWidth={2} /></div>
        </div>
        <img
          src="/public/images/Login/cp.webp"
          alt="cp"
          className="object-contain fixed bottom-0 left-10 opacity-5"
        />
        <div className="w-full text-white font-PingFangSC relative top-1/4 z-10">
          {/* 码绘 */}
          <div className="w-3/5 mx-auto mb-5 flex items-center -translate-x-3">
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
          <form className="w-3/5 mx-auto" onSubmit={handleSubmit}>
            <p className="text-base font-semibold">登录以开始使用</p>
            {/* 用户名 */}
            <div className="flex text-white items-center h-10 mx-auto my-4  border-white border-1 rounded-xl">
              <div className="flex items-center h-4/5">
                {/* 信icon */}
                <UserRound size={20} color="#bdbdbe" className="mx-2" />
              </div>
              <input
                type="text"
                name="username"
                placeholder="用户名"
                className="w-full py-2 px-3 placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent"
                required
                value={credentials.username}
                onChange={handleInputChange}
              />
            </div>
            {/* 密码 */}
            <div className="flex items-center h-10 mx-auto my-4 border-white border-1 rounded-xl">
              <div className="flex items-center h-4/5">
                <Lock size={20} className="mx-2" color="#bdbdbe" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="密码"
                className="w-full py-2 px-3 border-none placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                autoComplete="new-password"
                required
                value={credentials.password}
                onChange={handleInputChange}
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
            <div className="w-full h-10 mt-10 bg-font-primary text-white rounded-xl  text-center hover:opacity-80">
              <input
                className="h-full w-full my-auto font-semibold text-base cursor-pointer"
                type="submit"
                value="登录"
              />
            </div>
            {errorMsg && (
              <div className="text-xs text-red-500 mt-2 whitespace-pre-line text-center">{errorMsg}</div>
            )}
          </form>
        </div>
        {/* 小药丸 */}
        <div className="fixed bottom-0 flex w-full h-1/2 mx-auto font-PingFangSC font-semibold text-xs text-center text-white/40">
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
            className="absolute bottom-10 left-32 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] origin-left rotate-6"
          >
            加入码绘
          </div>
          {/* 加入码绘，马上就会 */}
          {/* <div
            className="absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-56 origin-right rotate-12">
            加入码绘，码上就绘
          </div> */}
          {/* 技术指导 */}
          <div
            className="absolute bottom-5 left-50 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] origin-left -rotate-12"
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
