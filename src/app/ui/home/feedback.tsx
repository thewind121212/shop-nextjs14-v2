import Image from "next/image";

const feedbackDummyData = [
    {
        id: 1,
        name: 'Thu Phương - Hà Nội',
        image: "/feedbacker/1.jpeg",
        hastag: '#hangout',
    },
    {
        id: 2,
        name: 'Thu Phương - Hà Nội',
        image: "/feedbacker/2.jpeg",
        hastag: '#shopping',
    },
    {
        id: 3,
        name: 'Trịnh Nga - Hà Nội',
        image: "/feedbacker/3.jpeg",
        hastag: '#hangout',
    },
    {
        id: 4,
        name: 'Trí Nghĩa - Hồ Chí Minh',
        image: "/feedbacker/4.jpeg",
        hastag: '#shopping',
    },
    {
        id: 5,
        name: 'Trí Nghĩa - Hồ Chí Minh',
        image: "/feedbacker/5.jpeg",
        hastag: '#shopping',
    },
    {
        id: 6,
        name: 'Phương Uyên - Đà Nẵng',
        image: "/feedbacker/6.jpg",
        hastag: '#hangout',
    }
]


function FeedBack() {
  return (
    <div className="w-full h-auto py-[50px] px-[10px] bg-[#e8e8e8] mt-[50px] flex flex-col justify-center items-center max-w-[1440px] m-auto">
      <div className="w-full flex justify-center items-center">
        <div className="h-[3px] w-[50px] bg-black border-solid"></div>
        <div className="text-[26px] mx-[8px]">FEEDBACKER</div>
        <div className="h-[3px] w-[50px] bg-black border-solid"></div>
      </div>
      <div className="w-full  text-base text-center">Cùng xem sản phẩm thực tế của TOTODAY được khách hàng sử dụng và phản hồi</div>
      <div className="w-full max-w-[1290px] grid grid-cols-2 gap-[16px] mx-auto my-[50px] md:grid-cols-3 lg:grid-cols-6 px-[8px]">
            {feedbackDummyData.map((item) => (
                <div key={item.id} className="w-auto h-[360px] relative rounded-[3px] overflow-hidden group">
                    <div className="w-full h-full group-hover:scale-[1.15] duration-[350ms] relative">
                    <Image src={item.image} alt={item.name}  fill={true} sizes="auto" style={{objectFit: 'cover'}} />
                    </div>
                    <div className="w-full absolute bottom-0 p-[20px]">
                        <p className="text-[14px] text-[#00B156]">{item.hastag}</p>   
                        <p className="text-[14px] text-white">{item.name}</p>   
                    </div>
                </div>
            ))}   
      </div>
      <div className="w-full h-auto flex justify-center items-center">
            <div className="w-[185px] min-w-[64px] rounded-[3px] h-[40px] px-[20px] py-[5px] 
            uppercase text-base flex justify-center items-center border border-black font-[500]
            hover:text-white hover:bg-[#00B156] hover:border-[#00B156] duration-300 cursor-pointer 
            ">
            Xem thêm
            </div>
      </div>
    </div>
  );
}

export default FeedBack;
