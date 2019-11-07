import settingsGeneral from "./settings-general/settings-general.vue";
import settingsApi from "./settings-api/settings-api.vue";
import settingsBlacklist from "./settings-blacklist/settings-blacklist.vue";
import settingsSession from "./settings-session/settings-session.vue";

export default {
    components: {
        'settings-general': settingsGeneral,
        'settings-api': settingsApi,
        'settings-blacklist' : settingsBlacklist,
        'settings-session' : settingsSession
    },
    data: function () {
        return {
            settingsMode: 3,
            mobileMenuOpened: false,
            settingChapters: [
                {title: 'general', svg: 'settings'},
                {title: 'api keys', svg: 'api_gear'},
                {title: 'blacklist', svg: 'cross'},
                {title: 'session', svg: 'global'}],
        }
    },
    methods: {
        changeMode(mode) {
            if (this.settingsMode !== mode)
                this.settingsMode = mode;
        },
        changeMobileMode(mode) {
            let menuOptions = document.querySelectorAll('.mod_option');
            if (this.settingsMode !== mode)
                this.settingsMode = mode;
            for (let oneOption of menuOptions) {
                oneOption.classList.remove('mod_open');
            }
            this.mobileMenuOpened = !this.mobileMenuOpened;
        },
        showModes() {
            let menuOptions = document.querySelectorAll('.mod_option');
            for (let oneOption of menuOptions) {
                if (this.mobileMenuOpened) {
                    oneOption.classList.remove('mod_open');
                } else {
                    oneOption.classList.add('mod_open');
                }
            }
            this.mobileMenuOpened = !this.mobileMenuOpened;
        }
    }
}
