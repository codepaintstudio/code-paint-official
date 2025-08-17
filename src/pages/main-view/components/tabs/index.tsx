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
    <div className="px-8">
      {/*tabPanel*/}
      <div className="w-52 grid grid-cols-3 border border-blue-primary rounded-md overflow-hidden">
        <div
          onClick={() => setTabIndex(0)}
          className={`flex justify-center ${
            tabIndex === 0
              ? "bg-blue-primary text-white"
              : "bg-white" + " text-blue-primary"
          }`}
        >
          前端
        </div>
        <div
          onClick={() => setTabIndex(1)}
          className={`flex justify-center border-x border-blue-primary ${
            tabIndex === 1
              ? "bg-blue-primary" + " text-white"
              : "bg-white" + " text-blue-primary"
          }`}
        >
          UI
        </div>
        <div
          onClick={() => setTabIndex(2)}
          className={`flex justify-center rounded-r-md ${
            tabIndex === 2
              ? "bg-blue-primary text-white"
              : "bg-white" + " text-blue-primary"
          }`}
        >
          办公室
        </div>
      </div>
      {/*tabContent*/}
      <div className="flex justify-center flex-wrap" key={info[tabIndex].index}>
        <div className="w-full">{info[tabIndex].description}</div>
      </div>
    </div>
  );
};

export default Index;
