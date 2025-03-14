import Pruemain from '../Components/Pruemain/index';
const Submission = () => {
  return (
    <div className="relative h-screen">
      <Pruemain />
      {/* 盒子居中 */}
      <div className="h-full w-full">
        <div className="relative w-2/7 h-3/5 mx-auto bg-font-primary border rounded-tr-4xl ">
          {/* 第一层 */}
          <div
            className="w-full h-full bg-b-secondary rounded-tr-4xl origin-top-left hover:-rotate-6 transition-all duration-700"
          >
            {/*圆孔 */}
            <div className="w-6 h-6 absolute top-6 left-6  rounded-full bg-white">
              {''}
            </div>

            {/* 简历投递+表单 */}
            <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center">
              {/* 简历投递 */}
              <div className="w-full relative font-bold font-PingFangSC flex justify-center items-center">
                <div className="absolute text-center font-medium tracking-[0.2em] text-stroke-secondary text-transparent text-3xl opacity-20">
                  Resume submission
                </div>
                <div className="text-2xl text-white tracking-wider font-black z-10">
                  简历投递
                </div>
              </div>

              {/* 表单 */}
              <form className="max-w-md mx-auto p-4 w-full font-PingFangSC">
                {/* 邮箱 */}
                <div className="flex text-white items-center w-4/5 h-10 mx-auto my-4 border-white border-1 rounded-xl rounded-t-xl">
                  <div className="flex items-center h-4/5 ml-1.5 border-r-3 border-border-primary opacity-30">
                    <img
                      src="/public/images/JoinUs/Mail.webp"
                      alt="邮箱图标"
                      className="w-6 h-6 mr-2 opacity-80"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="邮箱"
                    className="w-full py-2 px-3 placeholder:font-normal placeholder:tracking-widest placeholder:opacity-50 focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                </div>
                {/* 电话 */}
                <div className="flex text-white items-center w-4/5 h-10 mx-auto my-4  border-white border-1 rounded-xl [image-rendering:crisp-edges]">
                  <div className="flex items-center h-4/5 ml-1.5 border-r-3 border-border-primary opacity-30">
                    <img
                      src="/public/images/JoinUs/Phone.webp"
                      alt="电话图标"
                      className="w-6 h-6 mr-2 opacity-80"
                    />
                  </div>
                  <input
                    type="tel"
                    name="tel"
                    placeholder="电话"
                    className="w-full py-2 px-3 placeholder:font-normal placeholder:tracking-widest placeholder:opacity-50 border-none focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                </div>

                {/* 上传 制作 */}
                <div className="flex items-center justify-between text-font-quaternary w-3/5 mx-auto font-medium tracking-wider">
                  {/* 上传 */}
                  <div>
                    <input type="file" id="resume" className="hidden" />{' '}
                    <label htmlFor="resume" className="">
                      <img
                        src="/public/images/JoinUs/File_Upload.webp"
                        alt=""
                        className="inline-block"
                      />
                      上传简历
                    </label>
                  </div>
                  {/* 制作 */}
                  <div>
                    <a href="#" className="">
                      <img
                        src="/public/images/JoinUs/File_Upload.webp"
                        alt=""
                        className="inline-block"
                      />
                      上传简历
                    </a>
                  </div>{' '}
                </div>
                {/* 提交 */}
                <div className="flex items-center justify-between w-4/5 mx-auto">
                  <input
                    type="submit"
                    value="提交"
                    className="w-full h-10 bg-font-primary mt-12 text-white font-bold py-2 px-4 rounded-b-xl rounded-t-xl text-base"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
