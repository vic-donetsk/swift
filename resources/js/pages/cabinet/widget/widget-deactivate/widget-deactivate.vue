<template>
    <div class="widget-deactivate_content">
        <h2 class="cabinet-page_title">
            <svg class="cabinet-page_title-icon">
                <use xlink:href="#disable"></use>
            </svg>
            <span>{{__('widget','Cabinet page title 14')}}</span>
        </h2>

        <div class="widget-deactivate_site">
            <div class="widget-site_control">
                <input type="text"
                       class="widget-input"
                       :placeholder='__("widget", "Widget input placeholder 4")'>

                <div class="widget-site_link mod-mobile">
                    <span>(e.x. swiftcallback.md/contacts)</span>
                </div>

                <div class="widget-button">
                    <span>{{__('widget','Widget deactivate button')}}</span>
                </div>
            </div>

            <div class="widget-site_link">
                <span>(e.x. swiftcallback.md/contacts)</span>
            </div>
        </div>

        <div class="widget-deactivate_table">
            <div class="widget_table-block mod_head">
                <div class="table-block_item mod_left">
                    <span>{{__('widget','Widget deactivate table title 1')}}</span>
                </div>
                <div class="table-block_item mod_middle">
                    <span>{{__('widget','Widget deactivate table title 2')}}</span>
                </div>

                <div class="table-block_item mod_right"></div>
            </div>

            <div class="widget_table-block mod_content">
                <div class="table-block_item mod_left">
                    <span>swiftcallback.md/contacts</span>
                </div>
                <div class="table-block_item mod_middle">
                    <span>12/08/2019, 12:43</span>
                </div>

                <div class="table-content_cross mod_right">
                    <svg class="table-content_icon">
                        <use xlink:href="#cross"></use>
                    </svg>
                </div>
            </div>
        </div>

        <div class="widget-button mod_size">
            <span>{{__('widget','Widget save button')}}</span>
        </div>

    </div>
</template>

<script src="./widget-deactivate.js"></script>

<style lang='scss'>
    @import './widget-deactivate.scss';
</style>
