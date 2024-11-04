import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`
    },
    baseURL:import.meta.env.VITE_TMDB_API_BASE_URL
});

export {axiosInstance};