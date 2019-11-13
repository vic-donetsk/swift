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

                <div class="widget-schedule">
                    <div class="widget-schedule_sliders">
                        <div class="widget-schedule_slider">
                            <h4 class="widget-schedule_slider-title">
                                {{__("widget", "Monday Friday")}}
                            </h4>
                            <div class="widget-schedule_results" v-show="sliderShow1">
                                <div class="widget-schedule_result">
                                    {{mondayFridayResult[0]}} - {{mondayFridayResult[3]}}
                                </div>
                                <div class="widget-schedule_result">
                                    {{mondayFridayResult[1]}} - {{mondayFridayResult[2]}}
                                </div>
                            </div>
                            <div id="monday-friday" class="noSlider" v-show="sliderShow1"></div>
                            <div class="noSlider-empty" v-show="!sliderShow1"></div>
                        </div>

                        <div class="widget-schedule_slider">
                            <h4 class="widget-schedule_slider-title">
                                {{__("widget", "Saturday")}}
                            </h4>
                            <div class="widget-schedule_results" v-show="sliderShow2">
                                <div class="widget-schedule_result">
                                    {{saturdayResult[0]}} - {{saturdayResult[3]}}
                                </div>
                                <div class="widget-schedule_result">
                                    {{saturdayResult[1]}} - {{saturdayResult[2]}}
                                </div>
                            </div>
                            <div id="saturday" class="noSlider" v-show="sliderShow2"></div>
                            <div class="noSlider-empty" v-show="!sliderShow2"></div>
                        </div>

                        <div class="widget-schedule_slider">
                            <h4 class="widget-schedule_slider-title">
                                {{__("widget", "Sunday")}}
                            </h4>
                            <div class="widget-schedule_results" v-show="sliderShow3">
                                <div class="widget-schedule_result">
                                    {{sundayResult[0]}} - {{sundayResult[3]}}
                                </div>
                                <div class="widget-schedule_result">
                                    {{sundayResult[1]}} - {{sundayResult[2]}}
                                </div>
                            </div>
                            <div class="noSlider" id="sunday" v-show="sliderShow3">
                            </div>
                            <div class="noSlider-empty" v-show="!sliderShow3"></div>
                        </div>
                    </div>
                    <div class="widget-button">
                        <span>{{__('widget','Widget save button')}}</span>
                    </div>
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
                    <el-radio-group v-model="radioChecked" @change="changeSchedule">
                        <div class="widget-time_mode">
                            <el-radio label="schedule-1">
                                <ul>
                                    <li v-html='__("widget", "Widget time mode 1.1",
                            {time1:"(08:30 - 17:00)",time2:"(12:30 - 13:15)"})'></li>
                                    <li v-html='__("widget", "Widget time mode 1.2",
                            {time1:"(09:30 - 17:00)",time2:"(12:30 - 13:15)"})'></li>
                                    <li v-html='__("widget", "Widget time mode 1.3")'></li>
                                </ul>
                            </el-radio>
                        </div>

                        <div class="widget-time_mode">
                            <el-radio label="schedule-2">
                                <ul>
                                    <li v-html='__("widget", "Widget time mode 2.1",
                            {time1:"(08:30 - 17:00)",time2:"(12:30 - 13:15)"})'></li>
                                    <li v-html='__("widget", "Widget time mode 2.2")'></li>
                                    <li v-html='__("widget", "Widget time mode 2.3")'></li>
                                </ul>
                            </el-radio>
                        </div>

                        <div class="widget-time_mode">
                            <el-radio label="schedule-3">
                                <ul>
                                    <li v-html='__("widget", "Widget time mode 3.1",
                            {time1:"(08:00 - 17:00)",time2:"(13:00 - 13:45)"})'></li>
                                    <li v-html='__("widget", "Widget time mode 3.2")'></li>
                                    <li v-html='__("widget", "Widget time mode 3.3")'></li>
                                </ul>
                            </el-radio>
                        </div>
                    </el-radio-group>
                </div>

            </div>
        </div>

    </div>
</template>

<script src="./widget-time.js"></script>

<style lang='scss'>
    @import './widget-time.scss';
</style>
