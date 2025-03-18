import Header from '@/pages/main-view/components/header';
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
      <div className="aspect-3/1 overflow-auto bg-[url()]">
        <div className="max-w-2/3 mt-20 mx-auto  flex justify-center">
          {/* logo 与文字 */}
          <div className="w-1/2 flex justify-center">
            <div className="aspect-1/1 border-1 size-20 ml-10 rounded-full mt-6 text-center leading-20">
              logo
            </div>
            {/* 邮件 */}
            <div className="mx-6 font-semibold md:tracking-widest">
              <h3 className="inline-block mt-16 text-2xl ">邮件群发</h3>
              <p className="my-6 text-sm">
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
          <img src="/public/images/products/codepaint.webp" alt="codepaint" />
        </div>
        <div className="max-w-2/3 mt-20 mx-auto  flex justify-center">
          {/* logo 与文字 */}

          <div className="bg-amber-50 max-w-2xl h-80 w-1/2 rounded-2xl">
            图片
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="aspect-1/1 border-1 size-20 ml-10 rounded-full mt-6 text-center leading-20">
              logo
            </div>
            {/* 邮件 */}
            <div className="mx-6 font-semibold md:tracking-widest">
              <h3 className="inline-block mt-16 text-2xl ">邮件群发</h3>
              <p className="my-6 text-sm">
                产品模块主要是提供一个多应用产品的展示和跳转链接。用户可在本模块快速了解工作室产品大致内容，点击跳抓后可跳转到体验页面。
              </p>

              <a className="text-font-primary">了解更多</a>
            </div>
          </div>
        </div>
        {/* codepaint */}
        <div>
          <img src="/public/images/mainview/codepaint.webp" alt="codepaint" />
        </div>
      </div>
    </>
  );
};

export default Products;
