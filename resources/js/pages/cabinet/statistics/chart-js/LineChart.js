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
                            beginAtZero: true
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
                // tooltips: {}
            },
        }
    },
    mixins: [reactiveProp],
    props: {
        chartData: {
            type: Object,
            default: null
        }
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
