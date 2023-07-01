import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import axios from "axios";

import './assets/main.css'
import mitt from "mitt";

const app = createApp(App);

const bus = mitt();

app.config.globalProperties.$axios = axios
app.config.globalProperties.$bus = bus

app.use(router);
app.use(ElementPlus)

app.mount('#app');
