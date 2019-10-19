import Vue from 'vue'
import Router from 'vue-router'
import Found from '../components/Found.vue'
import Friend from '../components/Friend.vue'
import My_music from '../components/My_music.vue'
import Shop from '../components/Shop.vue'
import Musician from '../components/Musician.vue'
import Download from '../components/Download.vue'
// import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
       component:Found
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/friend',
      component: Friend
    },
    {
      path: '/my_music',
      component:My_music
    },
    {
      path: '/shop',
      component:Shop
    },
    {
      path: '/Musician',
      component:Musician
    },
    {
      path: '/Download',
      component:Download
    }
  ],

})
