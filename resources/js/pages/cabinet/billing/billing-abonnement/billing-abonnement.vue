<template>
    <div class="billing-abonnement_content">
        <h2 class="cabinet-page_title">
            <svg class="cabinet-page_title-icon">
                <use xlink:href="#subscribe"></use>
            </svg>
            <span>{{__('billing','Billing menu text 1')}}</span>
        </h2>
        <div class="landing-plan_container">
            <div class="swiper-button-prev slide-btn left">
                <svg class="slide-arrow_icon"><use xlink:href="#arrow"></use></svg>
            </div>
            <div class="swiper-button-next slide-btn left">
                <svg class="slide-arrow_icon"><use xlink:href="#arrow"></use></svg>
            </div>
            <div class="swiper-pagination mod-green"></div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide mod_active"
                         data-subs="starter">
                        <div class="landing-plan_block left">
                            <img src="/img/illustration/Starter.svg" class="landing-plan_image">
                            <h3 class="landing-plan_name">{{__("landing", "Plan name starter")}}</h3>
                            <div class="landing-plan_price">
                                <div class="landin-plan_sum">
                                    <svg class="landing-plan_sum-icon">
                                        <use xlink:href="#euro"></use>
                                    </svg>
                                    <span class="landing-plan_sum-number">15</span>
                                </div>
                                <span class="landing-plan_price-text">{{__("landing", "Price text")}}</span>
                            </div>

                            <div class="button mod_landing mod-blue">
                                <span class="button_text">{{ __("landing", "Plan button") }}</span>
                            </div>

                            <h4 class="landing-plan_list-title">{{__("landing", "Plan list title")}}</h4>
                            <ul class="landing-plan_list">
                                <li>{{__("landing", "Plan list left 1")}}</li>
                                <li>{{__("landing", "Plan list left 2")}}</li>
                                <li>{{__("landing", "Plan list left 3")}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="swiper-slide"
                         data-subs="professional">
                        <div class="landing-plan_block middle">
                            <img src="/img/illustration/Profesional.svg" class="landing-plan_image">
                            <h3 class="landing-plan_name">{{__("landing", "Plan name professional")}}</h3>
                            <div class="landing-plan_price">
                                <div class="landin-plan_sum">
                                    <svg class="landing-plan_sum-icon">
                                        <use xlink:href="#euro"></use>
                                    </svg>
                                    <span class="landing-plan_sum-number">35</span>
                                </div>
                                <span class="landing-plan_price-text">{{__("landing", "Price text")}}</span>
                            </div>

                            <div class="button mod_landing mod-green">
                                <span class="button_text">{{ __("landing", "Plan button") }}</span>
                            </div>

                            <h4 class="landing-plan_list-title">{{__("landing", "Plan list title")}}</h4>
                            <ul class="landing-plan_list">
                                <li>{{__("landing", "Plan list middle 1")}}</li>
                                <li>{{__("landing", "Plan list middle 2")}}</li>
                                <li>{{__("landing", "Plan list middle 3")}}</li>
                            </ul>

                            <h4 class="landing-plan_list-title">{{__("landing", "Plan list title 2")}}</h4>
                            <ul class="landing-plan_list">
                                <li>{{__("landing", "Plan list character 1")}}</li>
                                <li>{{__("landing", "Plan list character 2")}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="swiper-slide"
                         data-subs="premium">
                        <div class="landing-plan_block right">
                            <img src="/img/illustration/Premium.svg" class="landing-plan_image">
                            <h3 class="landing-plan_name">{{__("landing", "Plan name premium")}}</h3>
                            <div class="landing-plan_price">
                                <div class="landin-plan_sum">
                                    <svg class="landing-plan_sum-icon">
                                        <use xlink:href="#euro"></use>
                                    </svg>
                                    <span class="landing-plan_sum-number">55</span>
                                </div>
                                <span class="landing-plan_price-text">{{__("landing", "Price text")}}</span>
                            </div>

                            <div class="button mod_landing mod-brown">
                                <span class="button_text">{{ __("landing", "Plan button") }}</span>
                            </div>

                            <h4 class="landing-plan_list-title">{{__("landing", "Plan list title")}}</h4>
                            <ul class="landing-plan_list">
                                <li>{{__("landing", "Plan list right 1")}}</li>
                                <li>{{__("landing", "Plan list right 2")}}</li>
                                <li>{{__("landing", "Plan list right 3")}}</li>
                            </ul>

                            <h4 class="landing-plan_list-title">{{__("landing", "Plan list title 2")}}</h4>
                            <ul class="landing-plan_list">
                                <li>{{__("landing", "Plan list character 1")}}</li>
                                <li>{{__("landing", "Plan list character 2")}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./billing-abonnement.js"></script>

<style lang='scss'>
    @import './billing-abonnement.scss';
</style>
