import Vue from 'vue'
import VueRouter from 'vue-router'
import communcity from '../components/Communcity/communcit.vue'
import my from '../components/My/my.vue'
import shouye from '../components/shouye/shouye.vue'
import type from '../components/Type/Type.vue'
import recommand from '../components/Recommand/recommand.vue'
import pick from '../components/Pick/pick.vue'
import health from '../components/Health/health.vue'
import menu from '../components/Menu/menu.vue'
import family from '../components/Family/family.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/shouye',
    component: shouye,
    children:[
      {//子路由的话不加/  
        path:"recommand",
        component:recommand
      },
      {//子路由的话不加/  
        path:"pick",
        component:pick
      },
      {//子路由的话不加/  
        path:"family",
        component:family
      },
      {//子路由的话不加/  
        path:"menu",
        component:menu
      },
      {//子路由的话不加/  
        path:"health",
        component:health
      }
    ]
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
