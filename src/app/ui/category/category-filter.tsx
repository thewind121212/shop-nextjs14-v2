export default function CategoryFilter() {
  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      //   style={{
      //     visibility: paramsObject.sub !== "none" ? "hidden" : "visible",
      //   }}
    >
      <svg
        className="h-[20px] w-[20px] mr-[4px] text-[#00b156]"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="text-[#00b156] whitespace-nowrap">LỌC SẢN PHẨM</div>
    </div>
  );
}
