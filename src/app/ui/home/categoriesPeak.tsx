import React from "react";
import Image from "next/image";

const recommmendCateogyContent = [
  {
    id: 1,
    header: "ÁO KHOÁC",
    content: "Áo khoác thời trang Nam/Nữ",
    icon: "/icons/categories-menu-icons/khoac.png",
  },
  {
    id: 2,
    header: "ĐỒ NAM",
    content: "Áo thun, sơ mi, quần dài, sort...",
    icon: "/icons/categories-menu-icons/nam.png",
  },
  {
    id: 3,
    header: "ĐỒ NỮ",
    content: "Áo quần, chân váy, đầm, yếm...",
    icon: "/icons/categories-menu-icons/nu.png",
  },
  {
    id: 4,
    header: "ĐỒ UNISEX",
    content: "Áo thun, sơ mi, áo khoác UNISEX",
    icon: "/icons/categories-menu-icons/unisex.png",
  },
  {
    id: 5,
    header: "PHỤ KIỆN",
    content: "Balo, túi xách, nón, thắt lưng, ví...",
    icon: "/icons/categories-menu-icons/phukien.png",
  },
  {
    id: 6,
    header: "#TOTODAY",
    content: "Sản phẩm được TOTODAY đề xuất",
    icon: "/icons/categories-menu-icons/totoday.png",
  },
];


export default function CategoriesPeak() {
  return (
    <div className="max-w-[1275px] h-auto px-[15px]">
      <div className="w-full mt-1 flex justify-center items-center mb-[16px]">
        <hr className="h-[3px] w-[50px] bg-black" />
        <p className="text-2xl mx-[8px] font-medium">BẠN ĐANG TÌM KIẾM?</p>
        <hr className="h-[3px] w-[50px] bg-black" />
      </div>
      <div className="w-full h-auto py-[30px] px-[20px] bg-white flex justify-center items-center flex-wrap gap-y-[14px] ">
        {recommmendCateogyContent.map((item) => (
                <div key={(item.icon + item.id)} className="custom-home:max-w-[200px] min-w-[150px] h-[180px] p-[8px] w-[85vw]">
                            <div className="group w-auto h-[180px] rounded-md bg-[#e5ebec] flex flex-col justify-center items-center duration-200 hover:bg-[#0F4656]">
                                <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center group-hover:bg-white duration-200">
                                <Image width="30" height="0" src={item.icon} alt={item.content} className="w-auto" />
                                </div>
                                <h1 className="text-[#00364] text-[16px] mt-[15px] duration-200 group-hover:text-[#ffffff]">{item.header}</h1>
                                <p className="text-[#00364] text-[14px] text-center duration-200 group-hover:text-[#ffffff]">{item.content}</p>
                            </div>
                </div>
        ))}
      </div>
    </div>
  );
}
