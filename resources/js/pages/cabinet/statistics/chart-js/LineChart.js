import {Line, mixins} from 'vue-chartjs'

const {reactiveProp} = mixins

export default {
    extends: Line,
    data() {
        return {
            options: {},
        }
    },
    mixins: [reactiveProp],
    props: {
        chartData: {
            type: Object,
            default: null
        },
        chartTitle: {
            type: String,
            default: ''
        },
    },
    mounted() {
        this.prepareOptions(this.chartTitle);
        this.renderChart(this.chartData, this.options);
    },
    methods: {
        prepareOptions(chartTitle) {

            chartTitle = chartTitle.charAt(0).toUpperCase() + chartTitle.slice(1).toLowerCase();

            this.options = {

                legend: {
                    display: false, // turn off the title
                },

                responsive: true,
                maintainAspectRatio: false, // to cover window sizes

                scales: {
                    yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 42
                        },
                        gridLines: {  // do not show grid
                            display: false
                        }
                    }],
                    xAxes: [{
                        display: false,
                        gridLines: {  // do not show grid
                            display: false
                        }
                    }],
                },
                tooltips: {
                    intersect: false,
                    backgroundColor: '#37455F',
                    titleFontFamily: 'Axiforma',
                    titleFontSize: 12,
                    titleFontStyle: '400',
                    titleFontColor: '#BBC6D9',
                    titleSpacing: 10,
                    bodyFontFamily: 'Axiforma',
                    bodyFontSize: 12,
                    bodyFontStyle: '300',
                    bodyAlign: 'right',
                    bodyFontColor: '#fff',
                    bodySpacing: 10,
                    xPadding: 17,
                    yPadding: 16,
                    caretSize: 0,
                    cornerRadius: 9,
                    borderColor: 'rgba(19, 34, 60, 0.21)',
                    borderWidth: 5,

                    callbacks: {
                        label: function (tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].value || '';

                            return chartTitle + '   ' + tooltipItem.value;
                        }
                    },
                }
            }
        }
    },

    watch: {

        chartData() {
            this.prepareOptions(this.chartTitle);
            this.renderChart(this.chartData, this.options);
        }
    }
}
