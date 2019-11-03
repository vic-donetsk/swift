<template>
    <div class="landing-header" :class="{'open-menu':menu}">
        <div class="landing-header_content">
            <div class="hamburger hamburger--slider"
                 @click="openMenu"
                 :class="{'is-active':menu}">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>
            <!--            <svg class="landing-menu_icon">-->
            <!--                <use xlink:href="#cross"></use>-->
            <!--            </svg>-->

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
                <svg class="landing-header_icon">
                    <use xlink:href="#arrow"></use>
                </svg>
            </div>
        </div>
        <div class="landing-mobile_menu">
            <div class="landing-menu_content">
                <nav class="landing-menu_nav">
                    <div class="landing-menu_item">{{ __("landing", "Tarif") }}</div>
                    <div class="landing-menu_item">{{ __("landing", "Produs") }}</div>
                    <div class="landing-menu_item">{{ __("landing", "Dezvolatori") }}</div>
                    <div class="landing-menu_item">{{ __("landing", "Support") }}</div>
                    <div class="landing-menu_item">{{ __("landing", "Contacte") }}</div>
                </nav>

                <div class="landing-menu_icons">
                    <svg class="landing-menu_icon">
                        <use xlink:href="#mail-envelope"></use>
                    </svg>

                    <svg class="landing-menu_icon">
                        <use xlink:href="#phone"></use>
                    </svg>

                    <div class="landing-header_block">
                        <span class="landing-header_text">RO</span>
                        <svg class="landing-header_icon">
                            <use xlink:href="#arrow"></use>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
    @import "landing-header.scss";
</style>

<script src="./landing-header.js"></script>
