import ChartJs from './chart-js/chart-js.vue'
import Journal from './journal/journal.vue'

export default {
    components: {
        'chart-js': ChartJs,
        'statistics-journal': Journal
    },
    data: function () {
        return {
            isCalls: true, // true = calls statistics, false = chat statistics
            generalChartsData: null,
            journalData: null,
            journalChatsData: null,
            activeMenuItem: 1, // by default active item = "Today"
            period: ''
        };
    },
    created() {
        // TODO: rewrite initialising data for activeMenuItem
        this.generalChartsData = {
            // Calls charts data
            "totalCalls": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 26.0, 27.2, 28.0, 29.2, 30.0, 31.2, 32.1, 33.0, 34.4, 35.1, 36.4]
            },
            "visitors": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 32.4, 22.2, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 24, 26.2, 28.5]
            },
            "successCalls": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 32.4, 33, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4]
            },
            "lostCalls": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 18, 22.2, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4]
            },
            "durationAverage": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 32.4, 22.2, 14, 16.5, 18.4, 23.2, 24.1, 27.3, 29.1, 31.3, 28]
            },
            "durationTotal": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 32.4, 22.2, 36.0, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4]
            },
            // chat charts data
            "totalChats": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 26.0, 27.2, 28.0, 29.2, 30.0, 31.2, 32.1, 33.0, 34.4, 35.1, 36.4]
            },
            "successChats": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 26.0, 27.2, 28.0, 29.2, 30.0, 31.2, 32.1, 33.0, 34.4, 35.1, 36.4]
            },
            "failChats": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 26.0, 27.2, 28.0, 29.2, 30.0, 31.2, 32.1, 33.0, 34.4, 35.1, 36.4]
            },

        };
        this.period = this.calcDates();
        // TODO: rewrite initialising data for Calls Journal block
        this.journalData = [
            {
                date: '27/10/2019',
                time: '17-09',
                callStatus: true,
                duration: '07-15',
                clientNumber: '+38-095-698-62-73',
                managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky',
                email: 'pavlovskyi.va@gmail.com',
                source: 'Pi.md/ejbgeqd',
                homePage: 'Pi.md/ejbgeqd',
                callPage: 'Pi.md/ejbgeqd',
                ip: '192.82.184.1',
                notes: 'The best client in the world',
                region: 'Mariupol'
            },
            {
                date: '27/10/2019',
                time: '17-09',
                callStatus: true,
                duration: '07-15',
                clientNumber: '+38-095-698-62-73',
                managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky',
                email: 'pavlovskyi.va@gmail.com',
                source: 'Pi.md/ejbgeqd',
                homePage: 'Pi.md/ejbgeqd',
                callPage: 'Pi.md/ejbgeqd',
                ip: '192.82.184.1',
                notes: 'The best client in the world',
                region: 'Mariupol'
            },
            {
                date: '27/10/2019',
                time: '17-09',
                callStatus: false,
                duration: '07-15',
                clientNumber: '+38-095-698-62-73',
                managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky',
                email: 'pavlovskyi.va@gmail.com',
                source: 'Pi.md/ejbgeqd',
                homePage: 'Pi.md/ejbgeqd',
                callPage: 'Pi.md/ejbgeqd',
                ip: '192.82.184.1',
                notes: 'The best client in the world',
                region: 'Mariupol'
            },
            {
                date: '27/10/2019',
                time: '17-09',
                callStatus: true,
                duration: '07-15',
                clientNumber: '+38-095-698-62-73',
                managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky',
                email: 'pavlovskyi.va@gmail.com',
                source: 'Pi.md/ejbgeqd',
                homePage: 'Pi.md/ejbgeqd',
                callPage: 'Pi.md/ejbgeqd',
                ip: '192.82.184.1',
                notes: 'The best client in the world',
                region: 'Mariupol'
            },
            {
                date: '27/10/2019',
                time: '17-09',
                callStatus: true,
                duration: '07-15',
                clientNumber: '+38-095-698-62-73',
                managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky',
                email: 'pavlovskyi.va@gmail.com',
                source: 'Pi.md/ejbgeqd',
                homePage: 'Pi.md/ejbgeqd',
                callPage: 'Pi.md/ejbgeqd',
                ip: '192.82.184.1',
                notes: 'The best client in the world',
                region: 'Mariupol'
            },
            {
                date: '27/10/2019',
                time: '17-09',
                callStatus: true,
                duration: '07-15',
                clientNumber: '+38-095-698-62-73',
                managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky',
                email: 'pavlovskyi.va@gmail.com',
                source: 'Pi.md/ejbgeqd',
                homePage: 'Pi.md/ejbgeqd',
                callPage: 'Pi.md/ejbgeqd',
                ip: '192.82.184.1',
                notes: 'The best client in the world',
                region: 'Mariupol'
            },
            {
                date: '27/10/2019',
                time: '17-09',
                callStatus: true,
                duration: '07-15',
                clientNumber: '+38-095-698-62-73',
                managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky',
                email: 'pavlovskyi.va@gmail.com',
                source: 'Pi.md/ejbgeqd',
                homePage: 'Pi.md/ejbgeqd',
                callPage: 'Pi.md/ejbgeqd',
                ip: '192.82.184.1',
                notes: 'The best client in the world',
                region: 'Mariupol'
            },
            {
                date: '27/10/2019',
                time: '17-09',
                callStatus: true,
                duration: '07-15',
                clientNumber: '+38-095-698-62-73',
                managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky',
                email: 'pavlovskyi.va@gmail.com',
                source: 'Pi.md/ejbgeqd',
                homePage: 'Pi.md/ejbgeqd',
                callPage: 'Pi.md/ejbgeqd',
                ip: '192.82.184.1',
                notes: 'The best client in the world',
                region: 'Mariupol'
            },
        ],
            // TODO: rewrite initialising data for Chats Journal block
            this.journalChatsData = [
                {
                    date: '27/10/2019',
                    time: '17-09',
                    ID: '3057266',
                    source: 'telegram',
                    clientName: 'Vic Pavlovsky',
                    clientNumber: '+38-095-698-62-73',
                    email: 'pavlovskyi.va@gmail.com',
                    message: 'text message for chats table',
                },
                {
                    date: '27/10/2019',
                    time: '17-09',
                    ID: '3057266',
                    source: 'viber',
                    clientName: 'Vic Pavlovsky',
                    clientNumber: '+38-095-698-62-73',
                    email: 'pavlovskyi.va@gmail.com',
                    message: 'text message for chats table text message for chats table',
                },
                {
                    date: '27/10/2019',
                    time: '17-09',
                    ID: '3057266',
                    source: 'whatsapp',
                    clientName: 'Vic Pavlovsky',
                    clientNumber: '+38-095-698-62-73',
                    email: 'pavlovskyi.va@gmail.com',
                    message: 'text message for chats table',
                },

            ]
    },
    mounted() {

    },
    methods: {
        switchStats(switcher) {
            if ((this.isCalls && switcher === 0) || (!this.isCalls && switcher === 1))
                this.isCalls = !this.isCalls;
        },
        changePeriod(newActive) {
            if (newActive !== this.activeMenuItem) {
                this.activeMenuItem = newActive;
                // TODO: set data for new period (1 - today? 2 - yesterday, 3 - 7 days ets) to this.generalChartsData
            }
            this.period = this.calcDates();
        },
        calcDates() {
            let currentDate = new Date();
            let pastDate = new Date();
            switch (this.activeMenuItem) {
                case 1:
                    return this.formattedDate(currentDate);
                    break;
                case 2:
                    currentDate.setDate(currentDate.getDate() - 1);
                    return this.formattedDate(currentDate);
                    break;
                case 3:
                    pastDate.setDate(pastDate.getDate() - 6);
                    return this.formattedDate(pastDate) + ' - ' + this.formattedDate(currentDate);
                    break;
                case 4:
                    pastDate.setMonth(pastDate.getMonth() - 1);
                    pastDate.setDate(pastDate.getDate() + 1);
                    return this.formattedDate(pastDate) + ' - ' + this.formattedDate(currentDate);
                    break;
                case 5:
                    pastDate.setMonth(pastDate.getMonth() - 6);
                    pastDate.setDate(pastDate.getDate() + 1);
                    return this.formattedDate(pastDate) + ' - ' + this.formattedDate(currentDate);
                    break;
                case 6:
                    pastDate.setFullYear(pastDate.getFullYear() - 1);
                    pastDate.setDate(pastDate.getDate() + 1);
                    return this.formattedDate(pastDate) + ' - ' + this.formattedDate(currentDate);
                    break;

            }
        },
        formattedDate(date) {
            let dd = date.getDate();
            if (dd < 10) dd = '0' + dd;

            let mm = date.getMonth() + 1;
            if (mm < 10) mm = '0' + mm;

            let yy = date.getFullYear() % 100;
            if (yy < 10) yy = '0' + yy;

            return dd + '/' + mm + '/' + yy;
        }
    }
}




