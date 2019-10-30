import Logo from './../../components/logo/logo.vue';



export default {
    components: {
        'logo': Logo,
    },
    data: function () {
        return {
            abonementData: null,
            showTariffMinutes: false,
            showCurrentMinutes: false,
            showCurrentSMS: false,


        }
    },
    created() {
        // TODO: set real state of tariff's values instead of this
        this.abonementData = {
            tariff: {
                total: 100,
                consumed: 60
            },
            current: {
                total: 100,
                consumed: 60
            },
            sms: {
                total: 100,
                consumed: 60
            },
        }

    },
    methods: {
        toggleTariffMinutes() {
            this.showTariffMinutes = !this.showTariffMinutes;
        },
        toggleCurrentMinutes() {
            this.showCurrentMinutes = !this.showCurrentMinutes;
        },
        toggleCurrentSMS() {
            this.showCurrentSMS = !this.showCurrentSMS;
        },



    },
}

