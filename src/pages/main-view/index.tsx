import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CoverInside from './components/cover-inside/index';
import CoverOutside from './components/cover-outside/index';
import Header from '@/components/header';
import About from '@/pages/main-view/components/about';
import TechnologyPage from '@/pages/main-view/components/techology';
import ScoreDisplay from '@/pages/main-view/components/score-display';
import FrameworkPage from '@/pages/main-view/components/studio-framework';

gsap.registerPlugin(useGSAP);

const MainView = () => {
  return (
    <>

      <CoverOutside />
      <CoverInside />
      <Header />
      <About />
      <TechnologyPage />
      <ScoreDisplay />
      <FrameworkPage />
    </>
  );
};

export default MainView;
