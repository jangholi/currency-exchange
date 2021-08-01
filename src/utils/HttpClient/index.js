import Axios from 'axios';

/**
 * HTTP Client
 */
export default class HttpClient {
  /**
     * set base url
     * @param baseURL {string} base url
     */
  constructor(baseURL = process.env.REACT_APP_BASE_URL) {
    this.baseURL = baseURL;
  }

  /**
     * make a request by axios
     * @param method {string} ['POST'|'GET'|'PUT'|'PATCH'|'DELETE']
     * @param url {string}
     * @param data {object}
     * @param params {object}
     * @returns {Promise<AxiosResponse<any>>}
     */
  request(method, url, data, params) {
    return Axios.request({
      baseURL: this.baseURL,
      method,
      url,
      data,
      params: { ...{ key: process.env.REACT_APP_API_KEY }, ...params },
    });
  }
}
