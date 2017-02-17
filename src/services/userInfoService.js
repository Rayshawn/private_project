import xhr from './xhr/'

class UserInfoService {
  /**
   * @param  {Object} userInfo
   * @return {Promise}
   * 密码登录
   */
  userLogin (userInfo) {
    return xhr({
      method: 'post',
      url: 'user/session',
      body: userInfo
    })
  }

  /**
   * @param  {param} data
   * @return {Promise}
   * 合伙人注册的获取验证吗
   */
  getCode (phone, type) {
    return xhr({
      method: 'post',
      url: 'smsverifycode/phone/' + phone + '/type/' + type
    })
  }

  /**
   * @phone 电话号
   * @type type = 1为企业注册
   * @return {Promise}
   * 合伙人注册的获取验证吗
   */
  getNewRegisterCode (phone, type) {
    return xhr({
      method: 'post',
      url: 'verifycode/phone/' + phone + '/type/' + type
    })
  }

  /**
   * @param  {Object} userInfo
   * @return {Promise}
   * 验证验证码
   */
  commitCode (userInfo) {
    return xhr({
      method: 'get',
      url: 'smsverifycode/phone/' + userInfo.phone + '/code/' + userInfo.code
    })
  }

  /**
   * @param  {Object} userInfo
   * @return {Promise}
   * 快捷登录
   */
  userSwiftLogin (userInfo) {
    return xhr({
      method: 'post',
      url: 'user/session/fastsignin',
      body: userInfo
    })
  }

  /**
   * @param  {Object} userInfo
   * @return {Promise}
   * 注册, 没有图形验证码的注册
   */
  userRegister (userInfo) {
    return xhr({
      method: 'post',
      url: 'user/register',
      body: userInfo
    })
  }

  /**
   * @param  {Object} userInfo
   * @return {Promise}
   * 企业注册接口
   */
   partnerInviteRegister (userInfo) {
     return xhr({
       method: 'post',
       url: 'user/partnerInviteRegister',
       body: userInfo
     })
   }


  /**
   * 合伙人信息登录
   * @param  {param}
   * @return {Promise}
   *
   */
   partnerInfoRegister (headers, userInfo) {
     return xhr({
       method: 'post',
       url: 'copartner',
       headers: headers,
       body: userInfo
     })
   }

  /**
   * @param  {param}
   * @return {Promise}
   * 生成图片验证码
   */
  // getPictrueCode () {
  //   return xhr({
  //     method: 'get',
  //     url: 'imgcreatecode'
  //   })
  // }

  /**
   * @param  {param} data
   * @return {Promise}
   * 检测图片验证吗
   */
  // commitPictrueCode (data) {
  //   return xhr({
  //     method: 'get',
  //     url: 'imgverifycode/phone/' + data
  //   })
  // }

  /**
   * @param  {param} data
   * @return {Promise}
   * 测试app下载链接
   */
  logout () {
    return xhr({
      method: 'get',
      url: 'appurl/os/Android'
    })
  }

  /**
   * @param  {Object} userInfo
   * @return {Promise}
   * 验证忘记密码的验证码
   */
  validationCode (userInfo) {
    return xhr({
      method: 'post',
      url: 'validationsmscode/phone/' + userInfo.phone + '/code/' + userInfo.code
    })
  }

  /**
   * @param  {Object} userInfo
   * @return {Promise}
   * 验证忘记密码的验证码
   */
  updatePassword (userInfo) {
    return xhr({
      method: 'post',
      url: 'updatepassword',
      body: userInfo
    })
  }

}

export default new UserInfoService()
