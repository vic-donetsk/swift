export default {
    data: function () {
        return {
            widgetMainMenu:false,
            widgetElemBottom1:false,
            widgetElemBottom2:false,
            widgetElemBottom3:false,
            widgetElemBottom4:false,
            widgetElemBottom5:false,
            widgetElemBottom6:false,
        }
    },
    methods: {
        nextWidgetComponent() {
            EventBus.$emit('widget-to-install');
        }
    }
}