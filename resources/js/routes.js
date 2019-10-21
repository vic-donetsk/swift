import landing from './pages/landing/landing.vue';
import page404 from './pages/404/404.vue';
import authentication from './pages/auth/authentication/authentication.vue';
import registration from './pages/auth/registration/registration.vue';
import restoring from './pages/auth/restoring/restoring.vue';
import conversations from './components/conversations/conversations.vue';
import widget from './pages/cabinet/widget/widget.vue';
import widgetInstall from './pages/cabinet/widget-install/widget-install.vue';
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

    // Temporary route !!!
    {
        path: '/conversations',
        name: 'conversations',
        component: conversations
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
                path: 'widget',
                name: 'cabinet-widget',
                component: widget,
            },
            {
                path: 'widget/install',
                name: 'cabinet-widget-install',
                component: widgetInstall,
            }
        ]
    },

]
