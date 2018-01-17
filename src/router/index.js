import Vue from 'vue';
import Router from 'vue-router';
import HomeScreen from '@/components/HomeScreen';
import FighterCard from '@/components/FighterCard';
import TitleHolders from '@/components/TitleHolders';
import EventListing from '@/components/EventListing';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: HomeScreen,
    },
    {
      path: '/fighter-card',
      name: 'Fighter Card',
      component: FighterCard,
    },
    {
      path: '/title-holders',
      name: 'Title Holders',
      component: TitleHolders,
    },
    {
      path: '/event-listing',
      name: 'Event Listing',
      component: EventListing,
    },
  ],
});
