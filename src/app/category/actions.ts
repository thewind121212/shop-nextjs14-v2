'use server'
import { FetchPayload } from "../lib/type"
import { getProductByCategoryFromBreadCrumb } from "../lib/actions/categories.actions"
import { processDataFetched } from "../utils/product.utils"

export const fetchProducts = async ({order, page, quantity, breadCrumbArray, sortBy} : FetchPayload ) => {

    const fetchPayload : FetchPayload = {
        order: 'all', 
        page : page ? page : 1,
        quantity: quantity ? quantity : 20,
        breadCrumbArray: breadCrumbArray && [],
        sortBy: sortBy ? sortBy : 'default'
    }

    const data : any = await getProductByCategoryFromBreadCrumb(fetchPayload)

    return {
        data: processDataFetched(data.data),
        totalPage: data.totalPage,
        totalProducts: data.totalProduct
    }


}