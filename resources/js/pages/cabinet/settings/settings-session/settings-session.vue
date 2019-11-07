<template>
    <div class="settings_session">

        <div class="settings_session-header">
            <svg class="header_svg">
                <use xlink:href="#global"></use>
            </svg>
            <div class="header_value">{{__('settings', 'Session history')}}</div>
        </div>

        <div class="settings_session-table">
            <div class="session_table-header">
                <div class="session_table-item mod_header mod_client">{{__('settings', 'Clients')}}</div>
                <div class="session_table-item mod_header mod_address">{{__('settings', 'Address IP')}}</div>
                <div class="session_table-item mod_header mod_country">{{__('settings', 'Country')}}</div>
                <div class="session_table-item mod_header mod_last">{{__('settings', 'Recent activities')}}</div>
                <div class="session_table-item mod_header mod_status">{{__('settings', 'Session status')}}</div>
                <div class="session_table-item mod_header mod_out"></div>
            </div>
            <div class="session_table-body">
                <div v-for="(oneSession, index) in sessions" class="session_table-row">
                    <div class="session_table-item mod_row mod_client">{{oneSession.client}}</div>
                    <div class="session_table-item mod_row mod_address">{{oneSession.address}}</div>
                    <div class="session_table-item mod_row mod_country">{{oneSession.country}}</div>
                    <div class="session_table-item mod_row mod_last">{{oneSession.activity}}</div>
                    <div class="session_table-item mod_row mod_status">
                        <div class="session_selectedBlock mod_active">
                            {{ oneSession.isActive ? __('settings', 'Active') : 'Offline'}}
                        </div>
                    </div>
                    <div class="session_table-item mod_row mod_out">
                        <div class="session_selectedBlock mod_signOut" @click="signOut(index)">
                            {{__('settings', 'Sign out')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="settings_session-mobileTable">

            <div class="settings_session-mobileTable_header">
                <div class="settings_session-mobileTable_header-item mod_mobilePlus"></div>
                <div class="settings_session-mobileTable_header-item mod_mobileAddress">{{__('settings', 'Address IP')}}</div>
                <div class="settings_session-mobileTable_header-item mod_mobileActive">{{__('settings', 'Recent activities')}}</div>
                <div class="settings_session-mobileTable_header-item mod_mobileSource"></div>
            </div>

            <div v-for="(oneSession, index) in sessions" class="settings_session-mobileTable_row">
                <div class="settings_session-mobileTable_row-brief">
                    <div class="row-brief_item mod_mobilePlus mod_icon">
                        <div :id="'sign' + index" class="signOpenClose mod_closed"
                             @click="mobileShowDetails(index, '200px')"></div>
                    </div>
                    <div class="row-brief_item mod_mobileAddress mod_text">{{oneSession.address}}</div>
                    <div class="row-brief_item mod_mobileActive mod_text">{{oneSession.activity}}</div>
                    <div class="row-brief_item mod_mobileSource mod_icon">
                        <svg class="source_icon">
                            <use v-if="oneSession.isDesktop" xlink:href="#pc"></use>
                            <use v-else xlink:href="#mobile_phone"></use>
                        </svg>
                    </div>
                </div>

                <div :id="'rowFull'+index" class="settings_session-mobileTable_row-full">
                    <div class="row-full_item">
                        <span>{{__('settings', 'Client')}}</span>&nbsp;:&nbsp;{{oneSession.client}}
                    </div>
                    <div class="row-full_item">
                        <span>{{__('settings', 'Country')}}</span>&nbsp;:&nbsp;{{oneSession.country}}
                    </div>
                    <div class="row-full_item">
                        <span>{{__('settings', 'Session status')}}</span>&nbsp;:&nbsp;{{ oneSession.isActive ? __('settings', 'Active') : 'Offline'}}
                    </div>

                    <div class="row-full_item mod_center">
                        <div class="mod_mobileSignOut" @click="signOut(index)">{{__('settings', 'Sign out')}}</div>
                    </div>

                </div>

            </div>
        </div>


    </div>
</template>

<script src="./settings-session.js"></script>

<style lang='scss'>
    @import 'settings-session';
</style>
