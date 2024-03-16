import FixUI from "@/app/ui/fix-ui"
import ProductDetail from "@/app/ui/product-detail/product-detail-main"


export default function Page ({data}: {data: any}) {


    return (
        <div>
            <FixUI />
            <ProductDetail productItem={data} />
        </div>
    )
}