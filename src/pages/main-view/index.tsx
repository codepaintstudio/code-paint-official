import {  forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Header from '@/components/header/index';
import About from '@/pages/main-view/components/about';
import TechnologyPage from '@/pages/main-view/components/techology';
import ScoreDisplay from '@/pages/main-view/components/score-display';
import FrameworkPage from '@/pages/main-view/components/studio-framework';

gsap.registerPlugin(useGSAP);

const MainView = forwardRef<HTMLDivElement, unknown>((_props, ref) => {
  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        document.body.style.overflow = 'auto';
      }}
    >
      <Header />
      <About />
      <TechnologyPage />
      <ScoreDisplay />
      <FrameworkPage />
    </div>
  );
});

export default MainView;
