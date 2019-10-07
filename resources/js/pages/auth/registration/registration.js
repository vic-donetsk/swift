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
    // created () {
    //     this.authMode = 1;
    // },
    methods: {
        gotoAuth() {
            this.$router.push('/authentication');
        },
        // gotoReg() {
        //     this.authMode = 1;
        //     this.headerClass = "regHeader";
        // },
        continueReg() {
            this.authMode = 2;
        },
     },
}
