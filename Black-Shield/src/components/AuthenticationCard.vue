<script setup>

import GoRegister from "@/components/GoRegister.vue";
</script>

<template>
  <div class="box">
    <div class="header">
      <img src="./../image/top01.png" alt="#">
    </div>

    <div class="body">
      <div class="title">10月黑盾等保认证</div>
      <div class="date">2021年10月28日 18:00~19:00</div>
      <div class="intro">Lorem ipsum dolor sit ametconsectetur adipiscing elit ut aliquamLorem ipsum dolor sit
        ametconsectetur adipiscing elit ut aliquam
      </div>
      <div class="line"></div>
      <div class="status">
          <GoRegister class="before"></GoRegister>
        <div class="begin"></div>
        <div class="after"></div>
      </div>
    </div>

    <div class="err">意外退出请联系监考老师，开启入口！</div>
  </div>
</template>

<style scoped>
.box {
  width: 374px;
  height: 493px;

  background: #4CAF50;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}

.body {
  position: relative;
  align-items: center;
}

.title {
  height: 21px;
  margin: 26px 0 10px 0;

  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #FFFFFF;
}

.date {
  height: 14px;
  margin-bottom: 26px;

  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #FFFFFF;
}

.intro {
  width: 342px;
  height: 74px;
  margin: auto;

  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;

  letter-spacing: 0.18em;

  color: #FFFFFF;
}

.line {
  width: 342px;
  margin: 23px auto 0 auto;

  border-bottom: 1px #FFFFFF solid;
}

.status {
  height: 50px;
  padding: 11px 0;
}

.err {
  height: 16px;
  margin: 12px auto;

  text-align: center;

  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;

  letter-spacing: 0.105em;

  color: #E3402A;
}
</style>