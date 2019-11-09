import billingAbonnement from './../billing-abonnement/billing-abonnement.vue';
import billingBank from './../billing-bank/billing-bank.vue';
import billingInvoice from './../billing-invoice/billing-invoice.vue';

export default {
    components: {
        billingAbonnement,
        billingInvoice,
        billingBank
    },
    data: function () {
        return {
            currentComponent: 'billingAbonnement',
            currentPageClass: 'billing-abonnement',
            currentButtonIcon: 'subscribe',
            settingsMode: 0,
            mobileMenuOpened: false,
            billingSteps: [
                {
                    component: 'billingAbonnement',
                    icon: 'subscribe',
                    pageClass: 'billing-abonnement'
                },
                {
                    component: 'billingInvoice',
                    icon: 'invoice',
                    pageClass: 'billing-invoice'
                },
                {
                    component: 'billingBank',
                    icon: 'euro',
                    pageClass: 'billing-bank'
                }
            ],
        }
    },
    methods: {
        nextWidgetComponent(item, key) {
            this.currentComponent = item.component;
            this.currentPageClass = item.pageClass;
            this.currentButtonIcon = item.icon;
            this.settingsMode = key;
        },
        changeMobileMode(item, mode) {
            let menuOptions = document.querySelectorAll('.mod_option');
            if (this.settingsMode !== mode)
                this.settingsMode = mode;
            for (let oneOption of menuOptions) {
                oneOption.classList.remove('mod_open');
            }

            this.currentComponent = item.component;
            this.currentPageClass = item.pageClass;
            this.currentButtonIcon = item.icon;

            this.mobileMenuOpened = !this.mobileMenuOpened;
        },
        showModes() {
            let menuOptions = document.querySelectorAll('.mod_option');
            for (let oneOption of menuOptions) {
                if (this.mobileMenuOpened) {
                    oneOption.classList.remove('mod_open');
                } else {
                    oneOption.classList.add('mod_open');
                }
            }
            this.mobileMenuOpened = !this.mobileMenuOpened;
        }
    }
}
