<template>
    <div class="landing-menu">
        <div class="landing-menu_container">
            <div class="landing-menu_logo">
                <span class="landing-menu_logoSwift">{{ __("landing", "Swift") }}</span>
                <span class="landing-menu_logoCallback">{{ __("landing", "Callback") }}</span>
            </div>

            <div class="landing-menu_block">
                <span class="landing-menu_block-item">{{ __("landing", "TARIF") }}</span>
                <span class="landing-menu_block-item">{{ __("landing", "PRODUS") }}</span>
                <span class="landing-menu_block-item">{{ __("landing", "DEZVOLTATORI") }}</span>
                <span class="landing-menu_block-item">{{ __("landing", "SUPPORT") }}</span>
                <span class="landing-menu_block-item">{{ __("landing", "CONTACTE") }}</span>
            </div>

            <div class="button mod-blue">
                <span class="button_text">{{ __("landing", "button-text") }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "landing-menu.scss";
</style>

<script src="./landing-menu.js"></script>
