<template>
    <div class="landing-footer">
        <div class="landing-footer_content">
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
            <div class="footer-copyright">
                <span>© 2019, SwiftCallBack</span>
            </div>

            <div class="landing-footer_item">
                <svg class="landing-footer_item-icon">
                    <use xlink:href="#phone"></use>
                </svg>
                <div class="landing-header_item-text">{{ __("landing", "Contact Phone") }}</div>
            </div>
            <div class="landing-footer_item mod_position">
                <svg class="landing-footer_item-icon">
                    <use xlink:href="#mail-envelope"></use>
                </svg>
                <div class="landing-footer_item-text">info@swiftcallback.md</div>
            </div>
            <div class="landing-footer_item">
                <div class="landing-footer_item-text">RO</div>
                <svg class="landing-footer_icon">
                    <use xlink:href="#arrow"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "landing-footer-bottom.scss";
</style>

<script src="./landing-footer-bottom.js"></script>
