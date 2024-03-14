import Image from "next/image"

export default function Loading() {
    return(
        <div className="w-[100vw] top-0 bg-white h-[100vh] fixed flex justify-center items-center z-[999]">
            <Image src="/icons/loading.gif" width={120} height={120} alt="loading" />
        </div>
    )
}