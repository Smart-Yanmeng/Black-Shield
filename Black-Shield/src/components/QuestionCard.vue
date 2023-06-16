<script setup>
import TimeOut from "@/components/TimeOut.vue"
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
            <TimeOut></TimeOut>
          </div>
        </div>
      </div>

      <div class="question">{{ qs.name }}</div>

      <div class="answer">
        <div class="option" v-for="(item, index) in qs.option" :key="index">
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
        <div class="option-select" v-for="(item, index) in question" :key="index" @click="idx = index">
          <div :class="item.selected ? 'option-selected' : 'option-unselected'">{{ index + 1 }}</div>
        </div>
      </div>

      <div :class="commit() ? 'commit' : 'cannot-commit'">提交答卷</div>
    </div>
  </div>
</template>

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
</style>

<script>
export default {
  data() {
    return {
      idx: 0,
      question: [
        {
          id: 1,
          selected: false,
          name: '今天星期几?',
          option: [
            {
              id: 1,
              name: '星期一',
              checked: false,
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
          selected: false,
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
              checked: false,
              letter: 'C'
            },
          ],

        }, {
          id: 3,
          selected: false,
          name: '你的梦想是什么?',
          option: [
            {
              id: 1,
              name: '当一名程序员',
              checked: false,
              letter: 'A'
            }, {
              id: 2,
              name: '当一名测试员',
              checked: false,
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
          selected: false,
          name: '这是一题多选吗?',
          answer: 'BC',
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
              checked: false,
              letter: 'C'
            },
          ],
        }, {
          id: 5,
          selected: false,
          name: '是多选吧?',
          answer: 'ABC',
          score: 2,
          option: [ //选项
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
            },
          ],
        },
      ]
    }
  },
  methods: {
    next() {
      this.idx++;
    },
    toSelect(qs, item) {
      qs.selected = true;
      for (let i = 0; i < qs.option.length; i++) {
        qs.option[i].checked = false;
      }
      item.checked = true;
    },
    commit() {
      for (let i = 0; i < this.question.length; i++) {
        if (this.question[i].selected === false) return false;
      }
      return true;
    }
  }
}
</script>