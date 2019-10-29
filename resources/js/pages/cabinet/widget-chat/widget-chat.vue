<template>
    <div class="cabinet_page widget-chat">

        <div class="widget_mobile-button button mod-blue">
            <svg class="widget_mobile-button_icon">
                <use xlink:href="#chat-settings"></use>
            </svg>
            <span class="widget_mobile-button_text">{{__('widget','Widget menu text 5')}}</span>
            <svg class="widget_mobile-button_icon">
                <use xlink:href="#arrow"></use>
            </svg>
        </div>

        <div class="widget_container">
            <widget-steps></widget-steps>

            <div class="widget-chat_content">
                <div class="widget-chat_block mod-border">
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

                                <div class="widget-soc_content"></div>
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget-chat_block">
                    <h2 class="cabinet-page_title">
                        <svg class="cabinet-page_title-icon">
                            <use xlink:href="#user"></use>
                        </svg>
                        <span>{{__('widget','Cabinet page title 12')}}</span>
                    </h2>

                    <div class="widget-chat_table">
                        <div class="widget-chat_table-head">
                            <div class="widget-table_head-item mod-name">
                                <span>{{__('widget','Widget chat head 1')}}</span>
                            </div>

                            <div class="widget-table_head-item mod-email">
                                <span>{{__('widget','Widget chat head 2')}}</span>
                            </div>

                            <div class="widget-table_head-item mod-phone">
                                <span>{{__('widget','Widget chat head 3')}}</span>
                            </div>

                            <div class="widget-table_head-item mod-id">
                                <span>{{__('widget','Widget chat head 4')}}</span>
                            </div>

                            <div class="widget-table_head-item mod-settings">
                                <span>{{__('widget','Widget chat head 5')}}</span>
                            </div>

                            <div class="widget-table_head-item mod-state">
                                <span>{{__('widget','Widget chat head 6')}}</span>
                            </div>

                            <div class="widget-table_head-item mod-date">
                                <span>{{__('widget','Widget chat head 7')}}</span>
                            </div>

                            <div class="widget-table_head-item mod-chat">
                                <span>{{__('widget','Widget chat head 8')}}</span>
                            </div>

                            <div class="widget-table_head-item mod-cross"></div>
                        </div>

                        <div class="widget-chat_table-content">
                            <div class="widget-chat_table-string">
                                <div class="widget-table_item mod-name">
                                    <span>{{__('widget','Widget name 1')}}</span>
                                    <img src="/img/Adrian_Ionascu.png" class="widget-chat_image">
                                </div>

                                <div class="widget-table_item mod-email">
                                    <span>ionascu@pi.md</span>
                                </div>

                                <div class="widget-table_item mod-phone">
                                    <span>{{__('widget','Widget contact phone 1')}}</span>
                                </div>

                                <div class="widget-table_item mod-id">
                                    <span>#21412</span>
                                </div>

                                <div class="widget-table_item mod-settings">
                                    <svg class="widget-table_icon-settings">
                                        <use xlink:href="#settings"></use>
                                    </svg>
                                </div>

                                <div class="widget-table_item mod-state">
                                    <div class="table_item-state offline">
                                        <span>{{__('widget','Widget chat state 1')}}</span>
                                    </div>
                                </div>

                                <div class="widget-table_item mod-date">
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

                                <div class="widget-table_item mod-cross">
                                    <svg class="widget-table_icon-cross">
                                        <use xlink:href="#cross"></use>
                                    </svg>
                                </div>
                            </div>
                            <div class="widget-chat_table-string">
                                <div class="widget-table_item mod-name">
                                    <span class="widget-table-text">{{__('widget','Widget name 2')}}</span>
                                    <img src="/img/Mark_Antonov.png" class="widget-chat_image">
                                </div>

                                <div class="widget-table_item mod-email">
                                    <span>markantonov@gmail.com</span>
                                </div>

                                <div class="widget-table_item mod-phone">
                                    <span>{{__('widget','Widget contact phone 1')}}</span>
                                </div>

                                <div class="widget-table_item mod-id">
                                    <span>#21412</span>
                                </div>

                                <div class="widget-table_item mod-settings">
                                    <svg class="widget-table_icon-settings">
                                        <use xlink:href="#settings"></use>
                                    </svg>
                                </div>

                                <div class="widget-table_item mod-state">
                                    <div class="table_item-state online">
                                        <span>{{__('widget','Widget chat state 2')}}</span>
                                    </div>
                                </div>

                                <div class="widget-table_item mod-date">
                                    <span>22/08/2019</span>
                                </div>

                                <div class="widget-table_item mod-chat">
                                    <div class="table_item-chat">
                                        <svg class="table_item-icon_chat">
                                            <use xlink:href="#link-symbol"></use>
                                        </svg>
                                        <span class="table_item-text_chat">{{__('widget','Widget chat open')}}</span>
                                    </div>
                                </div>

                                <div class="widget-table_item mod-cross">
                                    <svg class="widget-table_icon-cross">
                                        <use xlink:href="#cross"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget-chat_block">
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
                        <span>{{__('widget','Widget deactivate button 2')}}</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script src="./widget-chat.js"></script>

<style lang='scss'>
    @import './widget-chat.scss';
</style>
