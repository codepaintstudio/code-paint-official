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
      "为解决每次招新时邮件发送麻烦的问题而开发的邮件群发工具，支持批量Excel导入，一件群发，免费使用；",
    image: cpemail,
    link: "https://cpemail.hub.feashow.cn/",
    logo: cp,
  },
  {
    id: 2,
    title: "CP-VueDir",
    description: "为Vue3.x编写的自定义指令集集，开箱即用，内置50+使用指令",
    image: vuedir,
    link: "https://vuedir.feashow.cn/",
    logo: vuedirlogo,
  },
  {
    id: 3,
    title: "Blog-API",
    description:
      "使用 Golang 开发的博客API，长期部署运行，免费开放给同学学习使用。",
    image: blog,
    link: "https://github.com/codepaintstudio/blog-api",
    logo: blog,
  },
];
export default Lists;
