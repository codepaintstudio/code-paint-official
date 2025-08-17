import Header from "@/components/header";
import Cover from "@/pages/activity/components/cover";
import MainContent from "@/pages/activity/components/main-content";
import MobileHeader from "@/components/mobileheader/mobileheader";
import SEO from "@/components/SEO";

const Activity = () => {
  const activityStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "活动中心 - CodePaint码绘",
    description:
      "CodePaint码绘工作室活动中心，展示我们的技术分享、团队活动、行业交流等精彩内容",
    url: "https://cp.hub.feashow.cn/activity",
    mainEntity: {
      "@type": "Organization",
      name: "CodePaint Studio",
      event: {
        "@type": "Event",
        name: "CodePaint技术分享活动",
        organizer: {
          "@type": "Organization",
          name: "CodePaint Studio",
        },
      },
    },
  };

  return (
    <>
      <SEO
        title="活动中心 - CodePaint码绘 | 技术分享与团队活动"
        description="CodePaint码绘工作室活动中心，汇集技术分享、团队建设、行业交流等丰富活动内容，与优秀的技术人才一起成长进步。"
        keywords="CodePaint活动,技术分享,团队活动,行业交流,工作室活动,技术沙龙,码绘活动中心"
        ogUrl="https://cp.hub.feashow.cn/activity"
        structuredData={activityStructuredData}
      />
      <MobileHeader />
      <Header />
      <Cover />
      <MainContent />
    </>
  );
};

export default Activity;
