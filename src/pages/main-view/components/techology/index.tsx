import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface TechnologyItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details?: string[];
}

gsap.registerPlugin(useGSAP);

const TechnologyPage = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const detailsRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const lineRefs = useRef<Map<string, [HTMLSpanElement | null, HTMLSpanElement | null]>>(new Map());

  const technologyItems: TechnologyItem[] = [
    {
      id: 'frontend',
      number: '01',
      title: '大前端开发',
      description: '基于现代Web技术栈，构建高性能、跨平台的用户界面应用，涵盖Web、移动端和桌面端开发',
      details: [
        '1. 现代框架: 精通React、Vue、Next.js等主流框架，构建高效的单页面应用和服务端渲染应用。',
        '2. 移动端开发: 使用React Native、Flutter等技术开发原生移动应用，实现一套代码多平台运行。',
        '3. 性能优化: 通过代码分割、懒加载、缓存策略等技术手段，优化应用加载速度和运行性能。',
        '4. 工程化建设: 搭建完善的开发工具链，包括构建工具、测试框架、CI/CD流程等，提升开发效率。',
      ],
    },
    {
      id: 'backend',
      number: '02',
      title: '后端开发',
      description: '构建高性能、高可用的服务端应用架构，提供稳定可靠的API服务和数据处理能力',
      details: [
        '1. 微服务架构: 基于Node.js、Golang等技术栈构建服务系统，提升系统的可扩展性和维护性。',
        '2. 数据库设计: 精通MySQL、MongoDB、Redis等数据库技术，设计高效的数据存储和查询方案。',
        '3. 云原生部署: 利用Docker、Kubernetes等容器技术，实现应用的快速部署和弹性伸缩。',
        '4. 安全防护: 实施完善的身份认证、数据加密、接口防护等安全措施，保障系统安全稳定运行。',
      ],
    },
    {
      id: 'ui',
      number: '03',
      title: 'UI设计',
      description: '以用户为中心的界面设计，创造美观易用的数字产品体验，提升用户满意度和品牌价值',
      details: [
        '1. 设计系统: 构建完整的设计语言体系，包括色彩规范、字体排版、组件库等，保证产品视觉一致性。',
        '2. 用户研究: 深入了解用户需求和行为习惯，通过用户调研、可用性测试等方法优化设计方案。',
        '3. 交互设计: 设计直观的用户界面和流畅的交互流程，提升产品的易用性和用户体验。',
        '4. 视觉传达: 运用现代设计理念和视觉元素，创造具有品牌特色和情感共鸣的界面设计。',
      ],
    },
    {
      id: 'aigc',
      number: '04',
      title: 'AIGC',
      description: '人工智能生成内容技术，利用机器学习和深度学习算法自动生成文本、图像、音频等多媒体内容',
      details: [
        '1. 内容生成: 基于GPT、Stable Diffusion等先进模型，开发智能文本生成、图像创作、音频合成等应用。',
        '2. 模型训练: 构建和优化机器学习模型，通过数据训练提升内容生成的质量和准确性。',
        '3. 应用集成: 将AIGC能力集成到现有产品中，为用户提供智能化的内容创作和编辑工具。',
        '4. 创新探索: 探索AIGC在不同领域的应用可能性，推动人工智能技术在创意产业的深度应用。',
      ],
    },
    {
      id: 'automation',
      number: '05',
      title: '自动化办公',
      description: '通过智能化工具和流程优化，提升办公效率，减少重复性工作，实现数字化办公转型',
      details: [
        '1. 流程自动化: 设计和实施自动化工作流程，减少人工操作，提升工作效率和准确性。',
        '2. 数据处理: 开发自动化数据收集、处理和分析系统，为决策提供及时准确的数据支持。',
        '3. 文档管理: 构建智能文档管理系统，实现文档的自动分类、检索和版本控制。',
        '4. 协作工具: 开发高效的团队协作平台，集成项目管理、沟通交流、文件共享等功能。',
      ],
    },
  ];

  const toggleExpand = (id: string) => {
    const lines = lineRefs.current.get(id);
    if (!lines) return;

    if (expandedItem === id) {
      // Animate to plus sign
      gsap.to(lines[1], {
        rotation: 90,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(lines[0], {
        rotation: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
      setExpandedItem(null);
    } else {
      // Animate to minus sign
      gsap.to(lines[1], {
        rotation: 180,
        duration: 0.5,
        ease: 'power2.out',
      });
      gsap.to(lines[0], {
        rotation: 360,
        duration: 0.5,
        ease: 'power2.out',
      });
      setExpandedItem(id);
    }
  };

  useGSAP(() => {
    // Set initial state for all plus signs
    lineRefs.current.forEach(([verticalLine]) => {
      gsap.set(verticalLine, {
        rotation: 90,
      });
    });
  }, []);

  const setLineRefs = (id: string) => (element: HTMLSpanElement | null, index: number) => {
    if (element) {
      const currentLines = lineRefs.current.get(id) || [null, null];
      currentLines[index] = element;
      lineRefs.current.set(id, currentLines);
    }
  };

  useGSAP(() => {
    if (expandedItem) {
      const detailContainer = detailsRefs.current.get(expandedItem);
      if (detailContainer) {
        const paragraphs = detailContainer.querySelectorAll('p');
        gsap.set(paragraphs, { yPercent: -100, opacity: 0 });
        gsap.to(paragraphs, {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        });
      }
    }
  }, [expandedItem]);

  const setDetailRef = (id: string) => (element: HTMLDivElement | null) => {
    if (element) {
      detailsRefs.current.set(id, element);
    }
  };
  return (
    <div className="max-w-5xl mx-auto py-15">
      <div className="py-10 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-wider font-ZQK text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] to-[#001448] md:bg-none md:text-black"
        >TECHNOLOGY
        </h1>
        <p className="mt-2 text-lg">技术领域</p>
      </div>

      <div className="border-t border-gray-200">
        {technologyItems.map((item) => (
          <div key={item.id}>
            <div
              className={`flex items-center justify-between px-6 py-5 transition-colors duration-200 border-b border-gray-200
              ${expandedItem === item.id ? 'bg-[#2246C6]' : 'hover:bg-gray-100 '}`}
            >
              <div className="flex items-center">
                <div
                  className={`w-20 text-center ${
                    expandedItem === item.id ? 'text-[#FF6A00]' : 'text-gray-300'
                  }`}
                >
                  <span className="text-6xl font-thin">{item.number}</span>
                </div>
                <div className="ml-6">
                  <h2 className={`text-xl md:text-2xl font-bold ${expandedItem === item.id ? 'text-[#FF6A00]' : 'text-black'} `}>{item.title}</h2>
                  <p
                    className={`mt-1 text-sm ${expandedItem === item.id ? 'text-[#FF6A00]' : 'text-gray-300'} line-clamp-2`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-6 h-6 md:w-10 md:h-10 aspect-square flex items-center justify-center border rounded-md cursor-pointer relative"
              >
                <span
                  ref={(el) => setLineRefs(item.id)(el, 0)}
                  className={`w-4 md:w-8 h-0.5 absolute ${expandedItem === item.id ? 'bg-[#FF6A00]' : 'bg-black'}`}
                />
                <span
                  ref={(el) => setLineRefs(item.id)(el, 1)}
                  className={`w-4 md:w-8 h-0.5 absolute ${expandedItem === item.id ? 'bg-[#FF6A00]' : 'bg-black'}`}
                />
              </button>
            </div>

            {expandedItem === item.id && item.details && item.details.length > 0 && (
              <div
                ref={setDetailRef(item.id)}
                className="relative px-6 py-6 bg-white border-t border-gray-200 text-sm text-gray-600 leading-relaxed"
              >
                <div className="overflow-hidden">
                  {item.details.map((detail) => (
                    <p key={detail[0]} className="mb-4 text-[#01247E] font-thin">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyPage;
