<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Header></Header>

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
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
</style>