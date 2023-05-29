<script setup>
import HeaderBar from "@/components/HeaderBar.vue";
</script>

<template>
  <div class="box">
    <HeaderBar></HeaderBar>

    <div class="body">
      <img class="bg" src="./image/background01.png" alt="#">
      <div class="rectangle"></div>
      <img class="joint-name" src="./image/joint-name.png" alt="#">
    </div>

    <div class="footer">
      <img class="footer-bg" src="./image/footer-background.png" alt="#">
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
      <img class="rongzhi" src="./image/rongzhi-QR.png" alt="#">
      <img class="haixia" src="./image/haixia-QR.png" alt="#">
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 1440px;
  margin: auto;
}

/* BODY */
.body {
  height: 724px;
}

.rectangle {
  position: absolute;

  width: 80px;
  height: 6px;
  top: 51px;

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

  font-family: 'PingFang SC';
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

<script>
export default {
  data() {
    return {
      title: 'template'
    }
  },
  methods: {},
  computed: {}
}
</script>