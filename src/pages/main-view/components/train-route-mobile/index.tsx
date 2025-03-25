import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// TypeScript interfaces
interface PathNode {
  id: string;
  title: string;
  description: string;
}

const LearningPathTimelineMobile: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  // Clear the refs array
  sectionsRef.current = [];

  // Data for each node of the learning path (same as desktop version)
  const pathNodes: PathNode[] = [
    {
      id: 'technical-training',
      title: '技术培养',
      description: '在这个阶段，学生将学习前端开发的基础知识，包括HTML、CSS、JavaScript等核心技术。通过实践练习和导师指导，学生能够掌握响应式设计、前端框架（如React、Vue）和现代CSS工具（如Tailwind）。我们注重代码质量和最佳实践，培养学生的编程思维和问题解决能力。',
    },
    {
      id: 'competitions',
      title: '竞赛',
      description: '工作室鼓励学生参加各种校内外前端开发竞赛，如大学生创新创业大赛、黑客马拉松等。通过团队协作完成竞赛项目，学生能够在压力下工作，提高自己的技术水平，获得实战经验，并培养团队协作能力。竞赛成果也将成为学生简历上的亮点。',
    },
    {
      id: 'project-development',
      title: '项目开发',
      description: '在掌握了必要的技能后，学生将参与到实际项目开发中。这些项目包括校内网站、应用程序或为外部客户开发的产品。在项目中，学生将体验完整的开发流程，从需求分析、设计到开发、测试和部署。通过项目实践，学生将深化他们的技术知识，并学习项目管理和沟通技巧。',
    },
    {
      id: 'employment',
      title: '就业',
      description: '学习路径的最终目标是帮助学生成功就业。工作室将提供简历辅导、面试准备和行业连接，帮助学生找到理想的前端开发职位。多数毕业生进入科技公司、互联网企业或创业团队，成为优秀的前端工程师。我们的校友网络也为学生提供了宝贵的职业发展资源和机会。',
    },
  ];

  // Add sections to the sectionsRef array
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = sectionsRef.current;

    // 为每个节点设置动画
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: false,
          },
        },
      );
    });

    // 清理函数
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-white w-full min-h-screen mb-30 block md:hidden" ref={containerRef}>
      {/* Header */}
      <div className="block md:hidden py-5 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-wider font-ZQK text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] to-[#001448] md:bg-none md:text-blue-primary"
        >Route
        </h1>
        <p className="mt-1 text-lg">培养路线</p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center px-4">
        {pathNodes.map((node, index) => (
          <div
            key={node.id}
            ref={addToRefs}
            className="relative w-full max-w-md mb-12 last:mb-0"
          >
            {/* Timeline Node */}
            <div className="relative">
              {/* Content Box */}
              <div className="border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-primary mb-4">{node.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {node.description}
                </p>
              </div>

              {/* Arrow (except for the last node) */}
              {index < pathNodes.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0L12 28M12 28L4 20M12 28L20 20"
                      stroke="#000000"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPathTimelineMobile;
