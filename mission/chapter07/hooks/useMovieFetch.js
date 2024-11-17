import {useEffect, useState} from "react"
import { axiosInstance } from "../apis/axios-instance"

const useMovieFetch = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   let timeoutId = null;

   useEffect(()=>{
        clearTimeout(timeoutId);

       timeoutId = setTimeout(async () => {
           setLoading(true);
           try {
               const response = await axiosInstance.get(url);
               setData(response.data.results);
           } catch (error) {
               setError(error);
           } finally {
               setLoading(false);
           }
       }, 500);

       return () => {
           if (timeoutId) {
               clearTimeout(timeoutId);
           }
       };
   },[url])

   return {data, loading, error};
}

export default useMovieFetch;