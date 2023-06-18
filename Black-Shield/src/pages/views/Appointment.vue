<script setup>

import WhiteButton from "@/components/WhiteButton.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import AppointmentInfo from "@/components/AppointmentInfo.vue";
</script>

<template>
  <div class="header">
    <Header :message="this.username"></Header>
  </div>

  <div class="body">
    <div class="info-box">
      <div class="title">我的预约</div>

      <div class="appointment-box">
        <AppointmentInfo class="appointment-info" v-for="(item, index) in appointmentList" :key="index" :message="item"></AppointmentInfo>
      </div>

      <white-button class="close-btn"></white-button>
    </div>
  </div>

  <div class="footer">
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      appointmentList: [
        {
          "id": '',
          "subject": '',
          "examsTime": '',
          "numQuestions": 0,
          "status": 0,
          "score": 0,
          "userId": 1,
          "result": 0,
          "type": 0
        }
      ]
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
          alert("请求错误，请联系管理员");
        })

    // 获取预约信息
    this.$axios({
      method: 'get',
      url: 'api/users/getUsersAppointment',
      headers: {
        'Content-Type': "application/json;charset=UTF-8",
        'token': localStorage.getItem("token")
      }
    })
        .then(res => {
          if (res.data.code === 200) {
            this.appointmentList = res.data.data;
          }
        })
  }
}
</script>

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

.appointment-box {
  height: 430px;
  overflow: auto;

  position: absolute;
  top: 95px;
  left: 172px;
}

.appointment-box::-webkit-scrollbar {
  width: 0;
}

.appointment-info {
  margin-bottom: 20px;
}

.close-btn {
  position: absolute;
  top: 582px;
  left: 568px;
}
</style>