import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const dummyHeadNews = [
  {
    id: "news-1-head",
    image: "/dummy/home/news/headnews1.jpeg",
    title: "🧧 KHAI XUÂN NHƯ Ý - NHẬN NGAY LÌ XÌ 199K",
  },
  {
    id: "news-2-head",
    image: "/dummy/home/news/headnews2.jpeg",
    title: "🧧TẾT GIÁP THÌN HÁI LỘC LINH ĐÌNH| RINH NGAY LÌ XÌ 500K🎉",
  },
  {
    id: "news-3-head",
    image: "/dummy/home/news/headnews3.jpeg",
    title: "HÀNG NHIỀU QUÁ - SỐP MỆT RỒI - SALE HẾT NGHỈ TẾT",
  },
];

const dummyNewsList = [
  {
    type: "promotion news",
    header: "tin khuyến mãi",
    news: [
      {
        id: "news-1",
        image: "/dummy/home/news/headnews1.jpeg",
        createdDate: "19/02/2024",
        title: "🧧 KHAI XUÂN NHƯ Ý - NHẬN NGAY LÌ XÌ 199K",
      },
      {
        id: "news-2",
        image: "/dummy/home/news/headnews2.jpeg",
        createdDate: "24/01/2024",
        title: "🧧TẾT GIÁP THÌN HÁI LỘC LINH ĐÌNH| RINH NGAY LÌ XÌ 500K🎉",
      },
    ],
  },
  {
    type: "fashion news",
    header: "TIN TỨC-THỜI TRANG",
    news: [
      {
        id: "news-3",
        image: "/dummy/home/news/news3.png",
        createdDate: "24/04/2023",
        title: "BLUE COLLECTION - GAM MÀU CỦA THỜI ĐẠI",
      },
      {
        id: "news-4",
        image: "/dummy/home/news/news4.png",
        createdDate: "21/04/2023",
        title: "RED COLLECTION - BIỂU TƯỢNG NIỀM ĐAM MÊ NHIỆT HUYẾT",
      },
    ],
  },
  {
    type: "brand news",
    header: "Chính Sách Thương Hiệu",
    news: [
      {
        id: "news-5",
        image: "/dummy/home/news/news5.jpeg",
        createdDate: "03/01/2023",
        title: "CHÍNH SÁCH THÀNH VIÊN",
      },
      {
        id: "news-6",
        image: "/dummy/home/news/news6.jpeg",
        createdDate: "02/01/2023",
        title: "CHÍNH SÁCH SẢN PHẨM",
      },
    ],
  },
];

export default function News() {
  return (
    <div className="container mx-auto max-w-[1290px] mt-[50px]">
      <div className="grid grid-cols-3 px-[16px]">
        <div className="text-[26px] max-[768px]:text-[20px] col-span-2 max-[768px]:col-span-3 max-[768px]:text-center  ">
          TIN TỨC NỔI BẬT
        </div>
        <div className="flex justify-end uppercase max-[768px]:hidden  ">
          <div
            className="w-[185px] h-[54px] min-w-[64px] text-base py-[8px] px-[15px] border rounded-[3px] flex
           justify-center items-center border-black hover:text-white hover:bg-[#00B156] hover:border-[#00B156]
            duration-300 cursor-pointer  "
          >
            Xem tất cả
          </div>
        </div>
      </div>
      {/* first block */}
      <div className="w-full h-auto flex justify-center items-center gap-[20px] mt-[20px] px-[8px] md:flex-row flex-col">
        {dummyHeadNews.map((item) => (
          <div
            key={item.id}
            className="group relative w-auto h-auto overflow-hidden"
          >
            <Image
              className="group-hover:scale-[1.15] duration-300"
              src={item.image}
              alt="news"
              width={525}
              height={0}
            />
            <div className="w-full text-left p-[13px] text-[13px] absolute bottom-0 left-0 text-white truncate text-news font-[500]">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      {/* second block */}
      <div className="max-[1290px] grid grid-cols-3 h-auto gap-[20px] px-[8px] app-c1-max:grid-cols-1 max-md:max-w-[538px] max-md:m-auto mt-[40px]">
        {dummyNewsList.map((item) => (
          <div
            key={item.type}
            className="w-auto h-auto col-span-1 flex flex-col justify-center items-center"
          >
            <div className="text-left uppercase">{item.header}</div>
            {item.news.map((newsItem) => (
              <div key={newsItem.id} className="w-full flex flex-col mt-[20px]">
                <div className="bg-white w-full h-auto p-[15px] news-card duration-500 hover:translate-y-[-5px] mp">
                  <div className="flex justify-start items-start gap-[16px] uppercase">
                    <Image
                      src={newsItem.image}
                      alt="news"
                      width={525}
                      height={0}
                      className="max-w-[161px] w-auto h-auto"
                    />
                    <div className="flex justify-start items-start flex-col gap-[5.6px] max-h-[94px] overflow-hidden text-clip">
                      <span className="text-[11px] text-primary-green">
                        {item.header}
                      </span>
                      <span className="text-[14px]">{newsItem.title}</span>
                    </div>
                  </div>
                  <div className="flex w-full justify-between items-center mt-[8px]">
                    <span className="text-[14px]">{newsItem.createdDate}</span>
                    <div className="flex justify-center items-center gap-[4px]">
                      <span className="text-[16px] text-[#757575]">
                        Đọc thêm
                      </span>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
