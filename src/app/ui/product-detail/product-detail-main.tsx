"use client";
import { useState, useEffect } from "react";
import { ProductItemType } from "@/app/lib/type";
import { FaStar, FaStore } from "react-icons/fa";
import ProductDetailPolicy from "./product-detail-policy";
import ProductDetailImage from "./product-detail-image";
import ProductDetailController from "./product-detail-controler";
import ProductDetailDescription from "./product-detail-description";
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Link from "next/link";

export default function ProductDetail({
  productItem,
}: {
  productItem: ProductItemType;
}) {
  const [selectedType, setSelectedType] = useState<{
    color: string | null;
    size: string | null;
  } | null>(null);
  const sortedColorKey = Object.keys(productItem.color).sort();
  const galleryImages = [...productItem.gallery];
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const sizes: string[] = [];
  let stock: any = 0;
  let indexColorKey = null;

  useEffect(() => {
    //retive params from url
    let colorParam : any  = searchParams?.get('color')
    let sizeParam: any  = searchParams?.get('size')


    if (!sortedColorKey.includes(colorParam) && colorParam !== null) {
       colorParam  = sortedColorKey[0]
    } 
    if (!sizes.includes(sizeParam) && sizeParam !== null) {
      sizeParam = sizes[0]
    } 
    if (colorParam !== null || sizeParam !== null) {
      router.push(`${pathname}`, {scroll: false} )
    }

    if (colorParam !== null && sizeParam !== null) {
      router.push(`${pathname}?color=${colorParam}&size=${sizeParam}`,{scroll: false})
      setSelectedType({color: colorParam, size: sizeParam})
    }


    // retrive local storage on client browser
    const viewedProducts = JSON.parse(
      localStorage.getItem("viewedProduct") || "[]"
    );
    const newViewedProducts = [...viewedProducts];
    if (!newViewedProducts.includes(productItem.id)) {
      if (newViewedProducts.length === 9) {
        newViewedProducts.pop();
        newViewedProducts.unshift(productItem.id);
      } else {
        newViewedProducts.push(productItem.id);
      }
      //set local storage on client browser
      localStorage.setItem("viewedProduct", JSON.stringify(newViewedProducts));
    }
  }, [productItem.id]);

  sortedColorKey.map((colorKey) => {
    const colorValue = productItem.color[colorKey];
    galleryImages.push(colorValue.colorImage);
    colorValue.size.map((sizeItem) => {
      if (!sizes.includes(sizeItem.value)) {
        sizes.push(sizeItem.value);
      }
      if (
        selectedType?.color === colorKey &&
        selectedType?.size === sizeItem.value
      ) {
        stock += sizeItem.quantity;
      }
      if (selectedType?.color === colorKey && selectedType?.size === null) {
        stock += sizeItem.quantity;
      }
      if (selectedType === null || selectedType?.color === null) {
        stock += sizeItem.quantity;
      }
    });
  });

  if (selectedType?.color !== null && selectedType?.color !== undefined) {
    indexColorKey = sortedColorKey.indexOf(selectedType?.color);
  }

  const selectColorHandler = (color: string) => {
    if (selectedType?.color === color) {
      setSelectedType({ ...selectedType, color: null, size: null });
      router.push(`${pathname}`, {scroll: false})
      return;
    }
    if (selectedType?.color !== color) {
      setSelectedType({
        ...selectedType,
        color: color,
        size: selectedType?.size ?? null,
      });
      if (selectedType?.size) {
        router.push(`${pathname}?color=${color}&size=${selectedType?.size}`, {scroll: false})
      }
    }
  };

  const selectSizeHandler = (size: string) => {
    if (selectedType?.size === size) {
      setSelectedType({ ...selectedType, size: null });
      router.push(`${pathname}`, {scroll: false})
      return;
    }
    setSelectedType({
      ...selectedType,
      size: size === selectedType?.size ? null : size,
      color: selectedType?.color !== null ? selectedType?.color ?? null : null,
    });
    if(selectedType?.color) {
      router.push(`${pathname}?color=${selectedType?.color}&size=${size}`, {scroll: false})
    }
  };

  return (
    <div className="max-w-[1110px] w-[100vw] mt-[25px] mx-auto app-c1-max:px-[12px]">
      <div className="w-auto h-auto flex mp">
        {
          productItem.breadCrum.map((breadCrumb, index) => {
            return (
              <div key={breadCrumb.link} className="text-[#757575] text-[16px] small-screen-400:text-[12px] capitalize">
                <Link href={ "/category/" +breadCrumb.link}>{breadCrumb.name}</Link>
                {productItem.breadCrum.length - 1 === index ? null :
                (<span className="mx-[12px]">/</span>)
                }
              </div>

            )
          })
        }
      </div>
      <div className="flex app-c1-max:flex-col justify-center items-center mt-[12px]">
        <ProductDetailImage
          galleryImages={galleryImages}
          selectedColorIndex={indexColorKey}
          totalSizes={sortedColorKey.length}
        />
        <div className="flex justify-start items-start h-auto flex-col w-[55%] app-c1-max:w-[100%] app-c1-max:px-[3%]">
          <div className="flex justify-left items-center w-full gap-[10px] mb-[12px]">
            {productItem.tags.map((tag, index) => {
              return (
                <div
                  key={tag + index}
                  className="text-[#F2994A] bg-[#F8E4D2] rounded-[90px] w-auto px-[20px] h-[26px] flex justify-center items-center text-[14px]"
                >
                  <span>#{tag}</span>
                </div>
              );
            })}
            <div className="text-[#2D9CDB] bg-[#2D9CDB26] rounded-[90px] w-[122px] h-[26px] flex justify-center items-center text-[14px]">
              Đã bán: {productItem.sold}
            </div>
          </div>
          <div className="name w-full text-[26px]">{productItem.name}</div>
          <div className="start w-full isStock flex justify-start items-center">
            <FaStar className="text-[#f4b301] text-[18px] mr-[8px]" />
            <div className="">5/5</div>
            <div className="border-r border-[#ddd] mx-[10px] h-[24px] w-[1px]"></div>
            <div className="text-[14px] text-primary-green">
              {stock === 0 ? "Hết hàng" : "Còn hàng"}
            </div>
          </div>
          <div className="price mt-[12px] text-[26px] pb-[15px] border-dashed border-b border-[#ccc] w-full">
            {productItem.price.toString()}đ
          </div>
          <ProductDetailController
            stock={stock}
            selectColorHandler={selectColorHandler}
            selectSizeHandler={selectSizeHandler}
            sizes={sizes}
            sortedColorKey={sortedColorKey}
            selectedType={selectedType}
            productItem={productItem}
          />
          <div className="store-have-stock-product mt-[16px] mb-[20px] text-[#2d9cdb] flex justify-start items-center w-full gap-[6px]">
            <FaStore className="text-[18px]" />
            <span>Cửa hàng hiện có sản phẩm</span>
          </div>
          <ProductDetailPolicy />
        </div>
      </div>
      {/* product descciption */}
      <ProductDetailDescription description={productItem.description} />
      {/* product review */}
      <div className="w-full h-[1pxl] border mt-[32px]"></div>
      <div className="h-auto w-[180px] mt-[16px] px-[4px] font-medium flex justify-center items-center rounded-md bg-white py-[8px] ml-[12px] border-primary-green text-primary-green border">
        Bình Luận
      </div>  
      {/* similar product */}

      {/* product u visit */}
    </div>
  );
}
