<template>
    <div class="cabinet_page chat">
        <div class="chat_handler">
            <div class="chat_handler-header">
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
                    <input class="chat_handler-search_text" placeholder="Search ID" v-model="searchChatId">
            </div>

            <div class="chat_handler-topics">
                <div v-for="oneChat in listOfChats" class="chat_handler-topic">

                </div>
            </div>

        </div>
        <div class="chat_info">
            <div class="chat_info-title">

            </div>
            <div class="chat_info-content">

            </div>

        </div>

    </div>
</template>

<script src="./chat.js"></script>

<style lang='scss'>
    @import 'chat.scss';
</style>
