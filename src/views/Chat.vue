<template>
  <div>
    <div class="room">
      聊天室
    </div>
    <div class="chat">
      这里是聊天内容
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "chat",
  created() {
    console.log(this.$route.params.toId);
 // 发送异步请求获取聊天信息
  },
  data() {
    return {
      id: null
    };
  }
});
</script>

<style lang="less" scoped>
</style>
