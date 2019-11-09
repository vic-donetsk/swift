export default {
    methods: {
        nextWidgetComponent() {
            EventBus.$emit('widget-to-install', 'widgetInstall');
        }
    }
}