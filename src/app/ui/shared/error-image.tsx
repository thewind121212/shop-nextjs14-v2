import Image from "next/image"


export default function ErrorImage({className} : {className: string}) {
    return (
        <div className={`${className} flex justify-center items-center`} style={{aspectRatio: "1/1",}}>
                <Image width={300} height="0"  src="/icons/noun-no-image.svg" className={`w-[120px] h-auto`} alt="image-erro"  style={{ objectPosition: "top"}} />
        </div>
    )

}