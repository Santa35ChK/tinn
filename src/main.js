import Vue from 'vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "@/routes"
import store from "@/store"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/scss/main.scss"
import App from './App.vue'
import VueMask from 'v-mask'


Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.use(VueMask);

const options = {}
Vue.use(Toast, options)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')