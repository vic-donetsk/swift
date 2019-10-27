export default {
    data: function () {
        return {
            // initial state of table columns: (is in 'checkedNames') === displayed
            checkedNames: [
                "date",
                "time",
                "callStatus",
                "duration",
                "clientNumber",
                "managerNumber",
                "clientName",
                "email",
                "source",
                "homePage",
                "callPage",
                "ip",
                "notes",
                "region"
            ],
            settingsMode: false,
            tableColumns: [
                {text: "Date", var: "date"},
                {text: "Time", var: "time"},
                {text: "Call status", var: "callStatus"},
                {text: "Duration", var: "duration"},
                {text: "Client number", var: "clientNumber"},
                {text: "Manager number", var: "managerNumber"},
                {text: "Client name", var: "clientName"},
                {text: "Email", var: "email"},
                {text: "Source", var: "source"},
                {text: "Home page", var: "homePage"},
                {text: "The page on which the call was made", var: "callPage"},
                {text: "IP", var: "ip"},
                {text: "Notes", var: "notes"},
                {text: "Region", var: "region"},
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
