import landing from './pages/landing/landing.vue';
import page404 from './pages/404/404.vue';
import authentication from './pages/auth/authentication/authentication.vue';
import registration from './pages/auth/registration/registration.vue';
import restoring from './pages/auth/restoring/restoring.vue';
import statistics from './pages/cabinet/statistics/statistics.vue';
import widget from './pages/cabinet/widget/widget.vue';
import widgetInstall from './pages/cabinet/widget-install/widget-install.vue';
import widgetDeactivate from './pages/cabinet/widget-deactivate/widget-deactivate.vue';
import widgetChat from './pages/cabinet/widget-chat/widget-chat.vue';
import billingAbonnement from './pages/cabinet/billing-abonnement/billing-abonnement.vue';
import billingInvoice from './pages/cabinet/billing-invoice/billing-invoice.vue';
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
        component:
        page404
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
                path: 'widget/install',
                name: 'cabinet-widget-install',
                component: widgetInstall,
            },
            {
                path: 'widget/deactivate',
                name: 'cabinet-widget-deactivate',
                component: widgetDeactivate,
            },
            {
                path: 'widget/chat',
                name: 'cabinet-widget-chat',
                component: widgetChat,
            },
            {
                path: 'billing/abonnement',
                name: 'cabinet-billing-abonnement',
                component: billingAbonnement,
            },
            {
                path: 'billing/invoice',
                name: 'cabinet-billing-invoice',
                component: billingInvoice,
            }
        ]
    },

]
