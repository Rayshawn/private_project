// 此处配置 根访问路径 以及 全局错误处理
// 更多配置请根据业务逻辑自行实现

// 后端 API 地址，最好以 http(s):// 打头
// mock 环境：
// export const rootPath = 'http://mtnojh5dfswzxhjfm-mock.stoplight-proxy.io/integrationservice/'


/*
 * 卡戎环境： http://10.100.201.127:8002
 */

export const integrationPath = '/api01/integration/'
export const ticketPath = '/api02/ticket/'
export const weixinPath = '/wechat/wechatservice/'

export const sysPath = '/sys/sysservice/'
// export const integrationPath = '/integration/'
// export const ticketPath = 'http://qyapp01.dev.yinchengku.com:18002/ticket/'
// export const weixinPath = 'http://qyapp01.dev.yinchengku.com:18003/wechatservice/'
//
// export const sysPath = 'http://qyapp01.dev.yinchengku.com:18004/sysservice/'


export const errHandler = (e) => {
  // alert('[ XHR:Failed ] 详情请看控制台')
  if (e.responseJSON.msg) {
     alert(e.responseJSON.msg)
    return
  }
  console.error(e)
  return
}
