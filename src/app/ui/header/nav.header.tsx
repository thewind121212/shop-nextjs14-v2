"use client";
import clsx from "clsx";
import { useState, useRef, use, useEffect } from "react";
import DesktopCategoriesMenu from "../categories-menu/desktop/desktop-categories-menu";
import MobileCategoriesNav from "../categories-menu/mobile/mobile-categories-menu";
import Link from "next/link";
const dummyNavLink = [
  { name: "New arrivals", link: "/new-arrivals" },
  { name: "SẢN PHẨM", link: "/category" },
  { name: "Bộ Sưu tập", link: "/collection" },
  { name: "feedback", link: "/feedbacker" },
];

export default function Nav({ categories }: any) {
  const pathName: any = [];
  const [isShow, setIsShow] = useState<boolean>(false);
  const timeRef = useRef<any>(null);

  const toggleNav = () => {
    clearTimeout(timeRef.current);
    setIsShow(true);
  };

  const toggleNavOff = (mouseAction: string) => {
    if (mouseAction === "leave") {
      timeRef.current = setTimeout(() => {
        setIsShow(false);
      }, 300);
    }
    if (mouseAction === "over") {
      clearTimeout(timeRef.current);
      setIsShow(true);
    }
  };

  return (
    <ul className="ml-[20px] items-center text-white grow text-[14px] hidden app-c1-min:flex">
      {dummyNavLink.map((link: any) => {
        const active = pathName.includes(link.link) ? true : false;
        if (link.link === "/category") {
          return (
            <div
              key={link.link}
              className="group flex justify-center items-center h-[77px] px-[10px] relative cursor-pointer"
              onClick={toggleNav}
            >
              <div className="absolute w-0 h-[6px] left-0 bottom-0 bg-primary-green duration-200 group-hover:w-full"></div>
              <div className="text-white w-auto uppercase">{link.name}</div>
              <DesktopCategoriesMenu
                categories={categories}
                isShow={isShow}
                closeNav={toggleNavOff}
              />
            </div>
          );
        }
        return (
          <Link
            href={link.link === "/new-arrivals" ? "/category" : link.link}
            key={link.link}
            className="group flex justify-center items-center h-[77px] px-[10px] relative cursor-pointer"
          >
            <div className="absolute w-0 h-[6px] left-0 bottom-0 bg-primary-green duration-200 group-hover:w-full"></div>
            <div
              className={clsx("text-white w-auto uppercase ", {
                hightLight: link.link === "/new-arrivals",
              })}
            >
              {link.name}
            </div>
          </Link>
        );
      })}
    </ul>
  );
}

export function MobileNav({ categories }: any) {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <ul className="w-[100vw] bg-white h-[54px] relative items-center text-white grow text-[14px] flex border-b-1 app-c1-min:hidden border-[#eee] z-40">
      {dummyNavLink.map((link: any) => {
        return (
          <div
            key={link.link}
            className="group flex justify-center items-center h-[54px] px-[10px] relative cursor-pointer"
          >
            <div className="absolute w-0 h-[6px] left-0 bottom-0 bg-primary-green duration-200 group-hover:w-full"></div>
            <div
              className={clsx("w-auto uppercase text-black", {
                hightLight: link.link === "/new-arrivals",
              })}
            >
              {link.name}
            </div>
          </div>
        );
      })}
      <MobileCategoriesNav categories={categories} />
    </ul>
  );
}
