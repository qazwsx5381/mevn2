import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch: true */ '../views/AboutView.vue'
      )
  },
  {
    path: '/strHTML',
    name: 'strHTML',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "strHTML", webpackPrefetch: true */ '../views/strHTML.vue'
      )
  },
  {
    path: '/iVIEW',
    name: 'input',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "input", webpackPrefetch: true */ '../views/iVIEW.vue'
      )
  },
  {
    path: '/selView',
    name: 'select',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "select", webpackPrefetch: true */ '../views/selView.vue'
      )
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "select", webpackPrefetch: true */ '../views/checkbox.vue'
      )
  },
  {
    path: '/attribute',
    name: 'attribute',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "select", webpackPrefetch: true */ '../views/attribute.vue'
      )
  },
  {
    path: '/bindlist',
    name: 'bindlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "select", webpackPrefetch: true */ '../views/bindlist.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
