const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blackwater',
    name: 'Blackwater',
    component: () => import('../views/Blackwater.vue')
  },
  {
    path: '/bandon',
    name: 'Bandon',
    component: () => import('../views/Bandon.vue')
  },
  {
    path: '/suir',
    name: 'Suir',
    component: () => import('../views/Suir.vue')
  },
  {
    path: '/owenboy',
    name: 'Owenboy',
    component: () => import('../views/Owenboy.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
] 