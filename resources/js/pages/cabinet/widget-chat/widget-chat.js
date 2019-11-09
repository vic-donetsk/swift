export default {
    data: function () {
        return {
            rowList: null,
            openModal: false
        };
    },
    methods: {
        toggleRowList(item) {
            if (this.rowList === item) {
                this.rowList = null;
                return false;
            }
            this.rowList = item;
        },
        goToAuth() {
            this.$router.push('/authentication');
        }
    }
}
