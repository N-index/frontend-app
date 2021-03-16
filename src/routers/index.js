import { createRouter, createWebHistory } from 'vue-router';
import BetweenTwoDays from '../views/BetweenTwoDays';
import Self from '../views/self/Self';
import Monster from '../views/Monster';
import NewsPage from '../views/newspage/NewsPage';

const routes = [
  {
    path: '/',
    redirect: '/between',
  },
  {
    path: '/between',
    name: 'Between',
    component: BetweenTwoDays,
  },
  {
    path: '/self',
    name: 'Self',
    component: Self,
  },
  {
    path: '/monster',
    name: 'Monster',
    component: Monster,
  },
  {
    path: '/news',
    name: 'NewsPage',
    component: NewsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
