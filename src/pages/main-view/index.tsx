import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Header from '@/components/header';
import About from '@/pages/main-view/components/about';
import TechnologyPage from '@/pages/main-view/components/techology';
import ScoreDisplay from '@/pages/main-view/components/score-display';
import FrameworkPage from '@/pages/main-view/components/studio-framework';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MainView = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      gsap.to('body', {
        backgroundColor: '#000000',
        ease: 'power1.out',
        immediateRender: true,
        scrollTrigger: {
          trigger: '.score-section',
          start: '20% bottom',
          end: 'top top',
          toggleActions: 'play none none reverse',
          scrub: 0.5,
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <>
      <Header />
      <About />
      <TechnologyPage />
      <div className="score-section">
        <ScoreDisplay />
        <FrameworkPage />
      </div>
    </>
  );
};

export default MainView;
