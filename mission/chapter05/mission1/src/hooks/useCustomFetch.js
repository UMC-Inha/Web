import { useState, useEffect } from "react";
import axios from "axios";

export const useCustomFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => { 
        const fetchData = async () => {
            setLoading(true); // 로딩 시작
            try {
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
                    }
                });
                setData(response.data);
            } catch (err) {
                setError("error 발생");
                console.error(err);
            } finally {
                setLoading(false); // 요청 완료 후 로딩 종료
            }
        };
        
        if (url) {
            fetchData();
            
        }
    }, [url]);

    return { data, error, loading };
};
