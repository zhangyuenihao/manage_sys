/**
 * Created with webstrom
 * author:
 * Date:
 * Time:
 */
import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";
const defaultConfig = {
  timeout: 10000,
  baseURL: "http://192.168.1.211:7001/",
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
};

const instance = axios.create(defaultConfig);
// 扩展axios配置
axios.defaults = Object.assign(axios.defaults, {
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});
// ajax请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (config.method === "post" && config.data) {
      var data = config.data;
      config.data = qs.stringify(data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 请求响应拦截器
instance.interceptors.response.use(
  res => {
    const { code, message, data } = res.data;
    if (code === 0) {
      return data;
    } else {
      Message({
        message: message,
        type: "error"
      });
      return Promise.reject(res.data);
    }
  },
  error => {
    Message({
      message: error.message,
      type: "error"
    });
    return Promise.reject(error);
  }
);

export const get = (url, params, config = {}) => {
  return instance.get(
    url,
    {
      params
    },
    { ...defaultConfig, ...config }
  );
};

export const post = (url, params, config = {}) => {
  config = Object.assign(defaultConfig, config);
  return instance.post(url, params, { ...defaultConfig, ...config });
};

export default {
  post,
  get,
  request: instance
};
