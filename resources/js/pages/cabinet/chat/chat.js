export default {
    data: function () {
        return {
            currentMessage: '',
            messages: [],
            isDesktop: true,
            mobileMode: -1
        };
    },
    created() {
        this.messages = [
            // TODO: these are only EXAMPLES of client/manager messages!!
            // array must fill in chat process !!
            { text: "Hi,I have a problem!",
                time: "10:00",
                isManager: false // client message
            },
            { text: "Hi,how can I help you?",
                time: "10:01",
                isManager: true // manager message
            },
        ];
        if (document.documentElement.clientWidth < 1280) {
            this.isDesktop = false;
            this.mobileMode = 0;
        }

    },
    mounted(){
        if (this.isDesktop || this.mobileMode === 1) {
            let dialog = this.$el.querySelector("#chat_scrolling");
            dialog.scrollTop = dialog.scrollHeight;
        }
    },
    updated(){
        if (this.isDesktop || this.mobileMode === 1) {
            let dialog = this.$el.querySelector("#chat_scrolling");
            dialog.scrollTop = dialog.scrollHeight;
        }
    },
    methods: {
        gotoChat(chatID) {
            // TODO: find data for chat with ID = chatID
            // put to this.messages dialog from this chat
            if (!isDesktop) {
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
