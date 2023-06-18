<script setup>

import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="box">
    <div class="header">
      <div class="header-container">
        <div class="logo">
          <img class="img" src="./../../image/logo.png" alt="#">
          <div class="content">黑盾等保实战工程师考试系统</div>
        </div>

        <div class="menu">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
    </div>

    <div class="body">
      <img class="bg" src="./../../image/background01.png" alt="#">
      <div class="left-box">
        <div class="left"></div>
        <router-link to="index">
          <img class="close" src="./../../image/X.png" alt="#">
        </router-link>
        <router-view></router-view>

        <span class="title">欢迎登录</span>
        <div class="username">
          <input class="username-input" type="text" placeholder="用户名" v-model="username">
        </div>

        <div class="password">
          <input class="password-input" type="password" placeholder="密码" v-model="password">
        </div>

        <span class="verify">点击进行验证</span>

        <div class="login" @click="sendRequest()">
          <router-link to="/login">点击登录 <img src="./../../image/Vector.png" alt="#"></router-link>
          <router-view></router-view>
        </div>
      </div>
    </div>

    <div class="footer">
      <Footer></Footer>
    </div>
  </div>

</template>

<style scoped>
/* HEADER */
.header-container {
  position: relative;

  width: 1220px;
  height: 72px;

  margin: auto auto 18px auto;

  display: flex;
  justify-content: space-between;
}

.header-container .logo {
  display: flex;
}

.img {
  margin-right: 8px;
}

.content {
  height: 72px;

  font-family: '微软雅黑 Light', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 72px;

  letter-spacing: 0.2em;

  color: #09002A;
}

.menu {
  height: 21px;
  width: 24px;

  margin-top: 26px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bar1 {
  width: 24px;
  border: 3px solid #230147;

  box-sizing: border-box;
}

.bar2 {
  width: 24px;
  border: 3px solid #230147;

  box-sizing: border-box;
}

.box {
  width: 1440px;
  margin: auto;
}

.header {
  width: 1220px;
  margin: auto;
}

.body {
  position: relative;

  height: 759px;
  width: 1440px;
  margin: auto;
}

.bg {
  position: absolute;
  left: 348px;
}

.left-box {
  width: 1000px;
  height: 800px;

  position: absolute;
  left: 110px;

  overflow: hidden;
}

.left {
  width: 370px;
  height: 660px;

  transform-origin: bottom;
  transform: skew(-16deg, 0deg);
  -ms-transform: skew(-16deg, 0deg);
  -moz-transform: skew(-16deg, 0deg);
  -webkit-transform: skew(-16deg, 0deg);
  -o-transform: skew(-16deg, 0deg);
  border-radius: 80px;
  box-shadow: 7px 7px 6px rgba(93, 8, 182, 0.2);
}

.close {
  position: absolute;
  top: 35px;
  left: 477px;
}

.title {
  position: absolute;
  height: 54px;
  left: 75px;
  top: 109px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 150%;

  letter-spacing: 0.255em;

  color: #4D31C7;
}

.username {
  box-sizing: border-box;

  position: absolute;
  width: 310px;
  height: 60px;
  left: 75px;
  top: 184px;

  border: 2px solid rgba(192, 192, 192, 0.71);
  border-radius: 24px;
}

.username-input {
  position: absolute;
  width: 250px;
  height: 30px;
  left: 24px;
  top: 12px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  letter-spacing: 0.155em;

  color: #C0C0C0;
}

.password {
  box-sizing: border-box;

  position: absolute;
  width: 310px;
  height: 60px;
  left: 75px;
  top: 264px;

  border: 2px solid rgba(192, 192, 192, 0.71);
  border-radius: 24px;
}

.password-input {
  position: absolute;
  width: 250px;
  height: 30px;
  left: 24px;
  top: 12px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  letter-spacing: 0.155em;

  color: #C0C0C0;
}

.verify {
  position: absolute;
  height: 27px;
  left: 99px;
  top: 340px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  letter-spacing: 0.255em;

  color: #4D31C7;
}

.login {
  position: absolute;
  width: 195px;
  height: 60px;
  left: 75px;
  top: 383px;

  background: #4D31C7;
  border-radius: 24px;

  padding-left: 20px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 60px;

  letter-spacing: 0.255em;

  color: #FFFFFF;
}
</style>

<script>
import router from "@/router";

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    sendRequest() {
      this.$axios({
        method: 'post',
        url: '/api/index/login',
        headers: {
          'Content-Type': "application/json;charset=UTF-8",
        },
        data: {
          username: this.username,
          password: this.password
        }
      })
          .then(res => {
            if (res.data.code === 200) {
              // 利用 localStorage 存储到本地
              localStorage.setItem("token", res.data.data.token);
              console.log("Success!");

              // 执行页面跳转
              router.push("/home");
            } else {
              console.log("Error!");
            }
          })
          .catch(err => {
            console.log("请求错误，请联系管理员");
          })
    }
  }
}
</script>