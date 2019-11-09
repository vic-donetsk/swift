import widgetMain from './../widget-main/widget-main.vue';
import widgetInstall from './../widget-install/widget-install.vue';
import widgetCalls from './../widget-calls/widget-calls.vue';
import widgetSms from './../widget-sms/widget-sms.vue';
import widgetTime from './../widget-time/widget-time.vue';
import widgetDeactivate from './../widget-deactivate/widget-deactivate.vue';
import widgetChat from './../widget-chat/widget-chat.vue';
import widgetSteps from "../../../components/widget-steps/widget-steps.vue";

export default {
    components: {
        widgetMain,
        widgetInstall,
        widgetCalls,
        widgetSms,
        widgetTime,
        widgetDeactivate,
        widgetChat,
        'widget-steps': widgetSteps,
    },
    data: function () {
        return {
            currentComponent: 'widgetMain',
            currentPageClass: 'widget-install',
            currentPageIndex: 1,
            currentButtonIcon: 'download'
        }
    },
    mounted() {
        EventBus.$on('widget-component', (item) => {
            this.currentComponent = item.component;
            this.currentPageClass = item.pageClass;
            this.currentPageIndex = item.id;
            this.currentButtonIcon = item.icon;
        });
    },
    methods: {
        goToAuth() {
            this.$router.push('/authentication');
        }
    }
}
