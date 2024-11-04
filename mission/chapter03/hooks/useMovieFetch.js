import {useEffect, useState} from "react"
import { axiosInstance } from "../apis/axios-instance"


const useMovieFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get(url);
                setData(response.data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    },[url])

    return {data, loading, error};
}

export default useMovieFetch;