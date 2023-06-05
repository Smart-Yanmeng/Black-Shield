<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <div class="header">
      <Header></Header>
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
          <input class="username-input" type="text" placeholder="用户名">
        </div>

        <div class="password">
          <input class="password-input" type="password" placeholder="密码">
        </div>

        <span class="verify">点击进行验证</span>

        <div class="login">
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
