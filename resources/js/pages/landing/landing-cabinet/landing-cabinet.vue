<template>
    <div class="landing-cabinet">
        <h2 class="landing-cabinet_title mod_mobil">
            <span>{{__("landing", "Cabinet title")}}</span>
        </h2>
        <img src="/img/illustration/dashboard.svg" class="landing-cabinet_image">
        <div class="landing-cabinet_container">
            <h2 class="landing-cabinet_title">
                <span>{{__("landing", "Cabinet title")}}</span>
            </h2>
            <div class="landing-cabinet_list">
                <div v-for="item in cabinet" class="landing-cabinet_item">
                    <p class="landing-cabinet_item-text"
                       v-html="item.text"></p>
                </div>
            </div>
            <div class="button mod_landing mod-blue">
                <span class="button_text">{{ __("landing", "Cabinet button") }}</span>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "landing-cabinet.scss";
</style>

<script src="./landing-cabinet.js"></script>