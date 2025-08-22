import { useState } from 'react';
import Lists from "../lists/index";
import ImageModal from "@/components/ImageModal";

interface ProductsListProps {
  setProductItemRef?: (el: HTMLDivElement | null, index: number) => void;
}

const ProductsList = ({ setProductItemRef }: ProductsListProps) => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    imageAlt: string;
  }>({
    isOpen: false,
    imageUrl: '',
    imageAlt: ''
  });

  const openImageModal = (imageUrl: string, imageAlt: string) => {
    setModalState({
      isOpen: true,
      imageUrl,
      imageAlt
    });
  };

  const closeImageModal = () => {
    setModalState({
      isOpen: false,
      imageUrl: '',
      imageAlt: ''
    });
  };

  return (
    <div className="font-PingFangSC w-full">
      {Lists.map((product, index) => (
        <div
          key={product.id}
          ref={(el) => setProductItemRef && setProductItemRef(el, index)}
          className="hidden md:flex w-full mx-auto mb-28 flex-wrap justify-center"
        >
          {index % 2 === 0 ? (
            <>
              {/* logo 与文字 */}
              <div className="flex w-1/2 max-w-full justify-end">
                <div className="aspect-1/1 border-2 border-white size-20 ml-10 rounded-full mt-6 text-center leading-20 flex-shrink-0">
                  <img
                    src={product.logo}
                    alt={`${product.title} logo`}
                    className="w-full h-full object-contain rounded-full"
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
                  <a href={product.link} target="_blank" className="text-font-primary">
                    了解更多
                  </a>
                </div>
              </div>
              <div className="bg-amber-50 max-w-2xl mx-16 w-96 h-80 rounded-2xl flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-2xl"
                  onClick={() => openImageModal(product.image, product.title)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="bg-amber-50 max-w-2xl mx-16 w-96 h-80 rounded-2xl flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-2xl"
                  onClick={() => openImageModal(product.image, product.title)}
                />
              </div>
              {/* logo 与文字 */}
              <div className="flex w-1/2 max-w-full justify-end">
                <div className="aspect-1/1 border-2 border-white size-20 ml-10 rounded-full mt-6 text-center leading-20 flex-shrink-0">
                  <img
                    src={product.logo}
                    alt={`${product.title} logo`}
                    className="w-full h-full object-contain rounded-full"
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
      {/* 移动端产品模块 */}
      {Lists.map((product) => (
        <div key={product.id} className="md:hidden px-6 w-full my-10">
          <div className="w-full flex justify-start">
            <div className="w-11 h-11 rounded-b-full border-1 rounded-full">
              <img
                src={product.logo}
                alt={`${product.title} logo`}
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="font-medium tracking-wide mx-4 leading-11">
              {product.title}
            </div>
          </div>
          <div className="w-full h-60 rounded-xl my-4 bg-[#101010]/65 cursor-pointer hover:opacity-90 transition-opacity">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-xl"
              onClick={() => openImageModal(product.image, product.title)}
            />
          </div>
          <div className="w-full text-sm">{product.description}</div>
          <a href={product.link} className="text-xs text-font-primary">
            了解更多
          </a>
        </div>
      ))}
      
      {/* 图片预览模态框 */}
      <ImageModal
        isOpen={modalState.isOpen}
        imageUrl={modalState.imageUrl}
        imageAlt={modalState.imageAlt}
        onClose={closeImageModal}
      />
    </div>
  );
};

export default ProductsList;
