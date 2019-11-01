<template>
    <div class="billing-steps">
        <div class="billing-steps_item">
            <svg class="billing-steps_icon">
                <use xlink:href="#download"></use>
            </svg>
            <span class="billing-steps_text">{{__('billing','Billing menu text 1')}}</span>
        </div>
        <div class="billing-steps_item">
            <svg class="billing-steps_icon">
                <use xlink:href="#phone"></use>
            </svg>
            <span class="billing-steps_text">{{__('billing','Billing menu text 2')}}</span>
        </div>
        <div class="billing-steps_item">
            <svg class="billing-steps_icon">
                <use xlink:href="#mail-envelope-open"></use>
            </svg>
            <span class="billing-steps_text">{{__('billing','Billing menu text 3')}}</span>
        </div>
    </div>
</template>


<style lang='scss'>
    @import './billing-steps.scss';
</style>