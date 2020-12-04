import GoodsInfo from "@/model/example/GoodsInfo";
import HomeInit from "@/model/example/HomeInit";
import BaseResponse from "src/model/common/BaseResponse";
import ApiClient from "../ApiClient";

export default class ExampleApi {
  /**
   * 首页初始化
   */
  static getInit(): Promise<BaseResponse<HomeInit>> {
    return ApiClient.server()
      .post("/example/getInit", {}, {})
      .then(res => {
        return res.data;
      });
  }

  /**
   * 首页初始化
   */
  static getGoodsInfo(): Promise<BaseResponse<GoodsInfo>> {
    return ApiClient.server()
      .post("/example/getGoodsInfo", {}, {})
      .then(res => {
        return res.data;
      });
  }
  /**
   * 查询商品单据列表
   */
  // static getSkuList(applyDate: string): Promise<BaseResponse<ListModel[]>> {
  //   return ApiClient.server()
  //     .post("/example/getSkuList", { applyDate: applyDate }, {})
  //     .then(res => {
  //       return res.data;
  //     });
  // }

  /**
   * 获取账户
   * 获取账户
   *
   * @param tenant 租户id
   * @param owner 拥有者id
   * @param type 账户类型,
   */
  static get(tenant: string, owner: string, type: string): Promise<any> {
    return ApiClient.server()
      .get(`aas/v1/${tenant}/account/get`, {
        params: {
          owner: owner,
          type: type
        }
      })
      .then(res => {
        return res.data;
      });
  }
}
