import landingHeader from './landing-header/landing-header.vue';
import landingMenu from './landing-menu/landing-menu.vue';
import sectionHead from './section-head/section-head.vue';

export default {
    components: {
        'landing-header': landingHeader,
        'landing-menu': landingMenu,
        'section-head': sectionHead
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
