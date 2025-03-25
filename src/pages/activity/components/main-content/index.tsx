import ArticleItem from '@/pages/activity/components/article-item';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const MainContent = () => {
  useGSAP(()=>{
    gsap.set(circleRef.current, { y: 10, opacity: 1 });
    gsap.to(circleRef.current, {
      duration: 1.5,
      y: 100,
      repeat: -1,
      repeatDelay: 0.5,
      ease: 'power4.inOut',
      yoyo: true,
    });
  });

  const articles = [
    {
      id: '0',
      type: 'UI作品',
      title: '《真不错的设计》',
      author: '哈哈哈',
      description: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
      date: '2025/2/23',
      image: 'images/88426823_p0.png' ,// Placeholder for the statue image
    },
    {
      id: '1',
      type: '活动',
      title: '只写后台管理的前端要怎么提升自己',
      description: '大概两年以前，面试美团的缘，面试官让我写一道代码问题。时间单位转换，具体的题目我忘记了，但是我与业务代码打交道很关心的单位转换...',
      date: '2025/2/23',
      image: 'images/88426823_p0.png' ,// Placeholder for the statue image
    },
    {
      id: '2',
      type: '博客',
      title: '只写后台管理的前端要怎么提升自己',
      description: '大概两年以前，面试美团的缘，面试官让我写一道代码问题。时间单位转换，具体的题目我忘记了，但是我与业务代码打交道很关心的单位转换...',
      date: '2025/2/23',
      image: 'images/88426823_p0.png' ,// Placeholder for the statue image
    }];
  const circleRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);

  return (
    <>
      {/*标题*/}
      <div className="w-1/3 relative ml-12 flex items-start">
        <div className="relative">
          <h3
            className="mt-8 text-3xl md:text-8xl font-semibold tracking-widest text-white [text-shadow:-1px_-1px_0_#0030ae,1px_-1px_0_#0030ae,-1px_1px_0_#0030ae,1px_1px_0_#0030ae]"
          >
            ACTIVITY
          </h3>
          <h2 className="text-font-primary text-2xl font-PingFangSC font-semibold absolute bottom-2 right-0 -mb-4">
            活动中心
          </h2>
        </div>

        {/*图形*/}
        <div className="md:ml-8 md:mt-4 block scale-65 md:scale-100">

          <div className="w-full flex justify-center">
            <div
              ref={circleRef}
              className="size-8 rounded-full bg-radial from-blue-primary from-5% to-[#FFF]"
            />
          </div>

          <div className="w-22 h-9 rounded-[50%] border-blue-primary border-1" />
          <div className="w-22 h-9 rounded-[50%] border-blue-primary border-1 transform -translate-y-8" />
          <div className="w-22 h-9 rounded-[50%] border-blue-primary border-1 transform -translate-y-12" />
          <div className="w-22 h-9 rounded-[50%] border-blue-primary border-1 transform -translate-y-17" />
          <div className="w-22 h-9 rounded-[50%] border-blue-primary border-1 transform -translate-y-25" />
        </div>
      </div>
      {/*文章列表*/}
      <div className="max-w-5xl mx-auto mt-2 md:mt-20">
        {articles.map((article) => (
          <ArticleItem key={`article-${article.id}`} {...article} />
        ))}
      </div>
    </>
  );
};

export default MainContent;
