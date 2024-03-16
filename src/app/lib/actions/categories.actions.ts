import { buildURLforProductServices} from '@/app/utils/category.uitls';

const productServiceUrl = process.env.BACKEND_URL;
const staticURL = process.env.STATIC_IMAGE_SERVER_URL;

const apiOptions = {
    next: { revalidate: 3600 * 24 }
}

export const getFullCategories = async () => {
    const dataFetching = await fetch(`${productServiceUrl}/categories`, {...apiOptions})
    const data = await dataFetching.json()
    return data;
}


export const getProductByCategoryFromBreadCrumb = async ({order , breadCrumbArray} : any) => {
    const urlForFetch = buildURLforProductServices(order, breadCrumbArray)
    if (urlForFetch === null) {
        return undefined 
    }
    console.log(urlForFetch)
    const dataFetch = await fetch(urlForFetch, {cache: 'no-cache'})

    try {
        if (dataFetch.ok) {
            console.log('fetch ok')
        }
    } catch (error) {
        return undefined
    }


    const {data} = await dataFetch.json()

    if (data.length === 0) {
        return []
    }

    let dataWithImage : any= []


   
    data.result.map((itemData : any) => {
              itemData.thumbnail = `${staticURL}${itemData.thumbnail}`
              itemData.gallery = itemData.gallery.map((item: string) => {
                     return `${staticURL}${item}`
              })

              Object.values(itemData.color).forEach((itemColor: any) => {
                     return itemColor.colorImage = `${staticURL}${itemColor.colorImage}`
              })
                dataWithImage.push(itemData)

    })

    return dataWithImage
    
}

