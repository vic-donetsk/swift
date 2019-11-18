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
                                <div class="widget-schedule_result timepicker"
                                     @click.stop="timepickerToggle">
                                    {{mondayFridayResult[0]}} - {{mondayFridayResult[3]}}

                                    <div class="dropdown_double mod_hide">
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "From")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'mondayFridayResult',0,'mondayFriday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'mondayFridayResult',0,'mondayFriday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "To")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'mondayFridayResult',3,'mondayFriday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'mondayFridayResult',3,'mondayFriday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-schedule_result timepicker"
                                     @click.stop="timepickerToggle">
                                    {{mondayFridayResult[1]}} - {{mondayFridayResult[2]}}

                                    <div class="dropdown_double mod_hide">
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "From")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                        'mondayFridayResult',1,'mondayFriday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item" v-for="minute in 60"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'mondayFridayResult',1,'mondayFriday')">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "To")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                        'mondayFridayResult',2,'mondayFriday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item" v-for="minute in 60"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'mondayFridayResult',2,'mondayFriday')">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="monday-friday" class="noSlider" v-show="sliderShow1"></div>
                            <div class="widget-schedule_empty" v-show="!sliderShow1"></div>
                        </div>

                        <div class="widget-schedule_slider">
                            <h4 class="widget-schedule_slider-title">
                                {{__("widget", "Saturday")}}
                            </h4>
                            <div class="widget-schedule_results" v-show="sliderShow2">
                                <div class="widget-schedule_result timepicker"
                                     @click.stop="timepickerToggle">
                                    {{saturdayResult[0]}} - {{saturdayResult[3]}}

                                    <div class="dropdown_double mod_hide">
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "From")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'saturdayResult',0,'saturday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'saturdayResult',0,'saturday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "To")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'saturdayResult',3,'saturday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute- 1),
                                                        'saturdayResult',3,'saturday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-schedule_result timepicker"
                                     @click.stop="timepickerToggle">
                                    {{saturdayResult[1]}} - {{saturdayResult[2]}}

                                    <div class="dropdown_double mod_hide">
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "From")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'saturdayResult',1,'saturday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'saturdayResult',1,'saturday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "To")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'saturdayResult',2,'saturday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'saturdayResult',2,'saturday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="saturday" class="noSlider" v-show="sliderShow2"></div>
                            <div class="widget-schedule_empty" v-show="!sliderShow2"></div>
                        </div>

                        <div class="widget-schedule_slider">
                            <h4 class="widget-schedule_slider-title">
                                {{__("widget", "Sunday")}}
                            </h4>
                            <div class="widget-schedule_results" v-show="sliderShow3">
                                <div class="widget-schedule_result timepicker"
                                     @click.stop="timepickerToggle">
                                    {{sundayResult[0]}} - {{sundayResult[3]}}

                                    <div class="dropdown_double mod_hide">
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "From")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'sundayResult',0,'sunday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'sundayResult',0,'sunday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "To")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'sundayResult',3,'sunday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'sundayResult',3,'sunday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-schedule_result timepicker"
                                     @click.stop="timepickerToggle">
                                    {{sundayResult[1]}} - {{sundayResult[2]}}

                                    <div class="dropdown_double mod_hide">
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "From")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'sundayResult',1,'sunday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'sundayResult',1,'sunday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <span class="dropdown_title">{{__("widget", "To")}}</span>
                                            <div class="dropdown_container">
                                                <ul class="hours dropdown_list">
                                                    <template v-for="hour in 23">
                                                        <li class="dropdown_item"
                                                            @click.stop="changeHour(hmFormat(hour),
                                                            'sundayResult',2,'sunday')"
                                                            v-if="hour >= 7 && hour <= 17">
                                                            {{hmFormat(hour)}}
                                                        </li>
                                                    </template>
                                                </ul>
                                                <ul class="minutes dropdown_list">
                                                    <li class="dropdown_item"
                                                        @click.stop="changeMinute(hmFormat(minute - 1),
                                                        'sundayResult',2,'sunday')"
                                                        v-for="minute in 60">
                                                        {{hmFormat(minute - 1)}}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="noSlider" id="sunday" v-show="sliderShow3">
                            </div>
                            <div class="widget-schedule_empty" v-show="!sliderShow3">
                                <div class="widget-schedule_slider-add"
                                     @click="sundayShow">+
                                </div>
                            </div>
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
                    <el-radio-group v-model="radioChecked"
                                    @change="changeSchedule">
                        <div class="widget-time_mode">
                            <el-radio label="schedule-1">
                                <ul>
                                    <li>
                                        <span>
                                            {{__("widget", "Monday Friday")}} (08:30 - 17:00),
                                        </span>
                                        <span class="mod_color">
                                            {{__("widget", "Pause")}} (12:30 - 13:15)
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {{__("widget", "Saturday")}} (09:30 - 17:00),
                                        </span>
                                        <span class="mod_color">
                                            {{__("widget", "Pause")}} (12:30 - 13:15)
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {{__("widget", "Sunday")}} - {{__("widget", "Holiday")}}
                                        </span>
                                    </li>
                                </ul>
                            </el-radio>
                        </div>
                        <div class="widget-time_mode">
                            <el-radio label="schedule-2">
                                <ul>
                                    <li>
                                        <span>
                                            {{__("widget", "Monday Friday")}} (08:30 - 17:00),
                                        </span>
                                        <span class="mod_color">
                                            {{__("widget", "Pause")}} (12:30 - 13:15)
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {{__("widget", "Saturday")}} - {{__("widget", "Holiday")}}
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {{__("widget", "Sunday")}} - {{__("widget", "Holiday")}}
                                        </span>
                                    </li>
                                </ul>
                            </el-radio>
                        </div>
                        <div class="widget-time_mode">
                            <el-radio label="schedule-3">
                                <ul>
                                    <li>
                                        <span>
                                            {{__("widget", "Monday Friday")}} (08:00 - 17:00),
                                        </span>
                                        <span class="mod_color">
                                            {{__("widget", "Pause")}} (13:00 - 13:45)
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {{__("widget", "Saturday")}} - {{__("widget", "Holiday")}}
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {{__("widget", "Sunday")}} - {{__("widget", "Holiday")}}
                                        </span>
                                    </li>
                                </ul>
                            </el-radio>
                        </div>
                        <div class="widget-time_mode">
                            <el-radio label="schedule-4">
                                <ul>
                                    <li>
                                        <span>
                                            {{__("widget", "Monday Friday")}} (08:00 - 17:00),
                                        </span>
                                        <span class="mod_color">
                                            {{__("widget", "Pause")}} (13:00 - 13:45)
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {{__("widget", "Saturday")}} (09:30 - 17:00),
                                        </span>
                                        <span class="mod_color">
                                            {{__("widget", "Pause")}} (12:30 - 13:15)
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            {{__("widget", "Sunday")}} (09:30 - 17:00),
                                        </span>
                                        <span class="mod_color">
                                            {{__("widget", "Pause")}} (12:30 - 13:15)
                                        </span>
                                    </li>
                                </ul>
                            </el-radio>
                        </div>
                    </el-radio-group>
                </div>

            </div>

            <div class="timepicker-overlay" v-if="overlayShow"
                 @click="timepickerClose"></div>
        </div>
    </div>
</template>

<script src="./widget-time.js"></script>

<style lang='scss'>
    @import './widget-time.scss';
</style>
