export default {
    data: function () {
        return {
            sessions: [],
            openFullMobile: -1,


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
            {
                client: "Android",
                isDesktop: false,   // true == desktop, false == mobile
                address: "192.85.124.512",
                country: "Republica Moldova",
                activity: "11/08/2019, 21:06",
                isActive: false

            },
            {
                client: "Microsoft Windows",
                isDesktop: true,   // true == desktop, false == mobile
                address: "192.85.124.512",
                country: "Republica Moldova",
                activity: "11/08/2019, 21:06",
                isActive: false

            },
            {
                client: "I-Phone",
                isDesktop: false,   // true == desktop, false == mobile
                address: "192.85.124.512",
                country: "Republica Moldova",
                activity: "11/08/2019, 21:06",
                isActive: true

            },

        ];

    },
    methods: {

        signOut(index) {
            if (this.openFullMobile != -1) {
                let activeElem = document.querySelector('#rowFull' + this.openFullMobile);
                let activeSign = document.querySelector('#sign' + this.openFullMobile);
                activeElem.style.height = 0;
                activeSign.classList.remove('mod_open');
                activeSign.classList.add('mod_closed');
                this.openFullMobile = -1;
            }
            this.sessions.splice(index, 1);

            // TODO: save updated sessions list
        },

        mobileShowDetails(newOpen, elemHeight) {
            let activeElem = document.querySelector('#rowFull' + newOpen);
            let activeSign = document.querySelector('#sign' + newOpen);

            if (newOpen === this.openFullMobile) {
                activeElem.style.height = 0;
                activeSign.classList.remove('mod_open');
                activeSign.classList.add('mod_closed');
                this.openFullMobile = -1;
            } else {
                if (this.openFullMobile !== -1) {
                    let prevElem = document.querySelector("#rowFull" + this.openFullMobile);
                    let prevSign = document.querySelector("#sign" + this.openFullMobile);
                    prevElem.style.height = 0;
                    prevSign.classList.remove('mod_open');
                    prevSign.classList.add('mod_closed');
                }
                activeElem.style.height = elemHeight;
                activeSign.classList.remove('mod_closed');
                activeSign.classList.add('mod_open');
                this.openFullMobile = newOpen;
            }
        },

    }
}
