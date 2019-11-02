<template>
    <div class="cabinet_page billing-invoice">

        <div class="cabinet_mobile-button button mod-blue">
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#subscribe"></use>
            </svg>
            <span class="cabinet_mobile-button_text">{{__('billing','Billing menu text 1')}}</span>
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#arrow"></use>
            </svg>
        </div>

        <div class="billing_container">
            <billing-steps></billing-steps>

            <div class="billing-abonnement_content">
                <h2 class="cabinet-page_title">
                    <svg class="cabinet-page_title-icon">
                        <use xlink:href="#subscribe"></use>
                    </svg>
                    <span>{{__('billing','Billing menu text 1')}}</span>
                </h2>
            </div>
        </div>
    </div>
</template>

<script src="./billing-invoice.js"></script>

<style lang='scss'>
    @import './billing-invoice.scss';
</style>
