import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import supabase from './utils/supabase.js'
import router from './route.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  supabase,
  router,
  render: h => h(App)
}).$mount('#app')
