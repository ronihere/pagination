export const getData = async (offset: string, limit: string) => {
    console.log('limit:::', limit);
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products' + `?offset=${offset}&limit=${limit}`)
        const jsonResponse = await response.json();
        return {data : jsonResponse}
    } catch (error) {
        return {error}
    }
}

export const delay = (time: number)=>new Promise(res => setTimeout(res , time))