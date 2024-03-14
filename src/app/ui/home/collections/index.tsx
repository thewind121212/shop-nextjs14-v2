import CollectionCard from './collection-card'

const collectionList = [
  {
    id: 1,
    image: "/dummy/home/collections/collection4.png",
    headText: "TOOF IS THAT YOU?",
    content: "",
  },
  {
    id: 2,
    image: "/dummy/home/collections/collection2.png",
    headText: "1 YEAR ANNIVERSARY ",
    content: "",
  },
  {
    id: 3,
    image: "/dummy/home/collections/collection3.png",
    headText: "ĐI CHƠI - READY FOR SUMMER",
    content:
      "Chúng ta đang bước vào những ngày đầu hè đầy nắng, đây là thời điểm tuyệt vời để chuẩn bị cho những chuyến du lịch cùng bạn bè, sẵn sàng chào đón một mùa hè thật sôi động. Các bạn đã có dự định gì dành cho mình chưa? Nếu chưa thì “dichoi” cùng TOTODAY nhé!",
  },
];

function CollectionList() {
  return (
    <div className="container mx-auto max-w-[1290px] mt-[50px] px-[10px]">
      <div className="grid grid-cols-3">
        <div className="text-[26px] col-span-2 ">BỘ SƯU TẬP KHÁC</div>
        <div className="flex justify-end uppercase">
          <div
            className="w-[185px] h-[54px] min-w-[64px] text-base py-[8px] px-[15px] border rounded-[3px] flex
           justify-center items-center border-black hover:text-white hover:bg-[#00B156] hover:border-[#00B156]
            duration-300 cursor-pointer max-[768px]:hidden "
          >
            Xem tất cả
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-[16px] mt-[16px] grid-cols-1 px-[8px] md:px-[0px] ">
        {collectionList.map((item) => (
            <CollectionCard key={item.id} item={item} type="collection"/>
        ))}
      </div>
      <div 
            className="w-1/2 mx-auto mt-[50px] h-[54px] min-w-[64px] text-base py-[8px] px-[15px] border rounded-[3px] flex
           justify-center items-center border-black hover:text-white hover:bg-[#00B156] hover:border-[#00B156]
            duration-300 cursor-pointe md:hidden "
>
            Xem tất cả
      </div>
    </div>
  );
}

export default CollectionList;
