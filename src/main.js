// Paquetes de npm
import Vue from 'vue'

// BootstrapVue
import '@/plugins/bootstrapVue'

// Vue Font-Awesome
import '@/plugins/fontAwesome'

// Archivos locales de la App
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// CSS global
import '@/assets/css/main.css'

// Configuración extra
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
