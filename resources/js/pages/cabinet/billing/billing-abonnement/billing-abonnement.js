export default {
    data: function () {
        return {
            initSwiper: false,
            billingSwiper: null,
        };
    },
    mounted() {
        if ($(window).width() < 1280) {
            this.init();
            this.initSwiper = true;
        }
        $(window).on('resize', () => {
            this.onResize();
        });

    },
    destroyed() {
        $(window).off('resize');
        this.billingSwiper.destroy();
    },
    methods: {
        init() {
            this.billingSwiper = new Swiper('.billing-abonnement .swiper-container', {
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
        },
        onResize() {
            if ($(window).width() < 1280) {
                if (!this.initSwiper) {
                    this.init();
                    this.initSwiper = true;
                } else {
                    this.billingSwiper.update();
                }
            } else {
                if (this.initSwiper) {
                    this.billingSwiper.destroy();
                    this.initSwiper = false;
                }
            }
        }
    }
}





