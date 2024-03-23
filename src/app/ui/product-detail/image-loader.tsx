"use client";
import { useState } from "react";
import ErrorImage from "../shared/error-image";
import Image from "next/image";
import clsx from "clsx";

export function BigDetailImge({ image, setIsOverlayShow }: any) {
  const [imageLoadingState, setImageLoadingState] = useState<
    "loading" | "done" | "error"
  >("loading");

  return (
    <div className="h-full relative" style={{ aspectRatio: "1/1" }}>
      {imageLoadingState !== "error" ? (
        <Image
          src={image}
          width={800}
          height={0}
          className="w-full h-full focus:outline-none object-contain"
          onLoad={() => setImageLoadingState("done")}
          onError={() => setImageLoadingState("error")}
          alt=""
          onClick={() => setIsOverlayShow(true)}
        />
      ) : (
        <ErrorImage className="w-full h-auto duration-300 group-hover:scale-[1.15] object-cover" />
      )}
      {imageLoadingState === "loading" && (
        <div
          className="absolute w-full h-full top-0 left-0  z-[30] skeleton"
          style={{ aspectRatio: "1/1" }}
        />
      )}
    </div>
  );
}

export function ImageSlider({
  selectedImage,
  index,
  setSelectedImage,
  image,
}: any) {
  const [imageLoadingState, setImageLoadingState] = useState<
    "loading" | "done" | "error"
  >("loading");

  return (
    <div
      className={clsx("border-[2px] relative", {
        "border-primary-green": selectedImage === index,
        "border-transparent": selectedImage !== index,
      })}
      onClick={() => setSelectedImage(index)}
    >


      {imageLoadingState !== "error" ? (
      <Image
        src={image}
        width={120}
        height={60}
        className="w-full h-auto focus:outline-none object-cover"
        onLoad={() => setImageLoadingState("done")}
        onError={() => setImageLoadingState("error")}
        style={{ aspectRatio: "1/1" }}
        alt=""
      />
      ) : (
        <ErrorImage className="w-full h-auto duration-300 group-hover:scale-[1.15] object-cover" />
      )}

      {imageLoadingState === "loading" && (
        <div
          className="absolute w-full h-full top-0 left-0  z-[30] skeleton"
          style={{ aspectRatio: "1/1" }}
        />
      )}
    </div>
  );
}

export function SizeImge ({colorValue, colorkey,  productItem, selectedType, selectColorHandler, } : any) {

  const [imageLoadingState, setImageLoadingState] = useState<'loading' | 'done' | 'error'>('loading')

  return (
            <div
              className={clsx(
                "color-item w-[45px] app-c1-max:w-[90px] app-c1-max:h-auto h-auto min-h-[45px] max-h-auto border-[2px] mb-[12px] border-primary-green duration-200 relative",
                {
                  "border-transparent": colorkey !== selectedType?.color,
                }
              )}
              onClick={() => selectColorHandler(colorkey)}
            >
              <Image
                src={colorValue.colorImage}
                width={100}
                height={45}
                onLoad={() => setImageLoadingState("done")}
                onError={() => setImageLoadingState("error")}
                className="w-auto h-auto object-fill"
                alt="color-image"
              />

        {
          imageLoadingState === "loading" && (
            <div
              className="absolute w-full h-full top-0 left-0  z-[30] skeleton"
            />
          )
        }
            </div>
  )
}