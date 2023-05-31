<template>
<div class="router-box">
  <router-link to="/blank">点击blank</router-link>
  <router-link to="/login">点击登录</router-link>
  <router-link to="/index">点击index</router-link>
  <router-link to="/user">点击个人信息</router-link>
  <router-view></router-view>
</div>

</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.router-box {
  display: flex;
  flex-direction: column;
}
</style>