import ChartJs from './chart-js/chart-js.vue'
import Journal from './journal/journal.vue'


// import test data arrays from test files
import generalCallsData from './testCallsChartsData'
import generalChatsData from './testChatsChartsData'
import journalData from './testCallsJournalData'
import journalChatsData from './testChatsJournalData'


export default {
    components: {
        'chart-js': ChartJs,
        'statistics-journal': Journal
    },
    data: function () {
        return {
            isCalls: true, // true = calls statistics, false = chat statistics

            generalCallsData: null,
            generalChatsData: null,
            journalData: null,
            journalChatsData: null,
            activeMenuItem: 1, // by default active item = "Today"
            period: '',

            layoutData: [],

        };
    },
    created() {

        // TODO: rewrite initialising data for charts and journals blocks
        this.generalCallsData = generalCallsData;
        this.generalChatsData = generalChatsData;
        this.journalData = journalData;
        this.journalChatsData = journalChatsData


        this.period = this.calcDates();
        this.layoutData = this.generalCallsData;
    },
    mounted() {

    },
    methods: {
        switchStats(switcher) {
            if ((this.isCalls && switcher === 0) || (!this.isCalls && switcher === 1))
                this.isCalls = !this.isCalls;
        },
        changePeriod(newActive) {
            if (newActive !== this.activeMenuItem) {
                this.activeMenuItem = newActive;
                // TODO: set data for new period (1 - today? 2 - yesterday, 3 - 7 days ets)
            }
            this.period = this.calcDates();
        },
        calcDates() {
            let currentDate = new Date();
            let pastDate = new Date();
            switch (this.activeMenuItem) {
                case 1:
                    return this.formattedDate(currentDate);
                    break;
                case 2:
                    currentDate.setDate(currentDate.getDate() - 1);
                    return this.formattedDate(currentDate);
                    break;
                case 3:
                    pastDate.setDate(pastDate.getDate() - 6);
                    return this.formattedDate(pastDate) + ' - ' + this.formattedDate(currentDate);
                    break;
                case 4:
                    pastDate.setMonth(pastDate.getMonth() - 1);
                    pastDate.setDate(pastDate.getDate() + 1);
                    return this.formattedDate(pastDate) + ' - ' + this.formattedDate(currentDate);
                    break;
                case 5:
                    pastDate.setMonth(pastDate.getMonth() - 6);
                    pastDate.setDate(pastDate.getDate() + 1);
                    return this.formattedDate(pastDate) + ' - ' + this.formattedDate(currentDate);
                    break;
                case 6:
                    pastDate.setFullYear(pastDate.getFullYear() - 1);
                    pastDate.setDate(pastDate.getDate() + 1);
                    return this.formattedDate(pastDate) + ' - ' + this.formattedDate(currentDate);
                    break;

            }
        },
        formattedDate(date) {
            let dd = date.getDate();
            if (dd < 10) dd = '0' + dd;

            let mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;

            let yy = date.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;

            return dd + '/' + mm + '/' + yy;
        }
    },
    watch: {
        isCalls () {
            if (this.isCalls) {
                this.layoutData = this.generalCallsData;
            } else {
                this.layoutData = this.generalChatsData;
            }
        }
    }
}




