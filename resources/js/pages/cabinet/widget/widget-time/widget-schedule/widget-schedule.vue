<template>
    <div class="widget-schedule">
        <div class="widget-schedule_slider">
            <h4 class="widget-schedule_slider-title">Luni - Vineri</h4>
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
            <h4 class="widget-schedule_slider-title">Sâmbătă</h4>
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

        <div id="sunday" class="noSlider"></div>
    </div>
</template>

<script src="./widget-schedule.js"></script>

<style lang='scss'>
    @import './widget-schedule.scss';
</style>