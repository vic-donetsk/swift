import widgetMain from './widget-main/widget-main.vue';
import widgetInstall from './widget-install/widget-install.vue';
import widgetCalls from './widget-calls/widget-calls.vue';
import widgetSms from './widget-sms/widget-sms.vue';
import widgetTime from './widget-time/widget-time.vue';
import widgetDeactivate from './widget-deactivate/widget-deactivate.vue';
import widgetChat from './widget-chat/widget-chat.vue';

export default {
    components: {
        widgetMain,
        widgetInstall,
        widgetCalls,
        widgetSms,
        widgetTime,
        widgetDeactivate,
        widgetChat
    },
    data: function () {
        return {
            currentComponent: 'widgetTime',
            currentPageClass: 'widget-time',
            currentButtonIcon: '',
            settingsMode: 0,
            mobileMenuOpened: false,
            widgetSteps: [
                {
                    component: 'widgetInstall',
                    icon: 'download',
                    pageClass: 'widget-install'
                },
                {
                    component: 'widgetCalls',
                    icon: 'phone',
                    pageClass: 'widget-calls'
                },
                {
                    component: 'widgetSms',
                    icon: 'mail-envelope-open',
                    pageClass: 'widget-sms'
                },
                {
                    component: 'widgetTime',
                    icon: 'wall-clock',
                    pageClass: 'widget-time'
                },
                {
                    component: 'widgetChat',
                    icon: 'chat-settings',
                    pageClass: 'widget-chat'
                },
                {
                    component: 'widgetDeactivate',
                    icon: 'disable',
                    pageClass: 'widget-deactivate'
                },
            ],
        }
    },
    methods: {
        goToAuth() {
            this.$router.push('/authentication');
        },
        nextWidgetComponent(item, key) {
            this.currentComponent = item.component;
            this.currentPageClass = item.pageClass;
            this.currentButtonIcon = item.icon;
            this.settingsMode = key;
        },
        changeMobileMode(item, mode) {
            let menuOptions = document.querySelectorAll('.mod_option');
            if (this.settingsMode !== mode)
                this.settingsMode = mode;
            for (let oneOption of menuOptions) {
                oneOption.classList.remove('mod_open');
            }

            this.currentComponent = item.component;
            this.currentPageClass = item.pageClass;
            this.currentButtonIcon = item.icon;

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
    },
    mounted() {
        EventBus.$on('widget-to-install', () => {
            this.settingsMode = 0;

            this.currentComponent = this.widgetSteps[0].component;
            this.currentPageClass = this.widgetSteps[0].pageClass;
            this.currentButtonIcon = this.widgetSteps[0].icon;
        });
    }
}
