"use client";
import Image from "next/image";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import { useDebouncedCallback } from "use-debounce";
import { toggleNav } from "@/app/lib/redux/features/UI/uiSlice";
import { use } from "react";

export default function HamburgerIcon() {

  const dispatch = useAppDispatch();

  const toggleNavHandler = useDebouncedCallback(() => {
    dispatch(toggleNav(null));
    }, 200)

  

  return (
    <div className="w-[96px] h-auto block app-c1-min:hidden">
      <Image
        onClick={() => toggleNavHandler()}
        src="/icons/mobile_menu.png"
        width="30"
        height="0"
        alt="logo"
        className="w-auto h-auto"
      />
    </div>
  );
}
