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


    </div>
</template>

<script src="./settings-session.js"></script>

<style lang='scss'>
    @import 'settings-session';
</style>
