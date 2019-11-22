import cabinetHeader from './../cabinet-header/cabinet-header.vue';
import cabinetSidebar from './../cabinet-sidebar/cabinet-sidebar.vue';

export default {
    components: {
        'cabinet-header': cabinetHeader,
        'cabinet-sidebar': cabinetSidebar,
    },
    data() {
        return {
            popupNotify: false
        }
    },
    mounted() {
        EventBus.$on('toggle-notify', () => {
            this.popupNotify = !this.popupNotify;
        });
    }
}