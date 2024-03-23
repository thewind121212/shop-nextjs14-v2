'use client';
import { useState } from "react";
import Image from "next/image"
import ErrorImage from "../shared/error-image";


export function SmallImageCard({index,item, setPreview, isActived } :any) {
  const [SmallImageLoadingState, setSmallImageLoadingState] = useState<"loading" | "done" | "error">("loading");

    return (
              <div
                className={`${"items-center bg-inherit cursor-pointer relative flex h-[25px] justify-center w-[25px] overflow-hidden rounded-[3px]"} ${isActived}`}
                onClick={() => setPreview(item)}
              >
          {SmallImageLoadingState !== "error" ? (
                <Image
                  src={item}
                  alt={item}
                  width={40}
                  onLoad={() => setSmallImageLoadingState("done")}
                  onError={() => setSmallImageLoadingState("error")}
                  height={40}
                  className="w-auto h-auto object-contain"
                />
          ) : (
            <ErrorImage className="w-full h-auto duration-300 group-hover:scale-[1.15] object-cover" />
          )}

        {SmallImageLoadingState === "loading" && (
          <div className="absolute w-full top-0 left-0  h-full z-[30] skeleton" />
        )}

              </div>
    )
}