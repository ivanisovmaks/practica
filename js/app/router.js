import {login} from './pages/login.js';
import {campaigns} from './pages/campaigns.js';
import {campaign} from './pages/campaign.js';

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
    { path: '/', name: 'Sign in', component: login },
    { path: '/campaigns', name: 'Campaigns', component: campaigns },
    { path: '/campaign/:id', name: 'Campaign', component: campaign },
    ]
 });