<template>
    <div class="cabinet_page settings">

        <nav class="settings_nav">
            <div v-for="(setting, index) in settingChapters" class="settings_nav-item"
                 :class="{mod_active: settingsMode === index}" @click="changeMode(index)">
                <svg class="nav-item_svg">
                    <use :xlink:href="'#' + setting.svg"></use>
                </svg>
                <div class="nav-item_text">
                    {{__('settings', setting.title)}}
                </div>
            </div>
        </nav>

        <nav class="settings_navMobile">
            <div class="settings_nav-item mod_active mod_mobile mod_select" @click="showModes()">
                <svg class="nav-item_svg">
                    <use :xlink:href="'#' + settingChapters[settingsMode].svg"></use>
                </svg>
                <div class="nav-item_text">
                    {{__('settings', settingChapters[settingsMode].title)}}
                </div>
            </div>
            <div v-for="(setting, index) in settingChapters" class="settings_nav-item mod_mobile mod_option"
                 @click="changeMobileMode(index)">
                <svg class="nav-item_svg">
                    <use :xlink:href="'#' + setting.svg"></use>
                </svg>
                <div class="nav-item_text">
                    {{__('settings', setting.title)}}
                </div>
            </div>
        </nav>

        <settings-general v-if="settingsMode === 0"></settings-general>
        <settings-api v-if="settingsMode === 1"></settings-api>
        <settings-blacklist v-if="settingsMode === 2"></settings-blacklist>
        <settings-session v-if="settingsMode === 3"></settings-session>


    </div>
</template>

<script src="./settings.js"></script>

<style lang='scss'>
    @import 'settings.scss';
</style>
