import ChartJs from './../../../components/chart-js/chart-js.vue'
//import Chart from 'chart.js';

export default {
    components: {
        'chart-js': ChartJs
    },
    data: function () {
        return {
            chartLabels : ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
            chartData : [25.0, 32.4, 22.2, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4]

        };
    },
    created() {

    },
    mounted() {

        // this.showChart();

    },
    methods: {

        // showChart() {
        //     let diagram = document.getElementById("firstBig");
        //     let ctx = diagram.getContext("2d");
        //     let diagramTitle = 'Test diagram';
        //
        //     /*** Gradient ***/
        //     let gradient = ctx.createLinearGradient(0, 0, 0, diagram.clientHeight);
        //     gradient.addColorStop(0, 'rgba(110,166,242,0.58)');
        //     gradient.addColorStop(1, 'rgba(186,199,252,0.2)');
        //
        //     let myChart = new Chart(ctx, {
        //         type: 'line',
        //         /***************/
        //
        //         data: {
        //             labels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        //             datasets: [
        //                 {
        //                     backgroundColor: gradient,
        //                     borderColor: '#608ED3',  // chart line color
        //                     borderWidth: 2, // chart line width
        //                     pointRadius: 0, // disable points on chart line
        //                     data: [25.0, 32.4, 22.2, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4]
        //                 }
        //             ]
        //         },
        //
        //         options: {
        //
        //             legend: {
        //                 display: false, // turn off the title
        //
        //
        //             },
        //
        //             responsive: true,
        //             maintainAspectRatio: false, // to cover window sizes
        //
        //             scales: {
        //                 yAxes: [{
        //                     display: false,
        //                     ticks: {
        //                         beginAtZero: true
        //                     },
        //                     gridLines: {  // do not show grid
        //                         display: false
        //                     }
        //                 }],
        //                 xAxes: [{
        //                     display: false,
        //                     gridLines: {  // do not show grid
        //                         display: false
        //                     }
        //                 }],
        //             },
        //
        //             tooltips: {
        //                 // // Disable the on-canvas tooltip
        //                 // enabled: false,
        //                 //
        //                 // custom: function (tooltip) {
        //                 //     // Tooltip Element
        //                 //     let tooltipEl = document.getElementById('chartjs-tooltip');
        //                 //     console.log(tooltip);
        //                 //     console.log(tooltip.label);
        //                 //     let thisLabel = label;
        //                 //         // tooltip.dataPoints[0].label;
        //                 //     console.log(tooltip.dataPoints[0].value);
        //                 //     let thisValue = tooltip.dataPoints[0].value;
        //                 //
        //                 //     if (!tooltip) {
        //                 //         tooltipEl.css({
        //                 //             opacity: 0
        //                 //         });
        //                 //         return;
        //                 //     }
        //                 //
        //                 //     tooltipEl.classList.remove('above', 'below');
        //                 //     tooltipEl.classList.add(tooltip.yAlign);
        //                 //
        //                 //     // split out the label and value and make your own tooltip here
        //                 //     // var parts = tooltip.text.split(":");
        //                 //     let innerHtml = '<span>' + thisLabel + '</span>' + diagramTitle  + '<span><b>' + thisValue + '</b></span>';
        //                 //     tooltipEl.innerHTML = innerHtml;
        //                 //
        //                 //     let position = this._chart.canvas.getBoundingClientRect();
        //                 //
        //                 //     tooltipEl.style.opacity = 1;
        //                 //     tooltipEl.style.position = 'absolute';
        //                 //     tooltipEl.style.left = position.left + window.pageXOffset + tooltip.caretX + 'px';
        //                 //     tooltipEl.style.top = position.top + window.pageYOffset + tooltip.caretY + 'px';
        //                 //     tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
        //                 //     tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
        //                 //     tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
        //                 //     tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
        //                 //     tooltipEl.style.pointerEvents = 'none';
        //                 // }
        //             }
        //
        //         }
        //     });
        // }
    }
}




