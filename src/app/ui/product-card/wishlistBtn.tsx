import { FaRegHeart } from "react-icons/fa6";

export default function WishlistBtn() {
    return (
            <div className="w-[19px] h-[19px] absolute flex justify-center items-center right-[7px] bottom-[5px] z-30 group-hover:bottom-[40px] duration-300 wishlist-btn">
                    <FaRegHeart className="text-[13px]" />
            </div>        
    )

}