<script setup>

</script>

<template>
  <div class="box">
    <div class="logo">
      <img class="img" src="./../image/logo.png" alt="#">
      <div class="content">黑盾等保实战工程师考试系统</div>
    </div>
    <div class="menu">
      <div class="bar1"></div>
      <div class="bar2"></div>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 1440px;
  height: 90px;

  margin: auto;

  display: flex;
  justify-content: space-between;
}

.box .logo {
  display: flex;
}

.img {
  margin-right: 8px;
}

.content {
  height: 90px;

  font-family: '微软雅黑 Light', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 90px;

  letter-spacing: 0.2em;

  color: #09002A;
}

.menu {
  width: 24px;
}

.bar1 {
  width: 24px;
  border: 3px solid #230147;

  box-sizing: border-box;

  position: absolute;
  top: 36px;
}

.bar2 {
  width: 24px;
  border: 3px solid #230147;

  box-sizing: border-box;

  position: absolute;
  top: 51px;
}
</style>