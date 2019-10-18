<template>
    <div class="cabinet widget">
        <header>
            <cabinet-header></cabinet-header>
        </header>
        <cabinet-sidebar></cabinet-sidebar>
        <div class="cabinet_page">
            <div class="widget_container">
                <h2 class="cabinet-page_title">
                    <svg class="cabinet-page_title-icon">
                        <use xlink:href="#global"></use>
                    </svg>
                    <span>{{__('widget','Cabinet page title')}}</span>
                </h2>

                <div class="widget-block">
                    <div class="widget-block_item">
                        <div class="widget-block_elem mod_size"></div>
                        <div class="widget-block_btn mod_play"></div>
                    </div>

                    <div class="widget-block_item">
                        <div class="widget-block_elem"></div>
                        <div class="widget-block_elem"></div>
                        <div class="widget-block_elem"></div>
                    </div>

                    <div class="widget-block_item">
                        <div class="widget-block_elem"></div>
                        <div class="widget-block_elem"></div>
                        <div class="widget-block_elem"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./widget.js"></script>

<style lang='scss'>
    @import './widget.scss';
</style>
