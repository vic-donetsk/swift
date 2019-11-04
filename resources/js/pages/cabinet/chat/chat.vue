<template>
    <div class="cabinet_page chat">
        <div class="chat_handler">
            <div v-if="isDesktop || mobileMode === 0" class="chat_handler-header">
                <svg class="leftArrow">
                    <use xlink:href="#leftArrow"></use>
                </svg>
                <div class="chat_handler-header_manager">
                    <div class="manager_photo">
                        <img src="/img/person.png" alt="">
                    </div>
                    <div class="manager_info">
                        <div class="manager_info-name">Adrian Ktototam</div>
                        <div class="manager_info-email">test@rambler.ru</div>
                        <div class="manager_info-site" @click="changeSite">
                            swiftcalldown.ru
                            <svg class="arrow">
                                <use xlink:href="#arrow"></use>
                            </svg>
                        </div>
                    </div>
                </div>

                <svg class="bell" @click="bellEvent">
                    <use xlink:href="#bell"></use>
                </svg>

            </div>

            <div class="chat_handler-search">
                <svg class="search" @click="searchChatID(searchChatId)">
                    <use xlink:href="#search"></use>
                </svg>
                <input class="chat_handler-search_text" placeholder="Search ID">
            </div>

            <div class="chat_handler-topics">
                <div class="chat_handler-topic_wrapper mod_active">
                    <div class="chat_handler-topic">
                        <div class="topic_messenger" style="background: blue">
                            <svg class="messenger-icon">
                                <use xlink:href="#viber"></use>
                            </svg>
                        </div>
                        <div class="topic_data" @click="gotoChat(123)">
                            <div class="topic_data-nameID"><span>Victor Viktorov </span>(ID: 6661313)
                            </div>
                            <div class="topic_data-content">Hi,can I help you?</div>
                        </div>
                        <div class="topic_time">14:21</div>
                    </div>
                </div>

                <div class="chat_handler-topic_wrapper">
                    <div class="chat_handler-topic">
                        <div class="topic_messenger" style="background: blue">
                            <svg class="messenger-icon">
                                <use xlink:href="#viber"></use>
                            </svg>
                        </div>
                        <div class="topic_other">
                            <div class="topic_data" @click="gotoChat(123)">
                                <div class="topic_data-nameID"><span>Victor Viktorov </span>(ID: 6661313)
                                </div>
                                <div class="topic_data-content">Hi,can I help you?</div>
                            </div>
                            <div class="topic_time">14:21</div>
                        </div>
                    </div>
                </div>

                <div class="chat_handler-topic_wrapper">
                    <div class="chat_handler-topic">
                        <div class="topic_messenger" style="background: blue">
                            <svg class="messenger-icon">
                                <use xlink:href="#viber"></use>
                            </svg>
                        </div>
                        <div class="topic_data" @click="gotoChat(123)">
                            <div class="topic_data-nameID"><span>Victor Viktorov </span>(ID: 6661313)
                            </div>
                            <div class="topic_data-content">Hi,can I help you?</div>
                        </div>
                        <div class="topic_time">14:21</div>
                    </div>
                </div>

                <div class="chat_handler-topic_wrapper">
                    <div class="chat_handler-topic">
                        <div class="topic_messenger" style="background: blue">
                            <svg class="messenger-icon">
                                <use xlink:href="#viber"></use>
                            </svg>
                        </div>
                        <div class="topic_data" @click="gotoChat(123)">
                            <div class="topic_data-nameID"><span>Victor Viktorov </span>(ID: 6661313)
                            </div>
                            <div class="topic_data-content">Hi,can I help you?</div>
                        </div>
                        <div class="topic_time">14:21</div>
                    </div>
                </div>

                <div class="chat_handler-topic_wrapper">
                    <div class="chat_handler-topic">
                        <div class="topic_messenger" style="background: blue">
                            <svg class="messenger-icon">
                                <use xlink:href="#viber"></use>
                            </svg>
                        </div>
                        <div class="topic_data" @click="gotoChat(123)">
                            <div class="topic_data-nameID"><span>Victor Viktorov </span>(ID: 6661313)
                            </div>
                            <div class="topic_data-content">Hi,can I help you?</div>
                        </div>
                        <div class="topic_time">14:21</div>
                    </div>
                </div>

                <div class="chat_handler-topic_wrapper">
                    <div class="chat_handler-topic">
                        <div class="topic_messenger" style="background: blue">
                            <svg class="messenger-icon">
                                <use xlink:href="#viber"></use>
                            </svg>
                        </div>
                        <div class="topic_data" @click="gotoChat(123)">
                            <div class="topic_data-nameID"><span>Victor Viktorov </span>(ID: 6661313)
                            </div>
                            <div class="topic_data-content">Hi,can I help you?</div>
                        </div>
                        <div class="topic_time">14:21</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="chat_info">
            <div v-if="mobileMode === 2" class="chat_info-mobileLayout"></div>
            <div v-if="mobileMode === 2" class="mobileArrow">
                <svg class="mobileTitle_arrow-icon" @click="returnToChat">
                    <use xlink:href="#leftArrow"></use>
                </svg>
            </div>
            <div v-if="isDesktop || mobileMode === 2" class="chat_info-title">
                <div>{{__('chat', 'Client writes through')}}&nbsp;:&nbsp;<span>Telegram</span></div>
                <div>{{__('chat', 'Name')}}&nbsp;:&nbsp;<span>JasMine FuckWade</span></div>
                <div>{{__('chat', 'Phone')}}&nbsp;:&nbsp;<span>+373-789-666-13</span></div>

            </div>
            <div v-if="isDesktop || mobileMode === 1 || mobileMode === 2" class="chat_info-content">

                <div v-if="mobileMode === 1 || mobileMode === 2" class="chat-info_mobileTitle">
                    <div class="mobileTitle_arrow">
                        <svg class="mobileTitle_arrow-icon" @click="returnToTopics">
                            <use xlink:href="#leftArrow"></use>
                        </svg>
                    </div>
                    <div class="mobileTitle_data">
                        <div class="name">Jasmine Wada</div>
                        <div class="id">(ID: 325425)</div>
                        <div class="status">Online</div>
                    </div>
                    <div class="mobileTitle_info" @click="showDetails">
                        <img src="/img/icons/info.svg" class="mobileTitle_info-icon" alt="">
                    </div>
                </div>

                <div id="chat_scrolling" class="chat_info-dialog">

                    <div v-if="messages.length"
                         v-for="message in messages">
                        <div class="chat_info-message"
                             :class="message.isManager ? 'mod_manager-message' : 'mod_client-message'">
                            <div v-if="message.isManager" class="chat_info-avatar">
                                <img src="/img/person.png" alt="SWIFT">
                            </div>
                            <div class="chat_info-message-block"
                                 :class="message.isManager ? 'mod_manager' : 'mod_client'">
                                <div class="message-block_text">{{message.text}}</div>
                                <div class="message-block_time">{{ message.time}}</div>
                            </div>
                            <img src="/img/user.svg" class="chat_info-avatar mod_client" alt="SWIFT"
                                 v-if="!message.isManager">
                        </div>
                    </div>

                </div>
                <div class="chat_info-newMessage">
                    <input class="newMessage_text"
                           :placeholder="__('chat', 'Write a message ...')"
                           v-model="currentMessage"
                           @keyup="handleEnter">
                    <svg class="newMessage_send" @click="send">
                        <use xlink:href="#send"></use>
                    </svg>
                </div>

            </div>

        </div>

    </div>
</template>

<script src="./chat.js"></script>

<style lang='scss'>
    @import 'chat.scss';
</style>
