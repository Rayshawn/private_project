import { integrationPath, ticketPath, weixinPath, sysPath } from './config'

const xhr = ({ url, body = null, method = 'get', headers = null, dataType = null, serviceType = '0' }) => {// serviceType默认为0为积分二期
// alert('$>>>' + JSON.stringify($.ajax))
  const defer = $.Deferred()
  var reqData = body
  var reqDataType = dataType || 'json'
  var reqHeader = headers || {}

  if (reqDataType === 'json') {
    reqData = JSON.stringify(body)
    reqHeader['Content-Type'] = 'application/json'
  } else {
    reqData = body
  }

  var baseUrl = integrationPath
  if (serviceType === '0') {
//  baseUrl = integrationPath
  } else if (serviceType === '1') {
    baseUrl = ticketPath
  } else if (serviceType === '2') { // 微信开发服务
    baseUrl = weixinPath
  } else if (serviceType === '3') { // 系统开发服务
    baseUrl = sysPath
  }

  console.log('Request body: ' + reqData)

  $.ajax({
    type: method,
    // dataType: 'jsonp',
    headers: reqHeader,
    url: baseUrl + url,
    data: reqData,
    dataType: reqDataType
    // success: function(json) {
    //   alert('成功>>' + JSON.stringify(json))
    //   // defer.resolve
    // },
    // error: function(e) {
    //   alert('失败>>' + JSON.stringify(e))
    //   // defer.resolve
    // }
    // jsonp: "callbackparam"
    // jsonpCallback: "jsonpCallback1"
    // xhrFields: { // 跨域允许带上 cookie
    //   withCredentials: [域名]
    // },
    // crossDomain: true
  })
  .done(defer.resolve)
  // .fail(errHandler)
  .fail(defer.resolve)

  return defer.promise()
}

export default xhr
