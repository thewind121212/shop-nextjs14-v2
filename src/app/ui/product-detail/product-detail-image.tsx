"use client";
import { useState, useRef, useEffect, use } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useDebouncedCallback } from "use-debounce";
import { Swiper, SwiperSlide} from "swiper/react";
import ProductDetailSocialShare from "../social-share/productDetail-social";

import clsx from "clsx";
import ProductDetailOverlay from "./product-detail-overlay";


export default function ProductDetailImage({
  galleryImages,
  selectedColorIndex,
  totalSizes
}: {
  galleryImages: string[];
  selectedColorIndex: number | null;
  totalSizes: number;
}) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isOverlayShow, setIsOverlayShow] = useState<boolean>(false);
  const offset = (100 * selectedImage).toString();
  const SwipeRef = useRef<any>(null);
  const watchingImage = useRef<number>(0);


 useEffect(() => {
 if (selectedColorIndex !== null) {
    const targetColor = galleryImages.length - 1 - (totalSizes - selectedColorIndex - 1);
    setSelectedImage(targetColor);
    SwipeRef.current.swiper.slideTo(targetColor)
 } 

 if (selectedColorIndex === null) {
    setSelectedImage(watchingImage.current);
    SwipeRef.current.swiper.slideTo(watchingImage.current)
 }

 },[selectedColorIndex, galleryImages, totalSizes])



  const handleImageSelect = useDebouncedCallback(
    (direction: "next" | "prev") => {
    const firstSlide = 0
    const lastSlide = galleryImages.length - 1
    const prevSlide = selectedImage - 1
    const nextSlide = selectedImage + 1
    

      if (direction === "next") {
        if (nextSlide === galleryImages.length) {
            setSelectedImage(firstSlide);
            watchingImage.current = firstSlide 
            return SwipeRef.current.swiper.slideTo(firstSlide)
        }

        SwipeRef.current.swiper.slideTo(nextSlide)
        watchingImage.current = nextSlide 
        setSelectedImage(nextSlide);
      }
      if (direction === "prev" ) {
        if (prevSlide === - 1) {
            setSelectedImage(lastSlide);
            watchingImage.current = lastSlide 
            return SwipeRef.current.swiper.slideTo(lastSlide)
        }
        watchingImage.current = nextSlide 
        SwipeRef.current.swiper.slideTo(prevSlide)
        setSelectedImage(prevSlide);
      }
    },
    200
  );

  return (
    <div className="flex justify-start flex-col items-center w-[45%] h-auto pr-[3.75rem] focus:outline-none app-c1-max:w-[100%] app-c1-max:justify-center app-c1-max:pr-0">
       { isOverlayShow && <ProductDetailOverlay galleryImages={galleryImages} selectedImage={selectedImage} closeOverlay={() => setIsOverlayShow(false)}/>}
      <div className="preview h-auto w-full overflow-hidden relative focus:outline-none">
        <div
          className="absolute left-[10px] bg-[#0000004d] flex justify-center top-[50%] translate-y-[-50%] items-center  w-[30px] h-[30px] text-[#fff] z-30 mp text-[14px] focus:outline-none"
          onClick={() => handleImageSelect("prev")}
        >
          <FaArrowLeft className="w-[29px]" />
        </div>
        <div
          className={`w-auto h-auto flex justify-start items-center duration-[800ms] focus:outline-none`}
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {galleryImages.map((image) => {
            return (
              <Image
                key={image}
                src={image}
                width={1200}
                height={0}
                className="w-full h-full focus:outline-none object-contain"
                style={{ aspectRatio: "1/1" }}
                alt=""
                onClick={() => setIsOverlayShow(true)}
              />
            );
          })}
        </div>
        <div
          className="absolute right-[10px] bg-[#0000004d] flex justify-center top-[50%] translate-y-[-50%] items-center  w-[30px] h-[30px] text-[#fff] z-30 mp text-[14px]"
          onClick={() => handleImageSelect("next")}
        >
          <FaArrowRight className="w-[29px]" />
        </div>
      </div>
      <div className="gallery mt-[7px] w-full h-auto">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          autoplay={{
            delay: 1000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[]}
          className="product-detail-slider"
          ref={SwipeRef}
        >
          {galleryImages.map((image, index) => {
            return (
              <SwiperSlide key={image} className={clsx('border-[2px]', 
                {
                    "border-primary-green": selectedImage === index,
                    "border-transparent": selectedImage !== index,
                }
              )}
              onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  width={120}
                  height={60}
                  className="w-full h-auto focus:outline-none object-cover"
                  style={{ aspectRatio: "1/1" }}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <ProductDetailSocialShare />
    </div>
  );
}
