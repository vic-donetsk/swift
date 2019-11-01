import WaveSurfer from 'wavesurfer.js';

export default {
    data: function () {
        return {
            // initial state of table columns: (is in 'checkedNames') === displayed
            checkedNames: [
                "date",
                "time",
                "callStatus",
                "duration",
                "clientNumber",
                "managerNumber",
                "clientName",
                "email",
                "source",
                "homePage",
                "callPage",
                "ip",
                "notes",
                "region"
            ],
            settingsMode: false,
            tableColumns: [
                {text: "Date", var: "date"},
                {text: "Time", var: "time"},
                {text: "Call status", var: "callStatus"},
                {text: "Duration", var: "duration"},
                {text: "Client number", var: "clientNumber"},
                {text: "Manager number", var: "managerNumber"},
                {text: "Client name", var: "clientName"},
                {text: "Email", var: "email"},
                {text: "Source", var: "source"},
                {text: "Home page", var: "homePage"},
                {text: "The page on which the call was made", var: "callPage"},
                {text: "IP", var: "ip"},
                {text: "Notes", var: "notes"},
                {text: "Region", var: "region"},
            ],
            tableChatsColumns: [
                "Date",
                "Time",
                "ID",
                "Source",
                "Client name",
                "Client number",
                "Email",
                "Message",
            ],
            // colors for chats icons
            chatsColors: {
                'viber': 'blue',
                'whatsapp': 'green',
                'telegram': 'red'
            },

            openFullMobile: -1,
            searchChatId: '',

            // wavesurfer block variables
            audioFlag: false,
            audioPlayerTop: 0,
            playMode: false,
            muteMode: false,
            wavesurfer: null,
            currentTime: '',
            duration: '',
            wavURL: '',
            wavName: ''
        };
    },

    props: ['isCalls', 'list'],

    mounted() {

        //this.openSettings();

    },
    methods: {
        openSettings() {
            if (!this.settingsMode) {
                //this.settingsMode = true;
                document.addEventListener('click', this.handleSettingsClick);
            }
        },
        handleSettingsClick(e) {
            if (this.settingsMode) {
                let container = document.querySelector(".statistics_tableColumns-customize");
                if ($(container).has(e.target).length === 0) {
                    this.closeSettings();
                }
            } else {
                this.settingsMode = true;
            }
        },
        closeSettings() {
            document.removeEventListener('click', this.handleSettingsClick);
            this.settingsMode = false;
        },
        playAudio(index) {
            if (this.wavesurfer) this.wavesurfer.destroy();
            this.audioFlag = true;
            this.audioPlayerTop = index * 70.67 + 234;
            this.wavesurfer = WaveSurfer.create({
                container: '#wavesurfer-container',
                waveColor: '#D8DDE6',
                progressColor: '#00215F',
                cursorColor: '#F8FBFD',
                height: 70
            });

            // TODO: set real URL for record of conversation
            this.wavURL = '/example.wav';
            // TODO: set real filename for download record of conversation
            this.wavName = 'example.wav';

            this.wavesurfer.load(this.wavURL);
            let self = this;
            this.wavesurfer.on('ready', function () {
                self.duration = self.toMinutes(self.wavesurfer.getDuration());
                self.currentTime = '0:00';
            });
            this.wavesurfer.on('audioprocess', function () {
                if (self.wavesurfer.isPlaying()) {
                    self.currentTime = self.toMinutes(self.wavesurfer.getCurrentTime());
                }
            });


        },
        toMinutes(seconds) {
            let intSeconds = Math.round(seconds);
            let shownSeconds = (intSeconds % 60 > 9) ? intSeconds % 60 : '0' + intSeconds % 60;
            return Math.floor(intSeconds / 60) + ':' + shownSeconds;
        },
        playClick() {
            this.playMode = !this.playMode;
            this.wavesurfer.playPause();
        },
        stopClick() {
            this.wavesurfer.stop();
        },
        muteClick() {
            if (this.muteMode) this.wavesurfer.setMute(false)
            else this.wavesurfer.setMute(true);
            this.muteMode = !this.muteMode;

        },
        closeAudio() {
            this.audioFlag = false;
            this.playMode = false;
            this.wavesurfer.destroy();
        },


        forceFileDownload(response) {
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', this.wavName) //or any other extension
            document.body.appendChild(link)
            link.click()
        },

        downloadClick() {
            axios({
                method: 'get',
                url: this.wavURL,
                responseType: 'arraybuffer'
            })
                .then(response => {

                    this.forceFileDownload(response)

                })
                .catch(() => console.log('error occured'))
        },
        mobileShowDetails(newOpen) {
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
                activeElem.style.height = '500px';
                activeSign.classList.remove('mod_closed');
                activeSign.classList.add('mod_open');
                this.openFullMobile = newOpen;
            }
        },

        searchChatID(chatId) {
            // TODO: search chat dialog with id = chatId

        },
        chatOpen(chatID) {
            // TODO: open chat dialog with id = chatId
        }
    }
}
