export default {
    data: function () {
        return {
            sessions: []


        }
    },
    created() {
        // TODO: load real sessions data into this.blacklist
        this.sessions = [
            {
                client: "Macintosh, Chrome",
                isDesktop: true,   // true == desktop, false == mobile
                address: "192.85.124.512",
                country: "Republica Moldova",
                activity: "11/08/2019, 21:06",
                isActive: true

             },

        ];

    },
    methods: {

        deleteSessionItem(index) {
            this.sessions.splice(index,1);
            // TODO: save updated sessions list
        }

    }
}
