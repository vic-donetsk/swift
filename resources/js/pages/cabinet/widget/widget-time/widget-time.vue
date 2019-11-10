<template>
    <div class="widget-time_content">
        <div class="widget-time-wrap">
            <div class="widget-time_block-left">
                <h2 class="cabinet-page_title">
                    <svg class="cabinet-page_title-icon">
                        <use xlink:href="#wall-clock"></use>
                    </svg>
                    <span>{{__('widget','Cabinet page title 9')}}</span>
                </h2>
                <p class="widget-time_subtitle">{{__('widget','Widget time subtitle')}}</p>
                <div class="widget-time_symbols">
                    <div class="widget-time_symbols-item">
                        <div class="widget-time_symbol work">

                        </div>
                        <span class="widget-time_symbol-text">{{__('widget','Widget time symbol work')}}</span>
                    </div>
                    <div class="widget-time_symbols-item">
                        <div class="widget-time_symbol out">

                        </div>
                        <span class="widget-time_symbol-text">{{__('widget','Widget time symbol out')}}</span>
                    </div>
                </div>

                <widget-schedule></widget-schedule>

                <div class="widget-button">
                    <span>{{__('widget','Widget save button')}}</span>
                </div>
            </div>

            <div class="widget-time_block-right">
                <h2 class="cabinet-page_title mod_margin">
                    <svg class="cabinet-page_title-icon">
                        <use xlink:href="#wall-clock"></use>
                    </svg>
                    <span>{{__('widget','Cabinet page title 10')}}</span>
                </h2>

                <div class="widget-time_modes">
                    <div class="widget-time_mode">
                        <el-checkbox v-model="checked1" class="widget-time_checkbox"></el-checkbox>
                        <ul>
                            <li>{{__('widget','Widget time mode 1.1')}}</li>
                            <li>{{__('widget','Widget time mode 1.2')}}</li>
                            <li>{{__('widget','Widget time mode 1.3')}}</li>
                        </ul>
                    </div>

                    <div class="widget-time_mode">
                        <el-checkbox v-model="checked2" class="widget-time_checkbox"></el-checkbox>

                    </div>

                    <div class="widget-time_mode">
                        <el-checkbox v-model="checked3" class="widget-time_checkbox"></el-checkbox>

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<script src="./widget-time.js"></script>

<style lang='scss'>
    @import './widget-time.scss';
</style>
