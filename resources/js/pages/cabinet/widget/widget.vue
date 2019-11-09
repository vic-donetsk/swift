<template>
    <div class="cabinet_page" :class="currentPageClass">

        <div class="cabinet_mobile-button button mod-blue">
            <svg class="cabinet_mobile-button_icon">
                <use :xlink:href="`#${currentButtonIcon}`"></use>
            </svg>
            <span class="cabinet_mobile-button_text">
                {{__('widget',`Widget menu text ${currentPageIndex}`)}}
            </span>
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#arrow"></use>
            </svg>
        </div>

        <div class="widget_container">
            <widget-steps></widget-steps>
            <component :is="currentComponent"></component>
        </div>
    </div>
</template>

<script src="./widget.js"></script>

<style lang='scss'>
    @import './widget.scss';
</style>
