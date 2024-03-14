import RecentViewedProducts from "@/app/ui/products-mixer/recentViewedProducts";
import { extractIdFromUrl  } from "@/app/lib/utils/utils";


export default function ProductDetailLayout({
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



  return (


<>
      <div className="w-auto h-auto bg-primary-white">
        {children}
        <RecentViewedProducts productId={productID} />        
        </div>
    </>
  );
}
