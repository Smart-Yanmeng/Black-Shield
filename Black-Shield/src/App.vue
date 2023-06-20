<template>
  <div class="router-box">
<!--    <router-link to="/blank">点击blank</router-link>-->
<!--    <router-link to="/login">点击登录</router-link>-->
<!--    <router-link to="/index">点击index</router-link>-->
<!--    <router-link to="/user">点击个人信息</router-link>-->
<!--    <router-link to="/appointment">点击预约</router-link>-->
<!--    <router-link to="/changePwd">点击修改密码</router-link>-->
<!--    <router-link to="/online">点击线上考试</router-link>-->
<!--    <router-link to="/online/exam">点击开始考试</router-link>-->
<!--    <router-link to="/online/exam/answer">点击查询答案</router-link>-->
<!--    <router-link to="/online/score">点击查询成绩</router-link>-->
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.router-box {
  display: flex;
  flex-direction: column;
}
</style>