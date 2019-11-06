export default {
    data: function () {
        return {
            apiKey: '',
            ID: '',
            isApiOn: '',
            blacklist: null,
            currentID: 0
        }
    },
    created() {
        // TODO: load real blacklist into this.blacklist
        this.blacklist = [
            { ID: 123456, value: '+373 (78) 79 2000', type: 'Phone'},
            { ID: 234567, value: '+373 (78) 11 1111', type: 'Phone'},
            { ID: 345678, value: '192.85.163.9', type: 'IP'},
            { ID: 456789, value: '192.85.163.9', type: 'IP'},
        ];
        // TODO: set real ID for adding item to blacklist
        this.currentID = 179815;


    },
    methods: {
        addBlacklistItem() {
            this.blacklist.push({first:666,second:666,third:666})
        },
        deleteBlacklistItem(index) {
            this.blacklist.splice(index,1);
            // TODO: save updated blacklist
        }

    }
}
