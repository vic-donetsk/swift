<template>
    <div class="landing-menu">
        <div class="landing-menu_container">
            <logo size="landing"></logo>

            <nav class="landing-menu_nav">
                    <span class="landing-menu_item">{{ __("landing", "Tarif") }}</span>
                    <span class="landing-menu_item">{{ __("landing", "Produs") }}</span>
                    <span class="landing-menu_item">{{ __("landing", "Dezvolatori") }}</span>
                    <span class="landing-menu_item">{{ __("landing", "Support") }}</span>
                    <span class="landing-menu_item">{{ __("landing", "Contacte") }}</span>
            </nav>

            <div class="button mod_landing mod-blue">
                <span class="button_text">{{ __("landing", "Menu button") }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "landing-menu.scss";
</style>

<script src="./landing-menu.js"></script>
