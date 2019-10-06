export default {
    data: function () {
        return {
            authMode: 0,
            // 0 - log in form,
            // 1 - 1st registration form
            // 2 - 2nd registration form
            // 3 - password restore form
            headerClass : "authHeader"

        }
    },
    methods: {
        gotoAuth() {
            this.authMode = 0;
            this.headerClass = "authHeader";
        },
        gotoReg() {
            this.authMode = 1;
            this.headerClass = "regHeader";
        },
        continueReg() {
            this.authMode = 2;
            this.headerClass = "regHeader";
        },
        gotoRestore() {
            this.authMode = 3;
            this.headerClass = "restoreHeader";
        }
    },
}
