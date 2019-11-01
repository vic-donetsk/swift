import billingSteps from "../../../components/billing-steps/billing-steps";

export default {
    components: {
        'billing-steps': billingSteps
    },
    data: function () {
        return {
            home: true,
            title: "Главная",
            initSwiper: false
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

        let billingSwiper;

        function init() {
            billingSwiper = new Swiper('.billing-abonnement .swiper-container', {
                slidesPerView: 1,
                loop: true,
                paginationClickable: true,
                speed: 300,
                grabCursor: true,
                navigation: {
                    nextEl: '.billing-abonnement .swiper-button-next',
                    prevEl: '.billing-abonnement .swiper-button-prev',
                },
                pagination: {
                    el: '.billing-abonnement .swiper-pagination',
                    clickable: true,
                }
            });
        }

        $(window).on('resize load', function () {
            if ($(window).width() < 1280) {
                if (!this.initSwiper) {
                    init();
                    this.initSwiper = true;
                } else {
                    billingSwiper.update();
                }
            } else {
                if (this.initSwiper) {
                    billingSwiper.destroy();
                    this.initSwiper = false;
                }
            }
        });

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





