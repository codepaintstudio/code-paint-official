import cpemail from "@/assets/cpemail.png";
import cp from "@/assets/cp.webp";
import vuedir from "@/assets/vuedir.png";
import vuedirlogo from "@/assets/vuedirlogo.jpg";
import blog from "@/assets/blog.png";

const Lists = [
  {
    id: 1,
    title: "CP-Email",
    description:
      "专为高效邮件群发而设计的工具，支持Excel批量导入联系人，一键发送，操作简便。免费使用。",
    image: cpemail,
    link: "https://cpemail.hub.feashow.cn/",
    logo: cp,
  },
  {
    id: 2,
    title: "CP-VueDir",
    description:
      "专为Vue3.x打造的实用指令集，包含50+精心封装的自定义指令，开箱即用，显著提升开发效率。",
    image: vuedir,
    link: "https://vuedir.feashow.cn/",
    logo: vuedirlogo,
  },
  {
    id: 3,
    title: "Blog-API",
    description:
      "基于Golang开发的高性能博客后端API，稳定部署并长期运行，向团队成员开放，助力技术学习与实践。",
    image: blog,
    link: "https://github.com/codepaintstudio/blog-api",
    logo: blog,
  },
];
export default Lists;
