<template>
    <div class="widget-chat_content">
        <div class="widget-chat_block mod-social">
            <h2 class="cabinet-page_title">
                <svg class="cabinet-page_title-icon">
                    <use xlink:href="#chat-settings"></use>
                </svg>
                <span>{{__('widget','Cabinet page title 11')}}</span>
            </h2>

            <div class="widget-socials">
                <div class="widget-soc_item">
                    <div class="widget-soc">
                        <div class="widget-soc_head mod-chat">
                            <svg class="widget-soc_icon">
                                <use xlink:href="#chat-circle"></use>
                            </svg>
                            <span class="widget-soc_name">Chat</span>
                        </div>

                        <div class="widget-soc_content">
                            <div class="widget-checkboxes">
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="chatDesktop">
                                        {{__('widget','Widget chat checkbox 1')}}
                                    </el-checkbox>
                                </div>
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="chatMobile">
                                        {{__('widget','Widget chat checkbox 2')}}
                                    </el-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget-soc_item">
                    <div class="widget-soc mod_message">
                        <div class="widget-soc_head mod-messenger">
                            <svg class="widget-soc_icon">
                                <use xlink:href="#messenger"></use>
                            </svg>
                            <span class="widget-soc_name">Messenger</span>
                        </div>
                        <div class="widget-soc_content">
                            <p>{{__('widget','Widget social text 1')}}</p>
                        </div>
                    </div>

                    <div class="widget-soc_message mod-messenger">
                        <span>{{__('widget','Widget soc message 1')}}</span>
                    </div>
                </div>

                <div class="widget-soc_item">
                    <div class="widget-soc mod_message">
                        <div class="widget-soc_head mod-telegram">
                            <svg class="widget-soc_icon">
                                <use xlink:href="#telegram"></use>
                            </svg>
                            <span class="widget-soc_name">Telegram</span>
                        </div>

                        <div class="widget-soc_content">
                            <div class="widget-checkboxes">
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="telegramDesktop">
                                        {{__('widget','Widget chat checkbox 1')}}
                                    </el-checkbox>
                                </div>
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="telegramMobile">
                                        {{__('widget','Widget chat checkbox 2')}}
                                    </el-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="widget-soc_message mod-telegram">
                        <span>{{__('widget','Widget soc message 1')}}</span>
                    </div>
                </div>

                <div class="widget-soc_item">
                    <div class="widget-soc mod_message">
                        <div class="widget-soc_head mod-vk">
                            <svg class="widget-soc_icon">
                                <use xlink:href="#vk"></use>
                            </svg>
                            <span class="widget-soc_name">VK</span>
                        </div>

                        <div class="widget-soc_content">
                            <p>{{__('widget','Widget social text 1')}}</p>
                        </div>
                    </div>

                    <div class="widget-soc_message mod-connect">
                        <span>{{__('widget','Widget soc message 2')}}</span>
                    </div>
                </div>
                <div class="widget-soc_item">
                    <div class="widget-soc">
                        <div class="widget-soc_head mod-viber">
                            <svg class="widget-soc_icon">
                                <use xlink:href="#viber"></use>
                            </svg>
                            <span class="widget-soc_name">Viber</span>
                        </div>

                        <div class="widget-soc_content">
                            <div class="widget-checkboxes">
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="viberMobile">
                                        {{__('widget','Widget chat checkbox 2')}}
                                    </el-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="widget-soc_item">
                    <div class="widget-soc mod_message">
                        <div class="widget-soc_head mod-whatsapp">
                            <svg class="widget-soc_icon">
                                <use xlink:href="#whatsapp"></use>
                            </svg>
                            <span class="widget-soc_name">WhatsApp</span>
                        </div>

                        <div class="widget-soc_content">
                            <div class="widget-checkboxes">
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="whatsappDesktop">
                                        {{__('widget','Widget chat checkbox 1')}}
                                    </el-checkbox>
                                </div>
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="whatsappMobile">
                                        {{__('widget','Widget chat checkbox 2')}}
                                    </el-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="widget-soc_message mod-whatsapp">
                        <span>{{__('widget','Widget soc message 1')}}</span>
                    </div>
                </div>
                <div class="widget-soc_item">
                    <div class="widget-soc">
                        <div class="widget-soc_head mod-email">
                            <svg class="widget-soc_icon">
                                <use xlink:href="#email-circle"></use>
                            </svg>
                            <span class="widget-soc_name">Email</span>
                        </div>

                        <div class="widget-soc_content">
                            <div class="widget-checkboxes">
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="emailDesktop">
                                        {{__('widget','Widget chat checkbox 1')}}
                                    </el-checkbox>
                                </div>
                                <div class="widget-chat_checkbox">
                                    <el-checkbox v-model="emailMobile">
                                        {{__('widget','Widget chat checkbox 2')}}
                                    </el-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="widget-chat_block mod-table">
            <h2 class="cabinet-page_title">
                <svg class="cabinet-page_title-icon">
                    <use xlink:href="#user"></use>
                </svg>
                <span>{{__('widget','Cabinet page title 12')}}</span>
            </h2>

            <div class="widget-chat_table">
                <div class="widget-chat_table-head">

                    <div class="widget-table_head-item mod-add_btn">

                    </div>
                    <div class="widget-table_head-item mod-name">
                        <span>{{__('widget','Widget chat head 1')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-email mod-desktop">
                        <span>{{__('widget','Widget chat head 2')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-phone mod-desktop">
                        <span>{{__('widget','Widget chat head 3')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-id mod-desktop">
                        <span>{{__('widget','Widget chat head 4')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-settings">
                        <span>{{__('widget','Widget chat head 5')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-state mod-desktop">
                        <span>{{__('widget','Widget chat head 6')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-date mod-desktop">
                        <span>{{__('widget','Widget chat head 7')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-chat">
                        <span>{{__('widget','Widget chat head 8')}}</span>
                    </div>
                    <div class="widget-table_head-item mod-cross mod-desktop"></div>
                </div>

                <div class="widget-chat_table-content">
                    <div class="widget-chat_table-row" v-for="item in 2">
                        <div class="widget-chat_table-row-cells">
                            <div class="widget-table_item mod-add_btn" @click="toggleRowList(item)">
                                <svg v-if="item !== rowList" class="mod-add_btn-icon">
                                    <use xlink:href="#plus-add"></use>
                                </svg>

                                <svg v-else class="mod-add_btn-icon">
                                    <use xlink:href="#minus"></use>
                                </svg>
                            </div>
                            <div class="widget-table_item mod-name">
                                <span>{{__('widget','Widget name 1')}}</span>
                                <img src="/img/Adrian_Ionascu.png" class="widget-chat_image">
                            </div>
                            <div class="widget-table_item mod-email mod-desktop">
                                <span>ionascu@pi.md</span>
                            </div>
                            <div class="widget-table_item mod-phone mod-desktop">
                                <span>{{__('widget','Widget contact phone 1')}}</span>
                            </div>
                            <div class="widget-table_item mod-id mod-desktop">
                                <span>#21412</span>
                            </div>
                            <div class="widget-table_item mod-settings">
                                <svg class="widget-table_icon-settings" @click="openModal = true">
                                    <use xlink:href="#settings"></use>
                                </svg>
                            </div>
                            <div class="widget-table_item mod-state mod-desktop">
                                <div class="table_item-state offline">
                                    <span>{{__('widget','Widget chat state 1')}}</span>
                                </div>
                            </div>
                            <div class="widget-table_item mod-date mod-desktop">
                                <span>21/08/2019</span>
                            </div>
                            <div class="widget-table_item mod-chat">
                                <div class="table_item-chat">
                                    <svg class="table_item-icon_chat">
                                        <use xlink:href="#link-symbol"></use>
                                    </svg>
                                    <span class="table_item-text_chat">{{__('widget','Widget chat open')}}</span>
                                </div>
                            </div>
                            <div class="widget-table_item mod-cross mod-desktop">
                                <svg class="widget-table_icon-cross">
                                    <use xlink:href="#cross"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="widget-table_list" v-if="item === rowList">
                            <div class="widget-table_list-item">
                                <span class="widget-table_list-title">{{__('widget','Widget chat head 2')}}</span>
                                <span class="widget-table_list-val"> : ionascu@pi.md</span>
                            </div>
                            <div class="widget-table_list-item">
                                <span class="widget-table_list-title">{{__('widget','Widget chat head 3')}}</span>
                                <span class="widget-table_list-val">: +373 (78) 792000</span>
                            </div>
                            <div class="widget-table_list-item">
                                <span class="widget-table_list-title">{{__('widget','Widget chat head 4')}}</span>
                                <span class="widget-table_list-val"> : #21412</span>
                            </div>

                            <div class="widget-table_list-item">
                                <span class="widget-table_list-title">{{__('widget','Widget chat head 7')}}</span>
                                <span class="widget-table_list-val"> : 21/08/2019</span>
                            </div>

                            <div class="widget-table_list-item">
                                <span class="widget-table_list-title">{{__('widget','Widget chat head 6')}}</span>
                                <span class="widget-table_list-val offline"> : {{__('widget','Widget chat state 1')}}</span>
                            </div>
                            <div class="widget-table_list-item mod_center" @click="rowList = null">
                                <svg class="widget-table_list-icon">
                                    <use xlink:href="#cross"></use>
                                </svg>
                                <span class="widget-table_list-title">{{__('widget','Widget table list close btn')}}</span>
                            </div>
                        </div>
                        <!--                               todo: форма для редактирования  менеджера,
                                                                 которая открывается на колёсико. Эта форма и есть модальное окно -->
                    </div>
                </div>
            </div>

            <div class="widget-table_modal-wrap" v-if="openModal">
                <div class="widget-table_modal">
                    <svg class="widget-modal_cross-icon" @click="openModal = false">
                        <use xlink:href="#cross"></use>
                    </svg>
                    <div class="modal-profile">
                        <div class="modal-profile_user">
                            <svg class="modal-user_icon">
                                <use xlink:href="#user"></use>
                            </svg>
                        </div>
                        <span class="modal-profile_title mod-mobile">{{__('widget','Widget profile title 1')}}</span>
                        <span class="modal-profile_title">{{__('widget','Widget profile title 2')}}</span>
                        <div class="modal-profile_avatar">
                            <img src="/img/widget-profile.png" class="modal-profile_image">
                            <svg class="modal-profile_icon">
                                <use xlink:href="#download"></use>
                            </svg>
                        </div>

                    </div>
                    <div class="widget-chat_inputs">
                        <div class="widget-input_wrap">
                            <span class="widget-input_title">{{__('widget','Widget input title 1')}}</span>
                            <input type="text"
                                   class="widget-input"
                                   :placeholder='__("widget", "Widget input placeholder 2")'>
                        </div>

                        <div class="widget-input_wrap">
                            <span class="widget-input_title">{{__('widget','Widget input title 2')}}</span>
                            <input type="text"
                                   class="widget-input"
                                   :placeholder='__("widget", "Widget input placeholder 3")'>
                        </div>


                        <div class="widget-input_wrap">
                            <span class="widget-input_title">{{__('widget','Widget input title 3')}}</span>
                            <input type="text"
                                   class="widget-input"
                                   :placeholder='__("widget", "Widget contact phone 1")'>
                        </div>
                    </div>

                    <div class="widget-button" @click="openModal = false">
                        <span>{{__('widget','Widget save button')}}</span>
                    </div>
                </div>
                <div class="widget-table_modal-blackout" @click="openModal = false"></div>
            </div>
        </div>
        <div class="widget-chat_block mod-inputs">
            <h2 class="cabinet-page_title">
                <svg class="cabinet-page_title-icon">
                    <use xlink:href="#user"></use>
                </svg>
                <span>{{__('widget','Cabinet page title 13')}}</span>
            </h2>

            <div class="widget-chat_inputs">
                <div class="widget-input_wrap">
                    <span class="widget-input_title">{{__('widget','Widget input title 1')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("widget", "Widget input placeholder 2")'>
                </div>

                <div class="widget-input_wrap">
                    <span class="widget-input_title">{{__('widget','Widget input title 2')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("widget", "Widget input placeholder 3")'>
                </div>


                <div class="widget-input_wrap">
                    <span class="widget-input_title">{{__('widget','Widget input title 3')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("widget", "Widget contact phone 1")'>
                </div>
            </div>

            <div class="widget-button">
                <span>{{__('widget','Widget save button')}}</span>
            </div>

        </div>
    </div>
</template>

<script src="./widget-chat.js"></script>

<style lang='scss'>
    @import './widget-chat.scss';
</style>
