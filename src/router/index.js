import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)

export default new VueRouter({ routes })