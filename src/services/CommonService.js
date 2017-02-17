import xhr from './xhr/'

class CommonService {


  // 全国城市列表
  GetCitys (data) { // 例data={parentId: '21'}
    return xhr({
      method: 'get',
      url: 'cities',
      serviceType: '1',
      body: data
    })
  }

  // 全国省列表，现在没用到
  GetProvinces () {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'provinces'
    })
  }

  // 全部地址
  GetAllCitys () {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'provincesCities'
    })
  }

// /***********************绑定相关接口**********************/
  // 绑定是手机验证码
  WechatBingVerifyCode (data) {
    return xhr({
      method: 'get',
      serviceType: '2',
      url: 'smsverifycode/phone/' + data.phone + '/type/' + data.type
    })
  }
  // 注册时手机验证码
  WechatVerifyCode (phone) {
    return xhr({
      method: 'post',
      serviceType: '2',
      url: 'verifycode/phone/' + phone
    })
  }
  // 微信绑定银承库接口
  WechatBinging (data) {
    return xhr({
      method: 'post',
      serviceType: '2',
      url: 'user/binding',
      body: data
    })
  }

  // 微信注册并绑定接口
  WechatRegister (data) {
    return xhr({
      method: 'post',
      serviceType: '2',
      url: 'user/register',
      body: data
    })
  }

  // /***********************banner轮播图相关接口**********************/
    GetBanners () {
      return xhr({
        method: 'get',
        serviceType: '3',
        url: 'banners'
      })
    }  

}

export default new CommonService()
