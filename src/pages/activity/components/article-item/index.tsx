import React from 'react';
import { NavLink } from 'react-router';


interface ArticleItemProps {
  type: 'UI交互' | '活动' | '博客' | string;
  image?: string;
  title: string;
  subtitle?: string;
  author?: string;
  description?: string;
  date: string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({
  type,
  image,
  title,
  subtitle,
  author,
  description,
  date,
}) => {
  return (
    <div className="border-t border-dashed border-gray-300">
      <div className="flex items-start flex-wrap">
        {/* 类别标识及日期 桌面版 */}
        <div className="hidden md:block mr-4 md:h-full w-20">
          <span className="flex justify-center px-4 py-2 text-white bg-blue-primary rounded-md w-full font-thin">
            {type}
          </span>
          <div className="hidden md:block w-20 text-gray-400 text-sm h-full mt-10">
            {date}
          </div>
        </div>

        {/* 类别标识及日期 移动版 */}
        <div className="flex md:hidden pl-6 h-8 w-full justify-between">
          <span className="w-20 flex justify-center px-1 py-1 text-blue-primary bg-white border border-blue-primary rounded-b-md font-thin">
            {type}
          </span>
          <div className="w-20 text-gray-400 text-sm mt-2 h-full">
            {date}
          </div>
        </div>

        {/* 主要内容 */}
        <div className="flex-1 flex mx-6 mt-3 mb-4 md:my-6">
          {image && (
            <div className="mr-4 flex-shrink-0">
              <img
                src={image}
                alt={title}
                className="w-40 h-26 md:w-48 md:h-32 object-cover rounded-md"
              />
            </div>
          )}

          <div className="flex-1">
            <NavLink to={'/'}>
              <h2 className="text-base md:text-xl font-medium mb-2 hover:text-font-primary">{title}</h2>
            </NavLink>

            {subtitle && (
              <div className="text-xs md:text-sm text-gray-600 mb-1">
                {subtitle && <span>{subtitle}</span>}
                {author && <span> 作者: {author}</span>}
              </div>
            )}

            <p className="text-sm text-gray-500 line-clamp-2 mb-1">
              {description}
            </p>

          </div>

          <div className="flex items-center ml-2">
            <div
              className="group flex justify-center items-center w-10 h-10 rounded-full hover:bg-blue-700 transition-colors"
            >
              <NavLink to={'/'}>
                <img
                  src="/svg/arrow-right-blue.svg"
                  className="block group-hover:hidden"
                  alt="arrow"
                />
                <img
                  src="/svg/arrow-right-orange.svg"
                  className="hidden group-hover:block"
                  alt="arrow"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
