import Logo from './../../../components/logo/logo.vue';

export default {
    components: {
        'logo': Logo,
    },
    data: function () {
        return {
            menu: false
        }
    },
    methods: {
        openMenu() {
            this.menu = !this.menu;

            $('.landing-header .landing-mobile_menu').slideToggle(100);

            if (this.menu) {
                $('body').css({
                    'overflow': 'hidden'
                });
            } else {
                $('body').css({
                    'overflow': 'visible'
                });
            }

        }
    },
}

