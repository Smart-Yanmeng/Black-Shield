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
          <img alt="#" :src="'./../../src/image/' + item.coursePath" style="margin: auto">
        </el-carousel-item>
      </el-carousel>

      <div class="appointment-bar">
        <img class="bar-img" src="./../../image/exam.png" alt="#">
        <span class="bar-title">考试预约</span>
      </div>

      <div class="appointment-box">
        <AuthenticationCard v-for="(item, index) in examList" :key="index" :message="item"></AuthenticationCard>
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
      ],
      examList: [
        {
          'imagePath': 'top01.png',
          'title': '10月黑盾等保认证',
          'date': '2021年10月28日 18:00～19:00',
          'intro': 'Lorem ipsum dolor sit ametconsectetur adipiscing elit ut aliquamLorem ipsum dolor sit ametconsectetur adipiscing elit ut aliquam',
          'status': '',
          'subject': 'First'
        }, {
          'imagePath': 'top02.png',
          'title': '11月黑盾等保认证',
          'date': '2021年11月16日 18:00～19:00',
          'intro': 'Lorem ipsum dolor sit ametconsectetur adipiscing elit ut aliquamLorem ipsum dolor sit ametconsectetur adipiscing elit ut aliquam',
          'status': '',
          'subject': 'Second'
        }, {
          'imagePath': 'top03.png',
          'title': '12月黑盾认证',
          'date': '2021年12月14日 18:00～19:00',
          'intro': 'Lorem ipsum dolor sit ametconsectetur adipiscing elit ut aliquamLorem ipsum dolor sit ametconsectetur adipiscing elit ut aliquam',
          'status': '',
          'subject': 'Third'
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
          console.log("请求错误，请联系管理员");
        })

    // 获取考试信息
    this.$axios({
      method: 'get',
      url: '/api/exams/getExamsList',
      headers: {
        'Content-Type': "application/json;charset=UTF-8",
        'token': localStorage.getItem("token")
      }
    })
        .then(res => {
          if (res.data.code === 200) {
            for (let i = 0; i < 3; i++) {
              for (let j = 0; j < res.data.data.length; j++) {
                if (res.data.data[j].subject === this.examList[i].subject) this.examList[i].status = res.data.data[j].status;
              }
            }
          }
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

  font-family: 'Helvetica', serif;
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