import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Header from '@/components/header';
import About from '@/pages/main-view/components/about';
import TechnologyPage from '@/pages/main-view/components/techology';
import ScoreDisplay from '@/pages/main-view/components/score-display';
import FrameworkPage from '@/pages/main-view/components/studio-framework';

gsap.registerPlugin(useGSAP);

const MainView = () => {
  return (
    <>
      <Header />
      <About />
      <TechnologyPage />
      <ScoreDisplay />
      <FrameworkPage />
    </>
  );
};

export default MainView;
