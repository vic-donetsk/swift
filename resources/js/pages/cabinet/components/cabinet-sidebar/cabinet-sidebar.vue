<template>
    <aside class="cabinet-sidebar">
        <div class="cabinet-sidebar_content">
            <logo size="landing"></logo>

            <div class="cabinet-sidebar_person">
                <img src="/img/person.png" class="sidebar-person_image">

                <div class="sidebar-person_name">
                    <span>{{__('widget','Cabinet sidebar name')}}</span>

                    <svg class="sidebar-person_icon"><use xlink:href="#arrow"></use></svg>
                </div>
            </div>

            <div class="cabinet-sidebar_menu">
                <div class="cabinet-sidebar_item">
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#statistics"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 1')}}</span>
                </div>

                <div class="cabinet-sidebar_item">
                    <svg class="sidebar-menu_icon">
                        <use xlink:href="#widget"></use>
                    </svg>
                    <span class="sidebar-menu_name">{{__('widget','Sidebar menu name 2')}}</span>
                </div>

                <div class="cabinet-sidebar_item">

                </div>

                <div class="cabinet-sidebar_item">

                </div>

                <div class="cabinet-sidebar_item">

                </div>

                <div class="cabinet-sidebar_item">

                </div>
            </div>
        </div>
    </aside>
</template>

<style lang="scss">
    @import "cabinet-sidebar.scss";
</style>

<script src="./cabinet-sidebar.js"></script>
