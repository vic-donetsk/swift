export default {
    data: function () {
        return {
            checkedNames: [],
            settingsMode: false,
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

        this.openSettings();


    },
    methods: {
        openSettings() {
            this.settingsMode = true;
            document.addEventListener('click', this.handleSettingsClick);
        },
        handleSettingsClick(e) {
            let container = document.querySelector(".statistics_tableColumns");
            if ($(container).has(e.target).length === 0) {
                this.closeSettings();
            }
        },
        closeSettings() {
            document.removeEventListener('click', this.handleSettingsClick);
            this.settingsMode = false;
        }
    }
}
