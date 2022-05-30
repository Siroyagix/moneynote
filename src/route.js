import Vue from 'vue'
import VueRouter from 'vue-router'
// ルーティング対象コンポーネント
import loginpage from './components/LoginPage.vue'

const router = new Vue.user(VueRouter,[
  { path:'/login' ,component: loginpage }
]);

export default router;