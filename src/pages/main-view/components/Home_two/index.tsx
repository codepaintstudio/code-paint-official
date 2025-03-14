const Hometwo = () => {
  return (
    <>
      <div className="bg-b-secondary flex justify-center w-full h-screen text-white/90 font-PingFangSC text-nowrap">
        <div className="absolute flex flex-col items-center justify-center w-2/3 h-2/3 mx-auto mt-10">
          <h1 className="text-8xl font-bold tracking-wide">Code Paint</h1>
          <h2 className="text-4xl font-bold tracking-widest my-10">
            加入码绘 马上就会
          </h2>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 flex flex-col justify-end items-center">
          <img
            src="/public/images/Mainview/cp_1.webp"
            alt="cp"
            className="scale-90"
          />
          <img
            src="/public/images/Mainview/circle_1.webp"
            alt="circle"
            className="mb-10 scale-90"
          />
        </div>
        <table className="border-collapse border-24 border-black w-full h-full z-0">
          <tbody>
            {/* 创建6行 */}
            {Array.from({ length: 6 }, (_, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {/* 创建6列 */}
                {Array.from({ length: 6 }, (_, colIndex) => (
                  <td
                    key={`col-${colIndex}`}
                    className="border-6 border-black p-4 hover:bg-font-primary">
                    {''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Hometwo;
