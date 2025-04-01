import { NavLink } from 'react-router';
import { useState } from 'react';

const MobileHeader = () => {
  // 移动端菜单
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="md:hidden">
      {/*移动端样式*/}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-[#6C82C8] transition-transform duration-300 '
        }`}
      >
        <div className="flex px-5 w-full h-16 justify-between items-center backdrop-blur-lg bg-opacity-80">
          {/* /!*左侧logo及标题*!/ */}
          <div className="flex items-center">
            <img
              className="w-13 h-13 bg-contain bg-no-repeat"
              src="/public/images/mainview/mobile-cp.webp"
              alt="cp"
            />
            <div className="display flex flex-col text-white text-xs ml-2">
              <div>码绘</div>
              <div>CodePaint Studio</div>
            </div>
          </div>
          {/* /!*菜单*!/ */}
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-2 cursor-pointer"
          >
            <span
              className={`w-8 border border-white rounded-xl transition-transform ${
                isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''
              }`}
            />
            <span
              className={`w-8 border border-white rounded-xl transition-opacity ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-8 border border-white rounded-xl transition-transform ${
                isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''
              }`}
            />
          </button>
        </div>
      </div>
      {/* 背景遮罩 */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-30' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`h-screen fixed right-0 bg-[#6C82C8] text-sm z-30 w-1/2 top-0 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-start mt-14 h-full text-white text-2xl space-y-8">
          <NavLink
            className="w-full border-gray-200 pl-4 py-4 mb-0 hover:bg-blue-primary hover:text-white flex items-center"
            to="/mainview"
            onClick={toggleMenu}
          >
            首页
          </NavLink>
          <NavLink
            className="border-t w-full border-gray-200 pl-4 py-4 mb-0 hover:bg-blue-primary hover:text-white flex items-center"
            to="/activity"
            onClick={toggleMenu}
          >
            活动中心
          </NavLink>
          <NavLink
            className="border-t w-full border-gray-200 pl-4 py-4 mb-0 hover:bg-blue-primary hover:text-white flex items-center"
            to="/products"
            onClick={toggleMenu}
          >
            产品
          </NavLink>
          <NavLink
            className="border-t w-full border-gray-200 pl-4 py-4 mb-0 hover:bg-blue-primary hover:text-white flex items-center"
            to="/join"
            onClick={toggleMenu}
          >
            加入我们
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
