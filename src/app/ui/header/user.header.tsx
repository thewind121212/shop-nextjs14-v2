import Image from "next/image";
import Link from "next/link";


export default function User() {
    return (
      <Link href="/auth" className="">
        <Image
          src="/icons/user.png"
          width={24}
          height={24}
          alt="totoday-user"
          style={{ cursor: "pointer", objectFit: "cover" }}
        ></Image>
      </Link>
    );
  }
  