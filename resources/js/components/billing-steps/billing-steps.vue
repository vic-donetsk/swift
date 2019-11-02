<template>
    <div class="billing-steps">
        <div class="billing-steps_item">
            <svg class="billing-steps_icon">
                <use xlink:href="#subscribe"></use>
            </svg>
            <span class="billing-steps_text">{{__('billing','Billing menu text 1')}}</span>
        </div>
        <div class="billing-steps_item">
            <svg class="billing-steps_icon">
                <use xlink:href="#invoice"></use>
            </svg>
            <span class="billing-steps_text">{{__('billing','Billing menu text 2')}}</span>
        </div>
        <div class="billing-steps_item">
            <svg class="billing-steps_icon">
                <use xlink:href="#euro"></use>
            </svg>
            <span class="billing-steps_text">{{__('billing','Billing menu text 3')}}</span>
        </div>
    </div>
</template>


<style lang='scss'>
    @import './billing-steps.scss';
</style>