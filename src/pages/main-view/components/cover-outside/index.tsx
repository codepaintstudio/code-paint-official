import { useState, useEffect, FC, useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';

const CoverOutside: FC = () => {
  const [transparentCells, setTransparentCells] = useState<Set<string>>(
    new Set(),
  );

  // 使用 useRef 缓存 debounce 函数，避免每次渲染生成新实例
  const debouncedHandleMouseEnter = useRef(
    debounce(
      (rowIndex: number, colIndex: number) => {
        setTransparentCells((prev) => {
          const newSet = new Set(prev);
          newSet.add(`${rowIndex}-${colIndex}`);
          return newSet;
        });
      },
      200,
      { leading: true, trailing: true },
    ),
  ).current;

  useEffect(() => {
    if (transparentCells.size === 36) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [transparentCells.size]);

  // 使用 useCallback 包裹调用 debouncedHandleMouseEnter
  // 添加 ESLint 注释，明确告知 debouncedHandleMouseEnter 是稳定的
  const handleMouseEnter = useCallback(
    (rowIndex: number, colIndex: number) => {
      debouncedHandleMouseEnter(rowIndex, colIndex);
    },
    [] ,// eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <div className="flex justify-center w-full h-screen text-white/90 font-PingFangSC text-nowrap">
      <div className="absolute flex flex-col items-center justify-center w-2/3 h-2/3 mx-auto mt-10 z-10">
        <h1 className="text-8xl font-bold tracking-wide">Code Paint</h1>
        <h2 className="text-4xl font-bold tracking-widest my-10">
          加入码绘 码上就绘
        </h2>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-30 flex flex-col justify-end items-center">
        <img
          src="/public/images/mainview/cp_1.webp"
          alt="cp"
          className="scale-90"
        />
        <img
          src="/public/images/mainview/circle_1.webp"
          alt="circle"
          className="mb-10 scale-90"
        />
      </div>
      <table className="absolute border-collapse w-full h-full">
        <tbody>
          {[...Array(6)].map((_, rowIndex: number) => (
            <tr key={`row-${rowIndex}`}>
              {[...Array(6)].map((_, colIndex: number) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className={`bg-b-secondary border-6 p-4 border-transparent transition-opacity duration-300 ${
                    transparentCells.has(`${rowIndex}-${colIndex}`)
                      ? 'opacity-0'
                      : 'opacity-100'
                  }`}
                  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <table className="border-collapse w-full h-full z-20">
        <tbody>
          {[...Array(6)].map((_, rowIndex: number) => (
            <tr key={`row-${rowIndex}`}>
              {[...Array(6)].map((_, colIndex: number) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className={`rounded-2xl box-border ${
                    transparentCells.has(`${rowIndex}-${colIndex}`)
                      ? 'border-6 p-4 border-transparent'
                      : 'border-6 p-4 border-black'
                  }`}
                  onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CoverOutside;
