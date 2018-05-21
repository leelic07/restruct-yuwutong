<template>
    <div>{{websocketResult}}
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['websocketResult'])
  },
  methods: {
    ...mapActions(['getWebsocketResult']),
    init() {
      var url = 'ws://123.57.7.159/ws/2'
      const socket = new WebSocket(url)

      // 打开事件
      socket.onopen = function() {
        console.log('Socket 已打开')
        // socket.send("这是来自客户端的消息" + location.href + new Date());
      }
      // 获得消息事件
      socket.onmessage = function(msg) {
        console.log(msg.data, msg)
        // 发现消息进入    调后台获取
        // document.getElementById('response').innerHTML = msg.data
        //  $("#response").html(msg.data);
      }
      // 关闭事件
      socket.onclose = function() {
        console.log('Socket已关闭')
      }
      // 发生了错误事件
      socket.onerror = (err) => {
        console.log(err)
        // alert('Socket发生了错误')
        this.$message.error('Socket发生了错误')
      }
      // setInterval(() => {
      //   console.log(111, socket.OPEN, socket.readyState, socket.CONNECTING)
      //   // socket.send(123)
      // }, 1000)
    }
  },
  created() {
    // this.getWebsocketResult(JSON.parse(localStorage.getItem('user')).jailId)
    this.getWebsocketResult()
  }
}
</script>
