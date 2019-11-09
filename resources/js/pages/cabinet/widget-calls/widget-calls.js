import widgetSteps from "../../../components/widget-steps/widget-steps";
import CallsItem from './widget-calls-item.vue';

export default {
    components: {
        'calls-item': CallsItem
    },
    data: function () {
        return {
            record: false
        };
    }
}
