import noUiSlider from 'noUiSlider';
import 'nouislider/distribute/nouislider.css';

export default {
    data() {
        return {
            mondayFridayResult: [],
            saturdayResult: [],
        }
    },
    methods: {
        minutesToHHMM(value) {
            value = Math.round(value);
            let hour = Math.floor(value / 60);
            let min = value - hour * 60;
            //console.log("value:" + value + "\thour: " + hour + "\tmin: " + min)
            return ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2);
        },
        HHMMtoMinutes(value) {
            let split = value.toString().split(":");
            let hour = parseInt(split[0], 10) * 60;
            let min = parseInt(split[1], 10);
            //console.log("value: " + value + "\thour: " + hour + "\tmin " + min);
            return hour + min;
        }
    },
    mounted() {
        //mondayFriday
        let mondayFriday = document.getElementById('monday-friday');
        noUiSlider.create(mondayFriday, {
            start: ["08:30", "12:30", "13:15", "17:35"],
            margin: 15,
            range: {
                'min': 0,
                'max': 24 * 60 - 1
            },
            format: {
                to: this.minutesToHHMM,
                from: this.HHMMtoMinutes
            }
        }).on('slide', () => {
            this.mondayFridayResult = mondayFriday.noUiSlider.get();
        });
        this.mondayFridayResult = mondayFriday.noUiSlider.options.start;

        //saturday
        let saturday = document.getElementById('saturday');
        noUiSlider.create(saturday, {
            start: ["09:30", "12:30", "13:15", "17:00"],
            margin: 15,
            range: {
                'min': 0,
                'max': 24 * 60 - 1
            },
            format: {
                to: this.minutesToHHMM,
                from: this.HHMMtoMinutes
            }
        }).on('slide', () => {
            this.saturdayResult = saturday.noUiSlider.get();
        });
        this.saturdayResult = saturday.noUiSlider.options.start;
    }
}