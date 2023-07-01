# Black-Shield

前端技术栈：vue3、Element-UI plus、mitt、router

后端技术栈：Springboot2、Mybatis-Plus、MD5

数据库：MySql

------

### 主要代码

1. 轮播图：采用Element-UI plus中的el-carousel组件，具体代码如下——

   ``````vue
   <el-carousel trigger="click" arrow="never" height="248px">
       <el-carousel-item v-for="(item, index) in imageBox" :key="index">
           <img alt="#" :src="'./../../src/image/' + item.coursePath" style="margin: auto">
       </el-carousel-item>
   </el-carousel>
   ``````

2. 倒计时功能：

   ```vue
   <div class="clock">
       <img class="clock-image" src="./../image/clock.png" alt="#">
       <div class="time-out">
           <div class="time">
               <p>00:{{ timerCount2 }}:{{ timerCount1 }}</p>
           </div>
       </div>
   </div>
   ```

   ```javascript
   methonds: {
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
     // 显示
     computed: {
       timerCount1() {
         return this.seconds < 10 ? "0" + this.seconds : "" + this.seconds;
       },
       timerCount2() {
         return this.minutes < 10 ? "0" + this.minutes : "" + this.minutes;
       },
     }
   ```

3. 试题相关：
   ```vue
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
   ```

   ```javascript
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
       }
   
       // 下一题
       next() {
         	this.idx++;
       }
   
   	// 监测
     	watch: {
       	isCountDown(newValue) {
         		if (newValue === 1) this.timing();
         		else if (newValue === 0) this.clear();
         		else if (newValue === 2) alert("成功提交试卷！")
       	}
   	}
   
   ```

4. 父子组件通信：
   ```vue
   <Header :message="this.username"></Header>
   ```

   ```vue
   <span>欢迎您！{{ message }}同学</span>
   ```

   ```javascript
   export default {
     props: {
       message: ''
     }
   }
   ```

5. 同级组件通信：
   ```javascript
   // 全局引入
   app.config.globalProperties.$bus = bus
   
   // 组件一
   goExam() {
   	this.$bus.emit('subjectName', this.message.subject);
   
   	router.push('/online/exam');
   }
   
   // 组件二
   mounted() {
       // 获取考试名
       this.$bus.on("subjectName", (data) => {
           this.subjectName = data;
       });
   }
   ```