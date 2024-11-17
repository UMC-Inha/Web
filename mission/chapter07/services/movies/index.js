import { axiosInstance } from "../../apis/axios-instance";

export const fetchMovieDetail = async (id) => {
    const response = await axiosInstance.get(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR`);
    return response.data;
}

export const fetchMovieList = async (url,pageParam) =>{
    const pageUrl = `${url}&page=${pageParam}`;
    const response = await axiosInstance.get(pageUrl);
    return response.data.results;
}