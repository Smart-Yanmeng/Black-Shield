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
        <div class="old-star">*</div>
        <div class="label">旧密码：</div>
        <input class="msg-box" type="password" v-model="oldPwd">
        <div :class="this.oldPwd === '' ? 'wrong1' : 'display-none'">该项不能为空</div>
      </div>
      <div class="detail">
        <div class="new-star">*</div>
        <div class="label">新密码：</div>
        <input class="msg-box" type="password" v-model="newPwd">
      </div>
      <div class="detail">
        <div class="rep-star">*</div>
        <div class="label">确认密码：</div>
        <input class="msg-box" type="password" v-model="repeatPwd">
        <div :class="this.newPwd === this.repeatPwd ? 'display-none' : 'wrong2'">两次输入密码不一致！</div>
      </div>

      <purple-button class="save-btn" @click="changePwd()"></purple-button>
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
      userId: '',
      username: '',
      oldPwd: '',
      newPwd: '',
      repeatPwd: ''
    }
  },
  methods: {
    changePwd() {
      this.$axios({
        method: 'put',
        url: '/api/users/updateUser',
        headers: {
          'Content-Type': "application/json;charset=UTF-8",
          'token': localStorage.getItem("token")
        },
        data: {
          id: this.userId,
          oldPassword: this.oldPwd,
          password: this.newPwd
        }
      })
          .then(res => {
            if (res.data.code === 200) {
              alert("修改密码成功！");
            }
          })
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
            this.userId = res.data.data.id;
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

.old-star {
  position: absolute;
  left: 8px;
  top: 8px;

  color: #D71E06;
}

.new-star {
  position: absolute;
  left: 8px;
  top: 8px;

  color: #D71E06;
}

.rep-star {
  position: absolute;
  left: -8px;
  top: 8px;

  color: #D71E06;
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

  background: #FAFBFB;
  border-radius: 6px;
  padding: 0 20px;

  box-sizing: border-box;

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
  top: 339px;
  left: 276px;
}

.close-btn {
  position: absolute;
  top: 339px;
  left: 391px;
}

.wrong {
  border: 1px solid #E71F19;
}

.right {
  border: 1px solid #67C23A;
}

.wrong1 {
  position: absolute;
  height: 18px;
  left: 108px;
  top: 54px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  letter-spacing: 0.255em;

  color: #E71F19;
}

.wrong2 {
  position: absolute;
  height: 18px;
  left: 108px;
  top: 54px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  letter-spacing: 0.255em;

  color: #E71F19;
}
</style>