export default {
    data: function () {
        return {
            checkedNames: [],
            settingsMode: true,
            tableColumns: [
                'data1',
                'data2',
                'data3',
                'data4',
                'data5',
                'data6',
                'data7'
            ]
        };
    },

    mounted() {




    },
    methods: {
        closeSettings() {
            this.settingsMode = false;
        }

    }
}
