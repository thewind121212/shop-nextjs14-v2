"use state";
import { useRef, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductDetailOverlay({
    galleryImages,
    selectedImage,
    closeOverlay,
    }: {
    galleryImages: string[];
    selectedImage: number;
    closeOverlay: () => void;
}) {
  const elementRef = useRef(null); 
  const overlaySliderRef = useRef<any>(null); 
  
  const [coorinate, setCoorinate] = useState<any>({
    x: 0,
    y: 0,
  });

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleHover = (event: any) => {
    if (!elementRef.current) return;
    const elementRect = event.target.getBoundingClientRect(); // Get the element's position and dimensions
    const x = ((event.clientX - elementRect.left) / elementRect.width) * 100; // Get the horizontal coordinate
    const y = ((event.clientY - elementRect.top) / elementRect.height) * 100; // Get the horizontal coordinate
    if (x < 0 || x > 100 || y < 0 || y > 100) return;
    setCoorinate({ x, y });
    // Calculate cursor offset relative to the element's top-left corner
  };


  //event is onClick on div event 
  const changeSlideHandler = (event : any  ,direction: "next" | "prev") => {
    event.stopPropagation()
    if (direction === "next") {
      overlaySliderRef.current.swiper.slideNext()
    }

    if (direction === "prev") {
      overlaySliderRef.current.swiper.slidePrev()
    }

  }


  return (
    <div
      className="bg-[#00000080] fixed w-[100vw] h-[100vh] top-0 left-0 z-40 flex justify-center items-center"
      onClick={closeOverlay}
    >
      <div className="w-[40px] h-[40px] absolute right-[10px] top-[50%] translate-y-[-50%] bg-black z-[50] flex justify-center items-center"
      onClick={(event) => changeSlideHandler(event, "next")}
      >
        <FaArrowRight className="text-white"/>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        initialSlide={selectedImage}
        autoplay={{
          delay: 1000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        ref={overlaySliderRef} 
        className="product-detail-overlay-slider w-full h-full"
      >
        {galleryImages.map((image) => {
          return (
            <SwiperSlide
              key={"productDetailOverlay" + image}
              className="relative w-full h-full flex justify-center items-center"
            >
              <div
                className="w-[40vw] app-c1-max:w-[60vw] overlay-screen1:w-[48vw] overlay-screen2:w-[70vw] bg-cover relative"
                ref={elementRef}
                onMouseOver={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                onMouseMoveCapture={handleHover}
                onClick={(event) => event.stopPropagation()}
                style={{
                  backgroundImage: `url("${image}")`,
                  backgroundSize: "900px",
                  backgroundPosition: `${coorinate.x}% ${coorinate.y}%`,
                  aspectRatio: "1/1",
                }}
              >
                <Image
                  className={clsx("w-full h-auto bg-white duration-200", {
                    "opacity-100": !isMouseOver,
                    "opacity-0": isMouseOver,
                  })}
                  width={1200}
                  height={600}
                  src={image}
                  alt="testing"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
        <div className="w-[40px] h-[40px] absolute left-[10px] top-[50%] translate-y-[-50%] bg-black z-[50] flex justify-center items-center"
          onClick={(event) => changeSlideHandler(event, "prev")}
        >
            <FaArrowLeft className="text-white"/>
        </div>
    </div>
  );
}
