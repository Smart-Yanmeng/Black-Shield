<script setup>
</script>

<template>
  <div class="box">
    <div class="question-card" v-for="(qs, index) in question" :key="index" v-show="index === idx">
      <div class="head-bar">
        <div class="number">
          {{ index + 1 }}/{{ question.length }}
        </div>
        <div class="clock">
          <img class="clock-image" src="./../image/clock.png" alt="#">
          <div class="time-out">

          </div>
        </div>
      </div>

      <div class="question">{{ qs.name }}</div>

      <div class="answer">
        <div class="option" v-for="(item, index) in qs.option" :key="index">
          <div :class="judge(qs, item)">{{ item.letter }}</div>
          <div class="option-content">{{ item.name }}</div>
        </div>
      </div>

      <div class="last" @click="last()">上一题</div>
      <div class="next" @click="next()">下一题</div>

      <div class="answer-analysis">答案解析</div>
      <div class="right-option">选{{ qs.answer }}</div>

      <div class="analysis">答案解析：{{ qs.analysis }}</div>
    </div>

    <div class="answer-card">
      <div class="head-bar">
        <div class="answer-title">答题卡</div>
      </div>

      <div class="option-select-box">
        <div class="option-select" v-for="(item, index) in question" :key="index" @click="idx = index">
          <div :class="correct(item) === 'right' ? 'correct' : 'incorrect'">{{ index + 1 }}</div>
        </div>
      </div>

      <div class="correct-num">正确数：{{ correctNum }}/{{ this.question.length }}</div>
      <div class="accuracy-rate">正确率：{{ this.correctNum / this.question.length * 100 }}%</div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
}

.question-card {
  width: 726px;
  height: 725px;

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

.incorrect-option {
  width: 44px;
  height: 44px;

  text-align: center;
  line-height: 44px;
  font-weight: 400;
  font-size: 18px;

  border-radius: 50%;
  background-color: #FFFFFF;
}

.correct-option {
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

.last {
  width: 100px;
  height: 40px;

  position: absolute;
  left: 25px;
  bottom: 200px;

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

.last:hover {
  border: 2px solid #105B9E;
  border-radius: 5px;
  background-color: #105B9E;
  color: #FFFFFF;
}

.next {
  width: 100px;
  height: 40px;

  position: absolute;
  left: 150px;
  bottom: 200px;

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

.answer-analysis {
  position: absolute;
  width: 124px;
  height: 40px;
  left: 26px;
  bottom: 136px;

  background: #67C23A;
  border-radius: 6px;

  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 40px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #FFFFFF;
}

.right-option {
  position: absolute;
  height: 35px;
  left: 168px;
  top: 551px;

  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 135%;

  letter-spacing: 0.2em;

  color: #67C23A;
}

.analysis {
  position: absolute;
  height: 24px;
  left: 26px;
  top: 605px;

  font-family: 'PingFang SC', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;

  display: flex;
  align-items: center;
  letter-spacing: 0.2em;

  color: #000000;

}

.answer-card {
  width: 458px;
  height: 725px;
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

.correct-num {
  position: absolute;
  height: 23px;
  left: 16px;
  top: 637px;

  font-family: 'Helvetica',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #24014A;
}

.accuracy-rate {
  position: absolute;
  height: 23px;
  left: 16px;
  top: 676px;

  font-family: 'Helvetica',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  text-align: center;
  letter-spacing: 0.2em;

  color: #24014A;
}

.correct {
  width: 66px;
  height: 66px;
  margin: 12px;

  background-color: #67C23A;
  border-radius: 50%;

  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 66px;
  text-align: center;

  color: #FFFFFF;
}

.incorrect {
  width: 66px;
  height: 66px;
  margin: 12px;

  background-color: #D3544C;
  border-radius: 50%;

  font-family: 'Roboto', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 66px;
  text-align: center;

  color: #FFFFFF;
}
</style>

<script>
export default {
  data() {
    return {
      idx: 0,
      correctNum: 0,
      question: [
        {
          id: 1,
          isCorrect: false,
          name: '今天星期几?',
          answer: 'A',
          analysis: "Lorem ipsum dolor sit amet",
          option: [
            {
              id: 1,
              name: '星期一',
              checked: true,
              letter: 'A'
            }, {
              id: 2,
              name: '星期三',
              checked: false,
              letter: 'B'
            }, {
              id: 3,
              name: '星期四',
              checked: false,
              letter: 'C'
            },
          ],

        }, {
          id: 2,
          isCorrect: false,
          name: '你喜欢吃什么?',
          answer: 'C',
          score: 2,
          option: [
            {
              id: 1,
              name: '香蕉',
              checked: false,
              letter: 'A'
            }, {
              id: 2,
              name: '苹果',
              checked: false,
              letter: 'B'
            }, {
              id: 3,
              name: '橘子',
              checked: true,
              letter: 'C'
            },
          ],

        }, {
          id: 3,
          isCorrect: false,
          name: '你的梦想是什么?',
          answer: 'B',
          score: 2,
          option: [
            {
              id: 1,
              name: '当一名程序员',
              checked: false,
              letter: 'A'
            }, {
              id: 2,
              name: '当一名测试员',
              checked: true,
              letter: 'B'
            }, {
              id: 3,
              name: '当一名运维',
              checked: false,
              letter: 'C'
            },
          ],

        }, {
          id: 4,
          isCorrect: false,
          name: '这是一题多选吗?',
          answer: 'C',
          score: 2,
          option: [
            {
              id: 1,
              name: '不是',
              checked: false,
              letter: 'A'
            }, {
              id: 2,
              name: '是的',
              checked: false,
              letter: 'B'
            }, {
              id: 3,
              name: '是的',
              checked: true,
              letter: 'C'
            },
          ],
        }, {
          id: 5,
          isCorrect: false,
          name: '是多选吧?',
          answer: 'A',
          score: 2,
          option: [
            {
              id: 1,
              name: '是的',
              checked: false,
              letter: 'A'
            }, {
              id: 2,
              name: '是的',
              checked: false,
              letter: 'B'
            }, {
              id: 3,
              name: '是的',
              checked: false,
              letter: 'C'
            }
          ],
        },
      ]
    }
  },
  mounted() {
    this.countCorrectNum();
  },
  methods: {
    last() {
      this.idx--;
    },
    next() {
      this.idx++;
    },
    correct(item) {
      for (let i = 0; i < 3; i++) {
        if (item.option[i].checked === true && item.option[i].letter === item.answer) {
          item.isCorrect = true;

          return "right";
        }
      }
      return "wrong";
    },
    judge(qs, item) {
      if (qs.answer !== item.letter && item.checked === false) return "no-selected";
      else if (qs.answer === item.letter) return "correct-option";
      else if (qs.answer !== item.letter && item.checked === true) return "incorrect-option";
    },
    countCorrectNum() {
      for (let i = 0; i < this.question.length; i++) {
        if (this.question[i].isCorrect === true) {
          console.log(111)
          this.correctNum++;
        }
      }
      return this.correctNum;
    }
  }
}
</script>