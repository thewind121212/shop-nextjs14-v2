import RecentViewedProducts from "@/app/ui/products-mixer/recentViewedProducts";
import {getProductDetail, getProductDetailForHotProduct } from "@/app/lib/actions/product.action"
import {ProductItemType} from "@/app/lib/type"
import { extractIdFromUrl  } from "@/app/utils/product.utils";
import { FetchPayload } from "@/app/lib/type";
import { getAllID } from "@/app/lib/actions/product.action";
import ProductDetailSection from './page'
import { processDataFetched } from '@/app/utils/product.utils';
import { getProductByCategoryFromBreadCrumb } from "@/app/lib/actions/categories.actions";
import RecommendedProducts from "@/app/ui/products-mixer/recommendProduct";


export default async function ProductDetailLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
 params: {productItem: string}
}>) {

    const productID = extractIdFromUrl(params.productItem)
    
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


    let fetchPayload : FetchPayload =  {
      order: 2,
      breadCrumbArray: data.breadCrum,
      page: 1,
      quantity: 12
    }

    const productByCategory : any = await getProductByCategoryFromBreadCrumb(fetchPayload)

    if (productByCategory.data === undefined) {
        throw new Error('error in fetch category for product detail') 
    }

    const recommendedProducts : any = processDataFetched(productByCategory.data)


  return (


<>
      <div className="w-auto h-auto bg-primary-white">
        <ProductDetailSection data={data} />
        <RecommendedProducts products={recommendedProducts} />
        <RecentViewedProducts productId={productID} />        
        </div>
    </>
  );
}
