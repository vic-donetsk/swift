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
                                    <p class="widget-soc_text">{{__('widget','Widget social text 1')}}</p>
                                </div>
                            </div>

                            <div class="widget-soc_message mod-messenger">
                                <span class="widget-soc_text-active">{{__('widget','Widget soc message 1')}}</span>
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
                                <span class="widget-soc_text-active">{{__('widget','Widget soc message 1')}}</span>
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
                                    <p class="widget-soc_text">{{__('widget','Widget social text 1')}}</p>
                                </div>
                            </div>

                            <div class="widget-soc_message mod-connect">
                                <span class="widget-soc_text-connect">{{__('widget','Widget soc message 2')}}</span>
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
                                <span class="widget-soc_text-active">{{__('widget','Widget soc message 1')}}</span>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./widget-chat.js"></script>

<style lang='scss'>
    @import './widget-chat.scss';
</style>
