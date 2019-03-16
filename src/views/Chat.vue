<template>
  <div>
    <div class="room">
      聊天室
    </div>
    <div class="chat">
      <ul>
        <li v-for="(item,index) in messageList"
            :key="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="send">
      <input type="text"
             v-model="currentInputValue"
             placeholder="说点什么吧">
      <button type="button"
              @click="sendMessage">
        发送
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { socketUrl } from "../apis/api.js";
import Vue from "vue";
export default Vue.extend({
  name: "chat",
  created() {
    this.socket = io(socketUrl);
    this.socket.on("enter", data => {
      console.log(data);

      this.messageList.push(data);
    });
    this.socket.on("message", data => {
      console.log(data);

      this.messageList.push(data);
    });
    this.socket.on("leave", data => {
      console.log(data);
      this.messageList.push(data);
    });
    // 发送异步请求获取聊天信息
  },
  data() {
    return {
      id: null,
      messageList: [],
      currentInputValue: "",
      socket: {}
    };
  },
  methods: {
    sendMessage() {
      console.log(this.socket);
    }
  }
});
</script>

<style lang="less" scoped>
</style>
