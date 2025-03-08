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
    <div className="border-t border-dotted border-gray-300">
      <div className="flex items-start">
        {/* 类别标识及日期 */}
        <div className="mr-4 h-full w-20">
          <span className="flex justify-center px-4 py-2 text-white bg-blue-primary rounded-md w-full font-thin">
            {type}
          </span>
          <div className="hidden md:block w-20 text-gray-400 text-sm h-full mt-10">
            {date}
          </div>
        </div>

        {/* Article content with image */}
        <div className="flex-1 flex m-6">
          {image && (
            <div className="mr-4 flex-shrink-0">
              <img
                src={image}
                alt={title}
                className="w-48 h-32 object-cover rounded-md"
              />
            </div>
          )}

          <div className="flex-1">
            <NavLink to={'/'}>
              <h2 className="text-xl font-medium mb-2">{title}</h2>
            </NavLink>

            {subtitle && (
              <div className="text-sm text-gray-600 mb-1">
                {subtitle && <span>{subtitle}</span>}
                {author && <span> 作者: {author}</span>}
              </div>
            )}

            <p className="text-sm text-gray-500 line-clamp-2 mb-1">
              {description}
            </p>

            {/* Date - only visible on mobile */}
            <div className="md:hidden text-gray-400 text-xs mt-2">
              {date}
            </div>
          </div>

          <div className="flex items-center ml-2">
            <div
              className="group flex justify-center items-center w-10 h-10 rounded-full hover:bg-blue-700 transition-colors">
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
