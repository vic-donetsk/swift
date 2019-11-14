export default {
    data: function () {
        return {
            widgetOpen: false,
            widgetElemBottom1: false,
            widgetElemBottom2: false,
            widgetElemBottom3: false,
            widgetElemBottom4: false,
            widgetElemBottom5: false,
            widgetElemBottom6: false,
            play: true,
            installed: true
        }
    },
    created() {
        this.changeData();
    },
    methods: {
        nextWidgetComponent() {
            EventBus.$emit('widget-to-install');
        },
        openInfo(variable) {
            if (window.innerWidth < 1280) {
                this[variable] = !this[variable];
            } else {
                this[variable] = true;
            }
        },
        moveStep(indexStep) {
            if (window.innerWidth >= 1280) {
                EventBus.$emit('widget-step', indexStep);
            }
        },
        changeData() {
            if (window.innerWidth >= 1280) {
                this.widgetOpen = true,
                    this.widgetElemBottom1 = true,
                    this.widgetElemBottom2 = true,
                    this.widgetElemBottom3 = true,
                    this.widgetElemBottom4 = true,
                    this.widgetElemBottom5 = true,
                    this.widgetElemBottom6 = true
            } else {
                this.widgetOpen = false,
                    this.widgetElemBottom1 = false,
                    this.widgetElemBottom2 = false,
                    this.widgetElemBottom3 = false,
                    this.widgetElemBottom4 = false,
                    this.widgetElemBottom5 = false,
                    this.widgetElemBottom6 = false
            }
        }
    },
    mounted() {
        $(window).on('resize', () => {
            this.changeData();
        });
    },
    destroyed() {
        $(window).off('resize');
    }
}