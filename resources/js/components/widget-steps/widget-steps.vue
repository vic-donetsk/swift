<template>
    <div class="widget-steps">
        <div class="widget-steps_item"
             v-for="(item, key) in widgetSteps"
             @click.stop="nextWidgetComponent(item.component)"
             :class="{mod_active:current === item.component}">
            <svg class="widget-steps_icon">
                <use :xlink:href="`#${item.icon}`"></use>
            </svg>
            <span class="widget-steps_text">{{__('widget',`Widget menu text ${key+1}`)}}</span>
        </div>
    </div>
</template>

<script src="./widget-steps.js"></script>

<style lang='scss'>
    @import './widget-steps.scss';
</style>