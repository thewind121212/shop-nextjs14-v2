"use client";
import { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/app/lib/redux/hooks";
import { removeNotifiedItem } from "@/app/lib/redux/features/toast-notification/toast-notificationSlice";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import clsx from "clsx";

export default function ToastNotification() {
  const [notifictionDisplay, setNotificationDisplay] = useState<any>({
    isShow: false,
    isSuccessful: false,
    mgsContent: "",
  });

  const dispatch = useAppDispatch();
  const localNotificationQueue = useRef<any>(null);
  const timer = useRef<any>(null);
  const timer2 = useRef<any>(null);

  const notifications = useAppSelector((state) => state.Notification);

  useEffect(() => {
      clearTimeout(timer.current);
      clearTimeout(timer2.current);
    if (notifications.messageQueue.length === 0) {
      return;
    }

    if (notifications.messageQueue.length > 1) {
      clearTimeout(timer.current);
      clearTimeout(timer2.current);
      setNotificationDisplay({
        isShow: false,
        isSuccessful: localNotificationQueue.current.isSuccessful,
        mgsContent: localNotificationQueue.current.mgsContent,
      });
      dispatch(removeNotifiedItem());
    }

    timer2.current = setTimeout(() => {
      setNotificationDisplay({
        isShow: true,
        isSuccessful: notifications.messageQueue[0].isSuccessful,
        mgsContent: notifications.messageQueue[0].mgsContent,
      });
    }, 100);

    localNotificationQueue.current = notifications.messageQueue[0];

    timer.current = setTimeout(() => {
      setNotificationDisplay({
        isShow: false,
        isSuccessful: localNotificationQueue.current.isSuccessful,
        mgsContent: localNotificationQueue.current.mgsContent,
      });
      dispatch(removeNotifiedItem());
    }, 2000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications.messageQueue]);

  const { isShow, isSuccessful, mgsContent } = notifictionDisplay;

  return (
    <div
      className={clsx(
        "fixed w-auto min-w-[320px] h-auto bg-white top-[200px] z-[40] border-[0.5px] py-[0.4rem] pl-[0.4rem] pr-[1rem] toaste-notifiction rounded-[10px] flex justify-start items-center duration-300",
        {
          "right-[-350px]": isShow === false,
          "opacity-1 right-[-10px] border-[#2ec862]": isShow && isSuccessful,
          "opacity-1 right-[-10px] border-[#e40023]": isShow && !isSuccessful,
        }
      )}
    >
      <div className="flex justify-center items-center h-full gap-[8px]">
        <div
          className={clsx(
            "w-[48px] h-[48px] text-[#2ec862] flex justify-center items-center bg-[#2ec86226] rounded-[10px] text-[18px]",
            {
              "text-[#e40023] bg-[#e4002326]": !isSuccessful,
              "text-[#2ec862] bg-[#2ec86226]": isSuccessful,
            }
          )}
        >
          {isSuccessful ? <FaCircleCheck /> : <FaCircleXmark />}
        </div>
        <div className="w-auto h-auto flex justify-center items-start flex-col font-medium">
          <h1
            className={clsx("", {
              "text-[#e40023]": !isSuccessful,
              "text-primary-green": isSuccessful,
            })}
          >
            {isSuccessful ? "Thành Công" : "Lỗi"}
          </h1>
          <span className="text-[14px] font-light">
            {mgsContent}
          </span>
        </div>
      </div>
    </div>
  );
}
