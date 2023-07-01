<script setup>

</script>

<template>
  <div class="box">
    <div class="info">
      <router-link to="/user">个人信息</router-link>
    </div>
    <div class="info">我的预约</div>
    <div class="info">修改密码</div>
    <div class="info">退出登录</div>
  </div>
</template>

<style scoped>
.box {
  width: 130px;
  height: 138px;

  padding: 9px 0;

  background: #FFFFFF;
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
}

.info {
  width: 130px;
  height: 30px;

  text-align: center;

  font-family: 'Source Code Pro',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;

  letter-spacing: 0.255em;

  color: #000000;
}

.info:hover {
  background: #EEE8FC;
}
</style>