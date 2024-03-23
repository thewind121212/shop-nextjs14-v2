import { buildURLforProductServices } from '@/app/utils/category.uitls';
import { FetchPayload } from '../type';

const productServiceUrl = process.env.BACKEND_URL;
const staticURL = process.env.STATIC_IMAGE_SERVER_URL;

const apiOptions = {
    next: { revalidate: 3600 * 24 }
}

export const getFullCategories = async () => {
    const dataFetching = await fetch(`${productServiceUrl}/categories`, { ...apiOptions })
    const data = await dataFetching.json()
    return data;
}


export const getProductByCategoryFromBreadCrumb = async ({ order, breadCrumbArray, page, quantity, sortBy }: FetchPayload) => {

    const pageFetch = page === 0 ? '' : `page=${page}`
    const quantityFetch = quantity === 0 ? '' : `&quantity=${quantity}`
    const sortByFetch  = !sortBy || sortBy === 'default' ? '':`&sortBy=${sortBy}`


    let urlForFetch = null

    if (order === 'all') {
        urlForFetch = `${productServiceUrl}/categories/all`
    } else {
        urlForFetch = buildURLforProductServices(order, breadCrumbArray)
        if (urlForFetch === null) {
            return undefined
        }

    }



    const dataFetch = await fetch(urlForFetch + "?" + pageFetch + quantityFetch + sortByFetch, { cache: 'no-cache' })

    try {
        if (dataFetch.ok) {
            console.log('fetch ok')
        }
    } catch (error) {
        console.log(error)
        return undefined
    }


    const { data } = await dataFetch.json()

    if (data.length === 0) {

        return {
            data: [],
            totalPage: 0,
            totalProduct: 0
        }
    }

    let dataWithImage: any = []



    data.result.map((itemData: any) => {
        itemData.thumbnail = `${staticURL}${itemData.thumbnail}`
        itemData.gallery = itemData.gallery.map((item: string) => {
            return `${staticURL}${item}`
        })

        Object.values(itemData.color).forEach((itemColor: any) => {
            return itemColor.colorImage = `${staticURL}${itemColor.colorImage}`
        })
        dataWithImage.push(itemData)

    })

    return {
        data: dataWithImage,
        totalPage: data.totalPage,
        totalProduct: data.productQuantity
    }

}

