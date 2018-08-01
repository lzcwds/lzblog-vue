import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import article from '@/components/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content',
      component: content
    },{
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})
