"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetailGuideSize() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
      {isShow && (
        <div className="w-[100vw] h-[100vh] fixed bg-[#00000080] top-0 left-0 z-[42] p-[10%]"
        onClick={() => setIsShow(false)}
        >
          <div className="w-auto h-auto p-[24px] bg-white"
         onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/guides/1.jpeg"
              width={1200}
              height={0}
              className="w-full h-auto"
              alt="guild"
            />
          </div>
        </div>
      )}
      <div className="reconmend ml-[190px] text-[#2d9cdb] mp"
        onClick={() => setIsShow(true)} 
      >
        Gợi ý chọn size
      </div>
    </>
  );
}
