import landing from './pages/landing/landing.vue'
import page404 from './pages/404/404.vue'
import authentication from './pages/auth/authentication/authentication.vue'
import registration from './pages/auth/registration/registration.vue'
import restoring from './pages/auth/restoring/restoring.vue'

export default [
    {
        path: '/',
        name: 'landing',
        component: landing
    }, {
        path: '*',
        name: '404',
        component: page404
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
]
