<script setup>

</script>

<template>
  <div class="container">
    <div class="msg-box">
      <div class="msg">
        <span class="title">Lorem ipsum dolor</span>
        <div class="content">
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
      <div class="msg">
        <span class="title">Lorem ipsum dolor</span>
        <div class="content">
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
      <div class="msg">
        <span class="title">Lorem ipsum dolor</span>
        <div class="content">
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
      <div class="msg">
        <span class="title">Lorem ipsum dolor</span>
        <div class="content">
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
    </div>

    <img class="haixia" src="./../image/haixia-QR.png" alt="#">
    <img class="rongzhi" src="./../image/rongzhi-QR.png" alt="#">
    
    <span class="span01">海峡信息</span>
    <span class="span02">榕智信息</span>
    <span class="span03">扫一扫  关注我们</span>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 1440px;
  height: 175px;

  margin: auto;

  background: #37374A;
}

.msg-box {
  position: relative;
  width: 880px;
  height: 114px;

  display: flex;
  justify-content: space-between;

  left: 130px;
  top: 20px;
}

.msg {
  width: 175px;
  height: 114px;
  left: 130px;
  top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  letter-spacing: 0.105em;

  color: #FFFFFF;
}

.title {
  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

  letter-spacing: 0.105em;

  color: #FFFFFF;

}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 78px;
}

.haixia {
  position: absolute;
  width: 63px;
  height: 63px;
  left: 1090px;
  top: 20px;
}

.rongzhi {
  position: absolute;
  width: 63px;
  height: 63px;
  left: 1173px;
  top: 20px;
}

.span01 {
  position: absolute;
  height: 12px;
  left: 1096px;
  top: 93px;

  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  letter-spacing: 0.105em;

  color: #FFFFFF;
}

.span02 {
  position: absolute;
  height: 12px;
  left: 1178px;
  top: 93px;

  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  letter-spacing: 0.105em;

  color: #FFFFFF;
}

.span03 {
  position: absolute;
  height: 12px;
  left: 1113px;
  top: 122px;

  font-family: 'PingFang SC',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;

  letter-spacing: 0.105em;

  color: #FFFFFF;
}
</style>