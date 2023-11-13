import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '/css/ALI_icon.css'
import api from '@/api/index'

// import '@/mock/index.js'

import {
  Select,
  RadioGroup,
  Radio,
  RadioButton,
  Option,
  Checkbox,
  CheckboxGroup,
  Input,
  Rate,
  Notification,
  Carousel,
  CarouselItem,
  Message,
  Dialog,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// utils
import utils from './utils/index.js'

Vue.use(Select)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Input)
Vue.use(Rate)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Dialog)

Vue.config.productionTip = false

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$utils = utils

Vue.prototype.$api = api

new Vue({
  render: (h) => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  },
}).$mount('#app')
