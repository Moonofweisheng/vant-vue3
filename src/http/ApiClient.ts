import axios from "axios";
import store from "../store";

const qs = require("qs");
axios.defaults.paramsSerializer = params => {
  return qs.stringify(params, { arrayFormat: "repeat" });
};
axios.defaults.timeout = 60000;

export default class ApiClient {
  public static file(baseUrl: string) {
    return axios.create({
      baseURL: baseUrl
    });
  }

  public static server() {
    // 可以在这里拦截
    const baseUrl = process.env.VUE_APP_BASEURL;
    return ApiClient.create(baseUrl);
  }

  public static create(baseUrl: string) {
    const instance = axios.create({
      baseURL: baseUrl,
      withCredentials: true
    });

    instance.interceptors.request.use(
      request => {
        return request;
      },
      error => {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      response => {
        if (response.data instanceof ArrayBuffer) {
          return response;
        }
        if (response.data.success) {
          return response;
        } else {
          const error = new Error();
          if (response.data.msg) {
            error.message = response.data.msg;
          } else {
            error.message = response.status + "服务器内部异常";
          }
          (error as any).response = response.data;
          throw error;
        }
      },
      error => {
        console.log(error);

        if (!error.response) {
          error.message = "请检查网络设置";
          return Promise.reject(error);
        }
        switch (error.response.status) {
          case 101:
            break;
          case 401:
            error.message = "登录已过期,请重新登录!";
            break;
          case 403:
            error.message = "禁止访问!";
            break;
          case 503:
            error.message = "服务器升级中!";
            break;
          case 500:
            error.message = error.response.data.msg || "服务内部异常!";
            break;
          default:
            error.message = "未知错误";
        }
        return Promise.reject(error);
      }
    );
    return instance;
  }
}
