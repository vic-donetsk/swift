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
    props: [
        'chartId', // id for html layout
        // header
        'chartTitle',  // Title of chart (f.e.APELURI TOTALE)
        'total',       // Total number in header (300)
        'isIncrease',  // boolean for increase/decrease total
        'percentage',  // percent of increasing
        'avatar',      // icon in right top corner
        // directly chart
        'gradientFrom',//
        'gradientTo',  // colors for filling (in RGBA)
        'chartLabels', // data for axis X
        'chartData'    // responsive value for axis Y
    ],
    mounted() {

        this.showChart();

    },
    methods: {

        showChart() {
            let diagram = document.getElementById(this.chartId);
            let ctx = diagram.lastChild.getContext("2d");
            /*** Gradient ***/
            let gradient = ctx.createLinearGradient(0, 0, 0, diagram.clientHeight);
            gradient.addColorStop(0, this.gradientFrom);
            gradient.addColorStop(1, this.gradientTo);

            this.chartDatas = {
                labels: this.chartLabels,
                datasets: [
                    {
                        backgroundColor: gradient,
                        borderColor: '#608ED3',  // chart line color
                        borderWidth: 2, // chart line width
                        pointRadius: 0, // disable points on chart line
                        data: this.chartData
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
