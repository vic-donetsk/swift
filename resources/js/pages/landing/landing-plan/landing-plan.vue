<template>
    <div class="landing-plan">
        <h2 class="landing-plan_title">
            <span>{{__("landing", "Plan title")}}</span>
        </h2>
        <div class="landing-plan_container">
            <div class="landing-plan_block left">
                <img src="/img/illustration/Starter.svg" class="landing-plan_image">
                <h3 class="landing-plan_name">STARTER</h3>
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

            <div class="landing-plan_block middle">
                <img src="/img/illustration/Profesional.svg" class="landing-plan_image">
                <h3 class="landing-plan_name">PROFESIONAL</h3>
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
            </div>
            <div class="landing-plan_block right">
                <img src="/img/illustration/Premium.svg" class="landing-plan_image">
                <h3 class="landing-plan_name">PREMIUM</h3>
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

                <div class="landing-plan_list">

                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "landing-plan.scss";
</style>

<script src="./landing-plan.js"></script>