<script setup>
import "@/assets/main.css";
import "@/assets/base.css";

import Card from "@/components/Card.vue";
</script>

<template>
  <div class="box">
    <div class="header">
      <div class="header-container">
        <div class="logo">
          <img class="img" src="./../../image/logo.png" alt="#">
          <div class="content">黑盾等保实战工程师考试系统</div>
        </div>

        <div class="menu" @click="toggleBox()">
          <div class="bar1"></div>
          <div class="bar2"></div>
        </div>
      </div>
    </div>

    <div class="body">
      <img class="bg" src="./../../image/background01.png" alt="#">
      <div class="rectangle"></div>
      <img class="joint-name" src="./../../image/joint-name.png" alt="#">
      <p class="info">
        福建省海峡信息技术有限公司联合福州市榕智信息科技有限公司，双方携手通过整合优势资源、推动网络安全创新与新型实战化人才培养体系，共同打造安全行业标杆技术认证服务。
      </p>
      <div class="cards">
        <Card v-for="(item, index) in CardArr" :key="index" :card="item"></Card>
      </div>
      <div class="login">
        <router-link to="/login">点击登录 <img src="./../../image/Vector.png" alt="#"></router-link>
        <router-view></router-view>
      </div>
    </div>

    <div class="footer">
      <img class="footer-bg" src="./../../image/footer-background.png" alt="#">
      <span class="span01">联系我们</span>
      <span class="span02">公司：福州市榕智信息科技有限公司</span>
      <span class="span03">电话：0591-22862344</span>
      <span class="span04">地址：福建省福州高新区科技东路12号华健大厦1号楼20层</span>
      <span class="span05">公司：福建省海峡信息技术有限公司</span>
      <span class="span06">电话：0591-87303705</span>
      <span class="span07">地址：福建省福州市鼓楼区北二环中路61号2号楼</span>
      <span class="span08">榕智信息</span>
      <span class="span09">海峡信息</span>
      <span class="span10">扫一扫  关注我们</span>
      <span class="span11">备案号：</span>
      <img class="rongzhi" src="./../../image/rongzhi-QR.png" alt="#">
      <img class="haixia" src="./../../image/haixia-QR.png" alt="#">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CardArr: [
        {
          title: '在线考试',
          cardInfo: '点击进入认证系统',
        }, {
          title: '模拟刷题',
          cardInfo: '点击开始模拟刷题',
        }, {
          title: '认证查询',
          cardInfo: '点击查询认证成绩',
        }
      ]
    }
  }
}
</script>

<style scoped>
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

/* HEADER */
.header {
  width: 1220px;
  margin: auto;
}

/* BODY */
.body {
  height: 724px;
  width: 1220px;
  margin: auto;
}

.rectangle {
  position: absolute;

  width: 80px;
  height: 6px;
  top: 51px;
  left: 4px;

  background: linear-gradient(90deg, #4A0197 14.72%, #D0C0FD 191.25%);
  border-radius: 8px;
}

.body {
  position: relative;
}

.bg {
  position: absolute;
  right: 0;
}

.joint-name {
  position: absolute;
  width: 414px;
  height: 66px;
  top: 94px;
}

.info {
  position: absolute;
  width: 415px;
  height: 88px;
  left: 4px;
  top: 145px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  letter-spacing: 0.295em;

  color: #09002A;
}

.cards {
  width: 422px;
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 278px;
}

.login {
  position: absolute;
  width: 175px;
  height: 60px;
  left: 0;
  top: 496px;

  padding-left: 20px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 60px;

  background: linear-gradient(90deg, #4A0197 10.5%, #D0C0FD 136.41%);
  border-radius: 30px;

  letter-spacing: 0.255em;

  color: #FFFFFF;
}

/* FOOTER */
.footer {
  position: relative;

  height: 210px;
}

.footer-bg {
  position: absolute;
}

span {
  position: absolute;
}

.span01 {
  position: absolute;
  left: 115px;
  top: 30px;

  font-family: 'PingFang SC', serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 16px;
  letter-spacing: 0.105em;

  color: #FFFFFF;
}

.span02 {
  position: absolute;
  height: 17px;
  left: 115px;
  top: 66px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  letter-spacing: 0.105em;

  color: #B4B4B4;
}

.span03 {
  position: absolute;
  height: 17px;
  left: 115px;
  top: 103px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  letter-spacing: 0.105em;

  color: #B4B4B4;
}

.span04 {
  position: absolute;
  height: 17px;
  left: 115px;
  top: 140px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  letter-spacing: 0.105em;

  color: #B4B4B4;
}

.span05 {
  position: absolute;
  height: 17px;
  left: 630px;
  top: 66px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  letter-spacing: 0.105em;

  color: #B4B4B4;
}

.span06 {
  position: absolute;
  height: 17px;
  left: 630px;
  top: 103px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  letter-spacing: 0.105em;

  color: #B4B4B4;
}

.span07 {
  position: absolute;
  height: 17px;
  left: 630px;
  top: 140px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;

  letter-spacing: 0.105em;

  color: #B4B4B4;
}

.span08 {
  position: absolute;
  height: 12px;
  left: 1112px;
  top: 129px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  letter-spacing: 0.105em;

  color: #FFFFFF;
}

.span09 {
  position: absolute;
  height: 12px;
  left: 1210px;
  top: 129px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  letter-spacing: 0.105em;

  color: #FFFFFF;
}

.span10 {
  position: absolute;
  height: 12px;
  left: 1138px;
  top: 157px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  letter-spacing: 0.105em;

  color: #FFFFFF;
}

.span11 {
  position: absolute;
  height: 14px;
  left: 573px;
  top: 177px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  letter-spacing: 0.105em;

  color: #B4B4B4;
}

.rongzhi {
  position: absolute;
  width: 76px;
  height: 76px;
  left: 1100px;
  top: 35px;
}

.haixia {
  position: absolute;
  width: 76px;
  height: 76px;
  left: 1198px;
  top: 35px;
}
</style>