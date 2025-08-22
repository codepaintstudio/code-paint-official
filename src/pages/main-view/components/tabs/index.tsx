import { useState } from "react";
import cp from "@/assets/mainview/cp.webp";
const Index = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const info = [
    {
      index: 0,
      title: "前端",
      img: cp,
      description: "基于现代Web技术栈，构建高性能、跨平台的用户界面应用，涵盖Web、移动端和桌面端开发",
    },
    {
      index: 1,
      title: "UI",
      img: cp,
      description:
        "以用户为中心的界面设计，创造美观易用的数字产品体验，提升用户满意度和品牌价值",
    },
    {
      index: 2,
      title: "工作室",
      img: cp,
      description: "通过智能化工具和流程优化，提升办公效率，减少重复性工作，实现数字化办公转型",
    },
  ];
  return (
    <div className="px-6 pb-8">
      {/*tabPanel*/}
      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-3 border-2 border-blue-600 rounded-lg overflow-hidden shadow-lg bg-white">
          <button
            onClick={() => setTabIndex(0)}
            className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${
              tabIndex === 0
                ? "bg-gradient-to-r from-[#0047FF] to-[#001448] text-white shadow-inner"
                : "bg-white text-blue-600 hover:bg-blue-50"
            }`}
          >
            前端
          </button>
          <button
            onClick={() => setTabIndex(1)}
            className={`px-4 py-3 text-sm font-medium border-x border-blue-600 transition-all duration-300 ${
              tabIndex === 1
                ? "bg-gradient-to-r from-[#0047FF] to-[#001448] text-white shadow-inner"
                : "bg-white text-blue-600 hover:bg-blue-50"
            }`}
          >
            UI
          </button>
          <button
            onClick={() => setTabIndex(2)}
            className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${
              tabIndex === 2
                ? "bg-gradient-to-r from-[#0047FF] to-[#001448] text-white shadow-inner"
                : "bg-white text-blue-600 hover:bg-blue-50"
            }`}
          >
            办公室
          </button>
        </div>
      </div>
      
      {/*tabContent*/}
      <div 
        className="mx-4 p-6 bg-gradient-to-br from-blue-50/30 to-indigo-50/50 rounded-xl shadow-md border border-blue-200/40 backdrop-blur-sm"
        key={info[tabIndex].index}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            {info[tabIndex].title}
          </h3>
          <p className="text-blue-700/80 leading-relaxed text-sm">
            {info[tabIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
