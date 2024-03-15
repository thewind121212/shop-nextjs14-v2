import Image from "next/image";
import Cart from "./cart.header";
import User from "./user.header";
import Search from "./search.header/search.header";
import Nav, { MobileNav } from "./nav.header";
import { getFullCategories } from "@/app/lib/actions/categories.actions";
import HamburgerIcon from "./header-interact-component/hamburgerIcon";
import Link from "next/link";
import AnnouncementBar from "./announcementbar";

export default async function Header() {
  const { data } = await getFullCategories();

  return (
    <div
      className="w-[100vw] top-0 fixed h-auto flex flex-col nav-shadow z-40"
      id="main-header"
    >
      <AnnouncementBar />
      <div className="w-[100vw] h-[77px] bg-black flex justify-center items-center px-[30px] app-c1-min:px-[10px]">
        <div className="flex bg-black items-center justify-between max-w-[1440px] w-full h-full">
          <HamburgerIcon />
          {/* logo */}
          <Link href="/" className="w-[107px] h-[57px]">
            <Image
              src="/icons/logo.png"
              width={500}
              height={600}
              alt="logo"
              style={{
                objectFit: "contain",
                height: "100%",
              }}
            />
          </Link>
          {/* navigation */}
          <Nav categories={data} />
          {/* action box */}
          <div className="flex justify-center items-center w-[96px] max-h-[52px] app-c1-min:w-auto">
            <div className="w-[286px] h-auto hidden app-c1-min:block">
              <Search type="desktop" />
            </div>
            <Cart />
            <User />
          </div>
        </div>
      </div>
      <MobileNav categories={data} />
    </div>
  );
}
