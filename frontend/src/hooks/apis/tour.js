import axiosInstance from '../../utils/axios';
import qs from 'qs';

const getToursDetailById = async (data, header = {}) => {
    return await axiosInstance({
        url: '/tour/client/all-info',
        method: 'GET',
        params: data,
        headers: header,
    });
};

const getReviewById = async (data, header = {}) => {
    return await axiosInstance({
        url: '/review/client/list-by-tour',
        method: 'GET',
        params: data,
        paramsSerializer: params => {
            return qs.stringify(params, { arrayFormat: 'repeat' });
        },
        headers: header,
    });
};


const getListTour = async (data, header = {}) => {
    return await axiosInstance({
        url: '/tour/client/all-by-filter',
        method: 'POST',
        data: JSON.stringify(data),
        headers: header,
    });
};

const getStyles = async (data, header = {}) => {
    return await axiosInstance({
        url: '/client/list-style',
        method: 'GET',
        headers: header,
    });
};

const getThemes = async (data, header = {}) => {
    return await axiosInstance({
        url: '/client/list-theme',
        method: 'GET',
        headers: header,
    });
};

export { getToursDetailById,getReviewById,getListTour,getStyles,getThemes };