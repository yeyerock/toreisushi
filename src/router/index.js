import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Rollos from '../views/Rollos.vue'
import DragonBalls from '../views/DragonBalls.vue'
import Nigiris from '../views/Nigiris.vue'
import Yakimeshi from '../views/Yakimeshi.vue'
import Extras from '../views/Extras.vue'
import Charolas from '../views/Charolas.vue'
import Promociones from '../views/Promociones.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rollos',
    name: 'rollos',
    component: Rollos
  },
  {
    path: '/dragonBalls',
    name: 'dragonBalls',
    component: DragonBalls
  },
  {
    path: '/nigiris',
    name: 'nigiris',
    component: Nigiris
  },
  {
    path: '/yakimeshi',
    name: 'yakimeshi',
    component: Yakimeshi
  },
  {
    path: '/extras',
    name: 'extras',
    component: Extras
  },
  {
    path: '/charolas',
    name: 'charolas',
    component: Charolas
  },
  {
    path: '/promociones',
    name: 'promociones',
    component: Promociones
  },
]

const router = new VueRouter({
  routes
})

export default router
