import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
}

const SEO = ({
  title = "CodePaint码绘 | 专业前端开发与UI设计工作室",
  description = "CodePaint码绘是一家专业的数字创新工作室，专注于前端开发、后端开发、UI设计、AIGC和自动化办公等技术领域，为客户提供高质量的数字化解决方案。",
  keywords = "CodePaint,码绘,前端开发,后端开发,UI设计,AIGC,自动化办公,工作室,数字化解决方案,React,Vue,Node.js,Python",
  ogImage = "https://cp.hub.feashow.cn/images/og-image.jpg",
  ogUrl = "https://cp.hub.feashow.cn",
  structuredData,
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />

      {/* 结构化数据 */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
