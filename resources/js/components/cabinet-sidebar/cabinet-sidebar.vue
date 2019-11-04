<template>
    <nav class="cabinet-sidebar">
        <div class="cabinet-sidebar_content">
            <div class="header-hamburger">
                <div class="header-hamburger_item top"></div>
                <div class="header-hamburger_item middle"></div>
                <div class="header-hamburger_item bottom"></div>
            </div>

            <logo size="landing"></logo>

            <div class="cabinet-header_notify mod_active">
                <svg class="cabinet-header_icon">
                    <use xlink:href="#bell"></use>
                </svg>
            </div>

            <div class="cabinet-sidebar_person">
                <img src="/img/person.png" class="sidebar-person_image">

                <div class="sidebar-person_name">
                    <span>{{__('widget','Cabinet sidebar name')}}</span>

                    <svg class="sidebar-person_icon"><use xlink:href="#arrow"></use></svg>
                </div>
            </div>

            <div class="cabinet-sidebar_menu">
                <router-link to="/cabinet/statistics" class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#statistics"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 1')}}</span>
                </router-link>

                <router-link to="/cabinet/widget" class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#widget"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 2')}}</span>
                </router-link>

                <router-link to="/cabinet/chat" class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#menu-chat"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 3')}}</span>
                </router-link>

                <router-link to="/cabinet/billing/abonnement" class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#menu-billing"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 4')}}</span>
                </router-link>

                <div class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#menu-settings"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 5')}}</span>
                </div>

                <div class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#menu-support"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 6')}}</span>
                </div>
            </div>

            <div class="sidebar-copyright">
                <span>SwiftCallback © 2019</span>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    @import "cabinet-sidebar.scss";
</style>

<script src="./cabinet-sidebar.js"></script>
