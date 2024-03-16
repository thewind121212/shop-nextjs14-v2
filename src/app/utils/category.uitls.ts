export const buildURLforProductServices = (order: number, breadCrumbArray: any[]) => {
    let url = null
        url =  `${process.env.BACKEND_URL}/categories${breadCrumbArray[1].link}`
    if (order === 2) {
        url =  `${process.env.BACKEND_URL}/categories${breadCrumbArray[2].link}`
    }
    if (order === 3) {
        url =  `${process.env.BACKEND_URL}/categories${breadCrumbArray[3].link.replace(`${breadCrumbArray[1].link}`,`${breadCrumbArray[2].link}`)}`
    }

    return url
}