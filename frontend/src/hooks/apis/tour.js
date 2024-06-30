import axiosInstance from '../../utils/axios';

const getRegionTours = async (data, header = {}) => {
    return await axiosInstance({
        url: '/tour/client/list-by-region',
        method: 'GET',
        params: data,
        headers: header,
    });
};

const getRegionToursInfo = async (data, header = {}) => {
    return await axiosInstance({
        url: '/region/client/get-region-info',
        method: 'GET',
        params: data,
        headers: header,
    });
};

export { getRegionTours,getRegionToursInfo };