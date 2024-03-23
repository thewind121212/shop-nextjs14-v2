import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

function CategorySort({
  sortBy,
  jumpPoint,
}: {
  sortBy?: string;
  jumpPoint?: number;
}) {
  const orderMenuRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [orderByStatusText, setOrderByStatusText] = useState<string>("SẮP XẾP THEO");
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    switch (sortBy) {
      case "default":
        return setOrderByStatusText("SẮP XẾP THEO");
      case "sortByLike":
        return setOrderByStatusText("Bán chạy nhất");
      case "sortByNewest":
        return setOrderByStatusText("Mới nhất");
      case "sortByPriceASC":
        return setOrderByStatusText("Giá: Thấp - Cao");
      case "sortByPriceDES":
        return setOrderByStatusText("Giá: Cao - Thấp");
    }
  }, [sortBy]);

  const onOrderHandler = (payload: string) => {
    if (sortBy === payload) return;
      window.scrollTo({
        top: 450,
        behavior: "smooth",
      });
    if (payload === "default") {
      setIsOpen(false);
      router.push(`${pathName}`, { scroll: false});
      return;
    }
    router.push(`${pathName}?sortby=${payload}`, { scroll: false}); 
  };

  const toggleOrderMenu = (payload: string) => {
    if (payload === "mouseReEnter") {
        setIsOpen(true);
      clearTimeout(orderMenuRef.current);
    }
    if (payload === "mouseLeave") {
      orderMenuRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 350);
    }
  };

  console.log("sortBy", orderByStatusText)

  return (
        <div className="w-auto  basis-4/12"
        onMouseLeave={() => toggleOrderMenu("mouseLeave")}
        onMouseOver={() => toggleOrderMenu("mouseReEnter")}
        >
          <div className="w-full h-1/2 flex items-center justify-end gap-[15px]">
            <div className="m-2 w-[30%] flex justify-center items-center">
              <div className="text-[#00b156] flex whitespace-nowrap relative cursor-pointer">
                <div
                  className="uppercase flex justify-center items-center gap-[3px]"
                  style={
                    sortBy !== "default"
                      ? {
                          border: "1.5px solid #00b156",
                          padding: "0px 4px",
                          borderRadius: "4px",
                        }
                      : {}
                  }
                >
                  {orderByStatusText}
                  <span className="w-[19px] h-[19px] inline-block">
                    {sortBy !== "default" ? (
                      <svg
                        onClick={() => onOrderHandler("default")}
                        className="h-[21px] w-[21px] cursor-pointer text-[#00b156]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={() => setIsOpen(!isOpen)}
                        aria-hidden="true"
                        className="w-[19px] h-[19px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <div
                  className="w-auto h-0 absolute z-10 bg-[#ffffff] top-[30px] duration-200 overflow-hidden left-[0px]"
                  style={{
                    boxShadow: "2px 2px 11px hsla(0,3%,7%,.1)",
                    borderRadius: "6px",
                    height: isOpen ? "192px" : "0px",
                  }}
                >
                  <ul className="w-auto h-auto  text-[#000000] flex flex-col z-10 gap-[16px] m-[24px] cursor-pointer rounded-md">
                    <li
                      className="hover:text-[#00b156] duration-200"
                      onClick={() => onOrderHandler("sortByLike")}
                    >
                      Bán chạy nhất
                    </li>
                    <li
                      className="hover:text-[#00b156] duration-200"
                      onClick={() => onOrderHandler("sortByNewest")}
                    >
                      Mới nhất
                    </li>
                    <li
                      className="hover:text-[#00b156] duration-200"
                      onClick={() => onOrderHandler("sortByPriceASC")}
                    >
                      Giá: Thấp - Cao
                    </li>
                    <li
                      className="hover:text-[#00b156] duration-200"
                      onClick={() => onOrderHandler("sortByPriceDES")}
                    >
                      Giá: Cao - Thấp
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default CategorySort;
