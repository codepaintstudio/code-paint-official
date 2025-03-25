import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tabs from '@/pages/main-view/components/tabs';

// 注册插件
gsap.registerPlugin(useGSAP, ScrollTrigger);

const FrameworkPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 设置初始状态 - 所有介绍内容初始不可见
    gsap.set('.intro-item', {
      opacity: 0,
      y: 30,
    });

    // 创建依次显示的动画序列
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center', // 当容器顶部到达视窗中心时触发
        toggleActions: 'play none none reverse', // 播放一次，反向滚动时反转
      },
    });

    // 按照前端->UI->办公室的顺序依次显示
    tl.to('.frontend-item', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to('.ui-item', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3') // 略微重叠动画，使过渡更流畅
      .to('.office-item', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');

  }, { scope: containerRef });

  return (
    <>
      {/*桌面端页面*/}
      <div ref={containerRef} className="hidden min-h-screen pt-24 text-white md:flex flex-row justify-center">
        {/*左侧*/}
        <div className="w-5/12 z-10 px-6 py-12 flex flex-col">
          {/* Header */}
          <div className="w-4/5 pb-6 mb-4">
            <div className="w-4/5">
              <h1 className="text-5xl font-bold text-blue-600 text-right">FRAMEWORK</h1>
              <h2 className="text-xl text-blue-500 mt-2 text-right">组织架构</h2>
            </div>
            <div className="w-4/5 mb-4 mt-8">
              <p className="text-gray-300">
                码绘工作室构建了一个高效协同的组织架构包括专业的老师团队与积极的学生团队，
                两者在前端技术、UI设计及办公室管理三大领域内各司其职，充分发挥各
                自专长，共同推动工作室的稳健发展。
              </p>
            </div>
          </div>

          <div className="w-full flex flex-grow justify-end items-center flex-nowrap gap-8 pb-50 relative">
            {/* 教师团队 */}
            {/* Glow background at bottom */}
            <div
              className="opacity-40 absolute bottom-50 left-[-100px] w-96 h-96 rounded-b-full z-1 blur-3xl"
              style={{
                background:
                  "linear-gradient(330.79deg, #004DFF 5.97%, rgba(255, 106, 0, 0.2) 106.59%)"
              }}
            />
            <div
              className="z-5 relative w-[15vw] h-[15vw] aspect-square rounded-full bg-[linear-gradient(25.42deg,#000000_-9.41%,rgba(12,16,26,0.6)_15.22%,rgba(30,40,65,0.5)_35.9%,#A66D45_89.97%,rgba(206,178,158,0.5)_101.22%)] flex flex-col items-center justify-center text-center"
            >
              <div className="relative z-10">
                <div className="text-lg font-bold">教师团队</div>
                <div className="text-xs">TEACHER TEAM</div>
              </div>
            </div>

            <div
              className="opacity-32 bg-blue-primary absolute bottom-50 left-50 w-48 h-48 rounded-b-full z-1 blur-3xl"
            />

            {/* 学生团队 */}
            <div
              className="z-5 w-[20vw] h-[20vw] aspect-square rounded-full flex flex-col items-center justify-center text-center bg-[linear-gradient(32.57deg,#000000_15.09%,rgba(12,16,26,0.6)_27.68%,rgba(30,40,65,0.5)_42.29%,#687FBC_89.25%)]"
            >
              <div className="text-lg font-bold">学生团队</div>
              <div className="text-xs">STUDENT TEAMS</div>
            </div>
          </div>
        </div>

        {/*右侧介绍 - 调整垂直位置与学生团队球体中心对齐*/}
        <div className="w-1/2 flex justify-center items-center">
          <div className="h-full w-full grid grid-rows-2 grid-cols-3 bg-transparent">
            <div className="flex flex-col justify-evenly content-center bg-transparent border-b-2" />
            <div className="bg-transparent flex flex-col items-center justify-center border-b-2">
              {/* UI标题方框 - 添加ui-item类 */}
              <div className="bg-white rounded-md p-4 max-w-xs z-10 intro-item ui-item">
                <p className="w-36 text-lg text-gray-400 leading-tight ">
                  无界软创UI组由UI方向负责老师领队，团队制定完善的学习路线与专业规划，以提高艺术审美、提前培养相关技术人才为宗旨，望广纳优秀同学，共享优质资源。
                </p>
              </div>
              <div className="h-20 w-px bg-gray-300 m-4 z-0 intro-item ui-item" />
              <div
                className="bg-white rounded-md py-2 px-6 text-blue-700 mb-4 font-bold text-xl z-10 intro-item ui-item"
              >
                UI
              </div>
            </div>
            <div className="bg-transparent border-b-2" />

            <div className="bg-transparent flex flex-col items-center mt-2">
              {/* 前端标题方框 - 添加frontend-item类 */}
              <div
                className="bg-white rounded-md py-2 px-6 text-blue-700 font-bold text-xl mb-4 intro-item frontend-item"
              >
                前端
              </div>
              {/* 连接线 - 向下 */}
              <div className="h-20 w-px bg-gray-300 mb-4 z-0 intro-item frontend-item" />
              {/* 前端说明文本框 */}
              <div className="bg-white rounded-md p-4 max-w-xs z-10 intro-item frontend-item">
                <p className="w-36 text-base text-gray-400 leading-tight ">
                  无界软创UI组由UI方向负责老师领队，团队制定完善的学习路线与专业规划，以提高艺术审美、提前培养相关技术人才为宗旨，望广纳优秀同学，共享优质资源。
                </p>
              </div>
            </div>
            <div className="bg-transparent" />
            <div className="bg-transparent flex flex-col items-center mt-2">
              {/* 办公室标题方框 - 添加office-item类 */}
              <div
                className="bg-white rounded-md py-2 px-6 text-blue-700 font-bold text-xl mb-4 intro-item office-item"
              >
                办公室
              </div>
              {/* 连接线 - 向下 */}
              <div className="h-20 w-px bg-gray-300 mb-4 intro-item office-item" />
              {/* 办公室说明文本框 */}
              <div className="bg-white rounded-md p-4 max-w-xs intro-item office-item">
                <p className="w-36 text-base text-gray-400 leading-tight ">
                  确保工作室日常正常运行的核心部门，及时传达信息，参与活动的前期准备，中期推动，后期复盘，活动记录。全力协调好各部门之间的分工与合作。可以锻炼组织、沟通能力，培养细心、严谨的工作习惯，全方面提升综合素质。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*移动端页面*/}
      <div className="md:hidden block">
        <div className="block md:hidden py-5 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-wider font-ZQK text-transparent bg-clip-text bg-gradient-to-r from-[#0047FF] to-[#001448] md:bg-none md:text-blue-primary"
          >Framework
          </h1>
          <p className="mt-1 text-lg">组织架构</p>
        </div>
        <Tabs />
      </div>
    </>
  );
};

export default FrameworkPage;
