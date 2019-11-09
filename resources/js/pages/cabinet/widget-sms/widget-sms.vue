<template>
    <div class="widget-sms_content">
        <div class="widget-sms_informative">
            <h2 class="cabinet-page_title">
                <svg class="cabinet-page_title-icon">
                    <use xlink:href="#mail-envelope-open"></use>
                </svg>
                <span>{{__('widget','Cabinet page title 6')}}</span>
            </h2>

            <p class="widget-sms_subtitle">{{__('widget','Widget sms subtitle 1')}}</p>

            <div class="widget-sms-input">
                <flag-phone @updatePhone="updatePhone" class="widget-calls_flag"></flag-phone>
            </div>

            <div class="widget-add_button">
                <svg class="widget-add_icon">
                    <use xlink:href="#plus-add"></use>
                </svg>
                <span class="widget-add_text">{{__("widget", "Widget add button text 2")}}</span>
            </div>
            <div class="widget-button">
                <span>{{__('widget','Widget save button')}}</span>
            </div>
        </div>

        <div class="widget-sms_sender">
            <h2 class="cabinet-page_title mod_sender">
                <svg class="cabinet-page_title-icon">
                    <use xlink:href="#mail-envelope-open"></use>
                </svg>
                <span>{{__('widget','Cabinet page title 7')}}</span>
            </h2>
            <p class="widget-sms_subtitle mod_mobile">{{__('widget','Widget sms subtitle 2')}}</p>
            <div class="widget-switch">
                <span>{{__('widget','Cabinet switch off')}}</span>
                <el-switch v-model="record"></el-switch>
                <span>{{__('widget','Cabinet switch on')}}</span>
            </div>
            <p class="widget-sms_subtitle">{{__('widget','Widget sms subtitle 2')}}</p>

            <div class="widget-sender_input">
                <span class="widget-sms_input_title">{{__('widget','Widget sms input title')}}</span>
                <input type="text"
                       class="widget-input"
                       :placeholder='__("widget", "Widget sender input placeholder")'>
            </div>
            <p class="widget-sms_subtitle mod_display">{{__('widget','Widget sms subtitle 3')}}</p>
            <div class="widget-button">
                <span>{{__('widget','Widget save button')}}</span>
            </div>
        </div>

        <div class="widget-sms_schemes">
            <h2 class="cabinet-page_title mod_schemes">
                <svg class="cabinet-page_title-icon">
                    <use xlink:href="#mail-envelope-open"></use>
                </svg>
                <span>{{__('widget','Cabinet page title 8')}}</span>
            </h2>

            <div class="widget-sms_table-mobile" v-for="item in 1">
                <div class="widget-sms_table-head">
                    <div class="widget-table_head-item mod-message">
                        <span>{{__('widget','Widget sms table message 1')}}</span>
                    </div>
                    <div class="widget-sms_table-btn" @click="toggleTableContent1(item)">
                        <div v-if="item !== tableContent1" class="sms-btn_plus"></div>
                        <div v-else class="sms-btn_minus"></div>
                    </div>
                </div>

                <div class="widget-sms_table-content" v-if="item === tableContent1">
                    <div class="widget-sms_table-row">
                        <div class="widget-sms_table-row-cells">
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget schemes head 2')}}</span>
                            </div>
                            <div class="widget-table_item mod-context">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 4")'></div>
                                </div>
                            </div>
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget schemes head 3')}}</span>
                            </div>
                            <div class="widget-table_item mod-description">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 7")'></div>
                                </div>
                            </div>
                            <div class="widget-switch">
                                <span>{{__('widget','Cabinet switch off')}}</span>
                                <el-switch v-model="row1"></el-switch>
                                <span>{{__('widget','Cabinet switch on')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget-sms_table-mobile" v-for="item in 1">
                <div class="widget-sms_table-head">
                    <div class="widget-table_head-item mod-message">
                        <span>{{__('widget','Widget sms table message 2')}}</span>
                    </div>
                    <div class="widget-sms_table-btn" @click="toggleTableContent2(item)">
                        <div v-if="item !== tableContent2" class="sms-btn_plus"></div>
                        <div v-else class="sms-btn_minus"></div>
                    </div>
                </div>

                <div class="widget-sms_table-content"  v-if="item === tableContent2">
                    <div class="widget-sms_table-row">
                        <div class="widget-sms_table-row-cells">
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget schemes head 2')}}</span>
                            </div>
                            <div class="widget-table_item mod-context">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 5")'></div>
                                </div>
                            </div>
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget schemes head 3')}}</span>
                            </div>
                            <div class="widget-table_item mod-description">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 8")'></div>
                                </div>
                            </div>
                            <div class="widget-switch">
                                <span>{{__('widget','Cabinet switch off')}}</span>
                                <el-switch v-model="row2"></el-switch>
                                <span>{{__('widget','Cabinet switch on')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widget-sms_table-mobile" v-for="item in 1">
                <div class="widget-sms_table-head">
                    <div class="widget-table_head-item mod-message">
                        <span>{{__('widget','Widget sms table message 3')}}</span>
                    </div>
                    <div class="widget-sms_table-btn" @click="toggleTableContent3(item)">
                        <div v-if="item !== tableContent3" class="sms-btn_plus"></div>
                        <div v-else class="sms-btn_minus"></div>
                    </div>
                </div>

                <div class="widget-sms_table-content" v-if="item === tableContent3">
                    <div class="widget-sms_table-row">
                        <div class="widget-sms_table-row-cells">
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget schemes head 2')}}</span>
                            </div>
                            <div class="widget-table_item mod-context">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 6")'></div>
                                </div>
                            </div>
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget schemes head 3')}}</span>
                            </div>
                            <div class="widget-table_item mod-description">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 9")'></div>
                                </div>
                            </div>
                            <div class="widget-switch">
                                <span>{{__('widget','Cabinet switch off')}}</span>
                                <el-switch v-model="row3"></el-switch>
                                <span>{{__('widget','Cabinet switch on')}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="widget-sms_table">
                <div class="widget-sms_table-head">
                    <div class="widget-table_head-item mod-message">
                        <span>{{__('widget','Widget schemes head 1')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-context">
                        <span>{{__('widget','Widget schemes head 2')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-description">
                        <span>{{__('widget','Widget schemes head 3')}}</span>
                    </div>

                    <div class="widget-table_head-item mod_switch">
                        <span>{{__('widget','Widget schemes head 4')}}</span>
                    </div>
                </div>

                <div class="widget-sms_table-content">
                    <div class="widget-sms_table-row">
                        <div class="widget-sms_table-row-cells">
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget sms table message 1')}}</span>
                            </div>
                            <div class="widget-table_item mod-context">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 4")'></div>
                                </div>
                            </div>
                            <div class="widget-table_item mod-description">
                                <div class="widget-table_item-text"
                                     v-html='__("widget", "Widget sms table message 7")'></div>
                            </div>
                            <div class="widget-table_item mod_switch">
                                <el-switch v-model="row1"></el-switch>
                            </div>
                        </div>
                    </div>
                    <div class="widget-sms_table-row">
                        <div class="widget-sms_table-row-cells">
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget sms table message 2')}}</span>
                            </div>
                            <div class="widget-table_item mod-context">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 5")'></div>
                                </div>
                            </div>
                            <div class="widget-table_item mod-description">
                                <div class="widget-table_item-text"
                                     v-html='__("widget", "Widget sms table message 8")'></div>
                            </div>
                            <div class="widget-table_item mod_switch">
                                <el-switch v-model="row2"></el-switch>
                            </div>
                        </div>
                    </div>
                    <div class="widget-sms_table-row">
                        <div class="widget-sms_table-row-cells">
                            <div class="widget-table_item mod-message">
                                <span>{{__('widget','Widget sms table message 3')}}</span>
                            </div>
                            <div class="widget-table_item mod-context">
                                <div class="mod-context_wrap">
                                    <div class="widget-table_item-text"
                                         v-html='__("widget", "Widget sms table message 6")'></div>
                                </div>
                            </div>
                            <div class="widget-table_item mod-description">
                                <div class="widget-table_item-text"
                                     v-html='__("widget", "Widget sms table message 9")'></div>
                            </div>
                            <div class="widget-table_item mod_switch">
                                <el-switch v-model="row3"></el-switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script src="./widget-sms.js"></script>

<style lang='scss'>
    @import './widget-sms.scss';
</style>
