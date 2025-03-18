import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CoverInside from './components/cover-inside/index';
import CoverOutside from './components/cover-outside/index';

gsap.registerPlugin(useGSAP);

const MainView = () => {
  return (
    <>

      <CoverOutside />
      <CoverInside />
    </>
  );
};

export default MainView;
