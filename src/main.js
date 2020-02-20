import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opt = {
  icons: {
    iconfont: 'mdi',
  },
}
Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify(opt),
  render: h => h(App)
}).$mount('#app')
