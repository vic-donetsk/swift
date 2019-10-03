export default {
    data: function () {
        return {
            visible: true,
            items: [1,2,3,4,5]
        }
    },
    methods: {
        doSomething() {
            EventBus.$emit('renameText');
        },
        toggle() {
            this.visible = !this.visible;
        }
    },
    // watch: {
    //     $route(to, from) {
    //         if (to.name === "authentication") {
    //             this.visible = false;
    //         }
    //     }
    // }
}
