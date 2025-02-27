const Header = () => {
  return (
    <>
      {/*头部*/}
      <div className="h-72px flex ml-10 mr-10">
        {/*logo*/}
        <div>
          <a href="#">
            <img
              className="h-[51.51px] w-[39.36px]"
              src="public/images/cp-logo-blue.webp"
              style={{ backgroundSize: 'contain' }}
              alt="logo"
            />
          </a>
        </div>
        {/*标题*/}
        <div className="text-font-primary font-PingFangSC font-medium ml-10">
          <div>码绘</div>
          <div>CodePaint Studio</div>
        </div>
        {/*navbar*/}
        <div className="font-PingFangSC text-font-primary flex justify-around text-xs font-medium">
          <a>首页</a>
          <a>活动中心</a>
          <a>产品</a>
          <a>加入我们</a>
        </div>
      </div>
    </>
  );
};

export default Header;
