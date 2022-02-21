import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EditorJs from '../views/EditorJs.vue';
import QuillJs from '../views/QuillJs.vue';
import TipTap from '../views/TipTap.vue';
import FosPublisher from '../views/FosPublisher.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/editor-js',
    name: 'EditorJs',
    component: EditorJs,
  },
  {
    path: '/quill',
    name: 'QuillJs',
    component: QuillJs,
  },
  {
    path: '/tiptap',
    name: 'TipTap',
    component: TipTap,
  },
  {
    path: '/fos',
    name: 'FosPublisher',
    component: FosPublisher,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
