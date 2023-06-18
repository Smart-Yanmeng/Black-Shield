<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="box">
    <Header :message="this.username"></Header>

    <div class="body">
      <div class="back-btn" @click="back()">
        <img class="back-img" src="./../../image/back.png" alt="#">
        <div class="back">返回</div>
      </div>

      <div class="title">考试成绩查询</div>

      <div class="username">
        <input class="username-input" type="text" placeholder="姓名">
      </div>

      <div class="password">
        <input class="password-input" type="text" placeholder="身份证号">
      </div>

      <div class="verification-code">
        <input type="text" class="verification-input">
      </div>

      <img class="verification-img" :src="imgUrl" alt="#">

      <div class="right">
        <img class="query-score-img" src="./../../image/query-score.png" alt="#">
      </div>

      <div class="query">
        <a href="#">立即查询</a> <img src="./../../image/Vector.png" alt="#">
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      username: '',
      imgUrl: ''
    }
  },
  methods: {
    back() {
      router.push('/home');
    }
  },
  mounted() {
    // 获取用户名
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
            console.log("Success!");
          } else {
            console.log("Error!");
          }
        })
        .catch(err => {
          console.log("请求错误，请联系管理员");
        })

    // 把图片转化为地址
    this.$axios({
      method: 'get',
      url: '/api/captcha/getKaptchaImage',
      headers: {
        'Content-Type': "image/jpeg"
      },
      responseType: 'blob'
    })
        .then(res => {
          // 读取为 blob 对象
          let imageBlob = new Blob([res.data], {type: 'image/jpeg'})

          // blob 对象转化为 URL
          this.imgUrl = window.URL.createObjectURL(imageBlob);
        })
  }
}
</script>

<style scoped>
.body {
  width: 1220px;
  height: 615px;
  margin: 0 auto 20px;

  position: relative;
}

.back-btn {
  width: 96px;
  display: flex;
  justify-content: space-between;

  position: relative;
  left: 24px;
  top: 28px;
}

.back {
  height: 25px;
  margin-top: 6px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.255em;

  color: #4D31C7;
}

.title {
  position: absolute;
  height: 45px;
  left: 60px;
  top: 100px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 150%;
  /* identical to box height, or 45px */

  letter-spacing: 0.255em;

  color: #4D31C7;
}

.username {
  box-sizing: border-box;

  position: absolute;
  width: 310px;
  height: 60px;
  left: 60px;
  top: 180px;

  border: 2px solid rgba(192, 192, 192, 0.71);
  border-radius: 24px;
}

.username-input {
  position: absolute;
  width: 250px;
  height: 30px;
  left: 24px;
  top: 12px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  letter-spacing: 0.155em;

  color: #C0C0C0;
}

.password {
  box-sizing: border-box;

  position: absolute;
  width: 310px;
  height: 60px;
  left: 60px;
  top: 270px;

  border: 2px solid rgba(192, 192, 192, 0.71);
  border-radius: 24px;
}

.password-input {
  position: absolute;
  width: 250px;
  height: 30px;
  left: 24px;
  top: 12px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;

  letter-spacing: 0.155em;

  color: #C0C0C0;
}

.verification-code {
  box-sizing: border-box;

  position: absolute;
  width: 98px;
  height: 40px;
  left: 60px;
  top: 360px;

  background: #FFFFFF;
  border: 2px solid rgba(192, 192, 192, 0.71);
  border-radius: 18px;
}

.verification-input {
  position: absolute;
  width: 50px;
  height: 16px;
  left: 24px;
  top: 10px;

  padding: 0;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  letter-spacing: 0.255em;

  color: #C0C0C0;
}

.verification-img {
  position: absolute;
  width: 122px;
  height: 36px;
  left: 180px;
  top: 361px;
}

.right {
  position: absolute;
  width: 612px;
  height: 615px;
  left: 610px;
  top: 0;

  background: #2A57C0;
  border-radius: 0 24px 24px 0;
}

.query-score-img {
  margin: 80px 149px 0;
}

.query {
  position: absolute;
  width: 195px;
  height: 60px;
  left: 60px;
  top: 430px;

  background: #4D31C7;
  border-radius: 24px;

  padding-left: 20px;

  font-family: 'Source Code Pro', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 60px;

  letter-spacing: 0.255em;

  color: #FFFFFF;
}
</style>