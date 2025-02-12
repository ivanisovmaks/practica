import {login} from './pages/login.js';
import {campaigns} from './pages/campaigns.js';
import {campaign} from './pages/campaign.js';
import {users} from './pages/users.js';
import {user} from './pages/user.js';
import {statistics} from './pages/statistics.js';
import {ads} from './pages/ads.js';
import {sites} from './pages/sites.js';
import {payments} from './pages/payments.js';

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', name: 'Sign in', component: login },
        { path: '/campaigns', name: 'Campaigns', component: campaigns },
        { path: '/campaign/:id', name: 'Campaign', component: campaign },
        { path: '/users', name: 'Users', component: users },
        { path: '/user/:id', name: 'User', component: user },
        { path: '/statistics', name: 'Statistics', component: statistics },
        { path: '/ads', name: 'Ads', component: ads },
        { path: '/sites', name: 'Sites', component: sites },
        { path: '/payments', name: 'Payments', component: payments },
    ]
 });