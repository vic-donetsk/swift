import landing from './pages/landing/landing.vue';
import page404 from './pages/404/404.vue';
import authentication from './pages/auth/authentication/authentication.vue';
import registration from './pages/auth/registration/registration.vue';
import restoring from './pages/auth/restoring/restoring.vue';
import statistics from './pages/cabinet/statistics/statistics.vue';
import widget from './pages/cabinet/widget/widget.vue';
import widgetInstall from './pages/cabinet/widget-install/widget-install.vue';
import widgetCalls from './pages/cabinet/widget-calls/widget-calls.vue';
import widgetSMS from './pages/cabinet/widget-sms/widget-sms.vue';
import widgetTime from './pages/cabinet/widget-time/widget-time.vue';
import widgetDeactivate from './pages/cabinet/widget-deactivate/widget-deactivate.vue';
import widgetChat from './pages/cabinet/widget-chat/widget-chat.vue';
import chat from './pages/cabinet/chat/chat.vue';
import billingAbonnement from './pages/cabinet/billing-abonnement/billing-abonnement.vue';
import billingInvoice from './pages/cabinet/billing-invoice/billing-invoice.vue';
import billingBank from './pages/cabinet/billing-bank/billing-bank.vue';
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
                path: 'widget/install',
                name: 'cabinet-widget-install',
                component: widgetInstall,
            },
            {
                path: 'widget/calls',
                name: 'cabinet-widget-calls',
                component: widgetCalls,
            },
            {
                path: 'widget/sms',
                name: 'cabinet-widget-sms',
                component: widgetSMS,
            },
            {
                path: 'widget/time',
                name: 'cabinet-widget-time',
                component: widgetTime,
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
                path: 'chat',
                name: 'cabinet-chat',
                component: chat,
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
            },
            {
                path: 'billing/bank',
                name: 'cabinet-billing-bank',
                component: billingBank,
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
