"use client";
import ProductCard from "../product-card/product-card";
import Link from "next/link";

const hotProductsNav = [
  {
    id: "hotP1",
    name: "Áo Khoác",
    link: "/ao-khoac",
  },
  {
    id: "hotP2",
    name: "Đồ Nam",
    link: "/do-nam",
  },
  {
    id: "hotP3",
    name: "Đồ Nữ",
    link: "/do-nu",
  },
  {
    id: "hotP4",
    name: "Unisex",
    link: "/unisex",
  },
  {
    id: "hotP5",
    name: "Phụ Kiện",
    link: "/phu-kien",
  },
];

export default function HotProduct({ hotProducts }: { hotProducts: any }) {
  return (
    <div className="w-full h-auto mt-[40px] mb-[60px]">
      <div className="max-w-[1275px] px-[15px] mx-auto w-full">
        <div className="w-full flex justify-between items-center max-md:flex-col max-md:gap-[12px]">
          <Link href="/hot-products" className="text-[24px] uppercase font-[500]">SẢN PHẨM NỔI BẬT</Link>
          <div className="flex justify-center items-center gap-[15px] flex-wrap">
            {hotProductsNav.map((item) => (
              <div
                key={item.id}
                className="text-[0.7rem] uppercase cursor-pointer py-[7px] px-[15px] rounded-[2px] border border-[#9E9E9E] text-[#9E9E9E] hover:bg-[#00B156] duration-300 hover:text-white hover:border-primary-green"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        {/* write here  */}
        <div className="grid gap-[24px] mt-[24px] app-c1-max:gap-[14px] grid-cols-4 xsm-productCard:grid-cols-1 md-productCard:grid-cols-2">
          {hotProducts.map((productItem: any) => (
            <ProductCard key={productItem.id} productItem={productItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
