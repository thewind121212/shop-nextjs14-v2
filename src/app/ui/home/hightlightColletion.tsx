import Image from "next/image";

export default function HightlightCollection() {
  return (
    <div className="w-[100vw] flex justify-center items-center mt-[20px]">
      <div className="max-w-[1275px] w-100vw scale-[95%] duration-300 hover:scale-[100%]">
        <Image
          src="/dummy/home/collections-carousel/3.png"
          width={1275}
          height={0}
          alt="hightlight-collection"
        />
      </div>
    </div>
  );
}
