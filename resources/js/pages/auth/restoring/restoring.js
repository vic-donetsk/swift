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
        gotoAuth() {
            this.$router.push('/authentication')
        },
    },
}
