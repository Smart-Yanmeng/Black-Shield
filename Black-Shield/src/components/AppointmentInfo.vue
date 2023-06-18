<script setup>

</script>

<template>
  <div class="container">
    <div class="table">
      <div class="tr01">
        <div class="th1">考试科目</div>
        <div class="th2">考试时间</div>
        <div class="th3">考试题数</div>
        <div class="th4">考试状态</div>
        <div class="th5">考试结果</div>
      </div>
      <div class="tr02">
        <div class="th6">{{ message.subject }}</div>
        <div class="th7">{{ message.examsTime }}</div>
        <div class="th8">{{ message.numQuestions }}</div>
        <div class="th9">{{ message.status }}</div>
        <div class="th10">{{ message.result }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style scoped>
.table {
  width: 881px;
  height: 122px;

  overflow: hidden;
}

.tr01 {
  display: flex;
  background-color: #F0F0F0;

  border-radius: 6px;
}

.th1 {
  width: 180px;
  height: 56px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px 0 0 0;

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.th2 {
  width: 340px;
  height: 56px;

  border: 1px solid rgba(0, 0, 0, 0.2);

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.th3 {
  width: 120px;
  height: 56px;

  border: 1px solid rgba(0, 0, 0, 0.2);

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.th4 {
  width: 120px;
  height: 56px;

  border: 1px solid rgba(0, 0, 0, 0.2);

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.th5 {
  width: 121px;
  height: 56px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0 6px 0 0;

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.tr02 {
  display: flex;
}

.th6 {
  width: 180px;
  height: 66px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0 0 0 6px;

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.th7 {
  width: 340px;
  height: 66px;

  border: 1px solid rgba(0, 0, 0, 0.2);

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.th8 {
  width: 120px;
  height: 66px;

  border: 1px solid rgba(0, 0, 0, 0.2);

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.th9 {
  width: 120px;
  height: 66px;

  border: 1px solid rgba(0, 0, 0, 0.2);

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}

.th10 {
  width: 121px;
  height: 66px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0 0 6px 0;

  line-height: 52px;
  text-align: center;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  letter-spacing: 0.255em;
}
</style>