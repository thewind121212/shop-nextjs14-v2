import Image from "next/image";

function CollectionCard({ item }: any) {
  return (
    <div className="col-span-1 overflow-hidden relative rounded group">
      <div className="w-full relative group-hover:scale-[1.15] duration-[350ms]  ">
        <Image
          src={item.image}
          alt={item.headText}
          width={700}
          height={400}
          style={{ objectFit: "cover" }}
        />
        <div className="w-full absolute top-0 bg-[#003644] opacity-50 z-10 aspect-[1/1]" />
      </div>
      <div className="w-full absolute p-[10px] bottom-0 z-20">
          <div className="text-[22px]  text-white">{item.headText}</div>
        {item.content !== ""  && (
          <div className="text-base text-white line-clamp-2">
            {item.content}
          </div>
        )}
      </div>
    </div>
  );
}

export default CollectionCard;
