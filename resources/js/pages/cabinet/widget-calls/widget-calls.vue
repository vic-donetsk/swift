<template>
    <div class="cabinet_page widget-calls">

        <div class="cabinet_mobile-button button mod-blue">
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#phone"></use>
            </svg>
            <span class="cabinet_mobile-button_text">{{__('widget','Widget menu text 2')}}</span>
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#arrow"></use>
            </svg>
        </div>

        <div class="widget_container">
            <widget-steps></widget-steps>

            <div class="widget-calls_content">
                <div class="widget-calls-wrap">
                    <div class="widget-calls_block-left">
                        <h2 class="cabinet-page_title">
                            <svg class="cabinet-page_title-icon">
                                <use xlink:href="#phone"></use>
                            </svg>
                            <span>{{__('widget','Cabinet page title 4')}}</span>
                        </h2>

                        <p class="widget-calls_subtitle">{{__('widget','Widget calls subtitle')}}</p>

                        <div class="widget-calls-inputs">
                            <calls-item></calls-item>
                            <calls-item></calls-item>
                        </div>

                        <div class="widget-add_button">
                            <svg class="widget-add_icon">
                                <use xlink:href="#plus-add"></use>
                            </svg>
                            <span class="widget-add_text">{{__("widget", "Widget add button text 2")}}</span>
                        </div>
                        <div class="widget-button">
                            <span>{{__('widget','Widget save button')}}</span>
                        </div>
                    </div>

                    <div class="widget-calls_block-right">
                        <h2 class="cabinet-page_title mod_margin">
                            <svg class="cabinet-page_title-icon">
                                <use xlink:href="#recorder"></use>
                            </svg>
                            <span>{{__('widget','Cabinet page title 5')}}</span>
                            <svg class="cabinet-page_title-icon right-icon">
                                <use xlink:href="#info"></use>
                            </svg>
                        </h2>
                        <div class="widget-calls_switch">
                            <span>{{__('widget','Cabinet switch off')}}</span>
                            <el-switch v-model="record"></el-switch>
                            <span>{{__('widget','Cabinet switch on')}}</span>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script src="./widget-calls.js"></script>

<style lang='scss'>
    @import './widget-calls.scss';
</style>
