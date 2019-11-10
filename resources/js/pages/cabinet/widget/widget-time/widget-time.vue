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
                            <li v-html='__("widget", "Widget time mode 1.1",
                            {time1:"(08:30 - 17:00)",time2:"(12:30 - 13:15)"})'></li>
                            <li v-html='__("widget", "Widget time mode 1.2",
                            {time1:"(09:30 - 17:00)",time2:"(12:30 - 13:15)"})'></li>
                            <li v-html='__("widget", "Widget time mode 1.3")'></li>
                        </ul>
                    </div>

                    <div class="widget-time_mode">
                        <el-checkbox v-model="checked2" class="widget-time_checkbox"></el-checkbox>
                        <ul>
                            <li v-html='__("widget", "Widget time mode 2.1",
                            {time1:"(08:30 - 17:00)",time2:"(12:30 - 13:15)"})'></li>
                            <li v-html='__("widget", "Widget time mode 2.2")'></li>
                            <li v-html='__("widget", "Widget time mode 2.3")'></li>
                        </ul>
                    </div>

                    <div class="widget-time_mode">
                        <el-checkbox v-model="checked3" class="widget-time_checkbox"></el-checkbox>
                        <ul>
                            <li v-html='__("widget", "Widget time mode 3.1",
                            {time1:"(08:00 - 17:00)",time2:"(13:00 - 13:45)"})'></li>
                            <li v-html='__("widget", "Widget time mode 3.2")'></li>
                            <li v-html='__("widget", "Widget time mode 3.3")'></li>
                        </ul>
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
