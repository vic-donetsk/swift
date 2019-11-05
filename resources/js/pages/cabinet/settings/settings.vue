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

        <div class="settings_content">

            <div class="settings_content-item">

                <div class="item_header">
                    <svg class="item_header-svg">
                        <use xlink:href="#settings"></use>
                    </svg>
                    <div class="item_header-value">{{__('settings', 'Basic settings')}}</div>
                </div>

                <div class="item_element">
                    <div class="item_element-title">{{__('settings', 'Name')}}</div>
                    <input type="text" class="item_element-content" placeholder="Ktototam" v-model="profile.name">
                </div>
                <div class="item_element">
                    <div class="item_element-title">{{__('settings', 'First name')}}</div>
                    <input type="text" class="item_element-content" placeholder="Andrian" v-model="profile.firstName">
                </div>
                <div class="item_element">
                    <div class="item_element-title">{{__('settings', 'Phone (for sms notifications)')}}</div>
                    <input type="text" class="item_element-content" placeholder="+373 (78) 79 2000"
                           v-model="profile.phone">
                </div>
                <div class="item_element">
                    <div class="item_element-title">{{__('settings', 'Email')}}</div>
                    <input type="text" class="item_element-content" placeholder="ionascu@pi.md" v-model="profile.email">
                </div>

            </div>

            <div class="settings_content-item">

                <div class="item_header">
                    <svg class="item_header-svg">
                        <use xlink:href="#settings"></use>
                    </svg>
                    <div class="item_header-value">{{__('settings', 'Change password')}}</div>
                </div>

                <div class="item_element">
                    <div class="item_element-title">{{__('settings', 'Old password')}}</div>
                    <input type="text" class="item_element-content" placeholder="**************" v-model="password.old">
                </div>
                <div class="item_element">
                    <div class="item_element-title">{{__('settings', 'New password')}}</div>
                    <input type="text" class="item_element-content" placeholder="*************" v-model="password.new">
                </div>
                <div class="item_element">
                    <div class="item_element-title">{{__('settings', 'Confirm your password')}}</div>
                    <input type="text" class="item_element-content" placeholder="**************"
                           v-model="password.confirm">
                </div>

            </div>

        </div>


    </div>
</template>

<script src="./settings.js"></script>

<style lang='scss'>
    @import 'settings.scss';
</style>
