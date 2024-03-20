'use client'
import {useState} from 'react'


const sortType = {
    all: "all",
    priceASC: "price",
    priceDES: "price",
    rating: "mostLike",
    view: "mostShow",

}

export  default function CateogrySort() {
    const [sort, setSort] = useState<string | null>(null)

    return (
        <div className="w-auto h-auto flex">
            <div className="uppercase text-primary-green  ">bỏ lọc</div>
            <div className="uppercase">bán chạy nhất</div>
            <div className="uppercase">lọc sản phẩm</div>
        </div>
    )

}