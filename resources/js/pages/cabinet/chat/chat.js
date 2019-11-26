export default {
    data: function () {
        return {
            chatDatabase: null, // all chats data
            currentMessage: '', // message entered by the client just now
            messages: [], // array of messages of active (opened) chat
            isDesktop: true, // desktop/mobile device flag
            mobileMode: -1, // select which data show to screen
            searchID: '', // ID of searched element (if searched)
            activeElementID: 0, // id of active (opened) chat
            activeElementData: {  // client's data for active (opened) chat
                clientName: '',
                clientPhone: '',
                clientStatus: '',
                chatID: '',
                source:''
            },
            currentManager: null, // data of current manager

            // colors for chats icons
            // !!!! item name = chatDatabase.source
            chatsColors: {
                'messenger' : '#0080FF',
                'VK' : '#4C75A3',
                'viber': '#7E37B1',
                'whatsapp': '#00D935',
                'telegram': '#0088CC',
                'chat': '#D7C47E'
            },
        };
    },
    created() {
        // TODO: these are only EXAMPLES of chat data structure and messages of chat structure!!
        // TODO: here you must fill this.chatDatabase with real data
        this.chatDatabase = [
            {
                clientName: 'Jasmine Wade',
                clientPhone: '+373 (78) 457412 ',
                clientStatus: 'Online',
                chatID: 214535,
                source: 'telegram',
                messages: [ // all correspondence in this chat
                    {
                        text: "Hi,I have a question!",
                        time: "14:21",
                        isManager: false // client message
                    },
                    {
                        text: "Hi Jasmine, how can I help you?",
                        time: "14:21",
                        isManager: true // manager message
                    },
                    {
                        text: "Hi,I have a question!",
                        time: "14:21",
                        isManager: false // client message
                    },
                    {
                        text: "Hi,I have a question!",
                        time: "14:21",
                        isManager: true // client message
                    },
                ]
            },
            {clientName: 'Andrian Ionascu',clientPhone: '+373 (78) 457412 ',clientStatus: 'Offline', chatID: 214535, source: 'whatsapp',
                messages: [{ text: "Hi,I have a question!", time: "14:21", isManager: false},
                    { text: "Hi Andrian, how can I help you?",time: "14:21", isManager: true}]},
            {clientName: 'Andrian Ionascu',clientPhone: '+373 (78) 131313 ',clientStatus: 'Offline', chatID: 123567, source: 'VK',
                messages: [{ text: "Hi,I have a question!", time: "14:21", isManager: false},
                    { text: "Hi Andrian, how can I help you?",time: "14:21", isManager: true}]},
            {clientName: 'Andrian Ionascu',clientPhone: '+373 (78) 666666 ',clientStatus: 'Offline', chatID: 123567, source: 'messenger',
                messages: [{ text: "Hi,I have a question!", time: "14:21", isManager: false},
                    { text: "Hi Andrian, how can I help you?",time: "14:21", isManager: true}]},
            {clientName: 'Andrian Ionascu',clientPhone: '+373 (78) 777777 ',clientStatus: 'Offline', chatID: 123567, source: 'chat',
                messages: [{ text: "Hi,I have a question!", time: "14:21", isManager: false},
                    { text: "Hi Andrian, how can I help you?",time: "14:21", isManager: true}]},
            {clientName: 'Andrian Ionascu',clientPhone: '+373 (78) 888888 ',clientStatus: 'Offline', chatID: 123567, source: 'telegram',
                messages: [{ text: "Hi,I have a question!", time: "14:21", isManager: false},
                    { text: "Hi Andrian, how can I help you?",time: "14:21", isManager: true}]},
            {clientName: 'Andrian Ionascu',clientPhone: '+373 (78) 654321 ',clientStatus: 'Offline', chatID: 123567, source: 'whatsapp',
                messages: [{ text: "Hi,I have a question!", time: "14:21", isManager: false},
                    { text: "Hi Andrian, how can I help you?",time: "14:21", isManager: true}]},
            {clientName: 'Andrian Ionascu',clientPhone: '+373 (78) 131313 ',clientStatus: 'Offline', chatID: 123567, source: 'VK',
                messages: [{ text: "Hi,I have a question!", time: "14:21", isManager: false},
                    { text: "Hi Andrian, how can I help you?",time: "14:21", isManager: true}]},

        ];
        // TODO: enter real manager data
        this.currentManager = {
            name: 'Andrian Ionascu',
            email: 'ionascu@pi.md',
            sites: ['swiftcallback.md', 'swiftcallforward.pl', 'swiftcalldown.ru']
        };
        if (document.documentElement.clientWidth < 1280) {
            this.isDesktop = false;
            this.mobileMode = 0;
        };

        window.onresize = () => {
           if (this.isDesktop == false && document.documentElement.clientWidth > 1279) {
               this.isDesktop = true;
               this.mobileMode = -1;
           } else if (this.isDesktop == true && document.documentElement.clientWidth < 1280) {
               this.isDesktop = false;
               this.mobileMode = 0;
           }

        };

        EventBus.$on('comeBackToChat', this.backFromMenu);
    },

    mounted() {
        if (this.isDesktop || this.mobileMode === 1) {
            let dialog = this.$el.querySelector("#chat_scrolling");
            dialog.scrollTop = dialog.scrollHeight;
        }
    },
    updated() {
        if (this.isDesktop || this.mobileMode === 1) {
            let dialog = this.$el.querySelector("#chat_scrolling");
            dialog.scrollTop = dialog.scrollHeight;
        }
    },
    methods: {
        gotoChat(oneChat) {
            if (oneChat.ID !== this.activeElementID) {
                this.messages = oneChat.messages;
                for (let item in this.activeElementData) {
                    this.activeElementData[item] = oneChat[item];
                }
                if (!this.isDesktop) {
                    this.mobileMode = 1;
                }
                let newActive = document.querySelector('#id' + oneChat.chatID);
                newActive.classList.add('mod_active');
                if (this.activeElementID !== 0) {
                    let oldActive = document.querySelector('#id' + this.activeElementID);
                    oldActive.classList.remove('mod_active');
                }
                this.activeElementID = oneChat.chatID;
            }
        },
        showDetails() {
            this.mobileMode = 2;
        },
        returnToTopics() {
            this.mobileMode = 0;
        },
        returnToChat() {
            this.mobileMode = 1;
        },
        handleChatEnter(event) {
            if (event.keyCode === 13) {
                this.send();
            }
        },
        send() {
            // creation new client message in chat
            let date = new Date();
            let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
            let currentTime = date.getHours() + ':' + minutes;
            let newMessage = {
                text: this.currentMessage,
                time: currentTime,
                isManager: false
            };
            // TODO: for manager message the same object must be append to array "messages",
            // only field "isManager" must be setting for "true"
            this.messages.push(newMessage);
            this.currentMessage = '';
        },

        handleSearchEnter(event) {
            if (event.keyCode === 13) {
                this.searchChatID();
            }
        },
        searchChatID() {
            //TODO: find and handle chat with id = this.searchID

            this.searchID = ''; // after handling
        },
        bellEvent() {
            //TODO: do something when bell ckicked
        },
        changeSite() {
            // TODO: change site at manager info block
        },
        gotoMenu() {
            $('.chat').css('z-index', '0');
            EventBus.$emit('chatExit');
        },
        backFromMenu() {
            $('.chat').css('z-index', '101');
        }

    }
}
