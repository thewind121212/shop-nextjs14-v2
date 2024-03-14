import Image from "next/image";


const dummySocial = [

  {
    id: 1,
    icon: "/icons/social/1.svg",
  },
  {
    id: 2,
    icon: "/icons/social/2.svg",
  },
  {
    id: 3,
    icon: "/icons/social/3.svg",
  },
  {
    id: 4,
    icon: "/icons/social/4.png",
  },
  {
    id: 5,
    icon: "/icons/social/5.svg",
  },
];

export default function FooterSocial() {
  return (
              <div className="w-full h-auto flex gap-[4px] my-[20px]">
                {dummySocial.map((item) => (
                  <Image
                    key={item.id}
                    src={item.icon}
                    alt="social"
                    width={32}
                    height={32}
                    style={{ objectFit: "contain", height: "auto" }}
                  />
                ))}
              </div>
  );
}