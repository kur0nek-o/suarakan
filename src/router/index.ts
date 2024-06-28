import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPage from '@/pages/LoginPage.vue'
import SignupPage from '@/pages/SignupPage.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    meta: { layout: MainLayout },
    component: () => import('@/pages/HomePage.vue')
  },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/sign-up', component: SignupPage }
]

const router = createRouter({
  history: createMemoryHistory(),
  strict: true,
  routes
})

export default router
