import ArticleItem from '@/pages/activity/components/article-item';

const MainContent = () => {
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

  return (
    <>
      {/*标题*/}
      <div className="w-1/3 relative ml-12">
        <h3
          className="text-3xl md:text-8xl font-semibold tracking-widest text-transparent [-webkit-text-stroke:1px_#0030ae]"
        >
          ACTIVITY
        </h3>
        <h2 className="text-font-primary text-2xl font-PingFangSC font-semibold absolute bottom-2 right-0 -mb-4">
          活动中心
        </h2>
      </div>
      {/*文章列表*/}
      <div className="max-w-5xl mx-auto mt-28">
        {articles.map((article) => (
          <ArticleItem key={`article-${article.id}`} {...article} />
        ))}
      </div>
    </>
  );
};

export default MainContent;
