<script setup>
</script>

<template>
  <div class="box">
    <div class="question-card" v-for="(qs, index) in questions" :key="index" v-show="index === idx">
      <div class="head-bar">
        <div class="number">
          {{ index + 1 }}/{{ questions.length }}
        </div>

        <div class="clock">
          <img class="clock-image" src="./../image/clock.png" alt="#">
          <div class="time-out">
            <div class="time">
              <p>00:{{ timerCount2 }}:{{ timerCount1 }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="question">{{ qs.description }}</div>

      <div class="answer">
        <div class="option" v-for="(item, index) in qs.optionList" :key="index">
          <div :class="item.checked ? 'checked' : 'unchecked'" @click="toSelect(qs, item)">{{ item.letter }}</div>
          <div class="option-content">{{ item.name }}</div>
        </div>
      </div>

      <div class="next" @click="next()">下一题</div>
    </div>

    <div class="answer-card">
      <div class="head-bar">
        <div class="answer-title">答题卡</div>
      </div>

      <div class="option-select-box">
        <div class="option-select" v-for="(item, index) in questions" :key="index" @click="idx = index">
          <div :class="item.selected ? 'option-selected' : 'option-unselected'">{{ index + 1 }}</div>
        </div>
      </div>

      <div :class="commit() ? 'commit' : 'cannot-commit'" @click="submitAnswer()">提交答卷</div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  props: ['message'],
  data() {
    return {
      idx: 0,
      isCountDown: 0,
      storageSeconds: 59,
      seconds: 59,
      minutes: 59,
      timer: null,
      subjectName: '',
      examId: '',
      questions: [],
      myExamAnswer: []
    };
  },
  methods: {
    // 开始考试
    startExam() {
      let subject = 'First';
      this.$axios({
        method: 'post',
        url: `/api/exams/startExam/${subject}`,
        headers: {
          'Content-Type': "application/json;charset=UTF-8",
          'token': localStorage.getItem("token")
        }
      })
          .then(res => {
            if (res.data.code === 200) {
              this.start();

              this.examId = res.data.data.examId;
              this.questions = res.data.data.questions;
            }
          })
    },
    // 下一题
    next() {
      this.idx++;
    },
    // 选择答案
    toSelect(qs, item) {
      qs.selected = true;
      for (let i = 0; i < qs.optionList.length; i++) {
        qs.optionList[i].checked = false;
      }
      item.checked = true;

      let answer = {
        correct: 0,
        examId: parseInt(this.examId),
        id: qs.id,
        questionId: qs.id,
        selected: item.id - 1
      }

      this.myExamAnswer.push(answer);
    },
    commit() {
      for (let i = 0; i < this.questions.length; i++) {
        if (this.questions[i].correct === false) return false;
      }
      return true;
    },
    // 提交答卷
    submitAnswer() {
      let examsId = this.examId;
      this.$axios({
        method: 'post',
        url: `/api/exams/submitExams/${examsId}`,
        headers: {
          'Content-Type': "application/json;charset=UTF-8",
          'token': localStorage.getItem("token")
        },
        data: this.myExamAnswer
      })
          .then(res => {
            if (res.data.code === 200) {
              this.stop();

              router.push('/home');
            }
          })
    },
    // 开始
    start() {
      this.isCountDown = 1;
    },
    // 停止
    stop() {
      this.isCountDown = 2;
      clearInterval(this.timer);
    },
    // 清除
    clear() {
      alert("考试时间到！")
      clearInterval(this.timer);
    },
    // 倒计时
    timing() {
      this.timer = setInterval(() => {
        if (this.seconds === 0 && this.minutes !== 0 && this.minutes > 0) {
          this.minutes--;
          this.seconds = this.storageSeconds;
        } else if (this.minutes === 0 && this.seconds === 0) {
          this.isCountDown = 0;
        } else {
          this.seconds--;
        }
      }, 1000);
    }
  },
  watch: {
    isCountDown(newValue) {
      if (newValue === 1) this.timing();
      else if (newValue === 0) this.clear();
      else if (newValue === 2) alert("成功提交试卷！")
    }
  },
  mounted() {
    // 获取考试名
    this.$bus.on("subjectName", (data) => {
      this.subjectName = data;
    });

    // 获取题目
    this.startExam();
  },
  computed: {
    timerCount1() {
      return this.seconds < 10 ? "0" + this.seconds : "" + this.seconds;
    },
    timerCount2() {
      return this.minutes < 10 ? "0" + this.minutes : "" + this.minutes;
    },
  }
};
</script>

<style scoped>
.box {
  display: flex;
}

.question-card {
  width: 726px;
  height: 574px;

  background: #F2F4F6;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  position: relative;
}

.head-bar {
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;

  background: #E7EAED;
  border: 1px solid #E3E3E3;
  border-radius: 12px 12px 0 0;
}

.number {
  height: 34px;
  margin: auto 0 auto 26px;

  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.2em;

  color: #24014A;
}

.clock {
  display: flex;
}

.clock-image {
  width: 34px;
  height: 34px;
  margin: auto 15px;
}

.time-out {
  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.2em;

  margin: auto 26px auto 0;
}

.question {
  width: 674px;
  margin: 26px auto;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.2em;

  color: #000000;
}

.option {
  display: flex;
  margin: 0 0 36px 26px;
}

.unchecked {
  width: 44px;
  height: 44px;

  text-align: center;
  line-height: 44px;
  font-weight: 400;
  font-size: 18px;

  border-radius: 50%;
  background-color: #FFFFFF;
}

.checked {
  width: 44px;
  height: 44px;

  text-align: center;
  line-height: 44px;
  font-weight: 400;
  font-size: 18px;

  border-radius: 50%;
  background-color: #105B9E;

  color: #FFFFFF;
}

.option-content {
  display: flex;

  margin-left: 20px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  align-items: center;
  letter-spacing: 0.2em;

  color: #000000;
}

.next {
  width: 100px;
  height: 40px;

  position: absolute;
  left: 25px;
  bottom: 50px;

  border: 2px solid #105B9E;
  border-radius: 5px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #105B9E;
}

.next:hover {
  border: 2px solid #105B9E;
  border-radius: 5px;
  background-color: #105B9E;
  color: #FFFFFF;
}

.answer-card {
  width: 458px;
  height: 574px;
  margin-left: 36px;

  position: relative;

  background: #F2F4F6;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}

.answer-title {
  height: 34px;
  margin: auto;

  font-family: 'Helvetica', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.2em;

  color: #24014A;
}

.option-select-box {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 90px);
  grid-template-rows: repeat(auto-fill, 90px);
}

.option-unselected {
  width: 66px;
  height: 66px;
  margin: 12px;

  background-color: #FFFFFF;
  border-radius: 50%;

  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 66px;
  text-align: center;

  color: #000000;
}

.option-selected {
  width: 66px;
  height: 66px;
  margin: 12px;

  background-color: #105B9E;
  border-radius: 50%;

  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 66px;
  text-align: center;

  color: #FFFFFF;
}

.commit {
  width: 124px;
  height: 40px;

  position: absolute;
  left: 25px;
  bottom: 50px;

  border: 2px solid #105B9E;
  border-radius: 5px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #105B9E;
}

.cannot-commit {
  width: 124px;
  height: 40px;

  position: absolute;
  left: 25px;
  bottom: 50px;

  border: 2px solid #BBBBBB;
  border-radius: 5px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #BBBBBB;
}

.time {
  color: #f72a3a;
  font-weight: bold;
  font-size: 26px;
}
</style>