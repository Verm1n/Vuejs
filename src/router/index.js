import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import secure from '../views/secure.vue'
import profile from '../Elements/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name:"auth"
    }
  },
  {
    path:'/auth',
    name:'auth',
    component:Auth
  },
  {
    path:'/secure',
    name:'secure',
    component:secure
  },
  {
    path:'/profile',
    name:'profile',
    component:profile
  }
]

const router = new VueRouter({
  routes
})

export default router
