import FixUI from "../ui/fix-ui"
import { getHotProduct } from "@/app/lib/actions/product.action"
import HotProduct from "../ui/products-mixer/hotProducts";

export default async function Page () {
    const hotProductsData = await getHotProduct();

    return (
        <div className="bg-primary-white">
            <FixUI />
        <HotProduct hotProducts={hotProductsData} />
        </div>
    )
}