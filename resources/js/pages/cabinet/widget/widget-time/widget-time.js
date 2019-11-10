import widgetSchedule from './widget-schedule/widget-schedule.vue';

export default {
    components:{
        'widget-schedule':widgetSchedule
    },
    data: function () {
        return {
            checked1: true,
            checked2: false,
            checked3: false,
        };
    }
}
