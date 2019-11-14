export default [
    // Calls charts data
    {
        // constants
        chartId: "total",
        chartTitle: 'TOTAL CALLS',
        avatar: "/img/charts/total.svg",
        color: '#608ED3',
        gradientFrom: "rgba(110,166,242,0.58)",
        gradientTo: "rgba(186,199,252,0.2)",
        chartSize: 'mod_big',

        // variables
        // TODO: rewrite this data for all charts
        total: "300",
        isIncrease: true,
        percentage: 12,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 26.0, 27.2, 28.0, 29.2, 30.0, 31.2, 32.1, 33.0, 34.4, 35.1, 36.4]
    },
    {
        // constants
        chartId: "visitors",
        chartTitle: 'VISITORS',
        avatar: "/img/charts/visitors.svg",
        color: '#8579C3',
        gradientFrom: "rgba(146,110,242,0.58)",
        gradientTo: "rgba(211,204,251,0.2)",
        chartSize: 'mod_big',

        // variables
        // TODO: rewrite this data for all charts
        total: "150",
        isIncrease: false,
        percentage: 4.2,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 32.4, 22.2, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 24, 26.2, 28.5],
    },
    {
        // constants
        chartId: "successCalls",
        chartTitle: 'SUCCESS CALLS',
        avatar: "/img/charts/success.svg",
        color: '#80C696',
        gradientFrom: "rgba(87,230,131,0.58)",
        gradientTo: "rgba(185,253,205,0.2)",
        chartSize: 'mod_small',

        // variables
        // TODO: rewrite this data for all charts
        total: "280",
        isIncrease: true,
        percentage: 8,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 32.4, 33, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4],
    },
    {
        // constants
        chartId: "lostCalls",
        chartTitle: 'LOST CALLS',
        avatar: "/img/charts/lost.svg",
        color: '#E88082',
        gradientFrom: "rgba(242,110,110,0.58)",
        gradientTo: "rgba(250,196,199,0.2)",
        chartSize: 'mod_small',

        // variables
        // TODO: rewrite this data for all charts
        total: "20",
        isIncrease: false,
        percentage: 5.1,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 18, 22.2, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4],
    },
    {
        // constants
        chartId: "durationAverage",
        chartTitle: 'AVERAGE CALL DURATION (HOURS)',
        avatar: "/img/charts/duration.svg",
        color: '#FCF767',
        gradientFrom: "rgba(245,239,80,0.61)",
        gradientTo: "rgba(252,248,169,0.24)",
        chartSize: 'mod_small',

        // variables
        // TODO: rewrite this data for all charts
        total: "5",
        isIncrease: true,
        percentage: 7.8,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 32.4, 22.2, 14, 16.5, 18.4, 23.2, 24.1, 27.3, 29.1, 31.3, 28],
    },
    {
        // constants
        chartId: "durationTotal",
        chartTitle: 'TOTAL DURATION OF CALLS (HOURS)',
        avatar: "/img/charts/duration.svg",
        color: '#F8C156',
        gradientFrom: "rgba(242,196,110,0.58)",
        gradientTo: "rgba(247,221,170,0.24)",
        chartSize: 'mod_small',

        // variables
        // TODO: rewrite this data for all charts
        total: "489",
        isIncrease: false,
        percentage: 4.3,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 32.4, 22.2, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4],
    },
]
