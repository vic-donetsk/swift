<template>
    <div class="landing-offers">
        <h2 class="landing-offers_title">SwiftCallBack</h2>
        <p class="landing-offers_subtitle">
            {{__('landing','Offer subtitle')}}
        </p>
        <div v-for="item in offers" class="landing-offers_item">
            <span class="landing-offers_item-title">{{item.title}}</span>
            <svg class="landing-offers_item-icon">
                <use :xlink:href="`#${item.icon}`"></use>
            </svg>
        </div>
    </div>
</template>

<style lang="scss">
    @import "landing-offers.scss";
</style>

<script src="./landing-offers.js"></script>