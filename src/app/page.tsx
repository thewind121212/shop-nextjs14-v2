import Home from "./ui/home/home";
import { getHotProduct } from "@/app/lib/actions/product.action"



export  default async function Page() {

  const hotProductsData = await getHotProduct();

  return (
    <Home hotProducts={hotProductsData}/>
  );
}
