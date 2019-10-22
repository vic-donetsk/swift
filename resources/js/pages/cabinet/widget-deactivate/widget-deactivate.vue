<template>
    <div class="cabinet_page widget-deactivate">
        <div class="widget_container">
            <widget-steps></widget-steps>

            <div class="widget-deactivate_content">
                <h2 class="cabinet-page_title">
                    <svg class="cabinet-page_title-icon">
                        <use xlink:href="#disable"></use>
                    </svg>
                    <span>{{__('widget','Cabinet page title 14')}}</span>
                </h2>

                <div class="widget-deactivate_site">
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("widget", "Widget input placeholder 6")'>

                    <div class="widget-button">
                        <span>{{__('widget','Widget deactivate button')}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./widget-deactivate.js"></script>

<style lang='scss'>
    @import './widget-deactivate.scss';
</style>
