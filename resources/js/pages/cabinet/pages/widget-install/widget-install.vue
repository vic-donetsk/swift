<template>
    <div class="cabinet widget">
        <div class="cabinet_page">
            <div class="widget_container">
                <div class="widget-menu">
                    <div class="widget-menu_item">
                        <svg class="widget-menu_icon">
                            <use xlink:href="#download"></use>
                        </svg>
                        <span class="widget-menu_text">{{__('widget','Widget menu text 1')}}</span>
                    </div>

                    <div class="widget-menu_item">
                        <div>
                            <svg class="widget-menu_icon">
                                <use xlink:href="#phone"></use>
                            </svg>
                            <span class="widget-menu_text">{{__('widget','Widget menu text 2')}}</span>
                        </div>

                    </div>

                    <div class="widget-menu_item">
                            <svg class="widget-menu_icon">
                                <use xlink:href="#mail-envelope-open"></use>
                            </svg>
                            <span class="widget-menu_text">{{__('widget','Widget menu text 3')}}</span>
                    </div>

                    <div class="widget-menu_item">
                            <svg class="widget-menu_icon">
                                <use xlink:href="#wall-clock"></use>
                            </svg>
                            <span class="widget-menu_text">{{__('widget','Widget menu text 4')}}</span>
                    </div>

                    <div class="widget-menu_item">
                            <svg class="widget-menu_icon">
                                <use xlink:href="#chat-settings"></use>
                            </svg>
                            <span class="widget-menu_text">{{__('widget','Widget menu text 5')}}</span>
                    </div>

                    <div class="widget-menu_item">
                            <svg class="widget-menu_icon">
                                <use xlink:href="#disable"></use>
                            </svg>
                            <span class="widget-menu_text">{{__('widget','Widget menu text 6')}}</span>
                    </div>
                </div>

                <div class="widget-install_content">
                    <h2 class="cabinet-page_title">
                        <svg class="cabinet-page_title-icon">
                            <use xlink:href="#global"></use>
                        </svg>
                        <span>{{__('widget','Cabinet page title 2')}}</span>
                    </h2>
                </div>


            </div>
        </div>
    </div>
</template>

<script src="./widget-install.js"></script>

<style lang='scss'>
    @import './widget-install.scss';
</style>
