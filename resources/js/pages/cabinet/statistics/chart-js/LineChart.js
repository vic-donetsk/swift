import {Line, mixins} from 'vue-chartjs'

const {reactiveProp} = mixins

export default {
    extends: Line,
    data() {
        return {
            options: {

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
                    bodyFontFamily: 'Axiforma',
                    bodyFontSize: 12,
                    bodyFontStyle: '300',
                    bodyAlign: 'right',
                    bodyFontColor: '#fff',
                    xPadding: 15,
                    yPadding: 15,
                    caretSize: 0,
                    cornerRadius: 9,

                    callbacks: {
                        label: function(tooltipItem, data) {
                            var value = data.datasets[tooltipItem.datasetIndex].value || '';

                            return this.chartTitle + tooltipItem.value;
                        }
                    },
                }
            },
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
        this.renderChart(this.chartData, this.options);
    },
    watch: {
        chartData () {
            this.renderChart(this.chartData, this.options);
        }
    }
}
