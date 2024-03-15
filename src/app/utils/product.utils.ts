export const processDataFetched =  (data: any) => {
    const dataReturn = [];

    for (let i = 0; i < data.length; i++) {
      const colorArray: any = [];
      Object.values(data[i].color).map((item: any) => {
        colorArray.push(item.colorImage);
      });

      const dataPatern = {
        id: data[i].id,
        name: data[i].name,
        price: data[i].price,
        thumbnail: data[i].thumbnail,
        colorArray: colorArray,
      };
      dataReturn.push(dataPatern);
    }
    return dataReturn;
  };


export const removeDiacritics = (str : string) => {
    let newStr = str.replace(/-/g,"")
    newStr = newStr.replace(/\s+/g, '-')
    return newStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  }


export const extractIdFromUrl = (url : string) : string | null => {
    const match = url.match(/\.(\d+)$/);
    if (match) {
        const id = match[1];
        return id;
    } else {
        return null;
    }
}
