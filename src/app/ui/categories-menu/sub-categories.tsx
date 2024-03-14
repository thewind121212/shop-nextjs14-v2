"use client";
import React from 'react'

const CategoriesSubMenu = ({ subCategories }: any) =>  {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white p-[30px] app-c1-max:overflow-x-auto">
      <div className="w-full h-full flex justify-around items-start flex-wrap gap-y-[20px]">
        {subCategories.map((subCategory: any) => {
            if (subCategory.active === false) return
          return (
            <div key={subCategory.slug + subCategory.name} className='w-[25%] app-c1-max:w-[100%]'>
              <p className="text-primary-green uppercase font-[500]">
                {subCategory.name}
              </p>
              {subCategory.detailCategoryItems.map(
                (subCategoryItem: any) => {
                  return (
                    <p key={subCategoryItem.slug} className="text-black font-[300]">
                      {subCategoryItem.name}
                    </p>
                  );
                }
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


const MemorizedCategoriesSubMenu = React.memo(CategoriesSubMenu);

export default MemorizedCategoriesSubMenu