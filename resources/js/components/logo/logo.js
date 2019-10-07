export default {
    data: function () {
        return {
            sizeClass: '',
        }
    },
    props: ["size"],
    created () {
        this.sizeChange();
    },
    methods: {
        gotoMain() {

        },
        sizeChange () {
            switch (this.size) {
                case 'auth': this.sizeClass = 'authClass'; break;
                case 'landing': this.sizeClass = 'landingClass'; break;
            }
        }
    },
    watch: {
        size() {
            this.sizeChange();
        }
    }
 }
