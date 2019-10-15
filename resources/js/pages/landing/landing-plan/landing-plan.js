export default {
    mounted() {
        if ($(window).width() <= 1280) {
            let landingPlanSwiper = new Swiper('.landing-plan .swiper-container', {
                slidesPerView: 1,
                loop: true,
                paginationClickable: true,
                speed: 300,
                grabCursor: true,
                // autoplay: {
                //     delay: 7000,
                //     disableOnInteraction: false
                // },
                navigation: {
                    nextEl: '.landing-plan .swiper-button-next',
                    prevEl: '.landing-plan .swiper-button-prev',
                },

                pagination: {
                    el: '.landing-plan .swiper-pagination',
                    clickable: true,
                }

            });

            $(window).on('resize', function () {
                landingPlanSwiper.update();
            });
        }
    }
}