const Cannot = () => {
  return (
    <>
      {/* 未开放投递弹窗 */}
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
          <p className="text-sm my-6 tracking-widest">未在招新期间内</p>
          <p className="text-sm my-6 tracking-widest">无法投递</p>
          <button className="bg-font-primary text-white tracking-wider rounded-lg w-24 h-9 ">
            确定
          </button>
        </div>
      </div>
    </>
  );
};
export default Cannot;
