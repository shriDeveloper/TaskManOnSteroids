import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import AddTask from './components/AddTask/AddTask.vue';
import ViewTask from './components/ViewTask/ViewTask.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {path:'/add_task',component:AddTask},
    {path:'/view_tasks',component:ViewTask},
  ],
  mode:'history',
})

/** Filters */
Vue.filter('toUpperCase', value =>{
  return value.toUpperCase();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
