import widgetSteps from "../../../components/widget-steps/widget-steps";
import CallsItem from './widget-calls-item.vue';

export default {
    components: {
        'widget-steps': widgetSteps,
        'calls-item': CallsItem
    },
    data: function () {
        return {
            record: false
        };
    }
}
