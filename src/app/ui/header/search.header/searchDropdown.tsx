import Image from "next/image";
import clsx from "clsx";

const dummyHotSearch = [
  {
    id: "hot-1",
    name: "áo khoác",
  },
  {
    id: "hot-2",
    name: "đồ nam",
  },
  {
    id: "hot-3",
    name: "đồ nữ",
  },
  {
    id: "hot-4",
    name: "unisex",
  },
  {
    id: "hot-5",
    name: "phụ kiện",
  },
];

export default function searchDropdown({isOpen} : {isOpen : boolean} ) {
  return (
    <div className={clsx('absolute right-0 overflow-hidden left-0 bg-white rounded-sm w-full duration-200 min-w-[260px] py-[16px] px-[10px] search-drop', {
        'block': isOpen === true ,
        'hidden': isOpen === false,
    })}>
      <p className="text-sm mb-[10px] text-[14px]">Tìm kiếm gần đây</p>
      <div className="w-full h-6 flex items-center my-[10x] gap-[10px]">
        <Image
          alt="recent-search"
          src="/icons/hot-search.svg"
          width={25}
          height={25}
        />
        <p className="text-[14px] text-primary-green">Tìm kiếm phổ biến</p>
      </div>
      <div className="flex gap-[8px] flex-wrap mt-[10px]">
        {dummyHotSearch.map((item: any) => {
          return (
            <div
              key={item.id}
              className="bg-gray-200 text-black flex justify-center cursor-pointer items-center h-10 rounded-sm uppercase w-[48%]"
            >
                {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
