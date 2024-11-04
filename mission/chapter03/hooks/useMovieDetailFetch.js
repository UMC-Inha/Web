import {useEffect, useState} from "react"
import { axiosInstance } from "../apis/axios-instance"


const useMovieDetailFetch = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${id}language=ko-KR`);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    },[id])

    return {data, loading, error};
}

export default useMovieDetailFetch;