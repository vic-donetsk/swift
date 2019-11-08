import widgetSteps from "../../../components/widget-steps/widget-steps";
import FlagPhone from './../../../components/flag-phone/flag-phone.vue';

export default {
    components: {
        'widget-steps': widgetSteps,
        'flag-phone': FlagPhone
    },
    data: function () {
        return {
            home: true,
            title: "Главная",
            phoneNumber: '',
            checked: false,
            record: false,
            row1:false,
            row2:false,
            row3:false
        };
    },
    created() {
        this.title = "Лендинг 1";

        EventBus.$on('renameText', () => {
            this.title = "Лендинг 3";
        })
    },
    mounted() {
        setTimeout(() => {
            this.title = "Лендинг 2";
        }, 1000);

    },
    computed: {
        getTitle() {
            return this.title + ' - Вычисленный';
        }
    },
    methods: {
        goToAuth() {
            this.$router.push('/authentication');
        },

        updatePhone(value) {
            this.phoneNumber = value;
        }
    }
}
