import React from "react";
import Image from "next/image";
import FooterSocial from "../social-share/footer-social";

const dummyPolicy = [
  {
    id: 1,
    icon: "/icons/policy/1.webp",
    headText: "Đổi hàng 30 ngày",
    smallText: "Thời gian đổi sản phẩm lên đến 30 ngày",
  },
  {
    id: 2,
    icon: "/icons/policy/2.webp",
    headText: "Bảo hành 90 ngày",
    smallText: "Hỗ trợ bảo hành miễn phí lên đến 90 ngày",
  },
  {
    id: 3,
    icon: "/icons/policy/3.webp",
    headText: "5 ngày hoàn tiền",
    smallText: "Thời gian hoàn tiền không lý do lên đến 5 ngày",
  },
  {
    id: 4,
    icon: "/icons/policy/4.webp",
    headText: "Ưu đãi lên đến 15%",
    smallText: "Ưu đãi cho Vip Member lên đến 15%",
  },
];


const dummyPayment = [
  {
    id: 1,
    icon: "/icons/payment/1.svg",
    width: 33,
  },
  {
    id: 2,
    icon: "/icons/payment/2.svg",
    width: 20,
  },
  {
    id: 3,
    icon: "/icons/payment/3.svg",
    width: 65,
  },
];

function Footer() {
  return (
    <div className="w-full bg-[#F9FAFA] mt-[80px]">
      <div className="w-full h-auto bg-[#FFF] border-b border-t">
        <div className="w-full max-w-[1290px] h-auto p-[30px] mx-auto grid grid-cols-4 bg-[#FFF] footer-screen2:grid-cols-2 max-[560px]:grid-cols-1 footer-screen2:gap-[12px] ">
          {dummyPolicy.map((item) => (
            <div
              key={item.id}
              className="w-full h-[71px] flex px-[16px] bg-[#FFF] "
            >
              <div className="basis-2/12 mt-[8px] ml-[8px] bg-[#FFF]">
                <div className="w-[33px] relative aspect-[1/1]">
                <Image
                  src={item.icon}
                  alt="policy"
                  sizes="auto"
                  fill={true}
                  loading="lazy"
                />
                </div>
              </div>
              <div className="basis-10/12 mt-[8px] ml-[8px] bg-[#FFF]">
                <p className="text-[14px] text-[black]">{item.headText}</p>
                <p className="text-[14px] text-[#757575]">{item.smallText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1290px]  mx-auto">
        <div className="w-full h-full flex footer-screen1:flex-wrap ">
          <div
            className="h-full basis-[29.166667%] border-r border-[#EEEEEE] footer-screen1:basis-[100%]
                "
          >
            <div className="w-full h-auto pl-[20px] pt-[40px] pr-[30px] pb-[40px]">
              <div className="w-full h-auto">
                <Image
                  src="/icons/logo.png"
                  alt="logo"
                  width={106}
                  height={57}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="mt-[20px] text-[14px] text-[#111] font-[600]">
                CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI & DỊCH VỤ TOTO GROUP
              </p>
              <p className="mt-[10px] text-[12px] ">
                Giấy CNĐKDN: 0316810152 – Ngày cấp: 19/04/2021 - Nơi cấp: Sở Kế
                Hoạch và Đầu Tư TPHCM
              </p>
              <p className="mt-[10px] text-[12px] ">
                Địa chỉ : 304-306 Nguyễn Trãi , Phường 08, Quận 05, Thành phố Hồ
                Chí Minh - Điện thoại: 028. 2220. 7878 Email: cskh@totoday.vn
              </p>
              <FooterSocial />
              <div className="">
                <p className="text-[14px] mb-[6px]">Phương thức thanh toán</p>
                <div className="w-full max-h-[20px] flex gap-[10px]">
                  {dummyPayment.map((item) => (
                    <Image
                      key={item.id}
                      src={item.icon}
                      alt="payment"
                      width={item.width}
                      height={20}
                      style={{ objectFit: "contain", height: "auto" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-full basis-[70.833333%] border-l border-[#EEEEEE] footer-screen1:basis-[100%]">
            <div className="w-full h-auto  pt-[40px] pb-[40px] pl-[40px] footer-screen1:p-[12px]">
              <div className="w-full h-auto flex p-[20px] bg-white border border-[#EEEEEE] footer-screen1:flex-wrap  ">
                <div className="basis-7/12 w-full h-[42px] footer-screen1:basis-[100%] footer-screen1:mb-[24px]">
                  <p className="text-[16px]">Đăng ký nhận tin</p>
                  <p className="text-[12px] text-[#757575]">
                    Nhận tin qua email để không bỏ lỡ các tin tức khuyến mãi
                  </p>
                </div>
                <div className="basis-5/12 w-full pl-[10px] gap-[12px] footer-screen1:basis-[100%]">
                  <div className="h-[42px] flex w-full justify-center items-center">
                    <input
                      type="email"
                      className="pl-[10px] h-full w-full outline-none border rounded-tl-[5px] rounded-bl-[5px] border-[#00B156]"
                      name="email"
                      placeholder="Nhập Email"
                    />
                    <button className="min-w-[90px] h-full text-[13.33px] bg-[#00B156] border-[#00B156] text-[#fff] rounded-tr-[3px] rounded-br-[3px] flex justify-center items-center">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto flex mt-[20px] footer-screen1:flex-wrap">
                <div className="w-full h-auto flex flex-col basis-[71.666667%] footer-screen1:basis-[100%]">
                  <div className="flex w-full h-auto flex-col pt-[8px] pl-[8px]  ">
                    <div className="w-full h-auto flex footer-screen1:flex-wrap">
                      <div className="basis-[28%] leading-[25px] footer-screen1:basis-[100%]">
                        <div className="text-[18px]">Thông tin</div>
                        <p className="text-[12px] text-[#00B156] ">
                          Giới thiệu
                        </p>
                        <p className="text-[12px] text-[#616161] ">
                          Liên hệ công ty
                        </p>
                        <p className="text-[12px] text-[#616161]">
                          Liên hệ hợp tác
                        </p>
                        <p className="text-[12px] text-[#616161]">
                          {" "}
                          Gia nhập TOTODAY
                        </p>
                        <p className="text-[12px] text-[#00B156]">
                          Hệ thống cửa hàng
                        </p>
                      </div>
                      <div className="basis-[38%] leading-[25px] footer-screen1:basis-[100%]">
                        <div className="text-[18px] ">Chính sách</div>
                        <p className="text-[12px] text-[#00B156]">
                          Chính sách thành viên
                        </p>
                        <p className="text-[12px] text-[#616161]">
                          Chính sách hoàn tiền
                        </p>
                        <p className="text-[12px] text-[#616161]">
                          Chính sách sản phẩm
                        </p>
                        <p className="text-[12px] text-[#616161]">
                          Chính sách bảo mật
                        </p>
                        <p className="text-[12px] text-[#616161]">
                          Chính sách kiểm hàng
                        </p>
                        <p className="text-[12px] text-[#00B156]">
                          Chính sách đổi hàng - bảo hành
                        </p>
                      </div>
                      <div className="basis-[34%] leading-[25px] footer-screen1:basis-[100%]">
                        <div className="text-[18px]">Hỏi đáp</div>
                        <p className="text-[12px] text-[#616161]">
                          Thanh toán và vận chuyển
                        </p>
                        <p className="text-[12px] text-[#616161]">
                          Hướng dẫn chọn size
                        </p>
                        <p className="text-[12px] text-[#616161]">
                          Kiểm tra thông tin đơn hàng
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-auto my-[24px] flex justify-center items-center ">
                    <div className="w-full max-w-[50%] h-auto">
                      <div className="w-[90%] h-full border border-[#EEEEEE] flex gap-[10px] py-[14px] rounded-[4px] justify-center items-center bg-[#fff] ">
                        <div className="w-[15px] h-[20px] relative">
                        <Image
                          src="/icons/bill.svg"
                          alt="bill"
                          fill={true}
                          sizes="auto"
                        />
                        </div>
                        <p className="text-[14px]">Tra cứu đơn hàng</p>
                      </div>
                    </div>
                    <div className="w-full max-w-[50%] h-auto">
                      <div className="w-[90%] h-full border-[2px] border-[#00B156] flex gap-[10px] py-[14px] rounded-[4px] justify-center items-center ">
                        <div className="w-[18px] h-[20px] relative">
                        <Image
                          src="/icons/star.svg"
                          alt="star"
                          fill={true}
                          sizes="auto"
                        />
                        </div>
                        <p className="text-[14px] text-[#00B156]">
                          Góp ý - Than phiền
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-auto basis-[28.333333%] border-l border-[#EEEEEE] footer-screen1:basis-[100%] ">
                  <div className="w-full h-auto pt-[8px] pl-[8px] flex flex-col footer-screen1:flex-row footer-screen1:justify-center footer-screen1:items-center">
                    <div className="w-full h-auto pt-[4px] pb-[8px] mb-[8px] flex flex-col gap-[8px] border-b border-[#EEEEEE] ">
                      <div className="text-[12px] text-[#616161]">
                        Mua hàng trực tuyến
                      </div>
                      <div className="text-[12px]">
                        <a
                          href="tel:1900 633 501"
                          className="text-[12px] text-[#00B156]"
                        >
                          1900.633.501
                        </a>
                        <span>(T2-T6 8h30 - 17h30)</span>
                      </div>
                      <div className="text-[12px]">
                        <a
                          href="tel:0938 803 633"
                          className="text-[12px] text-[#00B156]"
                        >
                          0938.803.633
                        </a>
                        <span>(24/7)</span>
                      </div>
                      <p className="text-[12px]">sales.online@totoday.vn</p>
                    </div>
                    <div className="w-full h-auto pt-[4px] pb-[8px] mb-[8px] flex flex-col gap-[8px]  ">
                      <p className="text-[12px] text-[#616161]">
                        Hotline góp ý
                      </p>
                      <a
                        href="tel:0908 18 12 89"
                        className="text-[12px] text-[#00B156]"
                      >
                        0908.18.12.89
                      </a>
                      <p className="text-[12px]">cskh@totoday.vn</p>
                    </div>
                    <div className="h-[50px] w-1/2 overflow-clip object-contain relative footer-screen1:hidden">
                      <Image
                        sizes="auto"
                        src="/icons/tickxanh.png"
                        alt="tich-xanh"
                        fill={true}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
