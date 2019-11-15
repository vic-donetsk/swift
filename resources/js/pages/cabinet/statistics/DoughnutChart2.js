import {Doughnut, mixins} from 'vue-chartjs'

const {reactiveProp} = mixins

export default {
    extends: Doughnut,
    data() {
        return {
            options: {
                legend: {
                    display: false, // turn off the title
                },
                responsive: true,
                maintainAspectRatio: false, // to cover window sizes
                cutoutPercentage: 78, // not filling part in center (%)
                tooltips: {
                    enabled: false
                }
            }

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
        chartData() {
            this.renderChart(this.chartData, this.options);
        }
    }
}
