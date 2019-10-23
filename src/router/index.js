import Vue from 'vue'
import Router from 'vue-router'
import Found from '../components/Found.vue'
import Friend from '../components/Friend.vue'
import My_music from '../components/My_music.vue'
import Shop from '../components/Shop.vue'
import Musician from '../components/Musician.vue'
import Download from '../components/Download.vue'
import Toplist from "../components/Toplist";
import Discover from "../components/Discover";
import Playlist from "../components/Playlist";
import Artist from "../components/Artist";
import Djradio from "../components/Djradio";
import Album from "../components/Album";
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
    },
    {
      path: '/discover',
      component:Found,
      children:[{
        path: '/toplist',
        component:Toplist
      },
      {
        path: '/playlist',
        component:Playlist
      },
      {
        path: '/djradio',
        component:Djradio
      },
      {
        path: '/artist',
        component:Artist
      },
      {
        path: '/album',
        component:Album
      },
      ]
    }
  ],

})
