import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import VueResource from 'vue-resource'
import routes from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)

export default new VueRouter({ routes })
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')


// const router = new VueRouter({
//   routes
// })

// export default router
