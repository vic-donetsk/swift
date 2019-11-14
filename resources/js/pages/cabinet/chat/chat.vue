<template>
    <div class="cabinet_page chat">
        <div class="chat_handler">
            <div v-if="isDesktop || mobileMode === 0" class="chat_handler-header">
                <div class="chat_handler-header_arrow" @click="gotoMenu">
                    <svg class="leftArrow">
                        <use xlink:href="#leftArrow"></use>
                    </svg>
                </div>
                <div class="chat_handler-header_manager">
                    <div class="manager_photo">
                        <img src="/img/person.png" alt="">
                    </div>
                    <div class="manager_info">
                        <div class="manager_info-name">{{currentManager.name}}</div>
                        <div class="manager_info-email">{{currentManager.email}}</div>
                        <div class="manager_info-site" @click="changeSite">
                            {{currentManager.sites[0]}}
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
                <svg class="search" @click="searchChatID">
                    <use xlink:href="#search"></use>
                </svg>
                <input class="chat_handler-search_text"
                       placeholder="Search ID"
                       v-model="searchID"
                       @keyup="handleSearchEnter"
                >
            </div>

            <div class="chat_handler-topics">
                <div v-for="oneChat in chatDatabase" class="chat_handler-topic_wrapper" :id="'id' + oneChat.chatID">
                    <div class="chat_handler-topic">
                        <div class="topic_messenger" :style="'background:' + chatsColors[oneChat.source]">
                            <svg class="messenger-icon">
                                <use :xlink:href="'#' + oneChat.source.toLowerCase()"></use>
                            </svg>
                        </div>
                        <div class="topic_other">
                            <div class="topic_data" @click="gotoChat(oneChat)">
                                <div class="topic_data-nameID"><span>{{oneChat.clientName}} </span>(ID:{{oneChat.chatID}})
                                </div>
                                <div class="topic_data-content">{{oneChat.messages[oneChat.messages.length-1].text}}
                                </div>
                            </div>
                            <div class="topic_time">{{oneChat.messages[oneChat.messages.length-1].time}}</div>
                        </div>
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
                <div class="chat_info-title_item">{{__('chat', 'Client writes through')}}&nbsp;:&nbsp;
                    <span>{{activeElementData.source.charAt(0).toUpperCase() + activeElementData.source.slice(1)}}
                    </span>
                </div>
                <div class="chat_info-title_item">{{__('chat', 'Name')}}&nbsp;:&nbsp;<span>{{activeElementData.clientName}}</span>
                </div>
                <div class="chat_info-title_item">{{__('chat', 'Phone')}}&nbsp;:&nbsp;<span>{{activeElementData.clientPhone}}</span>
                </div>

            </div>
            <div v-if="isDesktop || mobileMode === 1 || mobileMode === 2" class="chat_info-content">

                <div v-if="mobileMode === 1 || mobileMode === 2" class="chat-info_mobileTitle">
                    <div class="mobileTitle_arrow">
                        <svg class="mobileTitle_arrow-icon" @click="returnToTopics">
                            <use xlink:href="#leftArrow"></use>
                        </svg>
                    </div>
                    <div class="mobileTitle_data">
                        <div class="name">{{activeElementData.clientName}}</div>
                        <div class="id">(ID: {{activeElementData.chatID}})</div>
                        <div class="status">{{activeElementData.clientStatus}}</div>
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
                            <div class="chat_info-avatar mod_client" v-if="!message.isManager">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46 46">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <circle id="Ellipse_93" data-name="Ellipse 93" cx="23" cy="23" r="23"
                                                    transform="translate(0 -0.384)" fill="#4c638f" stroke="#707070"
                                                    stroke-width="1"/>
                                        </clipPath>
                                    </defs>
                                    <g id="autentificare" transform="translate(0 0.384)">
                                        <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(0)"
                                           clip-path="url(#clip-path)">
                                            <g id="user-male-black-shape" transform="translate(3.596 6.419)">
                                                <path id="Path_702" data-name="Path 702"
                                                      d="M31.662,26.791H29.226a4.871,4.871,0,0,1-4.871-4.871V20.355a12.31,12.31,0,0,0,2.331-4.4c.05-.27.31-.4.483-.589a3.011,3.011,0,0,0,.416-3.626c-.1-.17-.267-.317-.257-.528,0-1.428.007-2.859,0-4.286a7.151,7.151,0,0,0-1.739-4.791,6.8,6.8,0,0,0-3.7-1.907,12.27,12.27,0,0,0-5.3.124,6.421,6.421,0,0,0-3.777,2.557,7.381,7.381,0,0,0-1.166,3.858c-.021,1.453,0,2.91-.009,4.367.033.292-.214.489-.326.73A3.019,3.019,0,0,0,12,15.559a1.427,1.427,0,0,1,.416.815,11.785,11.785,0,0,0,2.2,3.929V21.92a4.871,4.871,0,0,1-4.871,4.871H7.307S2.892,28.008,0,34.1v2.436a2.434,2.434,0,0,0,2.436,2.435h34.1a2.434,2.434,0,0,0,2.435-2.435V34.1C36.076,28.009,31.662,26.791,31.662,26.791Z"
                                                      transform="translate(0 0)" fill="#4c638f"/>
                                            </g>
                                        </g>
                                        <g id="Ellipse_92" data-name="Ellipse 92" transform="translate(0 -0.384)"
                                           fill="none" stroke="#e7f4fb" stroke-width="1">
                                            <circle cx="23" cy="23" r="23" stroke="none"/>
                                            <circle cx="23" cy="23" r="22.5" fill="none"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div v-if="activeElementID !== 0" class="chat_info-newMessage">
                    <input class="newMessage_text"
                           :placeholder="__('chat', 'Write a message ...')"
                           v-model="currentMessage"
                           @keyup="handleChatEnter">
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
