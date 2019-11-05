export default {
    data: function () {
        return {
            settingsMode: 0,
            settingChapters: [
                {title: 'general', svg: 'settings'},
                {title: 'api keys', svg: 'api_gear'},
                {title: 'blacklist', svg: 'cross'},
                {title: 'session', svg: 'global'}]
        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
        changeMode(mode) {
            if (this.settingMode !== mode)
                this.settingsMode = mode;
        }

    }
}
