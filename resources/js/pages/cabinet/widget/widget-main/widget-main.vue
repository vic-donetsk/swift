<template>
    <div class="widget">
        <h2 class="cabinet-page_title">
            <svg class="cabinet-page_title-icon">
                <use xlink:href="#global"></use>
            </svg>
            <span>{{__('widget','Cabinet page title 1')}}</span>
        </h2>

        <widget-component></widget-component>

    </div>
</template>

<script src="./widget-main.js"></script>

<style lang='scss'>
    @import './widget-main.scss';
</style>