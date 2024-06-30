import axiosInstance from '../../utils/axios';

const getDataNav = async (header = {}) => {
    return await axiosInstance({
        url: '/client/menu',
        method: 'POST',
        headers: header,
    });
};

export { getDataNav };