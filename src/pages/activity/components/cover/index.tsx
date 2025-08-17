import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(useGSAP, TextPlugin);

const Cover = () => {
  const triangleRef1 = useRef(null);
  const triangleRef2 = useRef(null);
  const triangleRef3 = useRef(null);
  const paragraphRef1 = useRef(null);
  const paragraphRef2 = useRef(null);
  const paragraphRef3 = useRef(null);


  useGSAP(() => {
    // 三角形动画
    gsap.fromTo(
      triangleRef1.current,
      {
        opacity: 0,
        x: -30,
        rotation: -30,
      },
      {
        opacity: 1,
        x: 0,
        rotation: -10,
        duration: 1.5,
        ease: 'power2.out',
      },
    );

    gsap.fromTo(
      triangleRef2.current,
      {
        opacity: 0,
        y: -30,
        rotation: 30,
        scale: 0.8,
      },
      {
        opacity: 0.7,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1.8,
        delay: 0.3,
        ease: 'elastic.out(1, 0.5)',
      },
    );

    gsap.fromTo(
      triangleRef3.current,
      {
        opacity: 0,
        x: 0,
        y: 0,
        rotation: 90,
      },
      {
        opacity: 0.5,
        x: 10,
        y: 40,
        duration: 2,
        delay: 0.5,
        ease: 'power3.out',
      },
    );

    gsap.from(
      paragraphRef1.current,
      {
        text: '',
        duration: 1.5,
      },
    );
    gsap.from(
      paragraphRef2.current,
      {
        text: '',
        duration: 1.5,
        delay: 1.5,
      },
    );
    gsap.from(
      paragraphRef3.current,
      {
        text: '',
        duration: 2,
        delay: 3,
      },
    );

    // Set up a continuous subtle floating animation for all triangles
    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
    });

    timeline.to([triangleRef1.current, triangleRef2.current, triangleRef3.current], {
      y: '+=10',
      rotation: '+=3',
      duration: 3,
      ease: 'sine.inOut',
      stagger: 0.2,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <>
      <div className="relative w-full md:h-[65vh] h-72 bg-blue-800 overflow-hidden">
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {/* 图片占位 */}
        </div>

        {/* 三角形背景 */}
        <div
          ref={triangleRef1}
          className="absolute top-0 right-30 w-72 md:h-[60vh] h-96 opacity-40"
          style={{
            clipPath: 'polygon(50% 0, 90% 100%, 10% 100%)',
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%)',
          }}
        />

        <div
          ref={triangleRef2}
          className="absolute top-10 right-1/3 w-72 md:h-[60vh] h-96 opacity-40"
          style={{
            clipPath: 'polygon(50% 0, 90% 100%, 10% 100%)',
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%)',
          }}
        />

        <div
          ref={triangleRef3}
          className="absolute top-0 left-0 w-80 h-80 opacity-40"
          style={{
            clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
            background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%)',
          }}
        />
        <div className="relative w-4/5 h-20 mx-auto -mt-12">
          <div
            className="absolute inset-0 transform translate-x-1 translate-y-1 bg-[url(/images/activity-title-double-line.webp)] bg-contain bg-no-repeat bg-center"
          />
          <div
            className="absolute inset-0 bg-[url(/images/activity-title-double-line.webp)] bg-contain bg-no-repeat bg-center"
          />
        </div>
      </div>
      {/*文字介绍*/}
      <div className="w-full flex justify-center">
        <div
          className="w-full md:w-1/4 h-48 mt-8 flex justify-center flex-wrap content-evenly text-font-primary"
        >
          <div className="w-full flex justify-center" ref={paragraphRef1}>欢迎来到码绘工作室作品活动中心！</div>
          <div className="w-full flex justify-center" ref={paragraphRef2}>这里是代码与艺术交织的奇妙空间，</div>
          <div className="w-full flex justify-center" ref={paragraphRef3}>是灵感与创意迸发的活力舞台。</div>
        </div>
      </div>
    </>
  );
};

export default Cover;
