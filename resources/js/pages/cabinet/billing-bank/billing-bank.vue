<template>
    <div class="billing-bank_content">
        <h2 class="cabinet-page_title">
            <svg class="cabinet-page_title-icon">
                <use xlink:href="#euro"></use>
            </svg>
            <span>{{__('billing','Billing menu text 3')}}</span>
        </h2>

        <div class="billing-inputs">
            <div class="billing-bank_inputs mod-left">
                <div class="billing-input_wrap">
                    <span class="billing-input_title">{{__('billing','Billing input title 1')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("billing", "Billing input placeholder")'>
                </div>

                <div class="billing-input_wrap">
                    <span class="billing-input_title">{{__('billing','Billing input title 2')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("billing", "Billing input placeholder")'>
                </div>


                <div class="billing-input_wrap">
                    <span class="billing-input_title">{{__('billing','Billing input title 3')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("billing", "Billing input placeholder")'>
                </div>

                <div class="billing-input_wrap">
                    <span class="billing-input_title">{{__('billing','Billing input title 4')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("billing", "Billing input placeholder")'>
                </div>
            </div>

            <div class="billing-bank_inputs">
                <div class="billing-input_wrap">
                    <span class="billing-input_title">{{__('billing','Billing input title 5')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("billing", "Billing input placeholder")'>
                </div>

                <div class="billing-input_wrap">
                    <span class="billing-input_title">{{__('billing','Billing input title 6')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("billing", "Billing input placeholder")'>
                </div>


                <div class="billing-input_wrap">
                    <span class="billing-input_title">{{__('billing','Billing input title 7')}}</span>
                    <input type="text"
                           class="widget-input"
                           :placeholder='__("billing", "Billing input placeholder")'>
                </div>

                <div class="widget-button">
                    <span>{{__('widget','Widget save button')}}</span>
                </div>
            </div>

        </div>


    </div>
</template>

<script src="./billing-bank.js"></script>

<style lang='scss'>
    @import './billing-bank.scss';
</style>
