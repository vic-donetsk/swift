import noUiSlider from 'noUiSlider';
import 'nouislider/distribute/nouislider.css';

export default {
    data: function () {
        return {
            radioChecked: 'schedule-1',
            mondayFridayResult: [],
            saturdayResult: [],
            sundayResult: [],
            mondayFriday: false,
            saturday: false,
            sunday: false,
            sliderShow1: true,
            sliderShow2: true,
            sliderShow3: false

        };
    },
    methods: {
        changeSchedule(value) {
            if (value === 'schedule-1') {
                this.mondayFriday.noUiSlider.set(
                    ["08:30", "12:30", "13:15", "17:35"]
                );
                this.saturday.noUiSlider.set(
                    ["09:30", "12:30", "13:15", "17:00"]
                );

                this.sliderShow2 = true;
                this.sliderShow3 = false;
            }

            if (value === 'schedule-2') {
                this.mondayFriday.noUiSlider.set(
                    ["08:30", "12:30", "13:15", "17:35"]
                );

                this.sliderShow2 = false;
                this.sliderShow3 = false;
            }

            if (value === 'schedule-3') {
                this.mondayFriday.noUiSlider.set(
                    ["08:00", "13:00", "13:45", "17:00"]
                );

                this.sliderShow2 = false;
                this.sliderShow3 = false;
            }

            this.mondayFridayResult = this.mondayFriday.noUiSlider.get();
            this.saturdayResult = this.saturday.noUiSlider.get();
        },
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
        },
        mondayFridayInit() {
            this.mondayFriday = document.getElementById('monday-friday');
            noUiSlider.create(this.mondayFriday, {
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
                this.mondayFridayResult = this.mondayFriday.noUiSlider.get();
            });
            this.mondayFridayResult = this.mondayFriday.noUiSlider.options.start;
        },
        saturdayInit() {
            this.saturday = document.getElementById('saturday');
            noUiSlider.create(this.saturday, {
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
                this.saturdayResult = this.saturday.noUiSlider.get();
            });
            this.saturdayResult = this.saturday.noUiSlider.options.start;
        },
        sundayInit() {
            this.sunday = document.getElementById('sunday');
            noUiSlider.create(this.sunday, {
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
                this.sundayResult = this.sunday.noUiSlider.get();
            });
            this.sundayResult = this.sunday.noUiSlider.options.start;
        }
    },
    mounted() {
        this.mondayFridayInit();
        this.saturdayInit();
        this.sundayInit();
    }
}
