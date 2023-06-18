<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AuthenticationCard from "@/components/AuthenticationCard.vue";
</script>

<template>
  <div>
    <Header :message="this.username"></Header>

    <div class="body">
      <el-carousel trigger="click" arrow="never" height="248px">
        <el-carousel-item v-for="(item, index) in imageBox" :key="index">
          <img alt="#" :src="'../../src/image/' + item.coursePath" style="margin: auto">
        </el-carousel-item>
      </el-carousel>

      <div class="appointment-bar">
        <img class="bar-img" src="./../../image/exam.png" alt="#">
        <span class="bar-title">考试预约</span>
      </div>

      <div class="appointment-box">
        <AuthenticationCard></AuthenticationCard>
        <AuthenticationCard></AuthenticationCard>
        <AuthenticationCard></AuthenticationCard>
      </div>

      <div class="attention">
        <div class="a">注：海峡黑盾网络安全认证（机试）为线下考试，考试预约请联系班级群内教务老师</div>
        <div class="b">点击查看<a class="notice" href="#">考生须知</a></div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      imageBox: [
        {
          'coursePath': 'carousel01.png'
        }, {
          'coursePath': 'carousel02.png'
        }, {
          'coursePath': 'carousel03.png'
        }, {
          'coursePath': 'carousel04.png'
        }
      ]
    }
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

<style scoped>
.body {
  width: 1220px;
  margin: auto;
}

.appointment-bar {
  height: 67px;

  display: flex;
}

.bar-img {
  margin: auto 0 auto 0;
}

.bar-title {
  margin: auto 0 auto -15px;
}

.appointment-box {
  height: 533px;
  display: flex;
  justify-content: space-between;
}

.attention {
  height: 57px;
  margin-bottom: 54px;

  font-family: 'Helvetica',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 135%;

  letter-spacing: 0.105em;

  color: #000000;
}

.a {
  margin-bottom: 20px;
}

.notice {
  color: #306BFD;
}
</style>