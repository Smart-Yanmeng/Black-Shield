<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import QuestionAnswerCard from "@/components/QuestionAnswerCard.vue";
</script>

<template>
  <div>
    <Header :message="this.username"></Header>

    <div class="exam-name">
      <img src="./../../image/online-exam01.png" alt="#">
      <div class="name">黑盾认证在线考试</div>
      <div class="exam-date">2021年10月28日 18:00～19:00</div>
      <div class="questions">共100题 计时120分钟</div>
    </div>

    <div class="question-card">
      <QuestionAnswerCard></QuestionAnswerCard>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
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
.exam-name {
  width: 1440px;
  margin: auto;

  position: relative;
}

.name {
  position: absolute;
  height: 34px;
  left: calc(50% - 282px / 2 - 409px);
  top: 73px;

  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.2em;

  color: #FFFFFF;
}

.exam-date {
  position: absolute;
  height: 14px;
  left: calc(50% - 254px / 2 - 423px);
  top: 127px;

  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #FFFFFF;
}

.questions {
  position: absolute;
  height: 14px;
  left: calc(50% - 175px / 2 - 462.5px);
  top: 161px;

  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #FFFFFF;
}

.question-card {
  width: 1220px;
  margin: 35px auto 100px;
}
</style>