<template>
    <div class="landing-footer-top">
        <div class="footer-top_content">
            <logo size="landing"></logo>

            <nav class="landing-top_nav">
                <span class="landing-top_item">{{ __("landing", "Tarif") }}</span>
                <span class="landing-top_item">{{ __("landing", "Produs") }}</span>
                <span class="landing-top_item">{{ __("landing", "Dezvolatori") }}</span>
                <span class="landing-top_item">{{ __("landing", "Support") }}</span>
                <span class="landing-top_item">{{ __("landing", "Contacte") }}</span>
            </nav>

            <div class="landing-socials">
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

            <div class="landing-top_icons">
                <svg class="landing-top_icon">
                    <use xlink:href="#mail-envelope"></use>
                </svg>

                <svg class="landing-top_icon">
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
    @import "landing-footer-top.scss";
</style>

<script src="./landing-footer-top.js"></script>
