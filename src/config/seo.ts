// SEO配置文件
export const SEO_CONFIG = {
  // 网站基础信息
  SITE_NAME: 'CodePaint Studio',
  SITE_NAME_CN: '码绘工作室',
  BASE_URL: 'https://cp.hub.feashow.cn',
  DEFAULT_TITLE: 'CodePaint码绘 | 专注于前端开发与UI设计的软创工作室',
  DEFAULT_DESCRIPTION: 'CodePaint码绘是一家专业的数字创新工作室，专注于前端开发、后端开发、UI设计、AIGC和自动化办公等技术领域，为客户提供高质量的数字化解决方案。',

  // 默认关键词
  DEFAULT_KEYWORDS: [
    'CodePaint',
    '码绘',
    '前端开发',
    '后端开发',
    'UI设计',
    'AIGC',
    '自动化办公',
    '工作室',
    '数字化解决方案',
    'React',
    'Vue',
    'Node.js',
    'Golang'
  ],

  // 社交媒体
  SOCIAL_LINKS: {
    github: 'https://github.com/codepaintstudio',
    email: 'wujieruanchuang@163.com'
  },

  // 图片资源
  IMAGES: {
    logo: '/images/cp-logo-blue.webp',
    ogImage: '/images/og-image.jpg',
    appleTouchIcon: '/images/apple-touch-icon.png'
  },

  // 页面特定配置
  PAGES: {
    home: {
      title: 'CodePaint码绘 | 专业前端开发与UI设计工作室',
      description: 'CodePaint码绘是一家专业的数字创新工作室，专注于前端开发、后端开发、UI设计、AIGC和自动化办公等技术领域。加入码绘，码上就绘！',
      keywords: ['CodePaint', '码绘', '前端开发', '后端开发', 'UI设计', 'AIGC', '自动化办公', '工作室', '数字化解决方案', 'React', 'Vue', 'Node.js', 'Python', '设计', '开发']
    },
    products: {
      title: '产品服务 - CodePaint码绘 | 专业数字化解决方案',
      description: 'CodePaint码绘工作室提供专业的数字化产品服务，包括网站开发、移动应用开发、数据分析、邮件群发等一站式解决方案，助力企业数字化转型。',
      keywords: ['CodePaint产品', '网站开发', '移动应用', '数据分析', '邮件群发', '数字化解决方案', '企业服务', '软件开发', '码绘产品']
    },
    join: {
      title: '加入我们 - CodePaint码绘 | 招聘前端开发UI设计等岗位',
      description: 'CodePaint码绘工作室诚邀优秀人才加入！我们提供前端开发、UI设计、办公室等多个岗位，与行业专家一起创造卓越的数字产品。加入码绘，码上就绘！',
      keywords: ['CodePaint招聘', '前端开发招聘', 'UI设计招聘', '办公室招聘', '工作室招聘', '技术团队', '前端工程师', '设计师招聘', '码绘招聘']
    },
    activity: {
      title: '活动中心 - CodePaint码绘 | 技术分享与团队活动',
      description: 'CodePaint码绘工作室活动中心，汇集技术分享、团队建设、行业交流等丰富活动内容，与优秀的技术人才一起成长进步。',
      keywords: ['CodePaint活动', '技术分享', '团队活动', '行业交流', '工作室活动', '技术沙龙', '码绘活动中心']
    }
  }
};

// 生成完整URL的辅助函数
export const getFullUrl = (path: string = '') => {
  return `${SEO_CONFIG.BASE_URL}${path}`;
};

// 生成关键词字符串的辅助函数
export const getKeywordsString = (keywords: string[]) => {
  return keywords.join(',');
};