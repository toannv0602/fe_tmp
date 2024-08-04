import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const axiosInstance  = axios.create({
    baseURL: publicRuntimeConfig.API_URL,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        // 'Access-Control-Allow-Credentials':true,
        // 'Cache-Control': 'max-age=3600',
    },
    timeout: 5000,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return error.response && error.response.data;
    },
);

export default axiosInstance ;
