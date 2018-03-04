import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import User from './components/User.vue'
import Blog from './components/Blog.vue'
import Account from './components/Account.vue'

Vue.use(VueRouter);

// creo le mie routes
const routes = [
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/',
    component: User
  }
];

// definisco il router
const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

// creo il Component
Vue.component('app-user', User);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
