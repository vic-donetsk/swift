<template>
    <div class="landing-menu">
        <div class="landing-menu_container">
            <div class="landing-menu_logo">
                <span class="landing-menu_logo" v-html='__("landing", "Swift")'></span>
<!--                <span class="landing-menu_logoCallback">{{ __("landing", "Callback") }}</span>-->
            </div>

            <nav class="landing-menu_nav">
                    <span class="landing-menu_item">{{ __("landing", "Tarif") }}</span>
                    <span class="landing-menu_item">{{ __("landing", "PRODUS") }}</span>
                    <span class="landing-menu_item">{{ __("landing", "DEZVOLTATORI") }}</span>
                    <span class="landing-menu_item">{{ __("landing", "SUPPORT") }}</span>
                    <span class="landing-menu_item">{{ __("landing", "CONTACTE") }}</span>
            </nav>

            <div class="button mod-blue">
                <span class="button_text">{{ __("landing", "Menu button") }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "landing-menu.scss";
</style>

<script src="./landing-menu.js"></script>
