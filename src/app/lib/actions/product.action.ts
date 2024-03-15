import { db } from '../firebase/initFirebase';
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { processDataFetched} from '@/app/utils/product.utils';
import { ProductItemType } from '@/app/lib/type';


const productServiceUrl = process.env.BACKEND_URL;
const staticURL = process.env.STATIC_IMAGE_SERVER_URL;

//for hot product actions because it using firebase (why not centerlize it because it is a project for learning)

export const getAllID = async() => {
       const popularCollectionRef = collection(db, "popularProduct");
       const IDs: any = [];
       const querySnapshot = await getDocs(popularCollectionRef);
       querySnapshot.forEach((doc) => {
              IDs.push(doc.id);
       });
       return IDs
}

const popularCollectionRef = collection(db, "popularProduct");

export const getHotProduct = async () => {
       const popularProduct: any = [];
       const querySnapshot = await getDocs(popularCollectionRef);
       querySnapshot.forEach((doc) => {
              popularProduct.push(doc.data());
       });
       const data = processDataFetched(popularProduct)
       return data
};


export const getProductDetailForHotProduct = async (productID: string):Promise<ProductItemType | null>  => {
       const docRef = doc(popularCollectionRef, productID)
       try {
              const docSnap = await getDoc(docRef);
              if (docSnap.exists()) {
                     return docSnap.data() as ProductItemType
              }
              else {
                     console.log('productItemAction does not exist!')
                     return null
              }
       } catch (error) {
              console.error("productItemAction Error getting document:", error);
              throw error
       }
}
//end of hot product actions

//get product items from express service

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



//get product recentviewedo


