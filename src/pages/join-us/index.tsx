import Bgmain from "./components/bg-main/index";
import Content from "./components/content/index";
import SEO from "@/components/SEO";

const Join = () => {
  const joinStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "加入我们 - CodePaint码绘",
    description:
      "CodePaint码绘工作室招聘信息，诚邀前端开发、UI设计、办公室等优秀人才加入我们的团队",
    url: "https://cp.hub.feashow.cn/join",
    mainEntity: {
      "@type": "Organization",
      name: "CodePaint Studio",
      hiringOrganization: {
        "@type": "Organization",
        name: "CodePaint Studio",
        sameAs: "https://cp.hub.feashow.cn",
      },
      jobLocation: {
        "@type": "Place",
        addressCountry: "CN",
      },
    },
  };

  return (
    <>
      <SEO
        title="加入我们 - CodePaint码绘 | 招聘前端开发UI设计等岗位"
        description="CodePaint码绘工作室诚邀优秀人才加入！我们提供前端开发、UI设计、办公室等多个岗位，与行业专家一起创造卓越的数字产品。加入码绘，码上就绘！"
        keywords="CodePaint招聘,前端开发招聘,UI设计招聘,办公室招聘,工作室招聘,技术团队,前端工程师,设计师招聘,码绘招聘"
        ogUrl="https://cp.hub.feashow.cn/join"
        structuredData={joinStructuredData}
      />
      <div className="relative h-screen">
        <Bgmain />
        {/* 岗位展示 */}
        <Content />
      </div>
    </>
  );
};
export default Join;
