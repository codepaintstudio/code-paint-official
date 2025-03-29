import Lists from '../lists/index';

interface ProductsListProps {
  setProductItemRef?: (el: HTMLDivElement | null, index: number) => void;
}

const ProductsList = ({ setProductItemRef }: ProductsListProps) => {
  return (
    <div className="font-PingFangSC w-full">
      {Lists.map((product, index) => (
        <div
          key={product.id}
          ref={(el) => setProductItemRef && setProductItemRef(el, index)}
          className="w-full mx-auto mb-28 flex flex-wrap justify-center"
        >
          {index % 2 === 0 ? (
            <>
              {/* logo 与文字 */}
              <div className="flex w-1/2 max-w-full justify-end">
                <div className="aspect-1/1 border-2 border-white size-20 ml-10 rounded-full mt-6 text-center leading-20 flex-shrink-0">
                  <img
                    src={product.logo}
                    alt={`${product.title} logo`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* 产品信息 */}
                <div className="mx-6 font-semibold md:tracking-wider flex-grow min-w-0">
                  <h3 className="inline-block mt-16 text-2xl">
                    {product.title}
                  </h3>
                  <p className=" my-6 text-base font-medium leading-6 break-words">
                    {product.description}
                  </p>
                  <a href={product.link} className="text-font-primary">
                    了解更多
                  </a>
                </div>
              </div>
              <div className="bg-amber-50 max-w-2xl mx-16 w-96 h-80 rounded-2xl flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </>
          ) : (
            <>
              <div className="bg-amber-50 max-w-2xl mx-16 w-96 h-80 rounded-2xl flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* logo 与文字 */}
              <div className="flex w-1/2 max-w-full justify-end">
                <div className="aspect-1/1 border-2 border-white size-20 ml-10 rounded-full mt-6 text-center leading-20 flex-shrink-0">
                  <img
                    src={product.logo}
                    alt={`${product.title} logo`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* 产品信息 */}
                <div className="mx-6 font-semibold md:tracking-wider flex-grow min-w-0">
                  <h3 className="inline-block mt-16 text-2xl">
                    {product.title}
                  </h3>
                  <p className="my-6 text-base font-medium leading-6 break-words">
                    {product.description}
                  </p>
                  <a href={product.link} className="text-font-primary">
                    了解更多
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
