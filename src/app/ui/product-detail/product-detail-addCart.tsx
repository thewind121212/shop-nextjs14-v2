import Image from "next/image"

export default function ProductDetailAddCart() {
    return (
        <div className="product interact w-full flex justify-start items-center gap-[20px] mt-[1rem] small-screen-400:flex-wrap ">
        <div className="buy now w-[220px] h-[50px] flex justify-center items-center bg-primary-green small-screen-400:w-[100vw] text-white uppercase">
          <span>mua ngay</span>
        </div>
        <div className="add cart h-[50px] w-[220px] flex justify-center items-center gap-[5px] bg-[#003644] small-screen-400:w-[100vw] text-white opacity-[0.6] text-nowrap">
          <Image
            height={20}
            width={20}
            className="w-auto h-auto"
            src="/icons/cart.png"
            alt=""
          />
          <span>thêm vào giỏ hàng</span>
        </div>
      </div>
    )
}