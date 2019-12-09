import Vue from 'vue'
import Router from 'vue-router'
import Blankslate from '@/components/Blankslate'
import Processing from '@/components/Processing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blankslate',
      component: Blankslate
    },
    {
      path: '/processing/:currency',
      name: 'Processing',
      component: Processing
    }
  ]
})
