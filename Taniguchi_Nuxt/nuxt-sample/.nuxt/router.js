import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2e5a9e64 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _e3080592 = () => interopDefault(import('../pages/axios.vue' /* webpackChunkName: "pages/axios" */))
const _25b45cb4 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2721b67d = () => interopDefault(import('../pages/element.vue' /* webpackChunkName: "pages/element" */))
const _3fb303a4 = () => interopDefault(import('../pages/todos.vue' /* webpackChunkName: "pages/todos" */))
const _e412a9fc = () => interopDefault(import('../pages/blog/_category/index.vue' /* webpackChunkName: "pages/blog/_category/index" */))
const _b74c07c8 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _129020c4 = () => interopDefault(import('../pages/blog/_category/_page.vue' /* webpackChunkName: "pages/blog/_category/_page" */))
const _088a8b93 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2e5a9e64,
    name: "about"
  }, {
    path: "/axios",
    component: _e3080592,
    name: "axios"
  }, {
    path: "/blog",
    component: _25b45cb4,
    name: "blog"
  }, {
    path: "/element",
    component: _2721b67d,
    name: "element"
  }, {
    path: "/todos",
    component: _3fb303a4,
    name: "todos"
  }, {
    path: "/blog/:category",
    component: _e412a9fc,
    name: "blog-category"
  }, {
    path: "/blog/:id",
    component: _b74c07c8,
    name: "blog-id"
  }, {
    path: "/blog/:category/:page",
    component: _129020c4,
    name: "blog-category-page"
  }, {
    path: "/",
    component: _088a8b93,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
