import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import type { CustomResponseData, CustomRequestData } from '@/api/model';
import { getToken } from './cookie';
import axios from 'axios';

const service = axios.create({
  baseURL: '',
  headers: {
    'Accept-Language': 'vi',
    'Content-Type': 'application/json'
  }
});

service.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = getToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.error('Error sending request:', error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse<CustomResponseData>) => {
    switch (response.status) {
      case 200:
        return response.data;
      case 401:
        console.error('Unauthorized request:', response);
        return Promise.reject(response);
      default:
        console.error('Unexpected response status:', response);
        return Promise.reject(response);
    }
  },
  (error) => {
    console.error('Error in response:', error);
    return Promise.reject(error);
  }
);

export function requestHttp(requestData: CustomRequestData) {
  const { url, method, data, params, withCredentials, timeout } = requestData;
  return service({
    url,
    method,
    data,
    params,
    withCredentials,
    timeout: timeout || 10 * 1000
  });
}

export default requestHttp;
