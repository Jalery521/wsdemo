<template>
  <div>
    这里是登录页面
    <form>
      <label for="username">
        账户<input type="text"
               id="username"
               v-model.trim="username"
               name="username"
               placeholder="请输入用户名">
      </label>
      <br />
      <label for="password">
        密码<input type="password"
               name="password"
               v-model.trim="password"
               id="password">
      </label>
      <input type="button"
             @click="handleSubmit"
             value="登录">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      reg: /\w{6,16}/
    }
  },
  methods: {
    handleSubmit () {
      if (!this.reg.test(this.username)) {
        alert('用户名不正确')
        return
      }
      if (!this.reg.test(this.password)) {
        alert('密码不正确')
        return
      }
      console.log(this.username, this.password)
      // 发送请求到服务器
      
    }
  }
}
</script>
