/* eslint-disable func-names */
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import axios from 'axios';

const config = {
  baseURL: '/',
  transformRequest: [
    function (data) {
      let ret = '';
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      return ret;
    },
  ],
  transformResponse: [
    function (data) {
      return data;
    },
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  timeout: 10000,
  responseType: 'json',
};

axios.interceptors.response.use((res) => {
  // 相应拦截器
  return res.data;
});


export function get(url) {
  return axios.get(url, config);
}

export function post(url, data) {
  return axios.post(url, data, config);
}
