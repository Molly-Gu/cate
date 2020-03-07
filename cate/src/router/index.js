import Vue from 'vue'
import VueRouter from 'vue-router'
import communcity from '../components/Communcity/communcit.vue'
import my from '../components/My/my.vue'
import shouye from '../components/shouye/shouye.vue'
import type from '../components/Type/Type.vue'
Vue.use(VueRouter)

const routes = [
  

  {
    path:'/shouye',
    componennts: shouye
  },
  {
    path: '/type',
   // name: 'type',
    component: type
  },
  {
    path: '/communcity',
   // name: 'communcity',
    component: communcity
  },
  {
    path: '/my',
    //name: 'my',
    component: my
  },
  {
    path: '/',
    redirect:'/shouye'
  },
]

const router = new VueRouter({
  routes
})

export default router
