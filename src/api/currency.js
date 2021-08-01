/** @API Auth API * */

import HttpClient from '../utils/HttpClient';

const client = new HttpClient();

/**
 * Exchange the currency
 * @returns {Promise<AxiosResponse<*>>}
 */
export const exchangeCurrency = (params) => client.request('GET', 'currencies/ticker', null, params);
