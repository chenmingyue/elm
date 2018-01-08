import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Seller from '@/components/seller/seller'
import Assess from '@/components/assess/assess'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods,

    },
    {
      path:'/seller',
      name:'seller',
      component:Seller,

    },
    {
      path:'/assess',
      name:'assess',
      component:Assess,

    }
  ]


})
