<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import WhiteButton from "@/components/WhiteButton.vue";
import PurpleButton from "@/components/PurpleButton.vue";
</script>

<template>
  <div class="header">
    <Header :message="this.username"></Header>
  </div>

  <div class="body">
    <div class="info-box">
      <div class="title">个人信息</div>

      <div class="detail">
        <div class="label">用户昵称：</div>
        <input class="msg-box" type="text" v-model="this.username">
      </div>
      <div class="detail">
        <div class="label">手机号：</div>
        <input class="msg-box" type="text" v-model="this.phoneNumber">
      </div>
      <div class="detail">
        <div class="label">电子邮箱：</div>
        <input class="msg-box" type="text" v-model="this.email">
      </div>
      <div class="detail">
        <div class="label">身份证号：</div>
        <input class="msg-box" type="text" v-model="this.idCard">
      </div>

      <purple-button class="save-btn"></purple-button>
      <white-button class="close-btn"></white-button>
    </div>
  </div>

  <div class="footer">
    <Footer></Footer>
  </div>
</template>

<style scoped>
.info-box {
  position: relative;

  width: 1220px;
  height: 660px;

  margin: 15px auto 84px;

  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}

.title {
  position: absolute;
  height: 30px;
  left: 75px;
  top: 30px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;

  letter-spacing: 0.255em;

  color: #4D31C7;
}

.detail {
  position: relative;
  top: 95px;
  left: 171px;

  width: 427px;
  height: 49px;
  margin-bottom: 29px;

  display: flex;
  justify-content: space-between;
}

.label {
  width: 88px;
  height: 21px;
  margin: auto 0;

  text-align: right;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  letter-spacing: 0.255em;

  color: #000000;
}

.msg-box {
  width: 322px;
  height: 49px;

  box-sizing: border-box;

  background: #FAFBFB;
  border-radius: 6px;
  padding: 0 20px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  letter-spacing: 0.255em;

  color: #8F8F8F;
}

.save-btn {
  position: absolute;
  top: 417px;
  left: 276px;
}

.close-btn {
  position: absolute;
  top: 417px;
  left: 391px;
}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      phoneNumber: '',
      email: '',
      idCard: ''
    }
  },
  methods: {

  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/api/users/getUser',
      headers: {
        'Content-Type': "application/json;charset=UTF-8",
        'token': localStorage.getItem("token")
      }
    })
        .then(res => {
          if (res.data.code === 200) {
            this.username = res.data.data.username;
            this.phoneNumber = res.data.data.phone;
            this.email = res.data.data.email;
            this.idCard = res.data.data.idcard;
            console.log("Success!");
          } else {
            console.log("Error!");
          }
        })
        .catch(err => {
          console.log("请求错误，请联系管理员");
        })
  }
}
</script>