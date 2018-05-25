import { Notification, Message } from 'element-ui'

// const wsUrl = jailId => `ws://123.57.7.159/ws/${ jailId }` // 测试
// const wsUrl = jailId => `ws://123.57.7.159/ws-demo/${ jailId }` // 演示
const wsUrl = jailId => `wss://www.yuwugongkai.com/ws/${ jailId }`

export default {
  getWebsocketResult: ({ commit }, params) => {
    const socket = new WebSocket(wsUrl(params))
    // 开启事件
    socket.onopen = () => {
      window.router.afterEach(route => {
        if (route.path === '/new-login') socket.close()
      })
    }
    // 获得消息事件
    socket.onmessage = response => {
      let res = JSON.parse(response.data)
      if (res.code === 200 && res.data && res.data.meetings) {
        Notification({
          title: res.data.meetings.name,
          type: 'success',
          message: `已调整至${ res.data.meetings.meetingTime }，终端号是${ res.data.meetings.terminalNumber }`,
          duration: 8000
        })
      }
      else if (res.code !== 200) {
        Notification({
          title: `${ res.data.meetings.name }会见调整失败`,
          type: 'error',
          message: `会见时间：${ res.data.meetings.meetingTime }，终端号：${ res.data.meetings.terminalNumber }，失败原因：${ res.msg }`,
          duration: 8000
        })
      }
    }
    // 关闭事件
    socket.onclose = function() {
      // console.log('Socket已关闭')
    }
    // 发生了错误事件
    socket.onerror = () => {
      Message.error('Socket发生了错误')
      // console.log('Socket发生了错误')
    }
  }
}
