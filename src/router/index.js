import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import PokemonView from '@/views/PokemonView.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon/:id',
    name:'pokemon',
    component: PokemonView,
    props: true,

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  // la ruta para el componente NotFound SIEMPRE DEBE IR AL FINAL
  {
    // path: '*',
    // path: "/:catchAll(.*)",
    // path: '/:pathMatch(.*)*',
    // ruta not found para dev
    // path: "/:catchAll(.*)",
    //ruta not found para prod
    path: "/decimo_proyecto_cli_produccion/:catchAll(.*)",
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
