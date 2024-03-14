export default function AnnouncementBar() {
    return (
      <div className="w-full bg-primary-white h-auto p-1 flex justify-center align-middle text-[12px] md:text-[14px] app-c1-min:justify-between">
          <p className="text-center md:text-left min">TOTODAY là THƯƠNG HIỆU THỜI TRANG phong cách FREESTYLE dành cho CÁC BẠN TRẺ chuyên để MẶC ĐI CHƠI</p>
          <div className="muti-link h-full">
              <div className="muti-link-wrap hidden text-[14px] h-full justify-center content-center md:flex ">
                  <p>1900 633 501</p>
                  <div className="h-auto mx-2.5 w-px border border-stone-200"></div>
                  <p>Hệ thống cửa hàng</p>
                  <div className="h-auto mx-2.5 w-px border border-stone-200"></div>
                  <p>Tra cứu đơn hàng</p>
              </div>
          </div>
      </div>
    )
  }
  