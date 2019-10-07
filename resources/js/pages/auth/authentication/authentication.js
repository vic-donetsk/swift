import Logo from './../../../components/logo/logo.vue';



export default {
    components: {
        'logo': Logo,

    },
    data: function () {
        return {
            authMode: 0,
            // // 0 - log in form,
            // // 1 - 1st registration form
            // // 2 - 2nd registration form
            // // 3 - password restore form
            // headerClass : "authHeader"

        }
    },
    methods: {
        // gotoAuth() {
        //     this.authMode = 0;
        //     this.headerClass = "authHeader";
        // },
        gotoReg() {
            this.$router.push('/registration');
        },
        // continueReg() {
        //     this.authMode = 2;
        //     this.headerClass = "regHeader";
        // },
        gotoRestore() {
            this.$router.push('/restoring');
        }
    },
}
