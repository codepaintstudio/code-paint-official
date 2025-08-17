import bottom from "@/assets/mainview/bottom.webp";

const MobileHome = () => {
  return (
    <div className="md:hidden flex justify-center flex-wrap bg-font-primary w-full h-80 font-PingFangSC italic text-white font-semibold">
      <div className="mt-20 mb-2 flex items-end">
        <h1 className="text-6xl font-black text-white">码绘</h1>{" "}
        <h2 className="text-3xl tracking-wider ml-4">工作室</h2>
      </div>
      <p className="flex items-center justify-center tracking-widest w-full my-2">
        一个致力于前端和UI技术开发的
      </p>
      <p className="flex items-center justify-center tracking-widest w-full">
        软创工作室
      </p>
      <img className="shrink mb-6" src={bottom} alt="bottom" />
    </div>
  );
};

export default MobileHome;
