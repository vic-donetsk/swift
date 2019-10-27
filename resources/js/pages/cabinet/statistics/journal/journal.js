export default {
    data: function () {
        return {
            // initial state of table columns: (is in 'checkedNames') === displayed
            checkedNames: [
                "Date",
                "Time",
                "Call status",
                "Duration",
                "Client number",
                "Manager number",
                "Client name",
                "Email",
                "Source",
                "Home page",
                "The page on which the call was made",
                "IP",
                "Notes",
                "Region"
            ],
            settingsMode: false,
            tableColumns: [
            "Date",
            "Time",
            "Call status",
            "Duration",
            "Client number",
            "Manager number",
            "Client name",
            "Email",
            "Source",
            "Home page",
            "The page on which the call was made",
            "IP",
            "Notes",
            "Region"
            ]
        };
    },

    props: ['list'],

    mounted() {

        //this.openSettings();


    },
    methods: {
        openSettings() {
            console.log('cumming');
            console.log(this.settingsMode);
            if (!this.settingsMode) {
                //this.settingsMode = true;
                console.log('internal ' + this.settingsMode);
                document.addEventListener('click', this.handleSettingsClick);
            }
        },
        handleSettingsClick(e) {
            if (this.settingsMode) {
                let container = document.querySelector(".statistics_tableColumns-customize");
                if ($(container).has(e.target).length === 0) {
                    console.log('wauuu');
                    this.closeSettings();
                }
            } else {
                this.settingsMode = true;
            }
        },
        closeSettings() {
            document.removeEventListener('click', this.handleSettingsClick);
            this.settingsMode = false;
        }
    }
}
