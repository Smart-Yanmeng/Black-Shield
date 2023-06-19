<script setup>

</script>

<template>
  <div class="container">
    <img class="card-bg" src="./../image/card-bg.png" alt="#">
    <span class="title">{{ card.title }}</span>
    <span class="card-info">{{ card.cardInfo }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['card']
}
</script>

<style scoped>
.container {
  position: relative;
  width: 134px;
  height: 188px;

  border-radius: 12px;
}

.container:hover {
  box-shadow: 0 0 6px 4px rgba(93, 8, 182, 0.2);
}

.card-bg {
  position: absolute;
  left: 19px;
  top: 18px;
}

.title {
  position: absolute;
  height: 30px;
  left: 19px;
  top: 102px;

  font-family: '微软雅黑',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  letter-spacing: 0.255em;

  color: #09002A;
}

.card-info {
  position: absolute;
  width: 59px;
  height: 38px;
  left: 38px;
  top: 132px;

  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;
  /* or 19px */

  letter-spacing: 0.05em;

  color: #A0A0A0;
}
</style>