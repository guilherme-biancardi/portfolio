import { createRouter, createWebHistory } from 'vue-router'
import { useRoutes } from './modules/routes'
const routes = useRoutes()

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
