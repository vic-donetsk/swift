<template>
    <div class="widget-schedule">
        <div class="widget-schedule_slider" v-for="(slider, key) in sliders">
            <h4 class="widget-schedule_slider-title">Luni - Vineri</h4>
            <div class="widget-schedule_results" v-if="slider.name ==='mondayFriday'">
                <div class="widget-schedule_result">
                    {{mondayFridayResult[0]}} - {{mondayFridayResult[3]}}
                </div>
                <div class="widget-schedule_result">
                    {{mondayFridayResult[1]}} - {{mondayFridayResult[2]}}
                </div>
            </div>
            <div class="widget-schedule_results" v-if="slider.name ==='saturday'">
                <div class="widget-schedule_result">
                    {{saturdayResult[0]}} - {{saturdayResult[3]}}
                </div>
                <div class="widget-schedule_result">
                    {{saturdayResult[1]}} - {{saturdayResult[2]}}
                </div>
            </div>
            <div :id="slider.id" class="noSlider"></div>
        </div>
    </div>
</template>

<script src="./widget-schedule.js"></script>

<style lang='scss'>
    @import './widget-schedule.scss';
</style>