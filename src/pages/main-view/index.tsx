import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const MainView = () => {
  return (
    <>
      <div className="box font-PingFangSC text-xl text-blue-200">主要视图</div>
    </>
  );
};

export default MainView;
