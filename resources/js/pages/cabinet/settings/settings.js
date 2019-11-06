export default {
    data: function () {
        return {
            settingsMode: 0,
            mobileMenuOpened: false,
            settingChapters: [
                {title: 'general', svg: 'settings'},
                {title: 'api keys', svg: 'api_gear'},
                {title: 'blacklist', svg: 'cross'},
                {title: 'session', svg: 'global'}],

            // TODO: this is list of languages for notification, edit if necessary
            languages: ['English', 'Русский', 'Česky', 'हिन्दी','עברית'],

            profile: {
                name: '',
                firstName: '',
                phone: '',
                email: '',
                language: 'Română',
            },
            password: {
                old: '',
                new: '',
                confirm: ''
            }
        }
    },
    created() {

    },
    mounted() {
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
        },
        activateSelect() {


            let select = document.getElementById('item_element-select');
            let newEvent = new Event('click');
            select.dispatchEvent(newEvent);
        }

    }
}
