<template>
    <div class="widget-block_wrap">
        <div class="widget-top_button">
            <span>dev.pi.md</span>
        </div>
        <div class="widget-block" v-if="widgetOpen">
            <div class="widget-block_top">
                <div class="widget-block_elem-wrap mod_size">
                    <p>dev.pi.md/CMS/?page=home</p>
                </div>
                <div class="widget-block_btn mod_play" v-if="play && installed">
                    <div class="widget-sub_button" @click="play = false">
                    </div>
                    <p>{{__("widget", "Widget btn play")}}</p>
                </div>

                <div class="widget-block_btn mod-not_install" v-if="!installed">
                    <p>{{__("widget", "Widget btn not install")}}</p>
                </div>

                <div class="widget-block_btn mod_pause" v-if="!play && installed">
                    <div class="widget-sub_button" @click="play = true">
                        <svg class="widget-button_icon">
                            <use xlink:href="#play"></use>
                        </svg>
                    </div>
                    <p>{{__("widget", "Widget btn pause")}}</p>
                </div>
            </div>
            <div class="widget-block_list">
                <div class="widget-block_elem-wrap" @click.stop="moveStep(1)">
                    <div class="widget-block_elem left mod_color">
                        <div class="mobile-svg_wrap">
                            <svg class="widget-elem_icon">
                                <use xlink:href="#phone-widget"></use>
                            </svg>
                        </div>

                        <p class="widget-elem_text"
                           @click="openInfo('widgetElemBottom1')">
                            {{__('widget','Widget elem text 1')}}</p>
                    </div>

                    <div class="widget-block_elem right" v-if="widgetElemBottom1">
                        <span>{{__('widget','Widget contact phone 1')}}</span>
                        <span>{{__('widget','Widget contact phone 2')}}</span>
                    </div>
                </div>
                <div class="widget-block_elem-wrap" @click.stop="moveStep(3)">
                    <div class="widget-block_elem left">
                        <div class="mobile-svg_wrap">
                            <svg class="widget-elem_icon">
                                <use xlink:href="#wall-clock"></use>
                            </svg>
                        </div>
                        <p class="widget-elem_text"
                           @click="openInfo('widgetElemBottom2')">
                            {{__('widget','Widget elem text 2')}}</p>
                    </div>
                    <div class="widget-block_elem right" v-if="widgetElemBottom2">
                        <p>{{__('widget','Widget elem text 3')}}</p>
                        <p>{{__('widget','Widget elem text 4')}}</p>
                    </div>
                </div>
                <div class="widget-block_elem-wrap" @click.stop="moveStep(2)">
                    <div class="widget-block_elem left">
                        <div class="mobile-svg_wrap">
                            <svg class="widget-elem_icon">
                                <use xlink:href="#cellphone-sms"></use>
                            </svg>
                        </div>
                        <p class="widget-elem_text" @click="openInfo('widgetElemBottom3')">
                            {{__('widget','Widget elem text 5')}}</p>
                    </div>
                    <div class="widget-block_elem right" v-if="widgetElemBottom3">
                        <span>{{__('widget','Widget contact phone 1')}}</span>
                        <span>{{__('widget','Widget contact phone 2')}}</span>
                    </div>
                </div>
                <div class="widget-block_elem-wrap" @click.stop="moveStep(4)">
                    <div class="widget-block_elem left">
                        <div class="mobile-svg_wrap">
                            <svg class="widget-elem_icon">
                                <use xlink:href="#chat-bubbles"></use>
                            </svg>
                        </div>
                        <p class="widget-elem_text" @click="openInfo('widgetElemBottom4')">
                            {{__('widget','Widget elem text 6')}}</p>
                    </div>
                    <div class="widget-block_elem right" v-if="widgetElemBottom4">
                        <p>{{__('widget','Widget elem text 7')}}</p>
                    </div>
                </div>
                <div class="widget-block_elem-wrap" @click.stop="moveStep(4)">
                    <div class="widget-block_elem left">
                        <div class="mobile-svg_wrap">
                            <svg class="widget-elem_icon">
                                <use xlink:href="#mail-envelope"></use>
                            </svg>
                        </div>
                        <p class="widget-elem_text" @click="openInfo('widgetElemBottom5')">
                            {{__('widget','Widget elem text 8')}}</p>
                    </div>
                    <div class="widget-block_elem right" v-if="widgetElemBottom5"
                         v-html='__("widget", "Widget elem text 9")'>
                    </div>
                </div>
                <div class="widget-block_elem-wrap" @click.stop="moveStep(4)">
                    <div class="widget-block_elem left">
                        <div class="mobile-svg_wrap">
                            <svg class="widget-elem_icon">
                                <use xlink:href="#user"></use>
                            </svg>
                        </div>

                        <p class="widget-elem_text" @click="openInfo('widgetElemBottom6')">
                            {{__('widget','Widget elem text 10')}}</p>
                    </div>
                    <div class="widget-block_elem right" v-if="widgetElemBottom6">
                        <p>{{__('widget','Widget elem text 11')}}</p>
                        <p>{{__('widget','Widget elem text 12')}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="widget-arrow_button" @click.stop="widgetOpen = !widgetOpen"
             :class="{mod_rotate:widgetOpen, mod_close:!widgetOpen}">
            <svg class="widget-arrow_icon">
                <use xlink:href="#arrow"></use>
            </svg>
        </div>
        <div class="widget-add_button" @click="nextWidgetComponent">
            <svg class="widget-add_icon">
                <use xlink:href="#plus-add"></use>
            </svg>

            <span class="widget-add_text">{{__("widget", "Widget add button text")}}</span>
        </div>
    </div>
</template>

<script src="./widget-component.js"></script>