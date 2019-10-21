<template>
    <div class="cabinet_page widget-install">
        <div class="widget_container">
            <widget-steps></widget-steps>

            <div class="widget-install_content">
                <div class="widget-install_site">
                    <h2 class="cabinet-page_title">
                        <svg class="cabinet-page_title-icon">
                            <use xlink:href="#global"></use>
                        </svg>
                        <span>{{__('widget','Cabinet page title 2')}}</span>
                    </h2>
                </div>

                <div class="widget-install_plugins">
                    <h2 class="cabinet-page_title">
                        <svg class="cabinet-page_title-icon">
                            <use xlink:href="#global"></use>
                        </svg>
                        <span>{{__('widget','Cabinet page title 3')}}</span>
                    </h2>
                </div>


            </div>
        </div>
    </div>
</template>

<script src="./widget-install.js"></script>

<style lang='scss'>
    @import './widget-install.scss';
</style>
