"use client";
import clsx from "clsx";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import { pushNotification } from "@/app/lib/redux/features/toast-notification/toast-notificationSlice";
import ProductDetailAddCart from "./product-detail-addCart";
import ProductDetailGuideSize from "./product-detail-guideSize";

export default function ProductDetailController({
  sortedColorKey,
  productItem,
  selectedType,
  selectColorHandler,
  selectSizeHandler,
  sizes,
  stock,
}: {
  sortedColorKey: string[];
  productItem: any;
  selectedType: { color: string | null; size: string | null } | null;
  selectColorHandler: (color: string) => void;
  selectSizeHandler: (size: string) => void;
  sizes: string[];
  stock: number;
}) {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<any>(1);
  const prechangeAmount = useRef<any>(1);
  const amountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    prechangeAmount.current = 1;
    setAmount(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stock]);

  const stockHandler = (value: any) => {
    if (selectedType?.size !== null && selectedType?.color !== null && selectedType !== null) {
      dispatch(
        pushNotification({
          msgId: "product-detail-controller-stockMax",
          isShow: true,
          isReNotificating: false,
          isSuccessful: false,
          mgsContent: "Số lượng sản phẩm không đủ",
        })
      );
    }
    prechangeAmount.current = stock;
    setAmount(stock);
    return;
  };

  const handlerAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]*$/;

    if (!reg.test(event.target.value)) return;

    if (parseInt(event.target.value) === 0) return;

    if (event.target.value.trim() === "") {
      setAmount("");
      return;
    }

    if (parseInt(event.target.value) > stock) {
      return stockHandler(stock);
    }

    prechangeAmount.current = event.target.value;
    setAmount(parseInt(event.target.value));
  };

  const modifyAmount = (type: "increase" | "decrease") => {
    if (type === "increase") {
      const newAmount = parseInt(amount) + 1;
      if (newAmount > stock) {
        return stockHandler(stock);
      }
      setAmount(newAmount);
    }
    if (type === "decrease") {
      const newAmount = parseInt(amount) - 1;
      if (newAmount < 1) return;
      setAmount(newAmount);
    }
  };

  const testing = useDebouncedCallback(() => {
    dispatch(
      pushNotification({
        msgId: "product-detail-controller-stockReach",
        isShow: true,
        isReNotificating: true,
        isSuccessful: true,
        mgsContent: "Đã thêm sản phẩm vào giỏ hàng",
      })
    );
  }, 300);

  return (
    <>
      <div className="w-full mt-[1rem] mb-[10px]">Màu sắc</div>
      <div className="color flex justify-start items-center gap-[16px] w-full">
        {sortedColorKey.map((colorkey) => {
          const colorValue = productItem.color[colorkey];
          return (
            <div
              key={colorValue.colorImage + colorkey + productItem.id}
              className={clsx(
                "color-item w-[45px] app-c1-max:w-[90px] app-c1-max:h-[90px] h-[45px] border-[2px] border-primary-green duration-200",
                {
                  "border-transparent": colorkey !== selectedType?.color,
                }
              )}
              onClick={() => selectColorHandler(colorkey)}
            >
              <Image
                src={colorValue.colorImage}
                width={100}
                height={45}
                className="w-auto h-auto"
                alt="color-image"
              />
            </div>
          );
        })}
      </div>
      <div className="size w-full reconmemd-size flex h-auto justify-start items-center">
        <div className="reconmend mt-[10px] mb-[8px]">Kích cỡ</div>
        <ProductDetailGuideSize />
      </div>
      <div className="size w-full flex justify-start items-center gap-[20px]">
        {sizes.map((sizeItem, index) => (
          <div
            key={sizeItem + index + productItem.id}
            className={clsx(
              "size-item w-[45px] flex justify-center items-center text-[1rem] bg-[#fff] font-[700] border border-[#eee] text-[#757575] text-center mp duration-150",
              {
                "bg-primary-green text-white": selectedType?.size === sizeItem,
              }
            )}
            onClick={() => selectSizeHandler(sizeItem)}
          >
            <span>{sizeItem}</span>
          </div>
        ))}
      </div>
      <div className="aount buy flex justify-start items-center w-full mt-[16px]">
        <div className="so luong text-black font-[700px]">Số Lượng</div>
        <div className="controler amount buy flex justify-center items-center h-[35px] ml-[25px]">
          <div
            className="px-[6px] py-[1px] w-[35px] border border-[#eee] bg-white text-center h-full flex items-center justify-center mp"
            onClick={() => modifyAmount("decrease")}
          >
            <span className="mp">-</span>
          </div>
          <input
            type="text"
            className="text-black px-[2px] py-[1px] w-[50px] border border-[#eee] bg-white text-center h-full flex justify-center items-center placeholder:text-black"
            name=""
            value={amount}
            id=""
            ref={amountRef}
            onChange={handlerAmountChange}
            onBlur={() => setAmount(prechangeAmount.current)}
          />
          <div
            className="px-[6px] py-[1px] w-[35px] border border-[#eee] bg-white text-center h-full flex items-center justify-center mp"
            onClick={() => modifyAmount("increase")}
          >
            <span className="mp user-select-none">+</span>
          </div>
        </div>
        <div className="ml-[20px]" onClick={() => testing()}>
          Số lượng có sẵn {stock}
        </div>
      </div>
      <ProductDetailAddCart />
    </>
  );
}
