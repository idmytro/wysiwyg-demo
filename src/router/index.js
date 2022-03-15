import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import QuillJs from '../views/QuillJs.vue';
import QuillJs2 from '../views/QuillJs2.vue';
import QuillJs3 from '../views/QuillJs3.vue';
import QuillJs4 from '../views/QuillJs4.vue';
import TipTap from '../views/TipTap.vue';
import FosPublisher from '../views/FosPublisher.vue';
import LetterView from '../views/LetterView.vue';
import MultiEditor from '../views/MultiEditor.vue';
import ConvertUnits from '../views/ConvertUnits.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/',
    alias: '/quill',
    name: 'Quill',
    component: QuillJs,
  },
  {
    path: '/quill/2',
    name: 'Quill2',
    component: QuillJs2,
  },
  {
    path: '/quill/3',
    name: 'Quill3',
    component: QuillJs3,
  },
  {
    path: '/quill/4',
    name: 'Quill4',
    component: QuillJs4,
  },

  {
    path: '/letter',
    name: 'LetterView',
    component: LetterView,
  },
  {
    path: '/multi',
    name: 'MultiEditor',
    component: MultiEditor,
  },
  {
    path: '/convert',
    name: 'ConvertUnits',
    component: ConvertUnits,
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
