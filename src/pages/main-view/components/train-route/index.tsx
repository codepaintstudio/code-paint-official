// App.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 定义类型
interface PathNode {
  id: string;
  title: string;
  description: string;
}

gsap.registerPlugin(ScrollTrigger);

const pathNodes: PathNode[] = [
  {
    id: 'technical-training',
    title: '技术培养',
    description: '在这个阶段，学生将学习前端开发的基础知识，包括HTML、CSS、JavaScript等核心技术。通过实践练习和导师指导，学生能够掌握响应式设计、前端框架（如React、Vue）和现代CSS工具（如Tailwind）。我们注重代码质量和最佳实践，培养学生的编程思维和问题解决能力。'
  },
  {
    id: 'competitions',
    title: '竞赛',
    description: '工作室鼓励学生参加各种校内外前端开发竞赛，如大学生创新创业大赛、黑客马拉松等。通过团队协作完成竞赛项目，学生能够在压力下工作，提高自己的技术水平，获得实战经验，并培养团队协作能力。竞赛成果也将成为学生简历上的亮点。'
  },
  {
    id: 'project-development',
    title: '项目开发',
    description: '在掌握了必要的技能后，学生将参与到实际项目开发中。这些项目包括校内网站、应用程序或为外部客户开发的产品。在项目中，学生将体验完整的开发流程，从需求分析、设计到开发、测试和部署。通过项目实践，学生将深化他们的技术知识，并学习项目管理和沟通技巧。'
  },
  {
    id: 'employment',
    title: '就业',
    description: '学习路径的最终目标是帮助学生成功就业。工作室将提供简历辅导、面试准备和行业连接，帮助学生找到理想的前端开发职位。多数毕业生进入科技公司、互联网企业或创业团队，成为优秀的前端工程师。我们的校友网络也为学生提供了宝贵的职业发展资源和机会。'
  },
];

const App: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<Element>('.timeline-section');
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = sections.length * window.innerWidth;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
      },
    });

    sections.forEach((section: Element) => {
      gsap.from(section.querySelector('.content'), {
        opacity: 0,
        x: 100,
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: 'left 80%',
          end: 'left 20%',
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const header = document.querySelector('header');
    const container = pageRef.current;
    if (!header || !container) return;

    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      // markers: true,
      onEnter: () => gsap.to(header, { autoAlpha: 1, duration: 0.3 }),
      onLeave: () => gsap.to(header, { autoAlpha: 0, duration: 0.3 }),
      onEnterBack: () => gsap.to(header, { autoAlpha: 1, duration: 0.3 }),
      onLeaveBack: () => gsap.to(header, { autoAlpha: 0, duration: 0.3 }),
    });
  }, []);

  return (
    <div className="min-h-screen pb-5" ref={pageRef}>
      {/* 页面标题 */}
      <header className="sticky top-2 py-8 text-center">
        <h1 className="mt-32 text-4xl font-bold text-blue-primary">
          <div>培养路线</div>
          <div className="font-ZQK">Route</div>
        </h1>
      </header>

      {/* 时间线容器 */}
      <div ref={containerRef} className="timeline-container h-screen overflow-hidden">
        <div ref={timelineRef} className="timeline flex h-full w-[400vw]">
          {pathNodes.map((node: PathNode, index: number) => (
            <section
              key={node.id}
              className="timeline-section w-screen h-screen flex items-center justify-center relative"
            >
              {/* 时间线 */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2">
                <div
                  className="h-full bg-blue-primary transition-all duration-500"
                  style={{ width: `${(index + 1) * 25}%` }}
                />
              </div>

              {/* 节点内容 */}
              <div className="content relative z-10 max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                <div className="w-4 h-4 bg-blue-primary rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2" />
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{node.title}</h2>
                <p className="text-gray-600">{node.description}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
