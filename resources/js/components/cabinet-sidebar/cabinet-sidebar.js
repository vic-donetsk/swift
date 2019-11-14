import Logo from './../../components/logo/logo.vue';


export default {
    components: {
        'logo': Logo,
    },
    data: function () {
        return {
            menu: false,
            personMenu:false,

            fromChat: false,
        }
    },
    created() {
        EventBus.$on('chatExit', () => {
            $('.hamburger--slider').addClass('is-active');
            this.openMenu();
            this.fromChat = true;
        });
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

        }
    },
    watch: {
        '$route'() {
            $('.cabinet-sidebar .landing-mobile_menu').slideUp(100);
            $('body').css({
                'overflow': 'visible'
            });
            $('.hamburger.hamburger--slider').removeClass('is-active');
        }
    },
}

