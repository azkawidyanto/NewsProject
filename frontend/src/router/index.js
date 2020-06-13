import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/pages/HomePage'
import CategoryPage from '../components/pages/CategoryPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryPage
    }
  ]
})

export default router
