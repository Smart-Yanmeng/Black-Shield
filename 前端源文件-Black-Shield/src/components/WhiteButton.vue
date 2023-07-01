<script setup>

</script>

<template>
  <div class="white-button">
    <router-link to="/home">关闭</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.white-button {
  box-sizing: border-box;

  width: 85px;
  height: 48px;

  background: #FFFFFF;
  opacity: 0.9;
  border: 2px solid #4D31C7;
  border-radius: 6px;

  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 44px;

  letter-spacing: 0.255em;

  color: #4D31C7;
}
</style>