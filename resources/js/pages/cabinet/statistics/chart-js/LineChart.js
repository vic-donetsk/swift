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

                tooltips: {
                    // // Disable the on-canvas tooltip
                    // enabled: false,
                    //
                    // custom: function (tooltip) {
                    //     // Tooltip Element
                    //     let tooltipEl = document.getElementById('chartjs-tooltip');
                    //     console.log(tooltip);
                    //     console.log(tooltip.label);
                    //     let thisLabel = label;
                    //         // tooltip.dataPoints[0].label;
                    //     console.log(tooltip.dataPoints[0].value);
                    //     let thisValue = tooltip.dataPoints[0].value;
                    //
                    //     if (!tooltip) {
                    //         tooltipEl.css({
                    //             opacity: 0
                    //         });
                    //         return;
                    //     }
                    //
                    //     tooltipEl.classList.remove('above', 'below');
                    //     tooltipEl.classList.add(tooltip.yAlign);
                    //
                    //     // split out the label and value and make your own tooltip here
                    //     // var parts = tooltip.text.split(":");
                    //     let innerHtml = '<span>' + thisLabel + '</span>' + diagramTitle  + '<span><b>' + thisValue + '</b></span>';
                    //     tooltipEl.innerHTML = innerHtml;
                    //
                    //     let position = this._chart.canvas.getBoundingClientRect();
                    //
                    //     tooltipEl.style.opacity = 1;
                    //     tooltipEl.style.position = 'absolute';
                    //     tooltipEl.style.left = position.left + window.pageXOffset + tooltip.caretX + 'px';
                    //     tooltipEl.style.top = position.top + window.pageYOffset + tooltip.caretY + 'px';
                    //     tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
                    //     tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
                    //     tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
                    //     tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
                    //     tooltipEl.style.pointerEvents = 'none';
                    // }
                }


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
    }
}
