import Image from "next/image";

export default function Cart() {
    return (
      <div className="w-16 h-12 m-1 relative flex justify-center items-center">
        <div>
          <Image
            src="/icons/cart.png"
            width={24}
            height={24}
            alt="shop-cart"
            style={{ cursor: "pointer", objectFit: "cover" }}
          />
        </div>
        <div className="absolute w-5 h-5 text-white bg-red-500 text-xs flex justify-center content-center leading-5 font-medium right-[11px] top-[7px] rounded-full">0</div>
      </div>
    );
  }