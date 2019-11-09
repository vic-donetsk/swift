import FlagPhone from './../../../components/flag-phone/flag-phone.vue';

export default {
    components: {
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
            row3:false,
            tableContent1: null,
            tableContent2: null,
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
        toggleTableContent1(item) {
            if (this.tableContent1 === item) {
                this.tableContent1 = null;
                return false;
            }
            this.tableContent1 = item;
        },
        toggleTableContent2(item) {
            if (this.tableContent2 === item) {
                this.tableContent2 = null;
                return false;
            }
            this.tableContent2 = item;
        },

        updatePhone(value) {
            this.phoneNumber = value;
        }
    }
}
