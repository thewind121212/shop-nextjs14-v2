

import ProductCard from "../product-card/product-card";
import Image from "next/image";

export default function RecommendedProducts({
  products,
}: {
  products: any;
}) {


  return (
    <div className="w-full h-auto mt-[40px] mb-[60px]">
      <div className="max-w-[1275px] mx-auto w-full">
        <div className="font-medium text-[24px]">SẢN PHẨM TƯƠNG TỰ</div>
          {
           products.length === 0 && <div className="w-full uppercase flex justify-center items-center text-[18px] my-[20px]"> Không có sản phầm nào </div>
          }
        <div className="grid gap-[24px] mt-[24px] app-c1-max:gap-[14px] grid-cols-4 xsm-productCard:grid-cols-1 md-productCard:grid-cols-2 px-[15px]">
          {products.length !==0 &&  products.map((productItem: any) => (
            <ProductCard key={productItem.id} productItem={productItem} />
          ))}

        </div>
      </div>
    </div>
  );
}
