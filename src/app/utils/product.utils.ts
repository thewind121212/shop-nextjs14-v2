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