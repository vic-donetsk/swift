<template>
    <div class="cabinet">
        <cabinet-header></cabinet-header>
        <cabinet-sidebar></cabinet-sidebar>
        <router-view></router-view>

        <div class="cabinet-header_notification" v-show="popupNotify">
            <div class="cabinet-header_notification-head">
                <div class="triangle"></div>
                <span class="notification-heading">Notifications</span>
            </div>
            <div class="cabinet-header_notification-content">
                <div class="cabinet-header_notification-item" v-for="item in 4">
                    <div class="notification-item_image">
                        <img src="http://www.latimes.com/includes/projects/hollywood/portraits/keanu_reeves.jpg"
                             alt="">
                    </div>
                    <div class="notification-item_text">
                            <span class="notification-item_text-name">
                                Keanu Reeves
                            </span>
                        <span>
                                {{__('widget',`Cabinet header notification message ${item}`)}}
                            </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./cabinet.js"></script>