"use client";


import { useEffect, useState } from "react";
import ProductCard from "../product-card/product-card";
import { getProductsRecentViewed } from "@/app/lib/actions/product.action";
import Image from "next/image";

export default function RecentViewedProducts({
  productId,
}: {
  productId: string;
}) {

  console.log(productId);
  const [viewedProducts, setViewedProducts] = useState<any>(null);

  useEffect(() => {
    const viewedProducts = JSON.parse(
      localStorage.getItem("viewedProduct") || "[]"
    );

    if (!viewedProducts === null) { 
        return setViewedProducts([]);
    }

    const fileteredProduct = viewedProducts.filter(
      (item: string) => item.toString() !== productId
    );

     getProductsRecentViewed(fileteredProduct).then((data) => {
        setViewedProducts(data);
    }) 
  },[]);


  return (
    <div className="w-full h-auto mt-[40px] mb-[60px]">
      <div className="max-w-[1275px] px-[15px] mx-auto w-full">
        <div className="font-medium text-[24px]">SẢN PHẨM ĐÃ XEM</div>
        <div className="grid gap-[24px] mt-[24px] app-c1-max:gap-[14px] grid-cols-4 xsm-productCard:grid-cols-1 md-productCard:grid-cols-2">
         {
            viewedProducts === null &&
        <div className="w-[100vw] max-w-[1275px] bg-white h-[600px] flex justify-center items-center ">
            <Image src="/icons/loading.gif" width={120} height={120} alt="loading" />
        </div>
         }

          {viewedProducts !== null && viewedProducts.length !==0 &&  viewedProducts.map((productItem: any) => (
            <ProductCard key={productItem.id} productItem={productItem} />
          ))}

          {
            viewedProducts !==null && viewedProducts.length === 0 && <div> Bạn chưa xem sản phẩm nào cả </div>
          }

        </div>
      </div>
    </div>
  );
}
