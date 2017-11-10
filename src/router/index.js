import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/pos'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    }
  ]
})
