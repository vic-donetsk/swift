export default {
    data() {
        return {
            initSwiper: false
        }
    },
    mounted() {
        let landingPlanSwiper;

        function init() {
            landingPlanSwiper = new Swiper('.landing-plan .swiper-container', {
                slidesPerView: 1,
                loop: true,
                paginationClickable: true,
                speed: 300,
                grabCursor: true,
                navigation: {
                    nextEl: '.landing-plan .swiper-button-next',
                    prevEl: '.landing-plan .swiper-button-prev',
                },
                pagination: {
                    el: '.landing-plan .swiper-pagination',
                    clickable: true,
                }
            });
        }

        $(window).on('resize load', function () {
            if ($(window).width() <= 1280) {
                if (!this.initSwiper) {
                    init();
                    this.initSwiper = true;
                } else {
                    landingPlanSwiper.update();
                }
            } else {
                if (this.initSwiper) {
                    landingPlanSwiper.destroy();
                    this.initSwiper = false;
                }
            }
        });
    }
}