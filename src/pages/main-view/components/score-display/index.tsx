import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Particles from '@/components/particles/particles-background.tsx';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScoreDisplay: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    if (!pageRef.current || !ringsRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        // markers: true,
      },
    });

    gsap.set('.ring-line', { opacity: 0 });
    gsap.set('.ring-text', { opacity: 0, y: 20 });

    const rings = ringsRef.current.querySelectorAll('li');

    gsap.set(rings, { rotation: -50 });

    // 圆环旋转
    tl.to(rings, {
      rotation: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    // 文字和线条动画
    rings.forEach((ring, index) => {
      const lines = ring.querySelectorAll('.ring-line');
      const texts = ring.querySelectorAll('.ring-text');

      // 线条显示
      lines.forEach((line, i) => {
        tl.to(line, {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.inOut',
        }, 1.5 + index * 0.2 + i * 0.1);
      });

      // 文字逐个显示
      texts.forEach((text, i) => {
        tl.to(text, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        }, 1.5 + index * 0.2 + i * 0.1 + 0.3);
      });
    });

    // 底部文字显示
    tl.to('.bottom-description p', {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power2.out',
    }, '+=0.2');

  }, { scope: pageRef });

  return (
    <div
      ref={pageRef}
      className="text-gray-800 md:min-h-screen px-6 overflow-hidden"
    >
      <div className="hidden md:block absolute z-90 h-11/12 w-11/12 mt-10">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="w-full mx-auto p-8 flex justify-center flex-wrap">
        {/* 头部标题 桌面样式 */}
        <div className="w-full hidden md:flex justify-between items-center mb-12">
          <h1 className="flex-shrink md:text-5xl font-bold text-blue-primary">成绩展示</h1>
          <div
            className="flex-grow border-b border-blue-primary mx-8"
          />
          <div className="flex-shrink text-4xl md:text-7xl font-ZQK font-extrabold text-blue-primary">SCORE</div>
        </div>

        {/* 头部标题 移动端样式 */}
        <div className="block md:hidden py-5 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-wider font-ZQK text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] to-[#001448] md:bg-none md:text-blue-primary"
          >Score
          </h1>
          <p className="mt-1 text-lg">成绩展示</p>
        </div>

        {/*圆环*/}
        <div
          className="h-[640px] hidden md:block w-full max-w-7xl aspect-square max-w-full border-x border-blue-primary relative"
        >
          <div className="absolute left-23 top-70 w-[80vw] h-40 bg-contain bg-no-repeat bg-[url(/images/score.webp)]" />
          <ul
            ref={ringsRef}
            className="relative h-[640px] w-[640px] list-none transition-all duration-100 ease-in my-0 mx-auto"
          >
            {/*内侧第一圈*/}
            <li
              className="absolute w-[160px] h-[160px] rounded-[82px] border-2 border-[#394057] top-[240px] left-[240px] z-[98]"
            >
              <span className="block absolute w-3 h-3 rounded-full bg-[#b5070a] top-[80px] left-[150px]" />
              <div
                className="absolute w-[270px] border-b border-dashed border-[#b5070a] left-[150px] top-[85px] transform origin-left -rotate-6 ring-line"
              />
              <div
                className="w-20 absolute left-[420px] top-[40px] text-xl font-semibold text-[#b5070a] flex justify-center flex-wrap ring-text"
              >
                <div>50+</div>
                <div>干货文档</div>
              </div>
            </li>
            {/*第二圈*/}
            <li
              className="absolute w-[340px] h-[340px] rounded-[172px] border-2 border-[#394057] top-[150px] left-[150px] z-[95]"
            >
              <span className="block absolute w-3 h-3 rounded-full bg-white top-[257px] left-[303px]" />
              <div
                className="absolute w-[270px] border-b border-dashed border-white left-[303px] top-[260px] transform origin-left rotate-30 z-30 ring-line"
              />
              <div
                className="w-30 absolute left-[510px] top-[380px] text-xl font-semibold text-white flex justify-center flex-wrap ring-text"
              >
                <div>8+</div>
                <div>大厂OFFER</div>
              </div>
            </li>
            {/*第三圈*/}
            <li
              className="absolute w-[460px] h-[460px] rounded-[232px] border-2 border-[#394057] top-[90px] left-[90px] z-[93]"
            >
              <span className="block absolute w-3 h-3 rounded-full bg-[#FF6A00] top-[400px] left-[80px]" />
              <div
                className="absolute w-[160px] border-b border-dashed border-[#FF6A00] left-[80px] top-[405px] transform origin-left rotate-170 z-30 ring-line"
              />
              <div
                className="w-20 absolute left-[-170px] top-[420px] text-xl font-semibold text-[#FF6A00] flex justify-center flex-wrap ring-text"
              >
                <div>30+</div>
                <div>技术分享</div>
              </div>
              <span className="block absolute w-3 h-3 rounded-full bg-[#006AE8] top-[42px] left-[80px]" />
              <div
                className="absolute w-[160px] border-b border-dashed border-[#006AE8] left-[82px] top-[48px] transform origin-left rotate-200 z-30 ring-line"
              />
              <div
                className="w-20 absolute left-[-170px] -top-[40px] text-xl font-semibold text-[#006AE8] flex justify-center flex-wrap ring-text"
              >
                <div>45+</div>
                <div>学科竞赛</div>
                <div>获奖</div>
              </div>
            </li>
            {/*第四圈*/}
            <li
              className="absolute w-[580px] h-[580px] rounded-[292px] border-2 border-[#394057] top-[30px] left-[30px] z-[91]"
            >
              <span className="block absolute w-3 h-3 rounded-full bg-white top-[79px] left-[488px]" />
              <div
                className="absolute w-[80px] border-b border-dashed border-white left-[498px] top-[83px] transform origin-left -rotate-15 ring-line"
              />
              <div
                className="w-20 absolute left-[580px] top-[35px] text-xl font-semibold text-white flex justify-center flex-wrap ring-text"
              >
                <div>10+</div>
                <div>商业项目</div>
              </div>
            </li>
          </ul>
        </div>

        {/* 底部描述 */}
        <div className="w-full mt-8 max-w-3xl mx-auto text-center text-sm text-[#191A1E] md:text-white space-y-2 bottom-description">
          <p className="opacity-100 md:opacity-100">学科竞赛上累计获得省级国家级奖项 5 次，省以下40
            余次；
          </p>
          <p className="opacity-100 md:opacity-100">商业项目交付上累计交付 10 余个；</p>
          <p className="opacity-100 md:opacity-100">有 8 位同学成功拿到大厂 OFFER；</p>
          <p
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            工作室除了技术培养外还有学科竞赛、和商业项目等待大家参与！
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay;
