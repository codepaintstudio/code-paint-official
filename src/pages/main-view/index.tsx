import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Header from '@/components/header';
import About from '@/pages/main-view/components/about';
import TechnologyPage from '@/pages/main-view/components/techology';
import ScoreDisplay from '@/pages/main-view/components/score-display';
import FrameworkPage from '@/pages/main-view/components/studio-framework';
import LearningPathTimeline from '@/pages/main-view/components/train-route';
import LearningPathMobile from '@/pages/main-view/components/train-route-mobile';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MainView = () => {
  useGSAP(() => {
    // 设置初始背景色为白色
    gsap.set('body', { backgroundColor: '#ffffff' });

    // 创建 ScrollTrigger 来控制背景色变化
    ScrollTrigger.create({
      trigger: '.score-section',
      start: 'top center',    // 当 .score-section 的顶部进入视口中心时触发
      end: 'bottom center',   // 当 .score-section 的底部离开视口中心时结束
      onEnter: () => {
        gsap.to('body', {
          backgroundColor: '#000000',
          duration: 0.5,       // 颜色过渡动画持续时间
          ease: 'power2.inOut', // 平滑的缓动效果
        });
      },
      onLeave: () => {
        gsap.to('body', {
          backgroundColor: '#ffffff',
          duration: 0.5,
          ease: 'power2.inOut',
        });
      },
      onEnterBack: () => {
        gsap.to('body', {
          backgroundColor: '#000000',
          duration: 0.5,
          ease: 'power2.inOut',
        });
      },
      onLeaveBack: () => {
        gsap.to('body', {
          backgroundColor: '#ffffff',
          duration: 0.5,
          ease: 'power2.inOut',
        });
      },
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
      <LearningPathTimeline />
      <LearningPathMobile />
    </>
  );
};

export default MainView;
