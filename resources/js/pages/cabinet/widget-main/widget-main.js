export default {
    methods: {
        nextWidgetComponent() {
            EventBus.$emit('widget-component', 'widgetInstall');
        }
    }
}