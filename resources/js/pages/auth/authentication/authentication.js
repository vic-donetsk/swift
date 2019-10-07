import Logo from './../../../components/logo/logo.vue';

export default {
    components: {
        'logo': Logo,
    },
    data: function () {
        return {
        }
    },
    methods: {
        gotoReg() {
            this.$router.push('/registration');
        },
        gotoRestore() {
            this.$router.push('/restoring');
        }
    },
}
