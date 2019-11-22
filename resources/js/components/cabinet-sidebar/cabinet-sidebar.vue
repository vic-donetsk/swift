<template>
    <nav class="cabinet-sidebar" :class="{'open-menu':menu}">
        <div class="cabinet-sidebar_content">
            <div class="hamburger hamburger--slider"
                 @click="openMenu"
                 :class="{'is-active':menu}">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>

            <logo size="landing"></logo>

            <div class="cabinet-header_notify"
                 @click.stop="toggleNotify"
                 :class="{mod_active:notify}">
                <svg class="cabinet-header_icon">
                    <use xlink:href="#bell"></use>
                </svg>
            </div>

            <div class="cabinet-sidebar_person">
                <img src="/img/person.png" class="sidebar-person_image">

                <div class="sidebar-person_name" @click.stop="personMenu = !personMenu"
                     :class="{mod_rotate:personMenu}">
                    <span>{{__('widget','Cabinet sidebar name')}}</span>

                    <svg class="sidebar-person_icon"><use xlink:href="#arrow"></use></svg>
                </div>

                <div class="sidebar-person_menu" v-if="personMenu">
                    <div class="sidebar-person_menu-wrap">
                        <div class="sidebar-person_menu-item">
                            <svg class="sidebar-person_menu-icon">
                                <use xlink:href="#menu-settings"></use>
                            </svg>
                            <span class="sidebar-person_menu-text">{{__('widget','Cabinet sidebar person menu 1')}}</span>
                        </div>
                        <div class="sidebar-person_menu-item">
                            <svg class="sidebar-person_menu-icon">
                                <use xlink:href="#menu-support"></use>
                            </svg>
                            <span class="sidebar-person_menu-text">{{__('widget','Cabinet sidebar person menu 2')}}</span>
                        </div>
                    </div>
                    <div class="sidebar-person_menu-item">
                        <svg class="sidebar-person_menu-icon">
                            <use xlink:href="#man-running"></use>
                        </svg>
                        <span class="sidebar-person_menu-text">{{__('widget','Cabinet sidebar person menu 3')}}</span>
                    </div>
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

                <div class="cabinet-sidebar_item" ref="widgetPath"
                     @click="moveToWidget">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#widget"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 2')}}</span>
                </div>

                <router-link to="/cabinet/chat" class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#menu-chat"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 3')}}</span>
                </router-link>

                <router-link to="/cabinet/billing" class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#menu-billing"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 4')}}</span>
                </router-link>

                <router-link to="/cabinet/settings" class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#menu-settings"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 5')}}</span>
                </router-link>

                <router-link to="/cabinet/support" class="cabinet-sidebar_item">
                    <div class="cabinet-sidebar_item-square top"></div>
                    <div class="cabinet-sidebar_item-square bottom"></div>
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#menu-support"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 6')}}</span>
                </router-link>
            </div>

            <div class="sidebar-copyright">
                <span>SwiftCallback © 2019</span>
            </div>
        </div>
        <div class="landing-mobile_menu">
            <div class="landing-menu_content">
                <div class="cabinet-sidebar_menu mod_mobile">
                    <div class="cabinet-sidebar_person">
                        <img src="/img/person.png" class="sidebar-person_image">

                        <div class="sidebar-person_name" @click.stop="personMenu = !personMenu"
                             :class="{mod_rotate:personMenu}">
                            <span>{{__('widget','Cabinet sidebar name')}}</span>

                            <svg class="sidebar-person_icon"><use xlink:href="#arrow"></use></svg>
                        </div>

                        <div class="sidebar-person_menu" v-if="personMenu">
                            <div class="sidebar-person_menu-wrap">
                                <div class="sidebar-person_menu-item">
                                    <svg class="sidebar-person_menu-icon">
                                        <use xlink:href="#menu-settings"></use>
                                    </svg>
                                    <span class="sidebar-person_menu-text">{{__('widget','Cabinet sidebar person menu 1')}}</span>
                                </div>
                                <div class="sidebar-person_menu-item">
                                    <svg class="sidebar-person_menu-icon">
                                        <use xlink:href="#menu-support"></use>
                                    </svg>
                                    <span class="sidebar-person_menu-text">{{__('widget','Cabinet sidebar person menu 2')}}</span>
                                </div>
                            </div>
                            <div class="sidebar-person_menu-item">
                                <svg class="sidebar-person_menu-icon">
                                    <use xlink:href="#man-running"></use>
                                </svg>
                                <span class="sidebar-person_menu-text">{{__('widget','Cabinet sidebar person menu 3')}}</span>
                            </div>
                        </div>
                    </div>


                    <router-link to="/cabinet/statistics" class="cabinet-sidebar_item">
                        <div class="cabinet-sidebar_item-square top"></div>
                        <div class="cabinet-sidebar_item-square bottom"></div>
                        <svg class="sidebar-menu_icon">
                            <use xlink:href="#statistics"></use>
                        </svg>
                        <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 1')}}</span>
                    </router-link>
                    <div class="cabinet-sidebar_item"
                         @click="moveToWidget" ref="mobileWidgetPath">
                        <div class="cabinet-sidebar_item-square top"></div>
                        <div class="cabinet-sidebar_item-square bottom"></div>
                        <svg class="sidebar-menu_icon">
                            <use xlink:href="#widget"></use>
                        </svg>
                        <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 2')}}</span>
                    </div>
                    <router-link to="/cabinet/chat" class="cabinet-sidebar_item">
                        <div class="cabinet-sidebar_item-square top"></div>
                        <div class="cabinet-sidebar_item-square bottom"></div>
                        <svg class="sidebar-menu_icon">
                            <use xlink:href="#menu-chat"></use>
                        </svg>
                        <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 3')}}</span>
                    </router-link>
                    <router-link to="/cabinet/billing" class="cabinet-sidebar_item">
                        <div class="cabinet-sidebar_item-square top"></div>
                        <div class="cabinet-sidebar_item-square bottom"></div>
                        <svg class="sidebar-menu_icon">
                            <use xlink:href="#menu-billing"></use>
                        </svg>
                        <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 4')}}</span>
                    </router-link>
                    <router-link to="/cabinet/settings" class="cabinet-sidebar_item">
                        <div class="cabinet-sidebar_item-square top"></div>
                        <div class="cabinet-sidebar_item-square bottom"></div>
                        <svg class="sidebar-menu_icon">
                            <use xlink:href="#menu-settings"></use>
                        </svg>
                        <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 5')}}</span>
                    </router-link>
                    <router-link to="/cabinet/support" class="cabinet-sidebar_item">
                        <div class="cabinet-sidebar_item-square top"></div>
                        <div class="cabinet-sidebar_item-square bottom"></div>
                        <svg class="sidebar-menu_icon">
                            <use xlink:href="#menu-support"></use>
                        </svg>
                        <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 6')}}</span>
                    </router-link>
                </div>
            </div>

        </div>
    </nav>
</template>

<style lang="scss">
    @import "cabinet-sidebar.scss";
</style>

<script src="./cabinet-sidebar.js"></script>
