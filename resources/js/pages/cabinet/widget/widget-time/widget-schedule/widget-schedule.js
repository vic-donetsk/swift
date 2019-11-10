import noUiSlider from 'noUiSlider';
import 'nouislider/distribute/nouislider.css';

export default {
    data() {
        return {
            sliders: [
                {
                    id: 'monday-friday',
                    start: ["08:30", "12:30", "13:15", "17:35"],
                    name: "mondayFriday"
                },
                {
                    id: 'saturday',
                    start: ["08:30", "12:30", "13:15", "17:35"],
                    name: "saturday"
                }
            ],
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
        },
    },
    created() {
        this.mondayFridayResult = this.sliders[0].start;
        this.saturdayResult = this.sliders[1].start;
    },
    mounted() {
        this.sliders.forEach((item, index) => {
            let sliderName = item.name;
            sliderName = document.getElementById(item.id);
            noUiSlider.create(sliderName, {
                start: item.start,
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
                if (item.name === 'mondayFriday') {
                    this.mondayFridayResult = sliderName.noUiSlider.get();
                } else if (item.name === 'saturday') {
                    this.saturdayResult = sliderName.noUiSlider.get();
                }
            });
        });

    }
}