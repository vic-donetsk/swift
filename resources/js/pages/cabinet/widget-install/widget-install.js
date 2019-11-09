export default {
    data: function () {
        return {
            home: true,
            title: "Главная",
            link: '<script type=“text/javascript” src=“/ /cdn.swiftcallback.com/scb.js?_code=GOci36arhvKABLgA4i5rj3n8xTnx0DZD8” charset=“UTF-8”></script>'
        };
    },
    created() {
        this.title = "Лендинг 1";

        EventBus.$on('renameText', () => {
            this.title = "Лендинг 3";
        })
    },
    mounted() {
        setTimeout(() => {
            this.title = "Лендинг 2";
        }, 1000);

    },
    computed: {
        getTitle() {
            return this.title + ' - Вычисленный';
        }
    },
    methods: {
        goToAuth() {
            this.$router.push('/authentication');
        }
    }
}
