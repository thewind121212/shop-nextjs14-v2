"use client";

import { useState, useEffect, useRef } from "react";
import { fetchProducts } from "@/app/category/actions";
import ProductCard from "../product-card/product-card";
import FixUI from "../fix-ui";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CategorySort from "./category-sort";
import clsx from "clsx";

export default function CategoryMain({
  initalProducts,
  totalPage,
  totalProducts,
  sortBy,
}: any) {
  const { ref, inView } = useInView();
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState<any>(initalProducts);
  const [currentSortBy, setCurrentSortBy] = useState(sortBy);
  const jumpRef = useRef<HTMLDivElement>(null);


  console.log('rendered')


  useEffect(() => {
    console.log('useEffect')
    if (page === totalPage) return;

    if (currentSortBy !== sortBy) {
      setPage(0);
      setProducts([]);
      setCurrentSortBy(sortBy);
    }

    const fetch = async () => {
      const productsFetched = await fetchProducts({
        order: "all",
        page: page + 1,
        quantity: 20,
        breadCrumbArray: [],
        sortBy: sortBy,
      });
      setPage(page + 1);
      setProducts([...products, ...productsFetched.data]);
    };

    fetch();
  }, [inView, sortBy]);

  return (
    <div className="w-full h-auto mt-[40px] mb-[60px]">
      <FixUI />
      <div className="max-w-[1275px]  mx-auto w-full"
      ref={jumpRef} 
      >
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
        <div className="w-full h-auto min-h-[45px] flex justify-between items-center">
          <div className="font-medium text-[24px]">
            SỐ LƯỢNG SẢN PHẨM: {totalProducts} Sản Phẩm{" "}
          </div>
          <div className="cateogry-controller w-auto h-auto">

            <CategorySort sortBy={sortBy} jumpPoint={jumpRef.current?.offsetTop} />
          </div>
        </div>
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
            className={clsx('w-[100vw] max-w-[1275px] top-0 bg-white flex justify-center items-center mt-[20px]', {
                'h-[80vh]' : page === 0,
                'h-auto' : page !== 0
            })}
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
