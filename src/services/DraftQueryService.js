import xhr from './xhr/'

class DraftQueryService {

// /***********************票据相关的接口**********************/
  // 挂失查询
  DraftLoseQuery (tiketcode) {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'losestatus/' + tiketcode
    })
  }

  // 添加票据监控
  AddDraftMonitor (headers, userId, data) {
    return xhr({
      method: 'post',
      serviceType: '1',
      url: 'losemonitor/' + userId,
      headers: headers,
      body: data
    })
  }

  // 删除票据监控
  DeleteDraftMonitor (userId, headers, data) {
    return xhr({
      method: 'delete',
      serviceType: '1',
      url: 'losemonitor/user/' + userId,
      headers: headers,
      body: data
    })
  }

  // 更新票据监控
  UpdateDraftInfo (headers, monitorId, userId, data) {
    return xhr({
      method: 'put',
      serviceType: '1',
      headers: headers,
      url: 'losemonitor/' + monitorId + '/user/' + userId,
      body: data
    })
  }

  // 票据监控详情
  DraftDetailInfo (headers, ticketId) {
    return xhr({
      method: 'get',
      serviceType: '1',
      headers: headers,
      url: 'losemonitor/' + ticketId
    })
  }

  // 票据监控列表
  DraftMonitorList (headers, userId) {
    return xhr({
      method: 'get',
      serviceType: '1',
      headers: headers,
      url: 'losemonitorlist/user/' + userId
    })
  }

  // // 票据监控状态
  DraftStatusList () {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'losemonitor/dict'
    })
  }

  // // 已删除票据监控列表
  DraftRemovedList (headers, userId) {
    return xhr({
      method: 'get',
      serviceType: '1',
      headers: headers,
      url: 'removedlosemonitorlist/user/' + userId
    })
  }

  // // 智能报价
  SmartQuoting (queryData) {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'smartquoting' +
           '?expiredDate=' + queryData.expiredDate +
           '&bankType=' + queryData.bankType +
           '&amount=' + queryData.amount +
           '&cityName' + queryData.cityName
    })
  }

  // 智能报价--联系我们
  TranslateUs (info) {
    return xhr({
      method: 'post',
      serviceType: '1',
      url: 'appointment',
      body: info
    })
  }

  // 按名称搜索银行列表
  BankList (data) {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'banks' +
           '?bankName=' + data.bankName +
           '&page=' + data.page +
           '&perPage=' + data.perPage +
           '&cityId=' + data.cityId
    })
  }

  // 查询银行详细信息,大额行号的搜索
  BankNumberList (bankNumber) {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'bank/' + bankNumber
    })
  }
  // 查询银行详细信息,银行名称的搜索
  BankTypeList () {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'bankTypeList'
    })
  }


  // 报价页面的搜索
  AcceptingHouseList (bankName) {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'acceptinghouse/name/' + bankName
    })
  }



// /***********************拒付保障卡查询**********************/
  QueryRepudiateCard (cardNumber) {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'querybyensurecard/cardNumber/' + cardNumber
    })
  }

// /***********************门店相关的接口**********************/

// 全国（省列表）
  StoreQueryProvinces () {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'provincesCities'
    })
   }

  // 门店查询（省列表）
  StoreQueryProvincesCities () {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'store/provincesCities'
    })
   }

    // 门店查询（门店列表）
  StoresQuery (data) {
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'stores?' + 'cityId=' + data.cityId + '&latitude=' + data.latitude + '&longitude=' + data.longitude
    })
  }

  // /***********************通过openid请求用户是否绑定**********************/
  JudgeIsBinging (data) {
    return xhr({
      method: 'get',
      serviceType: '2',
      url: 'weixin/getUserIdByOpenId?openId=' + data.openId
    })
  }

  // /***********************登录用户获取已绑定业务员相关接口**********************/
  GetBindingAgent (headers) {
    return xhr({
      method: 'post',
      serviceType: '1',
      url: 'loadBindingEmployee',
      headers: headers
    })
  }

  // /***********************验证码相关的接口**********************/
  GetCode (phone, type) {// 0登录，1注册，6预约联系我们
    return xhr({
      method: 'get',
      serviceType: '1',
      url: 'smsverifycode/phone/' + phone + '/type/' + type
    })
  }

}

export default new DraftQueryService()
