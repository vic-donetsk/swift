<template>
    <div class="landing-offers">
        <h2 class="landing-offers_title">
            SwiftCallBack
            <span class="mod_mobile">
                {{__('landing','Offer subtitle')}}
            </span>
        </h2>
        <p class="landing-offers_subtitle">
            {{__('landing','Offer subtitle')}}
        </p>
        <div class="landing-offers_list">
            <div v-for="item in offers" class="landing-offers_item">
                <svg class="landing-offers_item-icon">
                    <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                <p class="landing-offers_item-title"
                   v-html="item.title"></p>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "landing-offers.scss";
</style>

<script src="./landing-offers.js"></script>