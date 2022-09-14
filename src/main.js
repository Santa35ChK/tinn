import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "@/routes.js"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/scss/main.scss"
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

const options = {}
Vue.use(Toast, options)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')