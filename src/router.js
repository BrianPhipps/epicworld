import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Map from './views/Map.vue';
import Character from './views/Character.vue';
import Timeline from './views/Timeline';
import Equipment from './views/Equipment';

Vue.use(Router);
export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Map',
            name: 'map',
            component: Map
        },
        {
            path: '/Character',
            name: 'character',
            component: Character
        },
        {
            path: '/Timeline',
            name: 'timeline',
            component: Timeline
        },
        {
            path: '/Equipment',
            name: 'equipment',
            component: Equipment
        },
    ]
});