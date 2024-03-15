import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllID, getProductDetailForHotProduct } from '@/app/lib/actions/product.action';
import { ProductItemType } from '@/app/lib/type';



const productServiceUrl = process.env.BACKEND_URL;
const staticURL = process.env.STATIC_IMAGE_SERVER_URL;


export const getProductDetail = async (productID: string):Promise<ProductItemType | null>  => {

       try {
              const apiURl= (`${productServiceUrl}/product/productdetail?productId=${productID}`)
              const dateRetrive = await fetch(apiURl)              
              const {data} : {data : ProductItemType} = await dateRetrive.json();
              data.thumbnail = `${staticURL}${data.thumbnail}`
              data.gallery = data.gallery.map((item: string) => {
                     return `${staticURL}${item}`
              })

              Object.values(data.color).forEach((item: any) => {
                     return item.colorImage = `${staticURL}${item.colorImage}`
              })
              return  data

       } catch (error) {
             return null 
       }
}

type ResponseData = {
  message: string 
} | ProductItemType  | null

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  
  const params = req.query
  if (!params.productId) return

  const idFromFireBase = await getAllID()

  if (idFromFireBase.includes(params.productId)) {
    const data : ProductItemType | null  = await getProductDetailForHotProduct(params.productId.toString())
    if  (data === null) {
      res.status(404).json({ message: 'Product not found' }) 
    }
    res.status(200).json(data)
  } else {
    const data : ProductItemType  | null = await getProductDetail(params.productId.toString())
    if  (data === null) {
      res.status(404).json({ message: 'Product not found' }) 
    }
    res.status(200).json(data)
  }




}