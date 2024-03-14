'use client'

import { useState } from "react";
import SearchDropdown from "./searchDropdown"; 
import clsx from "clsx";

export default function Search({ type }: { type: string}) {

  const [focus, setFocus] = useState<boolean>(false)


  return (
    <>
      <div className="relative rounded-[3px] border-[1px] border-[#616161] mp">
        <form className="mp rounded-[3px]" action="">
          <input
           className={clsx('w-full h-[48px] indent-[12px] text-black rounded-[3px] focus:outline-none mp duration-200', {
            'bg-white text-black' : focus === true,
            'bg-[#000000] text-white' : type === 'desktop' && focus === false,
           })}
            type="text"
            name="search-box"
            id="search"
            placeholder="Tìm Kiếm"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </form>
        <SearchDropdown isOpen={focus} />
      </div>
    </>
  );
}

