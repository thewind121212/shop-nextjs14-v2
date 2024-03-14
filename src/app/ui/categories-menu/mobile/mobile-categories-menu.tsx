import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import Search from "../../header/search.header/search.header";
import MainCategories from "../main-categories";
import CategoriesSubMenu from "../sub-categories";
import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hooks";
import { selectNavStatus, toggleNav } from "@/app/lib/redux/features/UI/uiSlice";
import clsx from "clsx";

const MobileCategoriesNav = ({ categories }: any) => {
  const [mainCategories, setMainCategories] = useState<number>(1);
  const dispatch = useAppDispatch();
  const isShow = useAppSelector(selectNavStatus);



  

  const choseMainCategories = (order: number) => {
    setMainCategories(order);
  };

  return (
    <div
      className={clsx(
        "w-[100vw] h-[100vh] bg-white absolute z-50 left-0 duration-300",
        {
          "top-[0] opacity-1": isShow,
          "top-[1000px] opacity-0": !isShow,
        }
      )}
    >
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-auto flex justify-end items-center px-[20px] py-[15px]"
        onClick={() => dispatch(toggleNav(false))}
        >
          <IoMdCloseCircleOutline className="text-black text-[30px]" />
        </div>
        <div className="w-auto h-auto px-[10px]">
          <Search type="mobile" />
        </div>
        <div className="w-auto h-[662px] mt-[20px] flex overflow-scroll">
          <MainCategories
            categories={categories}
            chooseMenu={choseMainCategories}
            mainCategories={mainCategories}
          />

          <CategoriesSubMenu
            subCategories={categories[mainCategories - 1].subCategoryItems}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileCategoriesNav;
