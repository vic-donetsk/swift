import ChartJs from './chart-js/chart-js.vue'
import Journal from './journal/journal.vue'
import DoughnutChart from './DoughnutChart.js'
import DoughnutChart2 from './DoughnutChart.js'


// import test data arrays from test files
import generalCallsData from './testCallsChartsData'
import generalChatsData from './testChatsChartsData'
import journalData from './testCallsJournalData'
import journalChatsData from './testChatsJournalData'


export default {
    components: {
        'chart-js': ChartJs,
        'statistics-journal': Journal,
        'doughnut-chart2': DoughnutChart2,
        DoughnutChart,
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

            chartColors: {red : '#D55050', yellow : '#FAD27A', green : '#77C55F'},
            //if percentage of remained is less than this value, chat will be yellow
            warningBorder: 40,
            //if percentage of remained is less than this value, chat will be red
            criticalBorder: 20,
            // charts colors
            abonementData: null,
            showTariffMinutes: false,
            showCurrentMinutes: false,
            showCurrentSMS: false,
            chartData: null

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

        // TODO: set real state of tariff's values instead of this
        this.abonementData = {

            currentMinutes: {
                total: 100,
                consumed: 85,
                percent: 0,
                color: ''
            },
            currentSMS: {
                total: 60,
                consumed: 10,
                percent: 0,
                color: ''
            },
        };
        for (let element in this.abonementData) {
            let percent = Math.ceil((this.abonementData[element].total - this.abonementData[element].consumed)/this.abonementData[element].total*100);
            this.abonementData[element].percent = percent;
            if (percent > this.warningBorder) {
                this.abonementData[element].color = this.chartColors.green;
            } else if (percent < this.criticalBorder) {
                this.abonementData[element].color = this.chartColors.red;
            } else {
                this.abonementData[element].color = this.chartColors.yellow;
            }
        }
    },
    mounted() {
        this.showChart('currentMinutes', this.abonementData.currentMinutes);
        this.showChart('currentSMS', this.abonementData.currentSMS);
    },
    methods: {
        showMobileInfo() {
            $('.statistics_mobileDiagrams').toggleClass('mod_show');
        },
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
        },
        showChart(chartElement, chartData) {

            let preparedData = [];

            preparedData.push(chartData.consumed);
            preparedData.push(chartData.total - chartData.consumed);

            this.chartData = {
                datasets: [{
                    data: preparedData,
                    backgroundColor: ['#fff', chartData.color],
                    borderWidth: 0
                }],
            };
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




