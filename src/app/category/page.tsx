import CategoryMain from "../ui/category/category-main"
import Image from "next/image"
import { fetchProducts } from "./actions"


export default async function Page ({params} : any) {

    const initalData  : any = await fetchProducts({order: 'all', page: 1, quantity: 20, breadCrumbArray: []})

    return (
        <div className="w-[100vw] h-auto">
            <Image width={3000} height={0} className="w-full h-auto" src="/dummy/home/all-items/20231101_IvFBbij5.jpeg" alt="" />
            <CategoryMain initalProducts={initalData.data} totalPage={initalData.totalPage} totalProducts={initalData.totalProducts} />
        </div>
    )
}