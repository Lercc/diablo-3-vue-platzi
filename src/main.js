// Paquetes de npm
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
// iconos del tipo solid
import { faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
// iconos del tipo brand (marcas o logos de empresas)
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
// componente a utilizar
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Archivos locales de la App
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

// CSS global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/main.css'

// Le añadimos los iconos que acabamos de importar (todos, los de tipo solid y de tipo brand)
library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
)

// Configuración extra
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Instacia principal de Vue
new Vue({
  router,
  store,
  methods: {
    init() {
      console.log('test 🙍‍♂️');
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created() {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
