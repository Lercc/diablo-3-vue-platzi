// Paquetes de npm
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Archivos locales de la App
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// CSS global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Configuración extra
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Instacia principal de Vue
new Vue({
  router,
  store,
  methods: {
    init() {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created() {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
