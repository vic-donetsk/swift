import FlagPhone from './../../../components/flag-phone/flag-phone.vue';

export default {
    components: {
        'flag-phone': FlagPhone
    },
    data: function () {
        return {
            phoneNumber: '',
            checked: false,
            record: false,
            row1: false,
            row2: false,
            row3: false,
            tableContent1: false,
            tableContent2: false,
            tableContent3: false,
            tooltip: false
        };
    },
    methods: {
        updatePhone(value) {
            this.phoneNumber = value;
        }
    }
}
