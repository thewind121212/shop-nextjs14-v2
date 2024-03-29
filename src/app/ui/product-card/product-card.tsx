"use client";
import { useState, useRef } from "react";
import { removeDiacritics } from "@/app/utils/product.utils";
import AddCartQuick from "./addCartQuick";
import WishlistBtn from "./wishlistBtn";
import Image from "next/image";
import clsx from "clsx";
import { roboto } from "../font";
import Link from "next/link";
import ErrorImage from "../shared/error-image";
import { SmallImageCard } from "./card-image";

export default function ProductCard({ productItem }: any) {
  const [preview, setPreview] = useState<any>(productItem.thumbnail);
  const [imageLoadingState, setImageLoadingState] = useState<
    "loading" | "done" | "error" | "loadingManually"
  >("loading");
  const timerRef = useRef<any>(null);

  const revertPreview = () => {
    timerRef.current = setTimeout(() => {
      setPreview(productItem.thumbnail);
    }, 500);
  };

  const clearRevertPreview = () => {
    clearTimeout(timerRef.current);
  };

  const handerSetPreview = (item: any) => {
    if (item === preview) return;
    setPreview(item);
    setImageLoadingState("loadingManually");
  }

  const nameUrl = removeDiacritics(productItem.name);
  const productUrl = `/product/${nameUrl}-i.${productItem.id}`;

  return (
    <div
      className="group w-auto h-auto bg-white product-card"
      onMouseOut={revertPreview}
      onMouseOver={clearRevertPreview}
    >
      <div className="w-full relative overflow-hidden">
        <Link href={`${productUrl}`} className="mp">
          {imageLoadingState !== "error" ? (
            <Image
              className="w-full h-auto duration-500 group-hover:scale-[1.15] object-cover"
              width={300}
              height={0}
              src={preview}
              style={{ aspectRatio: "1/1", objectPosition: "top" }}
              onLoad={() => setImageLoadingState("done")}
              onError={() => setImageLoadingState("error")}
              alt="product-card-image"
            />
          ) : (
            <ErrorImage className="w-full h-auto duration-300 group-hover:scale-[1.15] object-cover" />
          )}
        </Link>
        <WishlistBtn />
        <div className="w-full h-auto absolute flex justify-start items-center p-[5px] bottom-[-100%] bg-white gap-[10px] duration-300 group-hover:bottom-0">
          {productItem.colorArray.map((item: any, index: any) => {
            const isActived =
              item === preview ? "border border-solid border-[#6083ca]" : "";
            return (
              <SmallImageCard key={index} item={item} setPreview={handerSetPreview} isActived={isActived} />
            );
          })}
        </div>

        {(imageLoadingState === "loading" || imageLoadingState === "loadingManually")   && (
          <div className="absolute w-full top-0 left-0  h-full z-[30] skeleton" />
        )}
      </div>
      <div className="p-[10px]">
        <div className="truncate mb-[5px] text-[14px] font-[500] hover:text-primary-green duration-300 relative">
          <Link href={`${productUrl}`}>{productItem.name}</Link>
          {imageLoadingState === "loading" && (
            <div className="absolute w-full top-0 left-0  h-full z-[30] skeleton" />
          )}
        </div>
        <div className="w-full h-auto flex justify-between items-center py-[1px]">
          <div
            className={clsx(
              "text-[14px] font-[400] relative",
              roboto.className
            )}
          >
            {imageLoadingState === "loading" && (
              <div className="absolute w-full top-0 left-0 min-w-[150px]  h-full z-[30] skeleton" />
            )}
            {productItem.price}đ
          </div>
          <AddCartQuick />
        </div>
      </div>
    </div>
  );
}
