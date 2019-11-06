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
                <div class="item_element">
                    <div class="item_element-title">{{__('settings', 'Language for notifications')}}</div>
                    <select class="item_element-content" v-model="profile.language">
                        <option value="Română">Română</option>
                        <option v-for="language in languages" value="language">{{language}}</option>
                    </select>
                </div>
                <div class="item_element">
                    <div class="item_element-title mod_center">{{__('settings', 'Profile photo')}}</div>
                    <div class="item_element-upload">
                        <svg class="upload_svg" @click="photoUpload">
                            <use xlink:href="#upload"></use>
                        </svg>
                    </div>
                </div>
                <div id="firstButton" class="item_element-single mod_button" @click="saveProfile">{{__('settings', 'Save changes')}}</div>
                <div class="item_element-single mod_checkboxes">
                    <div class="single_checkbox">
                        <input type="checkbox" class="single_checkbox-input" id="agreeEmail" v-model="profile.isAgreeEmail">
                        <label for="agreeEmail" class="single_checkbox-label">{{__('settings', 'Receive email notifications')}}</label>
                    </div>
                    <div class="single_checkbox">
                        <input type="checkbox" class="single_checkbox-input" id="agreeSMS" v-model="profile.isAgreeSMS">
                        <label for="agreeSMS" class="single_checkbox-label">{{__('settings', 'Receive SMS notifications')}}</label>
                    </div>
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
                <div class="item_element">
                    <div class="item_element-title"></div>
                    <div class="item_element-single mod_button" @click="savePassword">{{__('settings', 'Confirm your password')}}</div>
                </div>

            </div>

        </div>


    </div>
</template>

<script src="./settings.js"></script>

<style lang='scss'>
    @import 'settings.scss';
</style>
