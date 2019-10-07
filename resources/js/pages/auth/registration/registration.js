import Logo from './../../../components/logo/logo.vue';

export default {
    components: {
        'logo': Logo,

    },
    data: function () {
        return {
        'authMode': 1

        }
    },
    methods: {
        gotoAuth() {
            this.$router.push('/authentication');
        },
        continueReg() {
            this.authMode = 2;
        },
     },
}
