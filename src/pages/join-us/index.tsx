import { useState } from 'react';
import Bgmain from './components/bg-main/index';
import LoginModal from './components/login-modal/index';
import { Keyboard, Palette, CalendarDays } from 'lucide-react';
const Join = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleLoginModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <div className="relative h-screen">
        <Bgmain />
        {/* 岗位展示 */}
        <div className="flex justify-around items-center flex-auto text-white absolute bottom-0 top-1/9 left-1/10 right-1/10 font-PingFangSC">
          {/* <!-- 第 1 组 --> */}
          <div className="relative flex basis-1/6 bg-font-primary h-2/3 text-font-tertiary font-semibold translate-y-5 rounded-tr-4xl">
            {/* 第一层 */}
            <div className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 h-full bg-black z-10 rounded-tr-4xl">
              {/*圆孔 */}
              <div className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white">
                {''}
              </div>
              <div className="absolute top-9 left-1 text-xs text-white tracking-wider">
                FRONT END
              </div>
              <div className="text-center text-xs/7">
                <p className="text-4xl mb-6 text-white">前端</p>
                <p className="opacity-50">
                  展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
                </p>
              </div>
              <div>
                <Keyboard color="#47484b" size={80} className="opacity-80" />
              </div>
              <button
                onClick={handleLoginModal}
                className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80"
              >
                投递
              </button>
            </div>
            {/* 第二层 */}
            <div className="absolute flex items-center top-0 left-0 px-4 w-full h-full bg-font-primary rounded-tr-4xl text-xs/7 origin-top-left rotate-12">
              {/*圆孔 */}
              <div className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white">
                {''}
              </div>
              <p className="text-center opacity-50">
                展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
              </p>
            </div>
          </div>

          {/* <!-- 第 2 组 --> */}
          <div className="relative flex basis-1/6  bg-font-primary h-2/3 text-font-tertiary font-semibold translate-y-24 rounded-tr-4xl">
            {/* 第一层 */}
            <div className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 h-full bg-black z-10 rounded-tr-4xl">
              {/*圆孔 */}
              <div className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white">
                {''}
              </div>
              <div className="absolute top-9 left-1 text-xs text-white tracking-wider">
                UI DESIGN
              </div>
              <div className="text-center text-xs/7">
                <p className="text-4xl mb-6 text-white">UI</p>
                <p className="opacity-50">
                  展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
                </p>
              </div>
              <div>
                <Palette color="#47484b" size={80} className="opacity-80" />
              </div>
              <button
                onClick={handleLoginModal}
                className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80">
                投递
              </button>
            </div>
            {/* 第二层 */}
            <div className="absolute flex items-center top-0 left-0 w-full h-full px-4 bg-font-primary rounded-tr-4xl text-xs/7 origin-top-left rotate-6">
              {/*圆孔 */}
              <div className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white">
                {''}
              </div>
              <p className="text-center opacity-50">
                展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
              </p>
            </div>
          </div>

          {/* <!-- 第 3 组 --> */}
          <div className="relative flex basis-1/6 bg-font-primary h-2/3 text-font-tertiary font-semibold translate-y-12 rounded-tr-4xl">
            {/* 第一层 */}
            <div className="absolute flex flex-col justify-center items-center top-0 left-0 px-4 h-full bg-black z-10 rounded-tr-4xl">
              {/*圆孔 */}
              <div className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white">
                {''}
              </div>
              <div className="absolute top-9 left-1 text-xs text-white tracking-wider">
                OFFICE
              </div>
              <div className="text-center text-xs/7">
                <p className="text-4xl mb-6 text-white">办公室</p>
                <p className="opacity-50">
                  展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
                </p>
              </div>
              <div className="scale-75">
                <CalendarDays
                  color="#47484b"
                  size={100}
                  className="opacity-80"
                />
              </div>
              <button
                onClick={handleLoginModal}
                className="absolute bottom-1/9 border-font-quaternary text-font-quaternary border-2 w-1/2 h-1/13 rounded-4xl cursor-pointer hover:opacity-80"
              >
                投递
              </button>
            </div>
            {/* 第二层 */}
            <div className="absolute flex items-center top-0 left-0 w-full h-full px-4 bg-font-primary rounded-tr-4xl text-xs/7 origin-top-left -rotate-6">
              {/*圆孔 */}
              <div className="w-6 h-6 absolute top-1 left-1 rounded-full bg-white">
                {''}
              </div>
              <p className="text-center opacity-50">
                展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗位内容简介展示可投递岗位和岗
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModalVisible ? <LoginModal /> : null}
    </>
  );
};
export default Join;
