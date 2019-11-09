import LineChart from './LineChart.js'

export default {
    components: {
        LineChart
    },
    data: function () {
        return {
            chartDatas: null,
            chartOptions: null

        };
    },
    props: ['chartId', // id for html layout
        // header
        'chartTitle',  // Title of chart (f.e.APELURI TOTALE)
        'total',       // Total number in header (300)
        'isIncrease',  // boolean for increase/decrease total
        'percentage',  // percent of increasing
        'avatar',      // icon in right top corner
        // directly chat
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

            // this.chartOptions = {
            //
            //     legend: {
            //         display: false, // turn off the title
            //     },
            //
            //     responsive: true,
            //     maintainAspectRatio: false, // to cover window sizes
            //
            //     scales: {
            //         yAxes: [{
            //             display: false,
            //             ticks: {
            //                 beginAtZero: true
            //             },
            //             gridLines: {  // do not show grid
            //                 display: false
            //             }
            //         }],
            //         xAxes: [{
            //             display: false,
            //             gridLines: {  // do not show grid
            //                 display: false
            //             }
            //         }],
            //     },
            //
            //     tooltips: {
            //         // // Disable the on-canvas tooltip
            //         // enabled: false,
            //         //
            //         // custom: function (tooltip) {
            //         //     // Tooltip Element
            //         //     let tooltipEl = document.getElementById('chartjs-tooltip');
            //         //     console.log(tooltip);
            //         //     console.log(tooltip.label);
            //         //     let thisLabel = label;
            //         //         // tooltip.dataPoints[0].label;
            //         //     console.log(tooltip.dataPoints[0].value);
            //         //     let thisValue = tooltip.dataPoints[0].value;
            //         //
            //         //     if (!tooltip) {
            //         //         tooltipEl.css({
            //         //             opacity: 0
            //         //         });
            //         //         return;
            //         //     }
            //         //
            //         //     tooltipEl.classList.remove('above', 'below');
            //         //     tooltipEl.classList.add(tooltip.yAlign);
            //         //
            //         //     // split out the label and value and make your own tooltip here
            //         //     // var parts = tooltip.text.split(":");
            //         //     let innerHtml = '<span>' + thisLabel + '</span>' + diagramTitle  + '<span><b>' + thisValue + '</b></span>';
            //         //     tooltipEl.innerHTML = innerHtml;
            //         //
            //         //     let position = this._chart.canvas.getBoundingClientRect();
            //         //
            //         //     tooltipEl.style.opacity = 1;
            //         //     tooltipEl.style.position = 'absolute';
            //         //     tooltipEl.style.left = position.left + window.pageXOffset + tooltip.caretX + 'px';
            //         //     tooltipEl.style.top = position.top + window.pageYOffset + tooltip.caretY + 'px';
            //         //     tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
            //         //     tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
            //         //     tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
            //         //     tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
            //         //     tooltipEl.style.pointerEvents = 'none';
            //         // }
            //     }
            //
            // };



            // let myChart = new Chart(ctx, {
            //     type: 'line',
            //     /***************/
            //
            //     data: ,
            //
            //     options:
            // });
        }
    },
    // watch: {
    //     chartData () {
    //         console.log(this.chartData)
    //     }
    // }
}
