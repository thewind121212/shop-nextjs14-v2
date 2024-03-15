import FixUI from "@/app/ui/fix-ui"
import {getProductDetail } from "@/app/lib/actions/product.action"
import ProductDetail from "@/app/ui/product-detail/product-detail-main"
import {ProductItemType} from "@/app/lib/type"
import { extractIdFromUrl  } from "@/app/utils/product.utils";


export default async function Page ({params}: {params: {productItem: string}}) {

    const productID =  extractIdFromUrl(params.productItem)
    
    if (productID === null) {
        throw new Error('ID not found')
    }

    const data : ProductItemType | null = await getProductDetail(productID.toString())


    // const data : ProductItemType | null  = await getProductDetailForHotProduct(productID.toString())
    if  (data === null) {
        throw new Error('Product not found')
    }

    // if (data.id.toString() !== productID.toString()) {
    //     throw new Error('not sync')
    // }

    return (
        <div>
            <FixUI />
            <ProductDetail productItem={data} />
        </div>
    )
}