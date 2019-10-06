export default {
    data: function () {
        return {
            authMode: 0,
            // 0 - log in form,
            // 1 - 1st registration form
            // 2 - 2nd registration form

        }
    },
    methods: {
        gotoAuth() {
            this.authMode = 0;
        },
        gotoReg() {
            this.authMode = 1;
        },
        continueReg() {
            this.authMode = 2;
        }
    },
}
