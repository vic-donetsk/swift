export default {
    data: function () {
        return {
            rowList: null,
        };
    },
    methods: {
        toggleRowList(item) {
            if (this.rowList === item) {
                this.rowList = null;
                return false;
            }
            this.rowList = item;
        }
    }
}





