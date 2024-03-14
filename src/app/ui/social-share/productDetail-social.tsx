'use client'
import Image from "next/image";
import { UseDispatch } from "react-redux";
import { pushNotification } from "@/app/lib/redux/features/toast-notification/toast-notificationSlice";
import { useAppDispatch } from "@/app/lib/redux/hooks";

const productDetailSocial = [
  {
    id: "productDetailSocial-1",
    img: "/icons/social/color-social/1.svg",
    alt: "facebook",
  },
  {
    id: "productDetailSocial-2",
    img: "/icons/social/color-social/2.svg",
    alt: "in",
  },
  {
    id: "productDetailSocial-3",
    img: "/icons/social/color-social/3.svg",
    alt: "pinterest",
  },
  {
    id: "productDetailSocial-4",
    img: "/icons/social/color-social/4.svg",
    alt: "telegram",
  },
  {
    id: "productDetailSocial-5",
    img: "/icons/social/color-social/5.svg",
    alt: "twitter",
  },
  {
    id: "productDetailSocial-6",
    img: "/icons/social/color-social/share.svg",
    alt: "share-bnt",
  },
];

export default function ProductDetailSocialShare() {

    const dispatch = useAppDispatch();

    const copyLinkHandler = async () => {
        const fullLink = window.location.href;
        await navigator.clipboard.writeText(fullLink);
        dispatch(pushNotification({
            msgId: "social-share-link-copied",
            isShow: true,
            isReNotificating: false,
            isSuccessful: true,
            mgsContent: "Đã sao chép liên kết",
        }))
    }

  return (
    <ul className="flex justify-start items-center h-[32px] w-full mt-[24px] gap-[7px] app-c1-max:mb-[20px]">
      {productDetailSocial.map((item) => {
        if (item.id === "productDetailSocial-6") {
            return (
                <li key={item.id} className="w-[32px] h-[32px] bg-white rounded-full flex justify-center items-center mp duration-200 hover:text-white"
                onClick={copyLinkHandler} 
                >
                <Image
                    width={21}
                    height={21}
                    className="w-[21px] h-auto"
                    src={item.img}
                    alt={item.alt}
                />
                </li>
            ); 
        }
        return (
          <li key={item.id} className="mp">
            <Image
              width={40}
              height={30}
              className="w-[32px] h-auto"
              src={item.img}
              alt={item.alt}
            />
          </li>
        );
      })}
    </ul>
  );
}
