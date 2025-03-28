import React from 'react';
import { useNavigate } from 'react-router';

const LoginModal: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // 假设有一个函数 isAuthenticated() 用于检查用户是否已登录
    const isAuthenticated = () => {
      // 这里可以是检查用户登录状态的逻辑，比如检查 token 或 session
      return Boolean(localStorage.getItem('userToken'));
    };

    if (isAuthenticated()) {
      navigate('/submission');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      {/* 登录弹窗 */}
      <div className="fixed top-0 left-0 w-full bottom-0 bg-black opacity-60">
        {}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-60">
        <div className="w-full h-full bg-white flex flex-col justify-center items-center rounded-xl text-sm">
          <img
            className="flex shrink scale-90"
            src="/public/images/join/avatar.webp"
            alt="avatar"
          />
          <p className="text-sm my-6 tracking-widest">您未登录</p>
          <button
            onClick={handleLogin}
            className="bg-font-primary text-white tracking-wider rounded-lg w-24 h-9 "
          >
            登录
          </button>
        </div>
      </div>
    </>
  );
};
export default LoginModal;
