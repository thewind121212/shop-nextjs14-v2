import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { FaAngleRight } from "react-icons/fa6";

export default function MainCategories({
  mainCategories,
  categories,
  chooseMenu,
}: any) {
  return (
    <div className="w-[200px] h-full app-c1-max:w-[101px]">
      <ul className="w-full h-full flex justify-center items-center flex-col app-c1-max:justify-start">
        {categories.map((category: any) => {
          return (
            <Link
              href={`/category/${category.slug}`}
              key={category._id}
              className={clsx(
                "w-full h-[20%] app-c1-max:w-[101px] app-c1-max:h-[101px] bg-[#F2F3F6] flex justify-between items-center px-[15px] py-[10px] mp border border-[#ddd] duration-150",
                {
                  "bg-[#FFFFFF] border-[#FFFFFF] border-l-[7px] border-l-[#00b156]":
                    mainCategories === category.order,
                }
              )}
              onMouseEnter={() => chooseMenu(category.order)}
            >
              <div className="w-full h-auto flex justify-start app-c1-max:flex-col app-c1-max:justify-center items-center gap-[10px]">
                <Image
                  width="30"
                  height="0"
                  src={category.imgPath}
                  alt="arrow-right"
                  className="w-[25px] h-auto"
                />
                <p
                  className={clsx("text-black uppercase text-[16px] app-c1-max:text-[12px]", {
                    "text-primary-green font-[500]":
                      mainCategories === category.order,
                  })}
                >
                  {category.name}
                </p>
                <div className="h-full"></div>
              </div>
              <FaAngleRight className="text-[#999] app-c1-max:hidden" />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
