export default {
    data() {
        return {
            widgetSteps: [
                {
                    id: 1,
                    component: 'widgetInstall',
                    icon: 'download',
                    pageClass: 'widget-install'
                },
                {
                    id: 2,
                    component: 'widgetCalls',
                    icon: 'phone',
                    pageClass: 'widget-calls'
                },
                {
                    id: 3,
                    component: 'widgetSms',
                    icon: 'mail-envelope-open',
                    pageClass: 'widget-sms'
                },
                {
                    id: 4,
                    component: 'widgetTime',
                    icon: 'wall-clock',
                    pageClass: 'widget-time'
                },
                {
                    id: 5,
                    component: 'widgetChat',
                    icon: 'chat-settings',
                    pageClass: 'widget-chat'
                },
                {
                    id: 6,
                    component: 'widgetDeactivate',
                    icon: 'disable',
                    pageClass: 'widget-deactivate'
                },
            ],
            current: 'widgetInstall'
        }
    },
    methods: {
        nextWidgetComponent(item) {
            this.current = item.component;
            EventBus.$emit('widget-component', item);

        }
    }
}