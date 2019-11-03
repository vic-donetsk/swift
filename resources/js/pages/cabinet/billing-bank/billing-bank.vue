<template>
    <div class="cabinet_page billing-bank">

        <div class="cabinet_mobile-button button mod-blue">
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#euro"></use>
            </svg>
            <span class="cabinet_mobile-button_text">{{__('billing','Billing menu text 3')}}</span>
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#arrow"></use>
            </svg>
        </div>

        <div class="billing_container">
            <billing-steps></billing-steps>

            <div class="billing-bank_content">
                <h2 class="cabinet-page_title">
                    <svg class="cabinet-page_title-icon">
                        <use xlink:href="#euro"></use>
                    </svg>
                    <span>{{__('billing','Billing menu text 3')}}</span>
                </h2>

                    <div class="widget-chat_inputs">
                        <div class="widget-input_wrap">
                            <span class="widget-input_title">{{__('widget','Widget input title 1')}}</span>
                            <input type="text"
                                   class="widget-input"
                                   :placeholder='__("billing", "Billing input placeholder")'>
                        </div>

                        <div class="widget-input_wrap">
                            <span class="widget-input_title">{{__('widget','Widget input title 2')}}</span>
                            <input type="text"
                                   class="widget-input"
                                   :placeholder='__("billing", "Billing input placeholder")'>
                        </div>


                        <div class="widget-input_wrap">
                            <span class="widget-input_title">{{__('widget','Widget input title 3')}}</span>
                            <input type="text"
                                   class="widget-input"
                                   :placeholder='__("billing", "Billing input placeholder")'>
                        </div>
                    </div>

                    <div class="widget-button">
                        <span>{{__('widget','Widget deactivate button 2')}}</span>
                    </div>


            </div>
        </div>
    </div>
</template>

<script src="./billing-bank.js"></script>

<style lang='scss'>
    @import './billing-bank.scss';
</style>
