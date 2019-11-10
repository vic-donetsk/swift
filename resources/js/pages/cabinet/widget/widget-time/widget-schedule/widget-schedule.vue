<template>
    <div class="widget-schedule">
        <div class="widget-schedule_sliders">
            <div class="widget-schedule_slider">
                <h4 class="widget-schedule_slider-title">
                    {{__("widget", "Monday Friday")}}
                </h4>
                <div class="widget-schedule_results">
                    <div class="widget-schedule_result">
                        {{mondayFridayResult[0]}} - {{mondayFridayResult[3]}}
                    </div>
                    <div class="widget-schedule_result">
                        {{mondayFridayResult[1]}} - {{mondayFridayResult[2]}}
                    </div>
                </div>
                <div id="monday-friday" class="noSlider"></div>
            </div>

            <div class="widget-schedule_slider">
                <h4 class="widget-schedule_slider-title">
                    {{__("widget", "Saturday")}}
                </h4>
                <div class="widget-schedule_results">
                    <div class="widget-schedule_result">
                        {{saturdayResult[0]}} - {{saturdayResult[3]}}
                    </div>
                    <div class="widget-schedule_result">
                        {{saturdayResult[1]}} - {{saturdayResult[2]}}
                    </div>
                </div>
                <div id="saturday" class="noSlider"></div>
            </div>

            <div class="widget-schedule_slider">
                <h4 class="widget-schedule_slider-title">
                    {{__("widget", "Sunday")}}
                </h4>
                <div class="noSlider" id="sunday">
                    <div class="noSlider-empty"></div>
                </div>
            </div>
        </div>
        <div class="widget-button">
            <span>{{__('widget','Widget save button')}}</span>
        </div>
    </div>
</template>

<script src="./widget-schedule.js"></script>

<style lang='scss'>
    @import './widget-schedule.scss';
</style>