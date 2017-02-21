import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
import Item from 'components/draft/draft-service'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Item
    },
    {
      path: '/demo/user',
      name: 'user',
      component: Hello
    }
  ]
})
