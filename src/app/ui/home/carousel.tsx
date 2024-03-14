"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export function TopCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[1200px]"
        id="top-swiper"
      >
        <SwiperSlide>
          <div className="pb-[50px]">
            <Image
              width={1200}
              height={472}
              src="/dummy/home/top-slider/1.jpeg"
              alt="nature-1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1200}
            height={472}
            src="/dummy/home/top-slider/2.jpeg"
            alt="nature-2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1200}
            height={472}
            src="/dummy/home/top-slider/3.jpeg"
            alt="nature-3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1200}
            height={472}
            src="/dummy/home/top-slider/4.jpeg"
            alt="nature-4"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function PolicyCarousel() {
  return (
    <div className="w-[100vw] h-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[1415px] mt-[80px] mb-[40px] pb-[40px]"
        id="top-swiper"
      >
        <SwiperSlide>
          <div className="w-full h-auto">
            <Image
              src="/policy/policy1.jpg"
              alt="policy2"
              width={1415}
              height={0}
              style={{ objectFit: "contain", height: "auto" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-auto">
            <Image
              src="/policy/policy2.jpeg"
              alt="policy2"
              width={1415}
              height={0}
              style={{ objectFit: "contain", height: "auto" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export function MiddleCarousel() {
  const dataArray = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <div className="w-[100vw] h-auto overflow-hidden mt-[40px] max-w-[1780px] m-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper w-[220vw] middle-carousel:w-[3935px] pb-[40px] h-auto translate-x-[-60vw] middle-carousel:translate-x-[-26.3%] max-w-[3935px]:"
        id="middle-swiper"
      >
        {dataArray.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {({ isActive, isNext, isPrev }) => {
                if (!isActive && !isNext && !isPrev) {
                  return (
                    <Image
                      className="scale-[80%] translate-x-[-20%] rounded-2xl"
                      width={1200}
                      height={472}
                      src={`/dummy/home/collections-carousel/${index + 1}.png`}
                      alt={`collection-${index + 1}`}
                      style={{ objectFit: "cover" }}
                    />
                  );
                } else if (isActive) {
                  return (
                    <Image
                      className="scale-[80%] translate-x-[20%] rounded-2xl"
                      width={1200}
                      height={472}
                      src={`/dummy/home/collections-carousel/${index + 1}.png`}
                      alt={`collection-${index + 1}`}
                      style={{ objectFit: "cover" }}
                    />
                  );
                }
                return (
                  <Image
                    className="rounded-2xl"
                    width={1200}
                    height={472}
                    src={`/dummy/home/collections-carousel/${index + 1}.png`}
                    alt={`collection-${index + 1}`}
                    style={{ objectFit: "cover" }}
                  />
                );
              }}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
