import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import clsx from "clsx";

export default function ProductDetailDescription({
  description,
}: {
  description: string;
}) {
  const [isDescriptionShow, setIsDescriptionShow] = useState<boolean>(false);

  return (
    <div className="max-w-[1110px] w-[100vw] mt-[25px] mx-auto relative px-[12px]">
      <div
        className="w-[45px] text-white flex justify-center items-center h-[45px] border bg-primary-green bottom-[-21px] absolute rounded-[50%] left-[50%] translate-x-[-50%] opacity-[80%] mp"
        onClick={() => setIsDescriptionShow(!isDescriptionShow)}
      >
        {isDescriptionShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div className="h-auto w-[180px] px-[4px] font-medium flex justify-center items-center rounded-md bg-white py-[8px] border-primary-green text-primary-green border">
        Chi Tiết Sản Phẩm
      </div>
      <div className="">
        <div
          className={clsx(
            "mt-[16px] border p-[12px] bg-white text-[14px] rounded-[3px] border-white duration-[350ms] overflow-scroll",
            {
              "h-[200px]": !isDescriptionShow,
              "h-[600px]": isDescriptionShow,
            }
          )}
        >
          {description === null ? (
            <div className="w-full text-center text-[20px] mt-[70px]">
              Sản Phẩm Hiện Tại Không Có Mô Tả
            </div>
          ) : (
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}
