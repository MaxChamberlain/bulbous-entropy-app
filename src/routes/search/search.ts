import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_API_URL

export const searchData = async (vin: string, zip: string, price: string, setData: Function, setLoading: Function) => {
    try{
        setLoading(true)
        const { data } = await axios.get(`${BASE_URL}/search/gurusvin/?VIN=${vin}&ZIP=${zip}&PRICE=${price}`);
        console.log(data)
        setLoading(false)
        setData(data)
    }catch(e){
        setLoading(false)
        console.log(e)
    }
}