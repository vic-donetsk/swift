export default {
    data() {
        return {
            widgetSteps: [
                {
                    component: 'widgetInstall',
                    icon: 'download'
                },
                {
                    component: 'widgetCalls',
                    icon: 'phone'
                },
                {
                    component: 'widgetSms',
                    icon: 'mail-envelope-open'
                },
                {
                    component: 'widgetTime',
                    icon: 'wall-clock'
                },
                {
                    component: 'widgetChat',
                    icon: 'chat-settings'
                },
                {
                    component: 'widgetDeactivate',
                    icon: 'disable'
                },
            ],
            current: 'widgetInstall'
        }
    },
    methods: {
        nextWidgetComponent(component) {
            this.current = component;
            EventBus.$emit('widget-component', component);

        }
    }
}