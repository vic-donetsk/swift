import landingHeader from './landing-header/landing-header.vue';
import landingMenu from './landing-menu/landing-menu.vue';
import landingHead from './landing-head/landing-head.vue';

// import Landing from "./landing";
// export default {
//     components: {Landing}
// }

export default {
    components: {
        'landing-header': landingHeader,
        'landing-menu': landingMenu,
        'landing-head': landingHead
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
