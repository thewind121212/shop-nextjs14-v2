import Image from "next/image"


export default function AddCartQuick() {
    return (
        <div className="flex justify-center items-center w-auto h-auto px-[5px] rounded-[3px] text-[#003644] border border-[#003644]">
            <Image src="/icons/Addcart.svg" height={12} width={11} alt="addToCardQUICK" />
            <p className="text-[12px]">Thêm</p>
        </div>
    )
}