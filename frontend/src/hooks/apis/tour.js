import axiosInstance from '../../utils/axios';

const getToursDetailById = async (data, header = {}) => {
    return await axiosInstance({
        url: '/tour/client/all-info',
        method: 'GET',
        params: data,
        headers: header,
    });
};

export { getToursDetailById };