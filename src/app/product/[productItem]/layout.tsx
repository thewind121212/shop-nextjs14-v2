import RecentViewedProducts from "@/app/ui/products-mixer/recentViewedProducts";
import {getProductDetail, getProductDetailForHotProduct } from "@/app/lib/actions/product.action"
import {ProductItemType} from "@/app/lib/type"
import { extractIdFromUrl  } from "@/app/utils/product.utils";
import { getAllID } from "@/app/lib/actions/product.action";
import ProductDetailSection from './page'
import { getProductByCategoryFromBreadCrumb } from "@/app/lib/actions/categories.actions";


export default async function ProductDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
 params: {productItem: string}
}>) {

    const productID =  extractIdFromUrl(params.productItem)
    
    if (productID === null) {
        throw new Error('ID not found')
    }

    const IDFromHotProducts = await getAllID()

    let data : ProductItemType | null = null

    if (!IDFromHotProducts.includes(productID.toString())) {
     data  = await getProductDetail(productID.toString())
    }else {
        data = await getProductDetailForHotProduct(productID.toString())
    }

    if  (data === null) {
        throw new Error('Product not found')
    }


    let idProduct =  {
      order: 3,
      breadCrumbArray: data.breadCrum,
    }

    const productByCategory = await getProductByCategoryFromBreadCrumb(idProduct)
   


  return (


<>
      <div className="w-auto h-auto bg-primary-white">
        <ProductDetailSection data={data} />
        <RecentViewedProducts productId={productID} />        
        </div>
    </>
  );
}
