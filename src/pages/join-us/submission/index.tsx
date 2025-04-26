import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, Phone, FileUp, FilePen } from 'lucide-react';
import Bgmain from '../components/bg-main';
import FilePreview from './components/filepreview';
import { useLocation } from 'react-router';
import axios from 'axios';
import { API_URL } from '@/const';

const Submission = () => {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  // 文件url
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  // 文件预览状态
  const [filePreview, setFilePreview] = useState(false);
  // 添加文件上传状态
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [pathLength, setPathLength] = useState(0);
  const [svgCoordinates, setSvgCoordinates] = useState({ x: 0, y: 0 });
  const [pathGenerated, setPathGenerated] = useState(false);
  const svgTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const backRotateTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const boxTimelineRef = useRef<gsap.core.Timeline | null>(null);
  
  const location = useLocation();
  const recrType = location.state?.recrType;
  
  const handleFileUrl = (fileUrl: string) => {
    setFileUrl(fileUrl);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFilePreview(true);
      const file = files[0];
      setSelectedFile(file);
    }
  };
  const handleClosePreview = () => {
    // setSelectedFile(null);
    setFilePreview(false);
  };

  // 为boxRef添加渐现动画
  useGSAP(() => {
    if (boxRef.current) {
      // 初始设置 - 隐藏box
      gsap.set(boxRef.current, {
        opacity: 0,
        y: 30,
      });

      // 创建box渐现动画
      const boxTimeline = gsap.timeline();
      boxTimeline.to(boxRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.3, // 给一点延迟，让页面其他元素加载完
      });

      // 保存时间线引用
      boxTimelineRef.current = boxTimeline;
    }

    return () => {
      if (boxTimelineRef.current) {
        boxTimelineRef.current.kill();
      }
    };
  }, []); // 空依赖数组，确保只在组件挂载时执行一次

  // 计算SVG路径和圆的位置
  useEffect(() => {
    // 延迟执行以确保DOM已完全加载
    const timer = setTimeout(() => {
      if (circleRef.current && svgPathRef.current) {
        try {
          // 获取circle元素的位置
          const circleRect = circleRef.current.getBoundingClientRect();
          const svgElement = svgPathRef.current.ownerSVGElement;

          if (svgElement) {
            // 获取窗口宽度
            const windowWidth = window.innerWidth;
            // 计算SVG的变换矩阵
            const svgRect = svgElement.getBoundingClientRect();
            const svgPoint = svgElement.createSVGPoint();

            // 设置圆的中心点在屏幕坐标系中的位置
            svgPoint.x = circleRect.left + circleRect.width / 2;
            svgPoint.y = circleRect.top + circleRect.height / 2;

            // 转换为SVG坐标系
            const CTM = svgElement.getScreenCTM();
            if (CTM) {
              const coords = svgPoint.matrixTransform(CTM.inverse());
              setSvgCoordinates(coords);

              // 获取原始路径
              const originalPath = svgPathRef.current;

              // 计算SVG中的宽度比例
              const svgWidthRatio = 1920 / svgRect.width;

              // 调整起点和终点，确保它们在视口之外
              const startX = -100 * svgWidthRatio; // 确保起点在视口左侧
              const endX = (windowWidth + 100) * svgWidthRatio; // 确保终点在视口右侧

              // 将圆的位置添加到路径的控制点中，并确保路径从左到右
              originalPath.setAttribute(
                'd',
                `M${startX} 72.4997C206.5 -23.0005 386 -15.9998 ${coords.x} ${
                  coords.y
                }C${coords.x + 100} ${
                  coords.y + 30
                } 807.859 164.977 1073.5 126C1269.5 97.2413 1652 450 ${endX} 93.4997`,
              );

              // 设置动画属性
              const length = originalPath.getTotalLength();
              setPathLength(length);
              setPathGenerated(true);
            }
          }
        } catch (error) {
          console.error('Error calculating path:', error);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 使用GSAP创建动画
  useGSAP(() => {
    // 只有在路径生成后才创建动画
    if (
      pathGenerated &&
      svgPathRef.current &&
      backRef.current &&
      svgContainerRef.current
    ) {
      // 创建SVG路径动画
      const svgPath = svgPathRef.current;
      const svgContainer = svgContainerRef.current;

      // 初始设置
      gsap.set(svgPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // 创建SVG路径绘制动画
      const svgTimeline = gsap.timeline({
        onStart: () => {
          // 在动画开始时让SVG容器变为可见
          gsap.to(svgContainer, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.in',
          });
        },
      });

      svgTimeline.to(svgPath, {
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power2.inOut',
      });

      // 保存时间线引用
      svgTimelineRef.current = svgTimeline;

      // 创建背景旋转动画
      const backElement = backRef.current;

      // 初始设置
      gsap.set(backElement, {
        rotation: 0,
        transformOrigin: 'top left',
      });
      gsap.from(titleRef.current, {
        text: ' ',
        duration: 2,
      });

      // 创建背景旋转动画，在路径经过圆圈时触发
      const backTimeline = gsap.timeline();

      // 计算动画开始的时间点
      // 用圆的X坐标在SVG中的相对位置来估算时间点
      const svgWidth = 1920; // SVG viewBox宽度
      const animationTriggerPoint = svgCoordinates.x / svgWidth;

      // 在SVG路径经过圆圈时触发背景旋转
      backTimeline.to(
        backElement,
        {
          rotation: 10,
          delay: 1,
          duration: 0.6,
          ease: 'power2.in',
        },
        animationTriggerPoint * 3,
      ); // 调整时间点使动画在适当时机触发

      // 保存时间线引用
      backRotateTimelineRef.current = backTimeline;
    }

    // 清理函数将在组件卸载时自动执行
    return () => {
      // 清除动画时间线
      if (svgTimelineRef.current) {
        svgTimelineRef.current.kill();
        svgTimelineRef.current = null;
      }
      if (backRotateTimelineRef.current) {
        backRotateTimelineRef.current.kill();
        backRotateTimelineRef.current = null;
      }
      if (boxTimelineRef.current) {
        boxTimelineRef.current.kill();
        boxTimelineRef.current = null;
      }

      // 清除SVG路径
      if (svgPathRef.current) {
        // 重置SVG路径的动画属性
        gsap.set(svgPathRef.current, {
          strokeDasharray: 'none',
          strokeDashoffset: 0,
          clearProps: 'all',
        });
      }

      // 清除所有GSAP动画
      gsap.killTweensOf(svgPathRef.current);
      gsap.killTweensOf(backRef.current);
      gsap.killTweensOf(titleRef.current);
      gsap.killTweensOf(boxRef.current);
      gsap.killTweensOf(svgContainerRef.current);
    };
  }, [pathGenerated, pathLength, svgCoordinates]); // 依赖项，当这些值改变时重新执行

  // 组件卸载时清理资源
  useEffect(() => {
    return () => {
      // 清除所有可能的定时器和事件监听器
      window.removeEventListener('resize', handleResize);

      // 清除所有GSAP动画
      gsap.killTweensOf(svgPathRef.current);
      gsap.killTweensOf(backRef.current);
      gsap.killTweensOf(titleRef.current);
      gsap.killTweensOf(boxRef.current);
      gsap.killTweensOf(svgContainerRef.current);

      // 重置状态
      setPathGenerated(false);
      setPathLength(0);
    };
  }, []);

  // 提取handleResize函数到组件级别，以便在清理函数中引用
  const handleResize = () => {
    // 重置路径绘制状态，触发重新计算
    setPathGenerated(false);

    // 如果存在动画，停止并清除
    if (svgTimelineRef.current) {
      svgTimelineRef.current.kill();
    }
    if (backRotateTimelineRef.current) {
      backRotateTimelineRef.current.kill();
    }
    if (boxTimelineRef.current) {
      boxTimelineRef.current.kill();

      // 重置boxRef的状态
      if (boxRef.current) {
        gsap.set(boxRef.current, {
          opacity: 0,
          y: 30,
        });

        // 重新创建盒子的动画
        const boxTimeline = gsap.timeline();
        boxTimeline.to(boxRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
        });

        boxTimelineRef.current = boxTimeline;
      }
    }

    // 延迟执行以确保DOM更新
    setTimeout(() => {
      if (circleRef.current && svgPathRef.current) {
        try {
          // 获取circle元素位置
          const circleRect = circleRef.current.getBoundingClientRect();
          const svgElement = svgPathRef.current.ownerSVGElement;

          if (svgElement) {
            // 获取窗口宽度
            const windowWidth = window.innerWidth;
            const svgRect = svgElement.getBoundingClientRect();
            const svgPoint = svgElement.createSVGPoint();

            svgPoint.x = circleRect.left + circleRect.width / 2;
            svgPoint.y = circleRect.top + circleRect.height / 2;

            const CTM = svgElement.getScreenCTM();
            if (CTM) {
              const coords = svgPoint.matrixTransform(CTM.inverse());
              setSvgCoordinates(coords);

              const originalPath = svgPathRef.current;

              // 计算SVG中的宽度比例
              const svgWidthRatio = 1920 / svgRect.width;

              // 调整起点和终点
              const startX = -100 * svgWidthRatio;
              const endX = (windowWidth + 100) * svgWidthRatio;

              originalPath.setAttribute(
                'd',
                `M${startX} 72.4997C206.5 -23.0005 386 -15.9998 ${coords.x} ${
                  coords.y
                }C${coords.x + 100} ${
                  coords.y + 30
                } 807.859 164.977 1073.5 126C1269.5 97.2413 1652 450 ${endX} 93.4997`,
              );

              const length = originalPath.getTotalLength();
              setPathLength(length);
              setPathGenerated(true);
            }
          }
        } catch (error) {
          console.error('Error recalculating path:', error);
        }
      }
    }, 100);
  };

  // 窗口大小变化时重新计算
  useEffect(() => {
    // 添加窗口大小变化监听
    window.addEventListener('resize', handleResize);

    // 清除监听
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobilePathRef = useRef<SVGPathElement>(null);
  const mobileSvgContainerRef = useRef<HTMLDivElement>(null);
  const [mobilePathLength, setMobilePathLength] = useState(0);
  const mobileTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // 计算移动端SVG路径长度
  useEffect(() => {
    if (mobilePathRef.current) {
      const length = mobilePathRef.current.getTotalLength();
      setMobilePathLength(length);
    }
  }, []);

  // 移动端SVG动画
  useGSAP(() => {
    if (mobilePathRef.current && mobileSvgContainerRef.current) {
      // 初始设置
      gsap.set(mobilePathRef.current, {
        strokeDasharray: mobilePathLength,
        strokeDashoffset: mobilePathLength,
      });

      // 创建移动端SVG路径绘制动画
      const mobileTimeline = gsap.timeline({
        onStart: () => {
          // 在动画开始时让SVG容器变为可见
          gsap.to(mobileSvgContainerRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: 'power1.in',
          });
        },
      });

      mobileTimeline.to(mobilePathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
      });

      // 保存时间线引用
      mobileTimelineRef.current = mobileTimeline;
    }

    return () => {
      if (mobileTimelineRef.current) {
        mobileTimelineRef.current.kill();
        mobileTimelineRef.current = null;
      }
      if (mobilePathRef.current) {
        gsap.set(mobilePathRef.current, {
          strokeDasharray: 'none',
          strokeDashoffset: 0,
          clearProps: 'all',
        });
      }
      gsap.killTweensOf(mobilePathRef.current);
      gsap.killTweensOf(mobileSvgContainerRef.current);
    };
  }, [mobilePathLength]);

  // 添加状态来存储表单数据
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // 处理表单提交
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止默认表单提交行为
    
    const access_token = localStorage.getItem('access_token'); // 假设token存储在localStorage中
    const userId = localStorage.getItem('userId'); // 从localStorage中获取userId
    console.log(userId,email,phone,recrType);
    if (!userId) {
      console.error('User ID not found');
      return;
    }
   
    try {
      await axios.post(`${API_URL}/api/recruitment`, {
        userId: userId, 
        email,
        phone,
        recrType,
        resumeFilePath: 'http://sudn75g3f.hd-bkt.clouddn.com/前端开发_邓军辉.pdf',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`,
        },
      });
      alert('提交成功');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <div className="relative h-screen overflow-hidden mt-16 md:mt-0">
      <Bgmain />
      {/* 黑线条 */}
      <div
        ref={svgContainerRef}
        className="hidden md:block absolute w-screen top-1/7 z-30 opacity-0"
      >
        <svg
          className="w-full"
          width="100%"
          height="255"
          preserveAspectRatio="none"
          viewBox="0 0 1920 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={svgPathRef}
            d="M-5.5 72.4997C206.5 -23.0005 386 -15.9998 540 51.5C694 119 807.859 164.977 1073.5 126C1269.5 97.2413 1652 450 1920.5 93.4997"
            stroke="#191a1e"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/* 移动端线条 */}
      <div
        ref={mobileSvgContainerRef}
        className="md:hidden fixed top-1/8 opacity-0"
      >
        <svg
          width="428"
          height="181"
          viewBox="0 0 428 181"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={mobilePathRef}
            d="M-10 1C10.1667 6.5 81.5 50.1 81.5 132.5C81.5 214.9 318.333 161 427.5 179.5"
            stroke="#0030AE"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="md:hidden fixed w-full mt-20 font-PingFangSC">
        <div className="absolute -translate-y-1 w-full text-5xl tracking-widest text-stroke-seventh text-transparent font-black text-center">
          CodePaint
        </div>
        <div className="absolute w-full text-5xl tracking-widest text-stroke-seventh text-transparent font-black text-center">
          CodePaint
        </div>
        <div className="relative top-6 text-center text-2xl tracking-wider font-black text-font-primary">
          加入码绘，码上就绘
        </div>
      </div>
      {/* 盒子居中 */}
      <div ref={boxRef} className="h-full w-full fixed top-1/4">
        <div className="relative w-xs h-80 md:w-2/7 md:h-3/5 mx-auto">
          {/* 第一层 */}
          <div
            ref={frontRef}
            className="absolute w-full h-full bg-b-secondary rounded-tr-4xl origin-top-left z-10"
          >
            {/*圆孔 */}
            <div
              ref={circleRef}
              className="w-6 h-6 absolute top-3 md:top-6 left-3 md:left-6  rounded-full bg-font-primary md:bg-white"
            >
              {''}
            </div>

            {/* 简历投递+表单 */}
            <div className="absolute left-0 top-3 md:top-0 w-full h-full flex flex-col justify-center">
              {/* 简历投递 */}
              <div className="w-full relative font-bold font-PingFangSC flex justify-center items-center">
                <div
                  ref={titleRef}
                  className="absolute text-center font-medium tracking-[0.2em] text-stroke-secondary text-transparent text-xl md:text-3xl opacity-20"
                >
                  Resume submission
                </div>
                <div className="text-2xl text-white tracking-wider font-black z-10">
                  简历投递
                </div>
              </div>

              {/* 表单 */}
              <form className="max-w-md mx-auto p-4 w-full font-PingFangSC" onSubmit={handleSubmit}>
                {/* 邮箱 */}
                <div className="flex text-white items-center w-4/5 h-10 mx-auto my-4 border-white border-1 rounded-xl rounded-t-xl">
                  <div className="flex items-center h-4/5 ml-1.5 border-r-3 border-border-primary opacity-30">
                    <Mail
                      size={24}
                      color="#8c8c8e"
                      className="w-6 h-6 mr-2 opacity-80"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="邮箱"
                    className="w-full py-2 px-3 placeholder:font-normal placeholder:tracking-widest placeholder:opacity-50 focus:outline-none focus:ring-0 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* 电话 */}
                <div className="flex text-white items-center w-4/5 h-10 mx-auto my-4  border-white border-1 rounded-xl [image-rendering:crisp-edges]">
                  <div className="flex items-center h-4/5 ml-1.5 border-r-3 border-border-primary opacity-30">
                    <Phone
                      size={24}
                      color="#8c8c8e"
                      className="w-6 h-6 mr-2 opacity-80"
                    />
                  </div>
                  <input
                    type="tel"
                    name="tel"
                    placeholder="电话"
                    className="w-full py-2 px-3 placeholder:font-normal placeholder:tracking-widest placeholder:opacity-50 border-none focus:outline-none focus:ring-0 focus:border-transparent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* 上传 制作 */}
                <div className="flex items-center justify-between text-font-quaternary w-3/5 mx-auto font-medium tracking-wider text-xs md:text-base text-nowrap">
                  {/* 上传 */}
                  <div>
                    <input
                      type="file"
                      id="resume"
                      className="hidden"
                      accept="application/pdf"
                      onChange={handleFileChange}
                    />{' '}
                    <label
                      htmlFor="resume"
                      className="cursor-pointer hover:text-font-primary transition-colors"
                    >
                      <FileUp
                        strokeWidth={2}
                        size={20}
                        color="#FF6A00"
                        className="inline-block"
                      />
                      {selectedFile ? selectedFile.name : '上传简历'}
                    </label>
                  </div>
                  {/* 制作 */}
                  <div>
                    <a
                      href="#"
                      className="hover:text-font-primary transition-colors"
                    >
                      <FilePen
                        strokeWidth={2}
                        size={20}
                        color="#FF6A00"
                        className="inline-block"
                      />
                      制作简历
                    </a>
                  </div>{' '}
                </div>

                {/* 提交 */}
                <div className="flex items-center justify-between w-20 md:w-4/5 mx-auto">
                  <input
                    type="submit"
                    value="提交"
                    className="w-full h-10 bg-font-primary mt-5 md:mt-12 text-white font-bold py-2 px-4 rounded-b-xl rounded-t-xl text-xs md:text-base"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* 第二层 */}
          <div
            ref={backRef}
            className="absolute flex items-center top-0 left-0 w-full h-full bg-font-primary rounded-tr-4xl"
          >
            {' '}
          </div>
        </div>
      </div>
      {filePreview && selectedFile && (
        <FilePreview file={selectedFile} onClose={handleClosePreview} onFileUrl={handleFileUrl} />
      )}
    </div>
  );
};

export default Submission;
