<template>
    <aside class="cabinet-sidebar">
        <div class="cabinet-sidebar_content">
            <logo size="landing"></logo>

            <div class="cabinet-sidebar_person">
                <img src="/img/person.png" class="sidebar-person_image">

                <div class="sidebar-person_name">
                    <span>  {{__('widget','Cabinet sidebar name')}}</span>

                    <svg class="sidebar-person_icon"><use xlink:href="#arrow"></use></svg>
                </div>
            </div>
        </div>
    </aside>
</template>

<style lang="scss">
    @import "cabinet-sidebar.scss";
</style>

<script src="./cabinet-sidebar.js"></script>
