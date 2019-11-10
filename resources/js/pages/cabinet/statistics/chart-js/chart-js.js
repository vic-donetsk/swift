import LineChart from './LineChart.js'

export default {
    components: {
        LineChart
    },
    data: function () {
        return {
            chartDatas: null,
        };
    },
    props: [ 'dataSet' ],
    mounted() {

        this.showChart();

    },
    methods: {

        showChart() {
            let diagram = document.getElementById(this.dataSet.chartId);
            let ctx = diagram.lastChild.getContext("2d");
            /*** Gradient ***/
            let gradient = ctx.createLinearGradient(0, 0, 0, diagram.clientHeight);
            gradient.addColorStop(0, this.dataSet.gradientFrom);
            gradient.addColorStop(1, this.dataSet.gradientTo);

            console.log(this.dataSet);

            this.chartDatas = {
                labels: this.dataSet.chartLabels,
                datasets: [
                    {
                        backgroundColor: gradient,
                        borderColor: '#608ED3',  // chart line color
                        borderWidth: 2, // chart line width
                        pointRadius: 0, // disable points on chart line
                        data: this.dataSet.chartData
                    }
                ]
            };

         }
    },
    // watch: {
    //     chartData () {
    //         console.log(this.chartData)
    //     }
    // }
}
