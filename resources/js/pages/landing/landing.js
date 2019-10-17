import landingHeader from './landing-header/landing-header.vue';
import landingMenu from './landing-menu/landing-menu.vue';
import landingHead from './landing-head/landing-head.vue';
import landingMain from './landing-main/landing-main.vue';
import landingOffers from './landing-offers/landing-offers.vue';
import landingCabinet from './landing-cabinet/landing-cabinet.vue';
import landingPlan from './landing-plan/landing-plan.vue';
import landingFooterTop from './landing-footer-top/landing-footer-top.vue';
import landingFooterBottom from './landing-footer-bottom/landing-footer-bottom.vue';

// import Landing from "./landing";
// export default {
//     components: {Landing}
// }

export default {
    components: {
        'landing-header': landingHeader,
        'landing-menu': landingMenu,
        'landing-head': landingHead,
        'landing-main': landingMain,
        'landing-offers': landingOffers,
        'landing-cabinet': landingCabinet,
        'landing-plan': landingPlan,
        'landing-footer-top': landingFooterTop,
        'landing-footer-bottom': landingFooterBottom,
    },
    data: function () {
        return {
            home: true,
            title: "Главная"
        };
    },
    created() {
        this.title = "Лендинг 1";

        EventBus.$on('renameText', () => {
            this.title = "Лендинг 3";
        })
    },
    mounted() {
        setTimeout(() => {
            this.title = "Лендинг 2";
        }, 1000);

    },
    computed: {
        getTitle() {
            return this.title + ' - Вычисленный';
        }
    },
    methods: {
        goToAuth() {
            this.$router.push('/authentication');
        }
    }
}
