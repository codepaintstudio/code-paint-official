import React from 'react';
import { useNavigate } from 'react-router';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
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
      navigate('/register');
    }
  };

  return (
    <>
      {/* 登录弹窗 */}
      <div
        className="fixed top-0 left-0 w-full bottom-0 bg-black opacity-60 z-10"
        onClick={onClose}
      />
      <div className="absolute top-1/3 md:top-1/5 left-1/2 -translate-x-1/2 md:w-1/3 h-60 z-20 w-4/5">
        <div className="w-full h-full bg-white flex flex-col justify-center items-center rounded-xl text-sm relative">
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            title="关闭"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div className="w-20 h-20 flex shrink justify-center items-center bg-font-primary rounded-full">
            {' '}
            <svg
              width="56"
              height="55"
              viewBox="0 0 56 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.98828 53.474C16.8435 29.316 38.1593 29.3159 53.0804 53.4738"
                stroke="#E5E5E5"
                stroke-width="5"
              />
              <circle
                cx="27.4992" cy="15.1056" r="14.9211"
                fill="#E5E5E5"
              />
            </svg>
          </div>
          <p className="text-sm my-6 tracking-widest text-font-senary">
            您未登录
          </p>
          <button
            onClick={handleLogin}
            className="bg-font-primary text-white tracking-wider rounded-lg w-24 h-9 cursor-pointer hover:opacity-80"
          >
            登录
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
