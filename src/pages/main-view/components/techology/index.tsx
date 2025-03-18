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
      description: '大前端开发是一个综合性的技术领域，它涵盖了前端开发、移动端开发、跨平台开发等多个方面',
      details: ['1. 技术融合: 随着技术的不断发展，大前端开发将更加注重技术融合。例如，将人工智能、大数据等技术应用于前端开发中，以提升应用的智能化和个性化水平。',
        '2. 性能优化: 随着前端应用的复杂度不断增加，性能优化将成为大前端开发的重要挑战。开发者需要不断探索新的优化技术和方法，以提升应用的响应速度和用户体验。',
        '3. 组件化开发: 组件化开发将继续成为大前端开发的重要趋势。通过构建可复用的组件库，开发者可以更加高效地管理和维护代码，同时提高应用的复用性和可维护性。',
        '4. 跨平台开发: 随着移动设备的普及和多样化，跨平台开发将成为大前端开发的重要方向。开发者需要注重不同平台的特性和差异，以构建出能够在多个平台上运行的前端应用。',
      ],
    },
    {
      id: 'backend',
      number: '02',
      title: '后端开发',
      description: '大前端开发是一个综合性的技术领域，它涵盖了前端开发、移动端开发、跨平台开发等多个方面',
      details: [
        '1. 技术融合: 随着技术的不断发展，大前端开发将更加注重技术融合。例如，将人工智能、大数据等技术应用于前端开发中，以提升应用的智能化和个性化水平。',
        '2. 性能优化: 随着前端应用的复杂度不断增加，性能优化将成为大前端开发的重要挑战。开发者需要不断探索新的优化技术和方法，以提升应用的响应速度和用户体验。',
        '3. 组件化开发: 组件化开发将继续成为大前端开发的重要趋势。通过构建可复用的组件库，开发者可以更加高效地管理和维护代码，同时提高应用的复用性和可维护性。',
        '4. 跨平台开发: 随着移动设备的普及和多样化，跨平台开发将成为大前端开发的重要方向。开发者需要注重不同平台的特性和差异，以构建出能够在多个平台上运行的前端应用。',
      ],
    },
    {
      id: 'ui',
      number: '03',
      title: 'UI设计',
      description: '大前端开发是一个综合性的技术领域，它涵盖了前端开发、移动端开发、跨平台开发等多个方面',
      details: ['1. 技术融合: 随着技术的不断发展，大前端开发将更加注重技术融合。例如，将人工智能、大数据等技术应用于前端开发中，以提升应用的智能化和个性化水平。',
        '2. 性能优化: 随着前端应用的复杂度不断增加，性能优化将成为大前端开发的重要挑战。开发者需要不断探索新的优化技术和方法，以提升应用的响应速度和用户体验。',
        '3. 组件化开发: 组件化开发将继续成为大前端开发的重要趋势。通过构建可复用的组件库，开发者可以更加高效地管理和维护代码，同时提高应用的复用性和可维护性。',
        '4. 跨平台开发: 随着移动设备的普及和多样化，跨平台开发将成为大前端开发的重要方向。开发者需要注重不同平台的特性和差异，以构建出能够在多个平台上运行的前端应用。',
      ],
    },
    {
      id: 'aigc',
      number: '04',
      title: 'AIGC',
      description: '大前端开发是一个综合性的技术领域，它涵盖了前端开发、移动端开发、跨平台开发等多个方面',
      details: ['1. 技术融合: 随着技术的不断发展，大前端开发将更加注重技术融合。例如，将人工智能、大数据等技术应用于前端开发中，以提升应用的智能化和个性化水平。',
        '2. 性能优化: 随着前端应用的复杂度不断增加，性能优化将成为大前端开发的重要挑战。开发者需要不断探索新的优化技术和方法，以提升应用的响应速度和用户体验。',
        '3. 组件化开发: 组件化开发将继续成为大前端开发的重要趋势。通过构建可复用的组件库，开发者可以更加高效地管理和维护代码，同时提高应用的复用性和可维护性。',
        '4. 跨平台开发: 随着移动设备的普及和多样化，跨平台开发将成为大前端开发的重要方向。开发者需要注重不同平台的特性和差异，以构建出能够在多个平台上运行的前端应用。',
      ],
    },
    {
      id: 'automation',
      number: '05',
      title: '自动化办公',
      description: '大前端开发是一个综合性的技术领域，它涵盖了前端开发、移动端开发、跨平台开发等多个方面',
      details: ['1. 技术融合: 随着技术的不断发展，大前端开发将更加注重技术融合。例如，将人工智能、大数据等技术应用于前端开发中，以提升应用的智能化和个性化水平。',
        '2. 性能优化: 随着前端应用的复杂度不断增加，性能优化将成为大前端开发的重要挑战。开发者需要不断探索新的优化技术和方法，以提升应用的响应速度和用户体验。',
        '3. 组件化开发: 组件化开发将继续成为大前端开发的重要趋势。通过构建可复用的组件库，开发者可以更加高效地管理和维护代码，同时提高应用的复用性和可维护性。',
        '4. 跨平台开发: 随着移动设备的普及和多样化，跨平台开发将成为大前端开发的重要方向。开发者需要注重不同平台的特性和差异，以构建出能够在多个平台上运行的前端应用。',
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
    <div className="max-w-5xl mx-auto bg-white py-15">
      <div className="py-10 text-center">
        <h1 className="text-6xl font-bold tracking-wider">TECHNOLOGY</h1>
        <p className="mt-2 text-lg">技术领域</p>
      </div>

      <div className="border-t border-gray-200">
        {technologyItems.map((item) => (
          <div key={item.id}>
            <div
              className={`flex items-center justify-between px-6 py-5 transition-colors duration-200 border-b border-gray-200
              ${expandedItem === item.id ? 'bg-[#2246C6]' : 'bg-white hover:bg-gray-100 '}`}
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
                  <h2 className={`text-2xl font-bold ${expandedItem === item.id ? 'text-[#FF6A00]' : 'text-black'} `}>{item.title}</h2>
                  <p className={`mt-1 text-sm ${expandedItem === item.id ? 'text-[#FF6A00]' : 'text-black'}`}>{item.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-10 h-10 flex items-center justify-center border rounded-md cursor-pointer relative"
              >
                <span
                  ref={(el) => setLineRefs(item.id)(el, 0)}
                  className={`w-8 h-0.5 absolute ${expandedItem === item.id ? 'bg-[#FF6A00]' : 'bg-black'}`}
                />
                <span
                  ref={(el) => setLineRefs(item.id)(el, 1)}
                  className={`w-8 h-0.5 absolute ${expandedItem === item.id ? 'bg-[#FF6A00]' : 'bg-black'}`}
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
                    <p key={'${item.id}'} className="mb-4 text-[#01247E] font-thin">
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
