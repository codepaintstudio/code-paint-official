const Header = () => {
  return (
    <>
      <div className="flex items-center h-[90px] w-full border-b-[0.6px] border-white text-white leading-[90px] mx-auto">
        {/* <!-- 左侧图标和文字 --> */}
        <div className="absolute h-[90px] w-[300px]">
          <div className="absolute top-1/2 -translate-y-1/2 left-[35px] w-[81px] h-[81px]">
            <img
              src="public/images/Mainview/nav_left.png"
              alt="nav icon"
              className="w-full h-full"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-[116px] text-white ml-[25px]">
            <p className="font-PingFangSC h-[28px] leading-[28px] text-[20px] font-semibold">
              码绘
            </p>
            <p className="font-PingFangSC h-[22px] leading-[22px]">
              CodePaint Studio
            </p>
          </div>
        </div>
        {/* <!-- 导航中间部分 --> */}
        <div className="font-PingFangSC h-[90px] mx-auto">
          <a href="#" className="text-[18px] pr-[50px] pl-[50px]">
            首页
          </a>
          <a href="#" className="text-[18px] pr-[50px] pl-[50px]">
            活动中心
          </a>
          <a href="#" className="text-[18px] pr-[50px] pl-[50px]">
            产品
          </a>
          <a href="#" className="text-[18px] pr-[50px] pl-[50px]">
            加入我们
          </a>
        </div>
        {/* <!-- 用户头像 --> */}
        <div className="absolute right-[12px] w-[55px] h-[55px] rounded-full bg-white">
          <img
            src="public/images/Mainview/User.png"
            alt="user"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
