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
                        <div class="widget-block_elem-wrap mod_size"
                             v-html='__("widget", "Widget elem text 0")'>
                        </div>
                        <div class="widget-block_btn mod_play">
                            <div class="widget-sub_button">

                            </div>
                            <p>{{__("widget", "Widget btn play")}}</p>
                        </div>


                    </div>

                    <div class="widget-block_item">
                        <div class="widget-block_elem-wrap">
                            <div class="widget-block_elem left mod_color">
                                <svg class="widget-elem_icon">
                                    <use xlink:href="#phone-widget"></use>
                                </svg>
                                <span>{{__('widget','Widget elem text 1')}}</span>
                            </div>

                            <div class="widget-block_elem right">
                                <span>{{__('widget','Widget contact phone 1')}}</span>
                                <span>{{__('widget','Widget contact phone 2')}}</span>
                            </div>
                        </div>

                        <div class="widget-block_elem-wrap">
                            <div class="widget-block_elem left">
                                <svg class="widget-elem_icon">
                                    <use xlink:href="#wall-clock"></use>
                                </svg>
                                <span>{{__('widget','Widget elem text 2')}}</span>
                            </div>
                            <div class="widget-block_elem right">
                                <span>{{__('widget','Widget elem text 3')}}</span>
                                <span>{{__('widget','Widget elem text 4')}}</span>
                            </div>
                        </div>

                        <div class="widget-block_elem-wrap">
                            <div class="widget-block_elem left">
                                <svg class="widget-elem_icon">
                                    <use xlink:href="#cellphone-sms"></use>
                                </svg>
                                <span>{{__('widget','Widget elem text 5')}}</span>
                            </div>
                            <div class="widget-block_elem right">
                                <span>{{__('widget','Widget contact phone 1')}}</span>
                                <span>{{__('widget','Widget contact phone 2')}}</span>
                            </div>
                        </div>
                    </div>

                    <div class="widget-block_item">
                        <div class="widget-block_elem-wrap">
                            <div class="widget-block_elem left">
                                <svg class="widget-elem_icon">
                                    <use xlink:href="#chat-bubbles"></use>
                                </svg>
                                <span>{{__('widget','Widget elem text 6')}}</span>
                            </div>
                            <div class="widget-block_elem right">
                                <span>{{__('widget','Widget elem text 7')}}</span>
                            </div>
                        </div>

                        <div class="widget-block_elem-wrap">
                            <div class="widget-block_elem left">
                                <svg class="widget-elem_icon">
                                    <use xlink:href="#mail-envelope"></use>
                                </svg>
                                <span>{{__('widget','Widget elem text 8')}}</span>
                            </div>
                            <div class="widget-block_elem right">
                                <span>{{__('widget','Widget elem text 9')}}</span>
                            </div>
                        </div>

                        <div class="widget-block_elem-wrap">
                            <div class="widget-block_elem left">
                                <svg class="widget-elem_icon">
                                    <use xlink:href="#user"></use>
                                </svg>
                                <span>{{__('widget','Widget elem text 10')}}</span>
                            </div>
                            <div class="widget-block_elem right">
                                <span>{{__('widget','Widget elem text 11')}}</span>
                                <span>{{__('widget','Widget elem text 12')}}</span>
                            </div>
                        </div>

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
