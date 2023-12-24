'use server'
import { getData } from "@/lib/utilf/utils"
const getPaginatedProductData =async (offset:string , limit : string) => {
    const response = await getData(offset, limit);
    if (response.data) {
        console.log('getPaginated')
        return await response.data;
    }
    return response.error;
}

export default getPaginatedProductData;