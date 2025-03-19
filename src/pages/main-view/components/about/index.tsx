import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 自动播放时间轴
    const timeline = gsap.timeline({ repeat: -1, paused: false });
    timeline.to('.marquee-container', {
      x: '-50%',
      duration: 20,
      ease: 'none',
    });

    let resumeTimeout: number | undefined;

    const st = ScrollTrigger.create({
      trigger: '.marquee-section',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
      onUpdate: (self) => {
        if (self.isActive) {
          timeline.pause();
          // 将时间轴进度同步到 ScrollTrigger 的进度
          timeline.progress(self.progress);
          clearTimeout(resumeTimeout);
          resumeTimeout = setTimeout(() => {
            timeline.play();
          }, 200);
        }
      },
    });

    return () => {
      clearTimeout(resumeTimeout);
      st.kill();
    };
  }, []);

  return (
    <div className="m-8 px-8 relative md:block">
      <div className="w-full flex items-center md:px-18">
        <div className="shrink-0">
          <h1 className="text-xl md:text-6xl text-font-primary font-bold">技术培养</h1>
        </div>
        <div className="flex-grow mx-6">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="shrink-0">
          <h1 className="text-xl md:text-6xl text-font-primary font-bold">竞赛</h1>
        </div>
      </div>


      {/* Technology / Project / Competition */}
      <div className="flex mt-3 md:mt-14 w-full items-center md:px-18">
        <div className="flex-grow border-b border-gray-300">
          <div className="hidden md:block text-font-primary uppercase tracking-wide">
            TECHNOLOGY / PROJECT / COMPETITION
          </div>
        </div>
        <div className="shrink-0 ml-6">
          <h1 className="text-xl md:text-6xl text-font-primary font-bold">项目开发</h1>
        </div>
      </div>

      <div className="hidden w-full mt-16 text-center md:flex justify-center">
        <div
          className="text-3xl md:text-4xl font-semibold mb-8 tracking-widest text-transparent [-webkit-text-stroke:1px_#0030ae]"
        >
          关于我们
        </div>
        <div
          className="text-3xl md:text-4xl font-semibold mb-8 text-font-primary mx-16"
        >
          X
        </div>
        <div
          className="text-3xl md:text-4xl font-semibold mb-8 tracking-widest text-transparent [-webkit-text-stroke:1px_#0030ae]"
        >
          发展目标
        </div>

      </div>

      {/* Team Info */}
      <div className="mt-8 text-center z-20">
        <h2 className="max-w-2xs md:max-w-full text-xl text-font-primary font-bold mb-6">
          码绘 CodePaint 技术培养团队 (原无界软创技术培养团队)
        </h2>

        <div className="text-sm max-w-md mx-auto text-font-scendary space-y-4">
          <p className="text-sm/6">成立于 2023 年 3 月10 日，致力于提升锦城计软学院学生的大前端,技术和 UI 设计的能力提升，最后辅射到学院竞赛，对接项目，提升高质量就业数量等；</p>
          <div className="mt-6" />
          <p className="text-sm/6">码绘CodePaint工作室以成为一个"技术氛围浓厚，可持续迭代、满足中大型项目开发需求"的技术团队为发展目标，"加入码绘，码上就绘"为发展口号，以技术培养、竞赛发展、项目开发为基准节奏，持续输出全能人才，保证成员优质就业。</p>
        </div>
      </div>

      {/*CodePaint滚动*/}
      <div
        className="marquee-section absolute h-32 z-0 top-120 md:bottom-0 right-0 text-[#FF6A00]/10 text-6xl md:text-9xl tracking-widest pointer-events-none select-none overflow-hidden w-full"
      >
        <div className="flex marquee-container whitespace-nowrap">
          <div className="flex">
            <span className="me-8">CodePaint</span>
            <span className="me-8">CodePaint</span>
            <span className="me-8">CodePaint</span>
            <span className="me-8">CodePaint</span>
          </div>
          <div className="flex">
            <span className="me-8">CodePaint</span>
            <span className="me-8">CodePaint</span>
            <span className="me-8">CodePaint</span>
            <span className="me-8">CodePaint</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
