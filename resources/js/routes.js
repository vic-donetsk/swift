import landing from './pages/landing/landing.vue';
import page404 from './pages/404/404.vue';
import authentication from './pages/auth/authentication/authentication.vue';
import registration from './pages/auth/registration/registration.vue';
import restoring from './pages/auth/restoring/restoring.vue';
import statistics from './pages/cabinet/statistics/statistics.vue';
import widget from './pages/cabinet/widget/widget.vue';
import chat from './pages/cabinet/chat/chat.vue';
import billing from './pages/cabinet/billing/billing.vue';
import settings from './pages/cabinet/settings/settings.vue';
import support from './pages/cabinet/support/support.vue';
import cabinet from './components/cabinet/cabinet.vue';

export default [
    {
        path: '/',
        name: 'landing',
        component: landing
    },

    // Routing
    {
        path: '/authentication',
        name: 'authentication',
        component: authentication
    },
    {
        path: '/registration',
        name: 'registration',
        component: registration
    },
    {
        path: '/restoring',
        name: 'restoring',
        component: restoring
    },

    {
        path: '*',
        name: '404',
        component: page404
    },
    {
        path: '/cabinet',
        name: 'cabinet',
        component: cabinet,
        children: [
            {
                path: 'statistics',
                name: 'cabinet-statistics',
                component: statistics,
            },
            {
                path: 'widget',
                name: 'cabinet-widget',
                component: widget,
            },
            {
                path: 'chat',
                name: 'cabinet-chat',
                component: chat,
            },
            {
                path: 'billing',
                name: 'cabinet-billing',
                component: billing,
            },
            {
                path: 'settings',
                name: 'cabinet-settings',
                component: settings,
            },
            {
                path: 'support',
                name: 'cabinet-support',
                component: support,
            },
        ]
    },

]
