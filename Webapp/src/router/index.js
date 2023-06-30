
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RamsView from "@/views/RamsView.vue";
import HeadSetView from "@/views/HeadSetView.vue";
import SolidDisksView from "@/views/SolidDisksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import("../componetes/pages/register.component.vue")
    },

    {
      path: '/login',
      name: 'login',
      component: () => import("../componetes/pages/login-page.component.vue")
    },
    {
      path: '/addnewtrip',
      name: 'addnewtrip',
      component: () => import("../componetes/pages/add-new-trip.component.vue")
    },
    {
      path:'/flighthistory',
      name:'flighthistory',
      component: () => import("../componetes/pages/flighthistory.component.vue")
    },
    {
      path:'/rams',
      name:'rams',
      component: RamsView
    },
    {
      path:'/soliddisks',
      name:'soliddisks',
      component: HeadSetView
    },
    {
      path:'/items',
      name:'items',
      component: () => import("../componetes/pages/shopping.component.vue")
    },
    {
      path:'/headsets',
      name:'headsets',
      component: SolidDisksView
    },

  ]

})

export default router