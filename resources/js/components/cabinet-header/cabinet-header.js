import Logo from './../../components/logo/logo.vue';

export default {
    components: {
        'logo': Logo,
    },
    data: function () {
        return {
            chartColors: {red: '#d55050', yellow: '#fad27a', green: '#77c55f'},
            //if percentage of remained is less than this value, chat will be yellow
            warningBorder: 40,
            //if percentage of remained is less than this value, chat will be red
            criticalBorder: 20,
            // charts colors
            abonementData: null,
            showTariffMinutes: false,
            showCurrentMinutes: false,
            showCurrentSMS: false,
            notify: true
        }
    },
    created() {
        // TODO: set real state of tariff's values instead of this
        this.abonementData = {
            tariffMinutes: {
                total: 150,
                consumed: 35,
                percent: 0,
                color: ''
            },
            currentMinutes: {
                total: 100,
                consumed: 85,
                percent: 0,
                color: ''
            },
            currentSMS: {
                total: 60,
                consumed: 45,
                percent: 0,
                color: ''
            },
        };
        for (let element in this.abonementData) {
            let percent = Math.ceil((this.abonementData[element].total - this.abonementData[element].consumed) / this.abonementData[element].total * 100);
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
        EventBus.$on('notify-viewed', () => {
            this.notify = false;
        });
    },
    methods: {
        toggleNotify() {
            EventBus.$emit('toggle-notify');
            EventBus.$emit('notify-viewed');
        },
        showChart(element) {
            if (!this[element]) {
                this[element] = !this[element];
                let chartElement = element.replace('show', '');
                chartElement = chartElement.charAt(0).toLowerCase() + chartElement.slice(1);
                this.makeChart(chartElement, this.abonementData[chartElement]);
            }
        },
        hideChart(element) {
            if (this[element]) {
                this[element] = !this[element];
            }
        },

        makeChart(chartElement, chartData) {
            //charts data
            let preparedData = [];
            let diagram = document.getElementById(chartElement);
            let ctx = diagram.getContext("2d");

            preparedData.push(chartData.consumed);
            preparedData.push(chartData.total - chartData.consumed);

            let data = {
                datasets: [{
                    data: preparedData,
                    backgroundColor: ['#fff', chartData.color],
                    borderWidth: 0
                }],
            };

            let options = {
                legend: {
                    display: false, // turn off the title
                },
                responsive: true,
                maintainAspectRatio: false, // to cover window sizes
                cutoutPercentage: 78, // not filling part in center (%)
                tooltips: {
                    enabled: false
                }
            };

            let myChart = new Chart(ctx, {
                type: 'doughnut',
                data: data,
                options: options
            });
        }
    }
}

