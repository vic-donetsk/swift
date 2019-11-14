export default [
    // Chats charts data
    {
        // constants
        chartId: "totalChats",
        chartTitle: 'CHATS IN TOTAL',
        avatar: "/img/charts/chat-total.svg",
        color: '#608ED3',
        gradientFrom: "rgba(110,166,242,0.58)",
        gradientTo: "rgba(186,199,252,0.2)",
        chartSize: 'mod_medium',

        // variables
        // TODO: rewrite this data for all charts
        total: "258",
        isIncrease: true,
        percentage: 11,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 40, 38, 28.0, 29.2, 30.0, 31.2, 32.1, 33.0, 34.4, 35.1, 36.4],
    },
    {
        // constants
        chartId: "successChats",
        chartTitle: 'FEEDBACK CHATS',
        avatar: "/img/charts/chat-success.svg",
        color: '#80C696',
        gradientFrom: "rgba(87,230,131,0.58)",
        gradientTo: "rgba(185,253,205,0.2)",
        chartSize: 'mod_medium',

        // variables
        // TODO: rewrite this data for all charts
        total: "250",
        isIncrease: false,
        percentage: 4.8,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 26.0, 27.2, 40, 38, 30.0, 31.2, 32.1, 33.0, 34.4, 35.1, 36.4],
    },
    {
        // constants
        chartId: "failChats",
        chartTitle: 'CHATS WITHOUT FEEDBACK',
        avatar: "/img/charts/chat-fail.svg",
        color: '#E88082',
        gradientFrom: "rgba(242,110,110,0.58)",
        gradientTo: "rgba(250,196,199,0.2)",
        chartSize: 'mod_medium',

        // variables
        // TODO: rewrite this data for all charts
        total: "8",
        isIncrease: true,
        percentage: 6,
        chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
        chartData: [25.0, 26.0, 27.2, 28.0, 29.2, 30.0, 31.2, 40, 38.0, 34.4, 35.1, 36.4],
    },
]
