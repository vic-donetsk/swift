export default {
    data: function () {
        return {
            home: true,
            title: "Главная"
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
