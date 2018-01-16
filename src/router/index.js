import Vue from 'vue';
import Router from 'vue-router';
import HomeScreen from '@/components/HomeScreen';
import HelloTest from '@/components/HelloTest';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HomeScreen,
    },
    {
      path: '/test',
      name: 'HelloTest',
      component: HelloTest,
    },
  ],
});
