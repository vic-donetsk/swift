export default {
    data: function () {
        return {
            chatDatabase: null, // all chats data
            currentMessage: '', // message entered by the client just now
            messages: [], // array of messages of active (opened) chat
            isDesktop: true, // desktop/mobile device flag
            mobileMode: -1, // select which data show to screen
            activeElement: 0, // id of active (opened) chat
            activeData: {  // client's data for active (opened) chat
                clientName: '',
                clientPhone: '',
                clientStatus: '',
                chatID: '',
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
                clientName: 'Ivan Ivanov',
                clientPhone: '+373 (78) 123456 ',
                clientStatus: 'Online',
                chatID: 123456,
                source: 'viber',
                messages: [ // all correspondence in this chat
                    {
                        text: "Hi,I have a problem!",
                        time: "10:00",
                        isManager: false // client message
                    },
                    {
                        text: "Hi,how can I help you?",
                        time: "10:01",
                        isManager: true // manager message
                    }
                ]
            },
            {clientName: 'Petr Petrov',clientPhone: '+373 (78) 654321 ',clientStatus: 'Offline', chatID: 123567, source: 'whatsapp',
                messages: [{ text: "Hi,I had a nice day!", time: "10:00", isManager: false},
                    { text: "Hi,I'm very glad for you!!",time: "10:01", isManager: true}]}
        ];
        // this.messages = [
        //     // TODO: these are only EXAMPLES of client/manager messages!!
        //     // array must fill in chat process !!
        //     { text: "Hi,I have a problem!",
        //         time: "10:00",
        //         isManager: false // client message
        //     },
        //     { text: "Hi,how can I help you?",
        //         time: "10:01",
        //         isManager: true // manager message
        //     },
        // ];
        // TODO: enter real manager data
        this.currentManager = {
            name: 'Adrian Ktototam',
            email: 'test.test@gmail.com',
            sites: ['swiftcallback.md', 'swiftcallforward.pl', 'swiftcalldown.ru']
        }
        if (document.documentElement.clientWidth < 1280) {
            this.isDesktop = false;
            this.mobileMode = 0;
        }

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
        gotoChat(messages) {
            this.messages = messages;
            if (!this.isDesktop) {
                this.mobileMode = 1;
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
        handleEnter(event) {
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


        bellEvent() {
            //TODO: do something when bell ckicked
        },
        searchChatID(searchChatId) {
            //TODO: find and handle chat with id = searchChat Id
        },
        changeSite() {
            // TODO: change site at manager info block
        }

    }
}
