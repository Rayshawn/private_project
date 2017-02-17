import xhr from './xhr/'

// 积分相关的接口

class IntegrationService {


  /**
   * userId  string userId
   * @return {Promise}
   * 可兑换积分列表
   */
  IntegrationGoods (userId, headers, data) {
      return xhr({
        method: 'get',
        headers: headers,
        body: data,
        url: 'integrationgoods/user/' + userId
      })
  }

  /**
   * @userId  string
   * @return {Promise}
   * 合伙人积分
   */
   copartnerIntegration (userId, headers) {
     return xhr({
       method: 'get',
       headers: headers,
       url: 'copartner/user/' + userId
     })
   }



  /**
   * userId  string userId
   * @return {Promise}
   * 用户积分，企业用户
   */
   Integration (userId) {
     return xhr({
       method: 'get',
       url: 'integration/user/' + userId
     })
   }

   /**
    * @return {Promise}
    * 已兑换积分列表
    */
    Exchangegoodslist (headers, data) {
      return xhr({
        method: 'get',
        url: 'exchangegoods?page=' + data.page + '&perPage=' + data.perPage,
        headers: headers
      })
    }


    /**
     * @userId 用户id
     * @goodId 商品Id
     * @return {Promise}
     * 兑换商品
     */
     Exchangegood (headers, userId, goodId, count) {
       return xhr({
         method: 'post',
         headers: headers,
        //  body: data,
         url: 'exchangegood/userId/' + userId + '/goodId/' + goodId + '?count=' + count
       })
     }
}

// 实例化后再导出
export default new IntegrationService()
