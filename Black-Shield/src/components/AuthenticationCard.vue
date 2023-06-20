<script setup>
import GoRegister from "@/components/GoRegister.vue";
import GoExam from "@/components/GoExam.vue";
</script>

<template>
  <div class="box">
    <div class="header">
      <img :src="'./../../src/image/' + message.imagePath" alt="#">
    </div>

    <div class="body">
      <div class="title">{{ message.title }}</div>
      <div class="date">{{ message.date }}</div>
      <div class="intro">{{ message.intro }}</div>
      <div class="line"></div>
      <div class="status">
        <GoRegister :class="this.isRegister ? 'display-none' : 'before'" @click="goRegister()"></GoRegister>
        <GoExam :class="message.status === 0 ? 'begin' : 'display-none'" @click="goExam()"></GoExam>
        <div class="after display-none"></div>
      </div>
    </div>

    <div :class="message.status === 1 ? 'err' : 'display-none'">意外退出请联系监考老师，开启入口！</div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
      isRegister: '',
    }
  },
  props: ['message'],
  methods: {
    goRegister() {
      let subject = this.message.subject;
      this.$axios({
        method: 'post',
        url: `/api/exams/registeExams/${subject}`,
        headers: {
          'Content-Type': "application/json;charset=UTF-8",
          'token': localStorage.getItem("token")
        }
      })
          .then(res => {
            if (res.data.code === 200) {
              alert("报名成功！");

              location.reload();
            }
          })
    },
    goExam() {
      this.$bus.emit('subjectName', this.message.subject);

      router.push('/online/exam');
    }
  },
  mounted() {
    let subject = this.message.subject;
    this.$axios({
      method: 'get',
      url: `/api/exams/isregisteByName/${subject}`,
      headers: {
        'Content-Type': "application/json;charset=UTF-8",
        'token': localStorage.getItem("token")
      }
    })
        .then(res => {
          if (res.data.code === 200) {
            this.isRegister = res.data.data;
          }
        })
  }
}
</script>

<style scoped>
.box {
  width: 374px;
  height: 493px;

  background: #4CAF50;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135%;

  letter-spacing: 0.105em;

  color: #E3402A;
}
</style>