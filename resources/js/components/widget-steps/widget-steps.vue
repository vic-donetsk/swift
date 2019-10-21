<template>
    <div class="widget-steps">
        <div class="widget-steps_item">
            <svg class="widget-steps_icon">
                <use xlink:href="#download"></use>
            </svg>
            <span class="widget-steps_text">{{__('widget','Widget menu text 1')}}</span>
        </div>
        <div class="widget-steps_item">
            <svg class="widget-steps_icon">
                <use xlink:href="#phone"></use>
            </svg>
            <span class="widget-steps_text">{{__('widget','Widget menu text 2')}}</span>
        </div>
        <div class="widget-steps_item">
            <svg class="widget-steps_icon">
                <use xlink:href="#mail-envelope-open"></use>
            </svg>
            <span class="widget-steps_text">{{__('widget','Widget menu text 3')}}</span>
        </div>
        <div class="widget-steps_item">
            <svg class="widget-steps_icon">
                <use xlink:href="#wall-clock"></use>
            </svg>
            <span class="widget-steps_text">{{__('widget','Widget menu text 4')}}</span>
        </div>
        <div class="widget-steps_item">
            <svg class="widget-steps_icon">
                <use xlink:href="#chat-settings"></use>
            </svg>
            <span class="widget-steps_text">{{__('widget','Widget menu text 5')}}</span>
        </div>
        <div class="widget-steps_item">
            <svg class="widget-steps_icon">
                <use xlink:href="#disable"></use>
            </svg>
            <span class="widget-steps_text">{{__('widget','Widget menu text 6')}}</span>
        </div>
    </div>
</template>


<style lang='scss'>
    @import './widget-steps.scss';
</style>