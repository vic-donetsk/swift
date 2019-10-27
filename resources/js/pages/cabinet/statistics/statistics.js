import ChartJs from './chart-js/chart-js.vue'
import Journal from './journal/journal.vue'

export default {
    components: {
        'chart-js': ChartJs,
        'statistics-journal' : Journal
    },
    data: function () {
        return {
            generalChartsData: null,
            journalData: null,
            activeMenuItem :1, // by default active item = "Today"
            period: ''
        };
    },
    created() {
        // TODO: rewrite initialising data for activeMenuItem
        this.generalChartsData = {
            "totalCalls": {
                chartLabels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
                chartData: [25.0, 26, 22.2, 29.0, 34.2, 27.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4]
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
        };
        this.period = this.calcDates();
        // TODO: rewrite initialising data for Journal block
        this.journalData = [
            { date: '27/10/2019', time: '17-09', callStatus: true, duration: '07-15', clientNumber: '+38-095-698-62-73', managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky', email: 'pavlovskyi.va@gmail.com', source:'Pi.md/ejbgeqd', homePage: 'Pi.md/ejbgeqd', callPage: 'Pi.md/ejbgeqd', ip: '192.82.184.1', notes: 'The best client in the world', region: 'Mariupol' },
            { date: '27/10/2019', time: '17-09', callStatus: true, duration: '07-15', clientNumber: '+38-095-698-62-73', managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky', email: 'pavlovskyi.va@gmail.com', source:'Pi.md/ejbgeqd', homePage: 'Pi.md/ejbgeqd', callPage: 'Pi.md/ejbgeqd', ip: '192.82.184.1', notes: 'The best client in the world', region: 'Mariupol' },
            { date: '27/10/2019', time: '17-09', callStatus: false, duration: '07-15', clientNumber: '+38-095-698-62-73', managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky', email: 'pavlovskyi.va@gmail.com', source:'Pi.md/ejbgeqd', homePage: 'Pi.md/ejbgeqd', callPage: 'Pi.md/ejbgeqd', ip: '192.82.184.1', notes: 'The best client in the world', region: 'Mariupol' },
            { date: '27/10/2019', time: '17-09', callStatus: true, duration: '07-15', clientNumber: '+38-095-698-62-73', managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky', email: 'pavlovskyi.va@gmail.com', source:'Pi.md/ejbgeqd', homePage: 'Pi.md/ejbgeqd', callPage: 'Pi.md/ejbgeqd', ip: '192.82.184.1', notes: 'The best client in the world', region: 'Mariupol' },
            { date: '27/10/2019', time: '17-09', callStatus: true, duration: '07-15', clientNumber: '+38-095-698-62-73', managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky', email: 'pavlovskyi.va@gmail.com', source:'Pi.md/ejbgeqd', homePage: 'Pi.md/ejbgeqd', callPage: 'Pi.md/ejbgeqd', ip: '192.82.184.1', notes: 'The best client in the world', region: 'Mariupol' },
            { date: '27/10/2019', time: '17-09', callStatus: true, duration: '07-15', clientNumber: '+38-095-698-62-73', managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky', email: 'pavlovskyi.va@gmail.com', source:'Pi.md/ejbgeqd', homePage: 'Pi.md/ejbgeqd', callPage: 'Pi.md/ejbgeqd', ip: '192.82.184.1', notes: 'The best client in the world', region: 'Mariupol' },
            { date: '27/10/2019', time: '17-09', callStatus: true, duration: '07-15', clientNumber: '+38-095-698-62-73', managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky', email: 'pavlovskyi.va@gmail.com', source:'Pi.md/ejbgeqd', homePage: 'Pi.md/ejbgeqd', callPage: 'Pi.md/ejbgeqd', ip: '192.82.184.1', notes: 'The best client in the world', region: 'Mariupol' },
            { date: '27/10/2019', time: '17-09', callStatus: true, duration: '07-15', clientNumber: '+38-095-698-62-73', managerNumber: '+373(78)792000',
                clientName: 'Vic Pavlovsky', email: 'pavlovskyi.va@gmail.com', source:'Pi.md/ejbgeqd', homePage: 'Pi.md/ejbgeqd', callPage: 'Pi.md/ejbgeqd', ip: '192.82.184.1', notes: 'The best client in the world', region: 'Mariupol' },
        ]
    },
    mounted() {

    },
    methods: {
        changePeriod(newActive) {
            if (newActive !== this.activeMenuItem) {
                this.activeMenuItem = newActive;
                // TODO: set data for new period (1 - today? 2 - yesterday, 3 - 7 days ets) to this.generalChartsData
            }
            this.period = this.calcDates();
        },
        calcDates() {
            let currentDate =  new Date();
            let pastDate =  new Date();
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




