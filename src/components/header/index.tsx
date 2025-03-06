import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div className="h-16 flex m-5 justify-around items-center">
      {/*logo*/}
      <div className="flex items-center w-1/5 h-full">
        <a href="#" className="h-full w-1/5 flex items-center">
          <img
            className="h-3/4 w-3/4"
            src="/images/cp-logo-blue.webp"
            alt="logo"
          />
        </a>
        <div
          className="w-1/2 h-full text-font-primary font-PingFangSC font-medium ml-10 flex items-center flex-wrap content-center"
        >
          <div>码绘</div>
          <div>CodePaint Studio</div>
        </div>
      </div>
      {/*标题*/}

      {/*navbar*/}
      <div
        className="w-1/2 h-full font-PingFangSC text-font-primary flex justify-around items-center text-base font-medium ml-60"
      >
        <NavLink to={'/'} className="h-full flex items-center">首页</NavLink>
        <NavLink to={'/activity'} className="h-full flex items-center">活动中心</NavLink>
        <NavLink to={'/products'}  className="h-full flex items-center">产品</NavLink>
        <NavLink to={'/join'} className="h-full flex items-center">加入我们</NavLink>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full border-2 text-font-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-font-primary" fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
