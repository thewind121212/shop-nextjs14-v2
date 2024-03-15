import Image from "next/image";

export default function ProductDetailPolicy() {
  return (
    <div className="w-full py-[12px] grid grid-cols-3 border-y border-dashed border-[#ddd] small-screen-400:grid-cols-1  small-screen-400:gap-[10px]">
      <div className="flex justify-start items-center gap-[13px] small-screen-400:justify-center">
        <Image src="/icons/product-detail/1.png" width={16} height={0} className="w-[16px] h-auto" alt="product-detail-policy" />
        <span>90 ngày bảo hành</span>
      </div>
      <div className="pl-[8px] flex justify-center items-center gap-[13px] border-x border-[#ddd] border-dashed small-screen-400:justify-center small-screen-400:pl-0">
        <Image src="/icons/product-detail/2.png" width={16} height={0} className="w-[16px] h-auto" alt="product-detail-policy" />
        <span>90 ngày bảo hành</span>
      </div>
      <div className="flex justify-end items-center gap-[13px] pl-[8px] small-screen-400:justify-center small-screen-400:pl-0">
        <Image src="/icons/product-detail/3.webp" width={16} height={0} className="w-[16px] h-auto" alt="product-detail-policy" />
        <span>90 ngày bảo hành</span>
      </div>
    </div>
  );
}
