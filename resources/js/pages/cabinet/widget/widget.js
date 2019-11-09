import widgetMain from './../widget-main/widget-main.vue';
import widgetInstall from './../widget-install/widget-install.vue';
import widgetCalls from './../widget-calls/widget-calls.vue';
import widgetSms from './../widget-sms/widget-sms.vue';
import widgetTime from './../widget-time/widget-time.vue';
import widgetDeactivate from './../widget-deactivate/widget-deactivate.vue';
import widgetChat from './../widget-chat/widget-chat.vue';

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
            currentComponent: 'widgetMain'
        }
    },
    mounted() {
        EventBus.$on('widget-component', (component) => {
            this.currentComponent = component;
        });
    },
    methods: {
        goToAuth() {
            this.$router.push('/authentication');
        }
    }
}
