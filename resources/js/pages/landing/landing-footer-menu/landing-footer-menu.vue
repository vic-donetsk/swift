<template>
    <div class="landing-footer-menu">
        <div class="footer-menu_content">
            <logo size="landing"></logo>

            <nav class="landing-menu_nav">
                <span class="landing-menu_item">{{ __("landing", "Tarif") }}</span>
                <span class="landing-menu_item">{{ __("landing", "Produs") }}</span>
                <span class="landing-menu_item">{{ __("landing", "Dezvolatori") }}</span>
                <span class="landing-menu_item">{{ __("landing", "Support") }}</span>
                <span class="landing-menu_item">{{ __("landing", "Contacte") }}</span>
            </nav>

            <div class="landing-menu_socials">
                <svg class="landing-footer_soc">
                    <use xlink:href="#facebook"></use>
                </svg>

                <svg class="landing-footer_soc">
                    <use xlink:href="#telegram"></use>
                </svg>

                <svg class="landing-footer_soc">
                    <use xlink:href="#vk"></use>
                </svg>

                <svg class="landing-footer_soc">
                    <use xlink:href="#whatsapp"></use>
                </svg>

                <svg class="landing-footer_soc">
                    <use xlink:href="#viber"></use>
                </svg>
            </div>

            <div class="landing-menu_icons">
                <svg class="landing-menu_icon">
                    <use xlink:href="#mail-envelope"></use>
                </svg>

                <svg class="landing-menu_icon">
                    <use xlink:href="#phone"></use>
                </svg>

                <div class="landing-footer_block">
                    <span class="landing-footer_text">RO</span>
                    <svg class="landing-footer_icon">
                        <use xlink:href="#arrow"></use>
                    </svg>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "landing-footer-menu.scss";
</style>

<script src="./landing-footer-menu.js"></script>
