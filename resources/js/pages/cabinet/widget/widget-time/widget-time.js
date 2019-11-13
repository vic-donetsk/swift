import noUiSlider from 'noUiSlider';
import 'nouislider/distribute/nouislider.css';

import Vue from "Vue";

export default {
    data: function () {
        return {
            radioChecked: 'schedule-1',
            results: {
                mondayFridayResult: [],
                saturdayResult: [],
                sundayResult: [],
            },
            mondayFriday: false,
            saturday: false,
            sunday: false,
            sliderShow1: true,
            sliderShow2: true,
            sliderShow3: false,
            overlayShow: false,
            currentHour: '00',
            currentMinute: '00'
        };
    },
    methods: {
        changeHour(hour, resultName, indexResult) {
            Vue.set(this.results[resultName], indexResult,
                hour.toString() + ':' + this.currentMinute);

            //todo: выделить и текущего элемента минуты и прибавляь к часам
            console.log(this.results[resultName])
        },
        changeMinute(minute, resultName, indexResult) {
            //todo: выделить и текущего элемента часы и прибавляь к минутам
        },
        hmFormat(val) {
            return val < 10 ? '0' + val : val.toString();
        },
        timepickerToggle(e) {
            let $button = $(e.target);
            let $dropdown = $button.find('.dropdown_double');
            $dropdown.removeClass('mod_hide');
            this.overlayShow = true;
        },
        timepickerClose() {
            $('.timepicker .dropdown_double').addClass('mod_hide');
            this.overlayShow = false;
        },
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

            if (value === 'schedule-4') {
                this.mondayFriday.noUiSlider.set(
                    ["08:30", "12:30", "13:15", "17:35"]
                );
                this.saturday.noUiSlider.set(
                    ["09:30", "12:30", "13:15", "17:00"]
                );
                this.sunday.noUiSlider.set(
                    ["09:30", "12:30", "13:15", "17:00"]
                );

                this.sliderShow2 = true;
                this.sliderShow3 = true;
            }

            this.results.mondayFridayResult = this.mondayFriday.noUiSlider.get();
            this.results.saturdayResult = this.saturday.noUiSlider.get();
            this.results.sundayResult = this.sunday.noUiSlider.get();
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
                this.results.mondayFridayResult = this.mondayFriday.noUiSlider.get();
            });
            this.results.mondayFridayResult = this.mondayFriday.noUiSlider.options.start;
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
                this.results.saturdayResult = this.saturday.noUiSlider.get();
            });
            this.results.saturdayResult = this.saturday.noUiSlider.options.start;
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
                this.results.sundayResult = this.sunday.noUiSlider.get();
            });
            this.results.sundayResult = this.sunday.noUiSlider.options.start;
        },
        sundayShow() {
            this.sunday.noUiSlider.set(
                ["08:00", "12:00", "12:30", "17:00"]
            );
            this.results.sundayResult = this.sunday.noUiSlider.get();
            this.sliderShow3 = true;
        }
    },
    mounted() {
        this.mondayFridayInit();
        this.saturdayInit();
        this.sundayInit();
    }
}
