export default {
    data: function () {
        return {
            currentMessage: '',
            messages: [
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
            ],
        };
    },
    mounted(){
        let dialog = this.$el.querySelector("#chat_scrolling");
        dialog.scrollTop = dialog.clientHeight;
    },
    updated(){
        let dialog = this.$el.querySelector("#chat_scrolling");
        dialog.scrollTop = dialog.clientHeight;
    },
    methods: {
        handleEnter(event) {
            if (event.keyCode === 13) {
                this.send();
            }
        },
        send() {
            // creation new client message in chat
            let date = new Date();
            let currentTime = date.getHours() + ':' + date.getMinutes();
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
