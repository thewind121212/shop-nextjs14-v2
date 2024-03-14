"use client";
import { useState, useRef, useEffect } from "react";
import Loading from "@/app/loading";

export default function FixUI() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const timer = useRef<any>(null);

  useEffect(() => {
    if (window.innerWidth < 877) {
      window.scrollTo(0, 0);
    }
    const renderPlaceholder = () => {
      const headerPlaceholder = document.getElementById("header-placeholder");
      const header = document.getElementById("main-header");
      headerPlaceholder?.setAttribute(
        "style",
        `height: ${header?.clientHeight}px`
      );
      setIsLoading(false);
    };
    renderPlaceholder();

    window.addEventListener("resize", () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        renderPlaceholder();
      }, 100);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  });

  return isLoading && <Loading />;
}
