<template>
    <div class="landing-header">
        <div class="landing-header_content">
            <div class="header-hamburger">
                <div class="header-hamburger_item top"></div>
                <div class="header-hamburger_item middle"></div>
                <div class="header-hamburger_item bottom"></div>
            </div>

            <logo class="landingClass"></logo>
            <div class="landing-header_user">
                <svg class="header-user_icon">
                    <use xlink:href="#user"></use>
                </svg>
            </div>

            <div class="landing-header_item">
                <svg class="landing-header_item-icon">
                    <use xlink:href="#phone"></use>
                </svg>
                <div class="landing-header_item-text">{{ __("landing", "Contact Phone") }}</div>
            </div>
            <div class="landing-header_item mod_position">
                <svg class="landing-header_item-icon">
                    <use xlink:href="#mail-envelope"></use>
                </svg>
                <div class="landing-header_item-text">info@swiftcallback.md</div>
            </div>
            <div class="landing-header_item">
                <div class="landing-header_item-text">RO</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "landing-header.scss";
</style>

<script src="./landing-header.js"></script>
