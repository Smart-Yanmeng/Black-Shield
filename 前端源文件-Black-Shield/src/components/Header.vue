<script setup>

</script>

<template>
  <div class="container">
    <div class="logo">
      <img class="img" src="./../image/logo.png" alt="#">
      <div class="content">黑盾等保实战工程师考试系统</div>
    </div>

    <div class="welcome">
      <span>欢迎您！{{ message }}同学</span>
    </div>

    <div class="menu" @click="toggleBox()">
      <div class="bar1"></div>
      <div class="bar2"></div>
    </div>

    <div :class="show === 1 ? 'tabs' : 'display-none'">
      <div :class="show === 1 ? 'tab' : 'display-none'">
        <router-link to="/user">个人信息</router-link>
        <router-view></router-view>
      </div>
      <div :class="show === 1 ? 'tab' : 'display-none'">
        <router-link to="/appointment">我的预约</router-link>
        <router-view></router-view>
      </div>
      <div :class="show === 1 ? 'tab' : 'display-none'">
        <router-link to="/changePwd">修改密码</router-link>
        <router-view></router-view>
      </div>
      <div :class="show === 1 ? 'tab' : 'display-none'" @click="exitLogin()">
        <router-link to="/login">退出登录</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;

  width: 1220px;
  height: 72px;

  margin: auto auto 18px auto;

  display: flex;
  justify-content: space-between;
}

.container .logo {
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

.welcome {
  position: absolute;
  right: 60px;
  top: 28px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;

  letter-spacing: 0.255em;

  color: rgba(9, 0, 42, 0.9);
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

.tabs {
  display: flex;
  flex-direction: column;

  padding: 9px 0;

  position: absolute;
  width: 130px;
  height: 138px;
  left: 1100px;
  top: 69px;

  z-index: 10;

  background: #FFFFFF;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
}

.tab {
  width: 130px;
  height: 30px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;
  text-align: center;

  letter-spacing: 0.255em;

  color: #000000;
}

.tab:hover {
  background-color: #EEE8FC;
}
</style>

<script>
import router from "@/router";

export default {
  props: {
    message: ''
  },
  data() {
    return {
      show: 0,
    }
  },
  methods: {
    toggleBox() {
      if (this.show === 1) this.show = 0;
      else this.show = 1;
    },
    exitLogin() {
      localStorage.removeItem("token");

      router.push("/login");
    }
  }
}
</script>