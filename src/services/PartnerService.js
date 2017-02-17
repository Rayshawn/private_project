import xhr from './xhr/'

class PartnerService {
  /**
   * @return {Promise}
   * 合伙人信息
   */
  partenrInfo (headers, userId) {
    return xhr({
      method: 'get',
      url: 'copartner/user/' + userId,
      headers: headers
    })
  }

  /**
   * @return {Promise}
   * 任务奖励
   */
  taskProgress (userId) {
    return xhr({
      method: 'get',
      url: 'taskprogress/copartner/' + userId
    })
  }

  /**
   * @return {Promise}
   * 获取二维码／邀请码
   */
  invitationInfo (headers, userId) {
    return xhr({
      method: 'post',
      url: 'invitationinfo/user/' + userId,
      headers: headers
    })
  }

  /**
   * @return {Promise}
   * 获取邀请记录
   */
  invitationList (headers, userId) {
    return xhr({
      method: 'get',
      url: 'invitationlist/user/' + userId,
      headers: headers
    })
  }

}

// 实例化后再导出
export default new PartnerService()
