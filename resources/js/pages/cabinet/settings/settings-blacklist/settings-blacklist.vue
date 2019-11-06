<template>
    <div class="settings_blacklist">

        <div class="settings_blacklist-header">
            <svg class="header_svg">
                <use xlink:href="#cross"></use>
            </svg>
            <div class="header_value">BLACKLIST</div>
        </div>

        <div class="settings_blacklist-element">
            <div class="element_menu"></div>
            <input type="text" class="element_value">
            <div class="element_button">{{__('settings', 'Apply')}}</div>

        </div>


        <div class="blacklistTable">
            <div class="blacklistTable_header">
                <div class="blacklistTable_header-item mod_ID">{{__('settings', 'ID')}}</div>
                <div class="blacklistTable_header-item mod_value">{{__('settings', 'Value')}}</div>
                <div class="blacklistTable_header-item mod_type">{{__('settings', 'Type')}}</div>
                <div class="blacklistTable_header-item mod_close"></div>
            </div>
            <div class="blacklistTable_body">
                <div v-for="(oneRecord, index) in blacklist" class="blacklistTable_row">
                    <div class="blacklistTable_row-item mod_ID">{{oneRecord.ID}}</div>
                    <div class="blacklistTable_row-item mod_value">{{oneRecord.value}}</div>
                    <div class="blacklistTable_row-item mod_type">{{__('settings', oneRecord.type)}}</div>

                    <div class="blacklistTable_row-item mod_close">
                        <svg class="close_svg" @click="deleteBlacklistItem(index)">
                            <use xlink:href="#crossLight"></use>
                        </svg>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script src="./settings-blacklist.js"></script>

<style lang='scss'>
    @import 'settings-blacklist.scss';
</style>
