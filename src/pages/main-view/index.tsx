import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Header from '@/pages/main-view/components/header';
import About from '@/pages/main-view/components/about';
import TechnologyPage from '@/pages/main-view/components/techology';

gsap.registerPlugin(useGSAP);

const MainView = () => {
  return (
    <>
      <Header />
      <About />
      <TechnologyPage />
    </>
  );
};

export default MainView;
