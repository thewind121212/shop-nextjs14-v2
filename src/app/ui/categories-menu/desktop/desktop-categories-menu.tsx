"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import MainCategories from "../main-categories";

import CategoriesSubMenu from "../sub-categories";

export default function CategoriesMenu({ categories, isShow,closeNav  }: any) {
  const [offSet, setOffSet] = useState<number>(0);
  const [mainCategories, setMainCategories] = useState<number>(1);


  const choseMainCategories = (order: number) => {
    setMainCategories(order);
  }

  useEffect(() => {

    if (window.innerWidth < 1261 ) {
        setOffSet(1262 - window.innerWidth)
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1261 ) {
          if (offSet !== 0) {
             setOffSet(0)
          }
          return
        }
        setOffSet(1262 - window.innerWidth) 
    })

    return () => {
        window.removeEventListener('resize', () => {})
    }

  },[offSet])



  return (
    <div className={clsx('normal w-[1000px] h-[252px] bg-red-500 absolute bottom-[-252px] border border-[#eee]', {
      'show': isShow === true ,
    })} style={{left: -offSet}}
    onMouseLeave={() => closeNav('leave')} 
    onMouseOver={() => closeNav('over')}
    >
      <div className="w-full h-full flex justify-center items-center">
        <MainCategories categories={categories}  chooseMenu={choseMainCategories} mainCategories={mainCategories} />
        <div className="w-[800px] h-full">
          <CategoriesSubMenu
            subCategories={categories[mainCategories - 1].subCategoryItems}
          />
        </div>
      </div>
    </div>
  );
}
