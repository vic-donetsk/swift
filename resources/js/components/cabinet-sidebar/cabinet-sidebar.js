import Logo from './../../components/logo/logo.vue';


export default {
    components: {
        'logo': Logo,
    },
    data: function () {
        return {
            menu: false,
            personMenu: false,
            fromChat: false,
            widgetPath: '/cabinet/widget'
        }
    },
    created() {
        EventBus.$on('chatExit', () => {
            $('.hamburger--slider').addClass('is-active');
            this.openMenu();
            this.fromChat = true;
        });
    },
    mounted() {
        if (this.$route.path === '/cabinet/widget') {
            this.$refs.widgetPath.classList.add('router-link-active');
            this.$refs.mobileWidgetPath.classList.add('router-link-active');
        }
    },
    methods: {
        openMenu() {
            this.menu = !this.menu;

            $('.cabinet-sidebar .landing-mobile_menu').slideToggle(100);

            if (this.menu) {
                $('body').css({
                    'overflow': 'hidden'
                });
            } else {
                $('body').css({
                    'overflow': 'visible'
                });
            }

            if (this.fromChat) {
                this.fromChat = false;
                EventBus.$emit('comeBackToChat');
            }

        },
        moveToWidget(e) {
            if (this.$route.path !== '/cabinet/widget') {
                this.$router.push('/cabinet/widget');
            } else {
                EventBus.$emit('widget-main');
            }
        }
    },
    watch: {
        '$route'(to, from, next) {
            if (to.name === 'cabinet-widget') {
                this.$refs.widgetPath.classList.add('router-link-active');
                this.$refs.mobileWidgetPath.classList.add('router-link-active');
            } else {
                this.$refs.widgetPath.classList.remove('router-link-active');
                this.$refs.mobileWidgetPath.classList.remove('router-link-active');
            }

            $('.cabinet-sidebar .landing-mobile_menu').slideUp(100);
            $('body').css({
                'overflow': 'visible'
            });
            $('.hamburger.hamburger--slider').removeClass('is-active');
        }
    },
}

