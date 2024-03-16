import { buildURLforProductServices} from '@/app/utils/category.uitls';

const backendUrl = process.env.BACKEND_URL


const apiOptions = {
    next: { revalidate: 3600 * 24 }
}

export const getFullCategories = async () => {
    const dataFetching = await fetch(`${backendUrl}/categories`, {...apiOptions})
    const data = await dataFetching.json()
    return data;
}


export const getProductByCategoryFromBreadCrumb = async ({order , breadCrumbArray} : any) => {
    const urlForFetch = buildURLforProductServices(3, breadCrumbArray)
    console.log(urlForFetch)
}

