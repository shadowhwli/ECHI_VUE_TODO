import { AxiosRequestConfig, AxiosPromise } from 'axios';
import axios from './config';

// HTTP工具类
export default class Http {
  public static async request(params: AxiosRequestConfig) {
    const res = await axios(params);
    return res.data;
  }

  /**
   * get
   * @param [url] 地址
   * @param [data] 数据
   * @returns Promise
   */
  public static get({ url, params, ...axiosConfig }): AxiosPromise {
    return this.request({
      method: 'GET',
      url,
      params,
      ...axiosConfig
    });
  }

  /**
   * put
   * @param [url] 地址
   * @param [data] 数据
   * @returns Promise
   */
  public static put({ url, data, ...axiosConfig }): AxiosPromise {
    return this.request({
      method: 'PUT',
      url,
      data,
      ...axiosConfig
    });
  }

  /**
   * post
   * @param [url] 地址
   * @param [data] 数据
   * @returns Promise
   */
  public static post({ url, data, ...axiosConfig }): AxiosPromise {
    return this.request({
      method: 'POST',
      url,
      data,
      ...axiosConfig
    });
  }

  /**
   * delete
   * @param [url] 地址
   * @param [params] 数据
   * @returns Promise
   */
  public static delete({ url, params, ...axiosConfig }): AxiosPromise {
    return this.request({
      method: 'DELETE',
      url,
      params,
      ...axiosConfig
    });
  }
}