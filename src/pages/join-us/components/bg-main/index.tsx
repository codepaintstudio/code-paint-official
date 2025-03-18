import Header from '@/components/header/index';

const Bgmain = () => {
  return (
    <>
      <Header />
      <div className="fixed w-screen">
        <img
          className="w-full h-full object-cover"
          src="/public/images/join/orange_lace.webp"
          alt="orange_lace"
        />
      </div>
      {/* 中间小标题 */}
      <div className="w-full relative font-bold font-PingFangSC flex justify-center">
        <div className="absolute text-center text-stroke text-transparent text-3xl opacity-20 tracking-widest">
          Resume submission
        </div>
        <div className="text-4xl text-font-primary tracking-wider font-black">
          简历投递
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col items-center text-sm font-thin">
        <p className="p-2.5">
          展示可投递岗位和岗位内容简介展示可投递岗位和岗位内
        </p>
        <p className="p-2.5">容简介展示可投递容简介简介</p>
      </div>
      <div className="">
        {/* 左侧文字 */}
        <div className=" fixed font-PingFangSC overflow-clip w-full h-full object-cover  flex flex-col justify-around glow shrink text-font-primary text-stroke font-bold sm:text-3xl md:text-4xl lg:text-7xl opacity-15 pt-1/2 tracking-widest">
          <p className="md:py-1.5 sm:py-1 lg:py-2">Resume submission</p>
          <p className="transform -translate-x-11 md:py-4 sm:py-2 lg:py-4 text-stroke bg-gradient-to-b from-font-primary to-font-tertiary bg-clip-text text-transparent ">
            Resume submission
          </p>
          <p className="transform -translate-x-16 md:py-2 sm:py-1 lg:py-4 text-stroke bg-gradient-to-b from-white via-font-tertiary to-font-primary bg-clip-text text-transparent ">
            Resume submission
          </p>
          <p className="transform -translate-x-28 md:py-4 sm:py-2 lg:py-4 text-stroke text-transparent">
            Resume submission
          </p>
          <p className="transform -translate-x-24 md:py-4 sm:py-2 lg:py-4 text-stroke text-transparent">
            Resume submission
          </p>
          <p className="text-stroke text-transparent">Resume submission</p>
        </div>
      </div>
    </>
  );
};
export default Bgmain;
