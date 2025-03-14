import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Homeone from './components/Home_one';
import Hometwo from '@/pages/main-view/components/Home_two';

gsap.registerPlugin(useGSAP);

const MainView = () => {
  return (
    <>
      <Hometwo />
      <Homeone />
    </>
  );
};

export default MainView;
