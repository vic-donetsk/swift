import routes from './routes';
import Vue from "vue";
import VueRouter from "vue-router";
import Header from './components/header/header.vue';
import cabinetHeader from './pages/cabinet/components/cabinet-header/cabinet-header.vue'
import cabinetSidebar from './pages/cabinet/components/cabinet-sidebar/cabinet-sidebar.vue'

import localization from './mixins/localization.js';

window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


const router = new VueRouter({
    routes,
    mode: 'history'
});

window.EventBus = new Vue();

Vue.use(VueRouter);
Vue.mixin(localization);
Vue.component('header-component', Header);
Vue.component('cabinet-header', cabinetHeader);
Vue.component('cabinet-sidebar', cabinetSidebar);

const app = new Vue({
    router
}).$mount('#app');
