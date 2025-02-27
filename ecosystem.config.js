module.exports = {
  apps: [
    {
      name: 'vite-react-app', // 应用名称
      script: 'serve', // 启动脚本
      args: 'dist -s', // 启动参数，'dist' 为构建输出目录，'-s' 表示静态服务模式
      interpreter: 'npx', // 使用 npx 运行 serve 脚本
      env: {
        NODE_ENV: 'production', // 环境变量
      },
      watch: false, // 关闭监控模式
      max_memory_restart: '300M', // 内存占用超过 300M 时重启
      error_file: './logs/app-err.log', // 错误日志路径
      out_file: './logs/app-out.log', // 普通日志路径
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // 日志时间格式
    },
  ],
};
