import { NavLink } from 'react-router';

const Header = () => {
  // 移动端菜单
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/*桌面端样式*/}
      <div className="hidden h-16 md:flex m-5 justify-around items-center">
        {/*logo*/}
        <div className="flex items-center pl-3 w-1/4 h-full">
          <a href="/" className="h-full w-1/4 flex items-center">
            <div className="w-16 h-17 mt-1 bg-contain bg-no-repeat bg-[url('/images/cp-logo-blue.webp')]" />
          </a>
          <div
            className="w-2/5 h-full text-font-primary font-PingFangSC font-medium flex items-center flex-wrap content-center"
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
          <NavLink to={'/products'} className="h-full flex items-center">产品</NavLink>
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
      {/*移动端样式*/}
      {/*<div*/}
      {/*  className=" flex absolute top-0 px-5 w-full h-16 md:hidden justify-between items-center backdrop-blur-lg opacity-50 z-40"*/}
      {/*>*/}
      {/*  /!*左侧logo及标题*!/*/}
      {/*  <div className="flex items-center">*/}
      {/*    <div className="w-13 h-13 bg-[url('/images/cp-logo-white.webp')] bg-contain bg-no-repeat" />*/}
      {/*    <div className="display flex flex-col text-white text-xs ml-2">*/}
      {/*      <div>码绘</div>*/}
      {/*      <div>CodePaint Studio</div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  /!*菜单*!/*/}
      {/*  <button onClick={toggleMenu} className="flex flex-col gap-2 cursor-pointer">*/}
      {/*    <span*/}
      {/*      className={`w-8 border border-white rounded-xl transition-transform ${*/}
      {/*        isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''*/}
      {/*      }`}*/}
      {/*    />*/}
      {/*    <span*/}
      {/*      className={`w-8 border border-white rounded-xl transition-opacity ${*/}
      {/*        isMenuOpen ? 'opacity-0' : ''*/}
      {/*      }`}*/}
      {/*    />*/}
      {/*    <span*/}
      {/*      className={`w-8 border border-white rounded-xl transition-transform ${*/}
      {/*        isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''*/}
      {/*      }`}*/}
      {/*    />*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<div*/}
      {/*  className={`fixed inset-0 bg-[#6C82C8] z-30 transition-opacity duration-300 ease-in-out ${*/}
      {/*    isMenuOpen ? 'opacity-100' : 'opacity-0'*/}
      {/*  }`}*/}
      {/*>*/}
      {/*  <div className="flex flex-col items-start mt-28 h-full text-white text-2xl space-y-8">*/}
      {/*    <NavLink*/}
      {/*      className="border-t w-full border-gray-200 pl-4 py-4 mb-0 hover:bg-blue-primary hover:text-white flex items-center"*/}
      {/*      to="/" onClick={toggleMenu}*/}
      {/*    >首页*/}
      {/*    </NavLink>*/}
      {/*    <NavLink*/}
      {/*      className="border-t w-full border-gray-200 pl-4 py-4 mb-0 hover:bg-blue-primary hover:text-white flex items-center"*/}
      {/*      to="/activity" onClick={toggleMenu}*/}
      {/*    >活动中心*/}
      {/*    </NavLink>*/}
      {/*    <NavLink*/}
      {/*      className="border-t w-full border-gray-200 pl-4 py-4 mb-0 hover:bg-blue-primary hover:text-white flex items-center"*/}
      {/*      to="/products" onClick={toggleMenu}*/}
      {/*    >产品*/}
      {/*    </NavLink>*/}
      {/*    <NavLink*/}
      {/*      className="border-t w-full border-gray-200 pl-4 py-4 mb-0 hover:bg-blue-primary hover:text-white flex items-center"*/}
      {/*      to="/join" onClick={toggleMenu}*/}
      {/*    >加入我们*/}
      {/*    </NavLink>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Header;
