import http from './http.js';

export const CategoryAPI = {
        // ajaxData = { fid: ? }
        getData: ajaxData => http('/category/getListByFid', { body: JSON.stringify(ajaxData) })
};
export const ProductAPI = {};
export const CartAPI = {};
export const LoginAPI = {};
