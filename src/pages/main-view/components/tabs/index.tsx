import { useState } from 'react';

const Index = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const info = [
    {
      index: 0,
      title: '前端',
      img: '/images/88426823_p0.png',
      description: '前端',
    },
    {
      index: 1,
      title: 'UI',
      img: '/images/88426823_p0.png',
      description: '无界软创UI组由UI方向负责老师领队，团队制定完善的学习路线与专业规划，以提高艺术审美、提前培养相关技术人才为宗旨。望广纳优秀同学，共享优质资源。',
    },
    {
      index: 2,
      title: '工作室',
      img: '/images/88426823_p0.png',
      description: '工作室',
    },

  ];
  return (
    <div className="px-8">
      {/*tabPanel*/}
      <div className="w-52 grid grid-cols-3 border border-blue-primary rounded-md overflow-hidden">
        <div
          onClick={() => setTabIndex(0)}
          className={`flex justify-center ${tabIndex === 0 ? 'bg-blue-primary text-white' : 'bg-white' +
            ' text-blue-primary'}`}
        >
          前端
        </div>
        <div
          onClick={() => setTabIndex(1)}
          className={`flex justify-center border-x border-blue-primary ${tabIndex === 1 ? 'bg-blue-primary' +
            ' text-white' : 'bg-white' +
            ' text-blue-primary'}`}
        >
          UI
        </div>
        <div
          onClick={() => setTabIndex(2)}
          className={`flex justify-center rounded-r-md ${tabIndex === 2 ? 'bg-blue-primary text-white' : 'bg-white' +
            ' text-blue-primary'}`}
        >
          办公室
        </div>
      </div>
      {/*tabContent*/}
      <div
        className="flex justify-center flex-wrap"
        key={info[tabIndex].index}
      >
        <img
          className="w-full my-4 aspect-auto rounded-xl"
          src={(`${info[tabIndex].img}`)}
          alt="desc-img"
        />
        <div className="w-full">{info[tabIndex].description}</div>
      </div>
    </div>
  );
};

export default Index;
