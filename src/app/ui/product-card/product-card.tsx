"use client";
import { useState, useRef } from "react";
import { removeDiacritics } from "@/app/utils/product.utils";
import AddCartQuick from "./addCartQuick";
import WishlistBtn from "./wishlistBtn";
import Image from "next/image";
import clsx from "clsx";
import { roboto } from "../font";
import Link from "next/link";

export default function ProductCard({ productItem }: any) {
  const [preview, setPreview] = useState<any>(productItem.thumbnail);
  const timerRef = useRef<any>(null);

  const revertPreview = () => {
    timerRef.current = setTimeout(() => {
      setPreview(productItem.thumbnail);
    }, 500);
  };

  const clearRevertPreview = () => {
    clearTimeout(timerRef.current);
  };

  const nameUrl = removeDiacritics(productItem.name);

  const productUrl = `/product/${nameUrl}-i.${productItem.id}`;

  return (
    <div
      className="group w-auto h-auto bg-white product-card"
      onMouseOut={revertPreview}
      onMouseOver={clearRevertPreview}
    >
      <div className="w-full relative overflow-hidden">
        {productItem.colorArray.map((item: any, index: number) => (
          <Link href={`${productUrl}`} className="mp" key={index + item[index]}>
            <Image
              key={index + item[index]}
              className="w-full h-auto hidden duration-300 group-hover:scale-[1.15]"
              width={300}
              height={0}
              src={item}
              alt="product-card-image"
            />
          </Link>
        ))}

        <Link href={`${productUrl}`} className="mp">
          <Image
            className="w-full h-auto duration-300 group-hover:scale-[1.15] object-cover"
            width={300}
            height={0}
            src={preview}
            style={{aspectRatio: "1/1", objectPosition: "top"}}
            alt="product-card-image"
          />
        </Link>
        <WishlistBtn />
        <div className="w-full h-auto absolute flex justify-start items-center p-[5px] bottom-[-100%] bg-white gap-[10px] duration-300 group-hover:bottom-0">
          {productItem.colorArray.map((item: any, index: any) => {
            const isActived =
              item === preview ? "border border-solid border-[#6083ca]" : "";
            return (
              <div
                className={`${"items-center bg-inherit cursor-pointer flex h-[25px] justify-center w-[25px] overflow-hidden rounded-[3px]"} ${isActived}`}
                key={index}
                onClick={() => setPreview(item)}
              >
                <Image
                  src={item}
                  alt={item}
                  width={40}
                  height={0}
                  className="w-full h-auto object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-[10px]">
        <div className="truncate mb-[5px] text-[14px] font-[500] hover:text-primary-green duration-300">
          <Link href={`${productUrl}`}>{productItem.name}</Link>
        </div>
        <div className="w-full h-auto flex justify-between items-center py-[1px]">
          <div className={clsx("text-[14px] font-[400]", roboto.className)}>
            {productItem.price}đ
          </div>
          <AddCartQuick />
        </div>
      </div>
    </div>
  );
}
