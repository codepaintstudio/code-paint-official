import { useRef, useState, useEffect } from 'react';
import Lists from '@/pages/products/components/lists';

interface Product {
  id: number;
  title: string;
  logo: string;
  description?: string;
  image?: string;
  link?: string;
}

interface ScrollBarProps {
  position: number; // 0-1之间的滚动位置
  currentProduct: Product | null;
  isScrolling: boolean;
}

const ScrollBar = ({
  position,
  currentProduct,
  isScrolling,
}: ScrollBarProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoTimerRef = useRef<number | null>(null);

  // 计算滚动条的位置
  useEffect(() => {
    if (!scrollBarRef.current) return;

    // 获取滚动条父容器的高度和滚动条自身高度
    const scrollBarContainer = scrollBarRef.current.parentElement;
    if (!scrollBarContainer) return;

    const containerHeight = scrollBarContainer.clientHeight;
    const scrollBarHeight = scrollBarRef.current.clientHeight;

    // 计算滚动条的最大可移动距离
    const maxMoveDistance = containerHeight - scrollBarHeight;

    // 根据滚动百分比计算滚动条应移动的距离
    const moveDistance = position * maxMoveDistance;

    // 设置滚动条位置
    scrollBarRef.current.style.transform = `translateY(${moveDistance}px)`;

    // 同步更新Logo位置
    if (logoContainerRef.current) {
      const logoOffset = moveDistance + scrollBarHeight / 2 - 24; // 24是比size多1/2
      logoContainerRef.current.style.top = `${logoOffset}px`;
    }
  }, [position]);

  // 处理Logo显示逻辑
  useEffect(() => {
    // 清除之前的定时器
    if (logoTimerRef.current) {
      window.clearTimeout(logoTimerRef.current);
    }

    if (isScrolling) {
      // 滚动时隐藏Logo
      setShowLogo(false);
    } else {
      // 停止滚动300ms后显示Logo
      logoTimerRef.current = window.setTimeout(() => {
        setShowLogo(true);
      }, 0);
    }

    return () => {
      if (logoTimerRef.current) {
        window.clearTimeout(logoTimerRef.current);
      }
    };
  }, [isScrolling, currentProduct]);

  // 组件加载后显示Logo的一次性效果
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLogo(true);
    }, 400);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // 从Lists中获取对应的产品Logo
  const getProductLogo = () => {
    if (!currentProduct) return '';
    const productFromList = Lists.find((item) => item.id === currentProduct.id);
    return productFromList ? productFromList.logo : currentProduct.logo;
  };

  return (
    <div className="fixed left-10 top-0 h-full flex items-center">
      <div className="flex">
        {/* 左侧自定义滚动条 */}
        <div className="h-52 bg-blue-primary w-2 rounded-xl z-10 relative">
          <div
            ref={scrollBarRef}
            className="bg-white w-2 h-12 rounded-xl transition-transform duration-300"
          />
        </div>

        {/* 当前产品Logo显示区域 */}
        {currentProduct && (
          <div className="ml-4 h-full relative w-16">
            <div
              ref={logoContainerRef}
              className={`absolute flex flex-col items-center transition-opacity duration-300 ${
                showLogo ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="size-16 border-2 border-white rounded-full p-1 bg-blue-primary/10 backdrop-blur-md shadow-lg overflow-hidden">
                <img
                  src={getProductLogo()}
                  alt={`${currentProduct.title} logo`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollBar;
