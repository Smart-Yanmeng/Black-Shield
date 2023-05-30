<template>
<div>
  <router-link to="/login">点击登录 <img src="./image/Vector.png" alt="#"></router-link>
  <router-link to="/index">点击index <img src="./image/Vector.png" alt="#"></router-link>
  <router-view></router-view>
</div>

</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>