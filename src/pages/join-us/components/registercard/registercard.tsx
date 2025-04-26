import {NavLink,useNavigate} from 'react-router';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Lock, Mail, Eye, EyeOff,UserRound,MoveLeft,ArrowLeft} from 'lucide-react';
import axios from 'axios';
import {API_URL} from '@/const/index';

const RegisterCard = () => {
  const titleRef = useRef(null);
  const [firstShowPassword, setFirstShowPassword] = useState(false);
  const [secondShowPassword, setSecondShowPassword] = useState(false);
  const navigate = useNavigate();
  // 创建timeline引用以便卸载时清除
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  // 为每个药丸元素创建ref
  const pill1Ref = useRef(null);
  const pill2Ref = useRef(null);
  const pill3Ref = useRef(null);
  const pill4Ref = useRef(null);
  const pill5Ref = useRef(null);
  const pill6Ref = useRef(null);
  const pill7Ref = useRef(null);
  const pill8Ref = useRef(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  useGSAP(() => {
    // 创建时间线控制所有动画
    const tl = gsap.timeline();
    // 存储timeline引用以便清除
    tlRef.current = tl;

    // 标题动画
    tl.from(titleRef.current, {
      text: ' ',
      duration: 3,
    });

    // 药丸元素逐个出现的动画
    const pills = [
      pill1Ref.current,
      pill2Ref.current,
      pill3Ref.current,
      pill4Ref.current,
      pill5Ref.current,
      pill6Ref.current,
      pill7Ref.current,
      pill8Ref.current,
    ];

    // 设置所有药丸的初始状态
    gsap.set(pills, {
      opacity: 0,
      y: 30,
      scale: 0.5,
    });

    // 同时进行标题和药丸动画
    pills.forEach((pill) => {
      tl.to(
        pill,
        {
          opacity: 1,
          y: 0,
          scale: 0.9,
          duration: 0.7,
          ease: 'back.out(1.7)',
        },
        // 使用固定间隔 - 每个药丸延迟0.2秒出现
        '<+0.2',
      );
    });

    // 返回清理函数，组件卸载时调用
    return () => {
      // 清除timeline的所有动画
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []); // 空依赖数组确保只在挂载时运行一次

  const toggleFirstPasswordVisibility = () => {
    setFirstShowPassword(!firstShowPassword);
  };

  const toggleSecondPasswordVisibility = () => {
    setSecondShowPassword(!secondShowPassword);
  };

  const validateUsername = (username: string) => {
    if (/\s/.test(username)) return false;
    const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;
    return USERNAME_REGEX.test(username);
  };

  const validatePassword = (password: string) => {
    if (password.length < 6 || password.length > 30) return false;
    if (/\s/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[A-Z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    return true;
  };

  const handleNext = () => {
    if (!validateUsername(form.username)) {
      setErrorMsg('用户名必须为4-20位字母/数字/下划线，且以字母开头');
      return;
    }
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) {
      setErrorMsg('请输入有效的邮箱地址');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handlePrev = () => {
    setErrorMsg('');
    setStep(1);
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validatePassword(form.password)) {
      setErrorMsg('密码至少需要6个字符，且包含大小写字母和数字，不能包含空格');
      return;
    }
    if (form.confirmPassword.length < 6 || form.confirmPassword.length > 30) {
      setErrorMsg('密码长度应在6到30个字符之间');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setErrorMsg('两次输入的密码不一致');
      return;
    }
    const data = {
      userEmail: form.email,
      userName: form.username,
      userPassword: form.password,
      confirmPassword: form.confirmPassword,
    };
    try {
      await axios.post(`${API_URL}/api/usercenter`, data);
      setErrorMsg('');
      alert('注册成功！');
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          const msg = error.response.data?.message || error.response.data?.data?.details || '注册失败，请重试！';
          const msgList = msg.split(';').map((s: string) => s.trim()).filter(Boolean);
          setErrorMsg(msgList.join('\n'));
        } else {
          setErrorMsg('注册失败，请重试！');
        }
      } else {
        setErrorMsg('注册失败，请重试！');
      }
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      {' '}
      {/* main */}
      <div className="hidden md:flex fixed top-1/8 left-1/8 bottom-1/8 right-1/8 justify-between bg-black py-1.5 pr-3 rounded-xl">
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
          <div className="w-full text-white font-PingFangS">
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
            <form className="w-3/5 mx-auto" onSubmit={handleRegister}>
              {step === 1 && (
                <>
                  
                  <div className="flex items-center mt-3 mx-auto text-xs text-white cursor-pointer">
                    <p className="text-base font-semibold mr-2">创建用户以开始使用</p>
                    <NavLink to="/login" className="hover:opacity-80">
                      已经有一个账户？
                    </NavLink>
                  </div>
                  {/* 用户名 */}
                  <div className="flex text-white items-center h-10 mx-auto my-4  border-white border-1 rounded-xl">
                    <div className="flex items-center h-4/5">
                      <UserRound  size={20} color="#bdbdbe" className="mx-2" />
                    </div>
                    <input
                      type="text"
                      name="username"
                      placeholder="用户名"
                      className="w-full py-2 px-3 placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent"
                      required
                      value={form.username}
                      onChange={e => setForm({ ...form, username: e.target.value })}
                    />
                  </div>
                  {/* 邮箱 */}
                  <div className="flex text-white items-center h-10 mx-auto my-4  border-white border-1 rounded-xl">
                    <div className="flex items-center h-4/5">
                      <Mail size={20} color="#bdbdbe" className="mx-2" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="电子邮件"
                      className="w-full py-2 px-3 placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  {/* 下一步 */}
                  <div className="w-full h-10 mt-10 bg-white text-font-primary rounded-xl text-center hover:opacity-80">
                    <input
                      className="h-full w-full my-auto font-semibold text-base cursor-pointer"
                      type="button"
                      value="下一步"
                      onClick={handleNext}
                    />
                  </div>
                  {errorMsg && (
                    <div className="text-xs text-red-500 mt-2 whitespace-pre-line text-center">{errorMsg}</div>
                  )}
                </>
              )}
              {step === 2 && (
                <>
                  <p className="text-base font-semibold">创建用户以开始使用</p>
                  {/* 密码 */}
                  <div className="flex items-center h-10 mx-auto my-4 border-white border-1 rounded-xl">
                    <div className="flex items-center h-4/5">
                      <Lock size={20} className="mx-2" color="#bdbdbe" />
                    </div>
                    <input
                      type={firstShowPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="密码"
                      className="w-full py-2 px-3 border-none placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                      autoComplete="new-password"
                      required
                      value={form.password}
                      onChange={e => setForm({ ...form, password: e.target.value })}
                    />
                    <div
                      className="flex items-center h-4/5 mr-2 cursor-pointer"
                      onClick={toggleFirstPasswordVisibility}
                    >
                      {firstShowPassword ? (
                        <EyeOff size={24} className="text-white mx-2" />
                      ) : (
                        <Eye size={24} className="text-white mx-2" />
                      )}
                    </div>
                  </div>
                  {/* 确认密码 */}
                  <div className="flex items-center h-10 mx-auto my-4 border-white border-1 rounded-xl">
                    <div className="flex items-center h-4/5">
                      <Lock size={20} className="mx-2" color="#bdbdbe" />
                    </div>
                    <input
                      type={secondShowPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="确认密码"
                      className="w-full py-2 px-3 border-none placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                      autoComplete="new-password"
                      required
                      value={form.confirmPassword}
                      onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
                    />
                    <div
                      className="flex items-center h-4/5 mr-2 cursor-pointer"
                      onClick={toggleSecondPasswordVisibility}
                    >
                      {secondShowPassword ? (
                        <EyeOff size={24} className="text-white mx-2" />
                      ) : (
                        <Eye size={24} className="text-white mx-2" />
                      )}
                    </div>
                  </div>
                  {/* 注册 */}
                  <div className="w-full h-10 mt-10 bg-white text-font-primary rounded-xl text-center hover:opacity-80">
                    <input
                      className="h-full w-full my-auto font-semibold text-base cursor-pointer"
                      type="submit"
                      value="注册"
                    />
                  </div>
                  {errorMsg && (
                    <div className="text-xs text-red-500 mt-2 whitespace-pre-line text-center">{errorMsg}</div>
                  )}
                  {/* 返回上一步 */}
                  <div onClick={handlePrev} className="w-full flex justify-center mt-3">
                    <div className="cursor-pointer hover:opacity-80"><MoveLeft size={40} color="#fff" strokeWidth={2} /></div>
                  </div>
                </>
              )}
            </form>
           
          </div>
          {/* 小药丸 */}
          <div className="bottom-0 flex w-full mx-auto font-PingFangSC font-semibold text-xs text-center text-white/40">
            {/* 加入码绘 马上就会 */}
            <div
              ref={pill1Ref}
              className="absolute left-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] origin-left -rotate-20"
            >
              加入码绘，码上就绘
            </div>
            {/* 码绘欢迎你的到来 */}
            <div
              ref={pill2Ref}
              className=" absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-18"
            >
              码绘欢迎你的到来
            </div>
            {/* 加入码绘 */}
            <div
              ref={pill3Ref}
              className="absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-12 translate-x-44 origin-left rotate-6"
            >
              加入码绘
            </div>
            {/* 加入码绘，马上就会 */}
            <div
              ref={pill4Ref}
              className="absolute bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-56 origin-right rotate-12"
            >
              加入码绘，码上就绘
            </div>
            {/* 技术指导 */}
            <div
              ref={pill5Ref}
              className="absolute bottom-0 right-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-12 -translate-x-44 origin-left -rotate-12"
            >
              技术指导
            </div>
            {/* 码绘欢迎你的到来 */}
            <div
              ref={pill6Ref}
              className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-10 -translate-x-16 origin-left -rotate-12"
            >
              码绘欢迎你的到来
            </div>
            {/* UI设计 */}
            <div
              ref={pill7Ref}
              className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] -translate-y-6 -translate-x-20 origin-left rotate-12"
            >
              UI设计
            </div>
            {/* 码绘欢迎你到来 */}
            <div
              ref={pill8Ref}
              className="absolute right-0 bottom-0 w-fit rounded-2xl px-3 p-2 border-white/20 border-[0.5px] scale-90 bg-radial to-white/25  from-font-tertiary/15 backdrop-blur-[15px]
          [box-shadow:inset_0px_10px_15px_0px_#FFFFFF40,inset_0px_0px_10px_0px_#FFFFFF40] translate-x-6 translate-y-2 origin-left -rotate-12"
            >
              码绘欢迎你到来
            </div>
          </div>
        </div>
      </div>
      {/* 移动端注册页面样式 */}
      <div className="md:hidden bg-b-secondary w-full h-screen pt-6 pl-3">
        {/* 返回上一页 */}
        <div>
          <div onClick={() => navigate(-1)} className="cursor-pointer hover:opacity-80 px-3 py-2 w-fit bg-white/15 rounded-2xl"><ArrowLeft size={30} color="#fff" strokeWidth={2} /></div>
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
          <form className="w-3/5 mx-auto" onSubmit={handleRegister}>
            {step === 1 && (
              <>
                <p className="text-base font-semibold">创建用户以开始使用</p>
                {/* 用户名 */}
                <div className="flex text-white items-center h-10 mx-auto my-4  border-white border-1 rounded-xl">
                  <div className="flex items-center h-4/5">
                    <UserRound  size={20} color="#bdbdbe" className="mx-2" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="用户名"
                    className="w-full py-2 px-3 placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent"
                    required
                    value={form.username}
                    onChange={e => setForm({ ...form, username: e.target.value })}
                  />
                </div>
                {/* 邮箱 */}
                <div className="flex text-white items-center h-10 mx-auto my-4  border-white border-1 rounded-xl">
                  <div className="flex items-center h-4/5">
                    <Mail size={20} color="#bdbdbe" className="mx-2" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="电子邮件"
                    className="w-full py-2 px-3 placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                {/* 下一步 */}
                <div className="w-full h-10 mt-10 bg-font-primary text-white rounded-xl text-center hover:opacity-80">
                  <input
                    className="h-full w-full my-auto font-semibold text-base cursor-pointer"
                    type="button"
                    value="下一步"
                    onClick={handleNext}
                  />
                </div>
                {errorMsg && (
                  <div className="text-xs text-red-500 mt-2 whitespace-pre-line text-center">{errorMsg}</div>
                )}
              </>
            )}
            {step === 2 && (
              <>
                <p className="text-base font-semibold">创建用户以开始使用</p>
                {/* 密码 */}
                <div className="flex items-center h-10 mx-auto my-4 border-white border-1 rounded-xl">
                  <div className="flex items-center h-4/5">
                    <Lock size={20} className="mx-2" color="#bdbdbe" />
                  </div>
                  <input
                    type={firstShowPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="密码"
                    className="w-full py-2 px-3 border-none placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                    autoComplete="new-password"
                    required
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                  />
                  <div
                    className="flex items-center h-4/5 mr-2 cursor-pointer"
                    onClick={toggleFirstPasswordVisibility}
                  >
                    {firstShowPassword ? (
                      <EyeOff size={24} className="text-white mx-2" />
                    ) : (
                      <Eye size={24} className="text-white mx-2" />
                    )}
                  </div>
                </div>
                {/* 确认密码 */}
                <div className="flex items-center h-10 mx-auto my-4 border-white border-1 rounded-xl">
                  <div className="flex items-center h-4/5">
                    <Lock size={20} className="mx-2" color="#bdbdbe" />
                  </div>
                  <input
                    type={secondShowPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="确认密码"
                    className="w-full py-2 px-3 border-none placeholder:opacity-60 placeholder:text-sm placeholder:tracking-widest placeholder:font-normal focus:outline-none focus:ring-0 focus:border-transparent [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                    autoComplete="new-password"
                    required
                    value={form.confirmPassword}
                    onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
                  />
                  <div
                    className="flex items-center h-4/5 mr-2 cursor-pointer"
                    onClick={toggleSecondPasswordVisibility}
                  >
                    {secondShowPassword ? (
                      <EyeOff size={24} className="text-white mx-2" />
                    ) : (
                      <Eye size={24} className="text-white mx-2" />
                    )}
                  </div>
                </div>
                {/* 注册 */}
                <div className="w-full h-10 mt-10 bg-font-primary text-white rounded-xl text-center hover:opacity-80">
                  <input
                    className="h-full w-full my-auto font-semibold text-base cursor-pointer"
                    type="submit"
                    value="注册"
                  />
                </div>
                {errorMsg && (
                  <div className="text-xs text-red-500 mt-2 whitespace-pre-line text-center">{errorMsg}</div>
                )}
                {/* 返回上一步 */}
                <div onClick={handlePrev} className="w-full flex justify-center mt-3">
                  <div className="cursor-pointer hover:opacity-80"><MoveLeft size={40} color="#fff" strokeWidth={2} /></div>
                </div>
              </>
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

export default RegisterCard;
