import { db } from '../firebase/initFirebase';
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { processDataFetched } from '@/app/utils/product.utils';
import { ProductItemType } from '@/app/lib/type';
import { get } from 'http';
import { set } from 'firebase/database';


//for hot product actions because it using firebase (why not centerlize it because it is a project for learning)

const getAllID = async() => {
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

//get product recentviewed

export const getProductsRecentViewed = async (products : string[]) => {
       const IDs = await getAllID();
       const promisesFunctions =  products.map((item: string) => {
              if (IDs.includes(item.toString())) {
                     return getProductDetailForHotProduct(item.toString())
              }
});
       const fetchedFireBase = await Promise.all(promisesFunctions);
       const data = processDataFetched(fetchedFireBase)
       return data;
}


