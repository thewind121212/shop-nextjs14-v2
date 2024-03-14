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

