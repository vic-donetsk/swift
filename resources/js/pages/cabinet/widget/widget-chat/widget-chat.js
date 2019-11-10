export default {
    data: function () {
        return {
            rowList: null,
            openModal: false,
            chatDesktop: false,
            chatMobile: false,
            telegramDesktop: false,
            telegramMobile: false,
            viberMobile: false,
            whatsappDesktop: false,
            whatsappMobile: false,
            emailDesktop: false,
            emailMobile: false,
        };
    },
    methods: {
        toggleRowList(item) {
            if (this.rowList === item) {
                this.rowList = null;
                return false;
            }
            this.rowList = item;
        }
    }
}
