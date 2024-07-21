import axiosInstance from '../../utils/axios';

const getTopTours = async (header = {}) => {
    return await axiosInstance({
        url: '/client/home',
        method: 'POST',
        headers: header,
    });
};

const getDataNav = async (header = {}) => {
    return await axiosInstance({
        url: '/client/menu',
        method: 'GET',
        headers: header,
    });
};

export { getTopTours,getDataNav };