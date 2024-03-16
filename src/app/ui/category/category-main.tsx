"use client";

import { useState, useEffect } from "react";
import { fetchProducts } from "@/app/category/actions";
import ProductCard from "../product-card/product-card";
import FixUI from "../fix-ui";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function CategoryMain({ initalProducts, totalPage, totalProducts }: any) {
  const { ref, inView} = useInView();
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<any>(initalProducts);


  useEffect(() => {
    if (page === totalPage) return;

    const fetch = async () => {
      const productsFetched = await fetchProducts({
        order: "all",
        page: page + 1,
        quantity: 20,
        breadCrumbArray: [],
      });
      setPage(page + 1);
      setProducts([...products, ...productsFetched.data]);
    };

    fetch();
  }, [inView]);


  return (
    <div className="w-full h-auto mt-[40px] mb-[60px]">
      <FixUI />
      <div className="max-w-[1275px]  mx-auto w-full">
        <div className="flex justify-start items-center mb-[12px]">
          <Link href="/" className="">
            Trang Chủ
          </Link>
          <div className="mx-[10px]" onClick={() => setPage(33)}>
            /
          </div>
          <Link href="/category" className="">
            Tất Cả Sản Phẩm
          </Link>
        </div>
        <div className="font-medium text-[24px]">SỐ LƯỢNG SẢN PHẨM: {totalProducts} Sản Phẩm </div>
        <div className="grid gap-[16px] px-[15px] mt-[24px] app-c1-max:gap-[14px] grid-cols-4 xsm-productCard:grid-cols-1 md-productCard:grid-cols-2">
          {products.length !== 0 &&
            products.map((productItem: any, index: any) => (
              <ProductCard
                key={productItem.id + productItem.name + index}
                productItem={productItem}
              />
            ))}
        </div>
        {page !== totalPage && (
          <div
            className="w-[100vw] max-w-[1275px] top-0 bg-white h-auto flex justify-center items-center mt-[20px]"
            ref={ref}
          >
            <Image
              src="/icons/loading.gif"
              width={90}
              height={90}
              alt="loading"
            />
          </div>
        )}
      </div>
    </div>
  );
}
