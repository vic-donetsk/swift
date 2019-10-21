<template>
    <div class="cabinet_page widget-install">
        <div class="widget_container">
            <widget-steps></widget-steps>

            <div class="widget-install_content">
                <div class="widget-install_wrap">
                    <div class="widget-install_site">
                        <h2 class="cabinet-page_title">
                            <svg class="cabinet-page_title-icon">
                                <use xlink:href="#global"></use>
                            </svg>
                            <span>{{__('widget','Cabinet page title 2')}}</span>
                        </h2>

                        <div class="widget-site_script">
                            <p>dev.pi.md/CMS/?page=home</p>
                        </div>
                    </div>

                    <div class="widget-install_plugins">
                        <h2 class="cabinet-page_title mod_margin">
                            <svg class="cabinet-page_title-icon">
                                <use xlink:href="#puzzle-plugin"></use>
                            </svg>
                            <span>{{__('widget','Cabinet page title 3')}}</span>
                        </h2>

                        <div class="widget-logo_plugins">
                            <img src="/img/logo-for-plugins/joomla.svg" class="widget-plugin_image">
                            <img src="/img/logo-for-plugins/wordpress-icon.svg" class="widget-plugin_image">
                            <img src="/img/logo-for-plugins/wix.svg" class="widget-plugin_image">
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<script src="./widget-install.js"></script>

<style lang='scss'>
    @import './widget-install.scss';
</style>
