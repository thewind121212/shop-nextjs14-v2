import { init } from "next/dist/compiled/webpack/webpack"
import CategoryMain from "../ui/category/category-main"
import { fetchProducts } from "./actions"


export default async function Page ({params} : any) {

    const initalData  : any = await fetchProducts({order: 'all', page: 1, quantity: 20, breadCrumbArray: []})
    console.log(initalData)

    return (
        <div className="w-[100vw] h-auto">
            <CategoryMain initalProducts={initalData.data} totalPage={initalData.totalPage} totalProducts={initalData.totalProducts} />
        </div>
    )
}