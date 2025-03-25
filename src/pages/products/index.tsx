import Header from '@/components/header/index';
const Products = () => {
  return (
    <>
      <Header />
      <div className="bg-font-primary text-white w-full py-3 aspect-3/1 relative">
        <div className="float-left w-4/11 rounded-r-[500px] border-1 border-b-primary p-14 pl-0 border-l-0 ">
          <div className=" rounded-r-[500px] border-1 border-b-primary p-14 pl-0 border-l-0">
            <div className="rounded-r-[500px] border-1 border-b-primary p-14 pl-0 border-l-0">
              <div className="relative rounded-r-[500px] border-1 border-b-primary p-14 pl-0 border-l-0">
                <h3 className="absolute -top-24 text-4xl left-20 font-bold">
                  PRODUCT
                </h3>
                <div className="absolute -top-8 left-20 text-base font-semibold font-PingFangSC">
                  码绘产品
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/4 -right-1/6 w-full">
          <h1 className="text-9xl  text-white opacity-10 text-clip font-PingFangSC tracking-wider text-nowrap -rotate-25 font-black">
            Code drawing products
          </h1>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className=" text-center font-medium text-4xl">
            欢迎来到码绘产品中心
          </div>
          <div className="mt-6">
            <p className="text-center pt-6 text-xs">
              这里是创意与技术的结晶，是实用与美学的完美结合
            </p>
            <p className="text-center pt-6 text-xs">
              我们致力于将前沿的编程技术与独特的艺术视角相结合打造出令人耳目一新的产品
            </p>
            <p className="text-center pt-6 text-xs">为用户带来前所未有的体验</p>
          </div>
        </div>
      </div>
      {/* 产品展示 */}
      <div className="px-20 bg-orange-side font-PingFangSC">
        <div className="aspect-3/1 pt-20 relative scrollbar custom-scroll ">
          {/* 展示 */}

          {/* 产品1 */}
          <div className="max-w-2/3 mx-auto  flex justify-center">
            {/* logo 与文字 */}
            <div className="w-1/2 flex justify-center">
              <div className="aspect-1/1 border-1 size-20 ml-10 rounded-full mt-6 text-center leading-20">
                logo
              </div>
              {/* 邮件 */}
              <div className="mx-6 font-semibold md:tracking-widest">
                <h3 className="inline-block mt-16 text-2xl">邮件群发</h3>
                <p className="my-6 text-sm font-medium">
                  产品模块主要是提供一个多应用产品的展示和跳转链接。用户可在本模块快速了解工作室产品大致内容，点击跳抓后可跳转到体验页面。
                </p>

                <a className="text-font-primary">了解更多</a>
              </div>
            </div>
            <div className="bg-amber-50 max-w-2xl h-80 w-1/2 rounded-2xl">
              图片
            </div>
          </div>
          {/* codepaint */}
          <div>
            {/*CodePaint滚动*/}
            <div className="marquee-section h-32 z-0 relative -bottom-2.5 right-0 text-transparent/10 my-16 text-stroke-sixth text-9xl pointer-events-none select-none overflow-hidden w-full font-black tracking-wider opacity-20">
              <div className="flex marquee-container whitespace-nowrap">
                <div className="flex">
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                </div>
                <div className="flex">
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                </div>
              </div>
            </div>
          </div>
          {/* 产品2 */}
          <div className="max-w-2/3 mx-auto  flex justify-center">
            <div className="bg-amber-50 max-w-2xl h-80 w-1/2 rounded-2xl">
              图片
            </div>
            {/* logo 与文字 */}
            <div className="w-1/2 flex">
              <div className="aspect-1/1 border-1 size-20 ml-10 rounded-full mt-6 text-center leading-20">
                logo
              </div>
              {/* 邮件 */}
              <div className="mx-6 font-semibold md:tracking-widest">
                <h3 className="inline-block mt-16 text-2xl ">邮件群发</h3>
                <p className="my-6 text-sm font-medium">
                  产品模块主要是提供一个多应用产品的展示和跳转链接。用户可在本模块快速了解工作室产品大致内容，点击跳抓后可跳转到体验页面。
                </p>

                <a className="text-font-primary">了解更多</a>
              </div>
            </div>
          </div>
          {/* codepaint */}
          <div>
            {/*CodePaint滚动*/}
            <div className="marquee-section h-32 z-0 relative -bottom-2.5 right-0 text-transparent/10 my-16 text-stroke-sixth text-9xl pointer-events-none select-none overflow-hidden w-full font-black tracking-wider opacity-20">
              <div className="flex marquee-container whitespace-nowrap">
                <div className="flex">
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                </div>
                <div className="flex">
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                  <span className="me-10">CodePaint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
