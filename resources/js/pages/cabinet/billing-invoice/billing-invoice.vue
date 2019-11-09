<template>
    <div class="billing-invoice_content">
        <h2 class="cabinet-page_title">
            <svg class="cabinet-page_title-icon">
                <use xlink:href="#invoice"></use>
            </svg>
            <span>{{__('billing','Billing menu text 2')}}</span>
        </h2>


        <div class="billing-invoice_table">
            <div class="billing-invoice_table-head">

                <div class="billing-table_head-item mod-add_btn">

                </div>
                <div class="billing-table_head-item mod-invoice">
                    <span>{{__('billing','Billing invoice head 1')}}</span>
                </div>
                <div class="billing-table_head-item mod-transaction mod-desktop">
                    <span>{{__('billing','Billing invoice head 2')}}</span>
                </div>
                <div class="billing-table_head-item mod-price mod-desktop">
                    <span>{{__('billing','Billing invoice head 3')}}</span>
                </div>
                <div class="billing-table_head-item mod-date">
                    <span>{{__('billing','Billing invoice head 4')}}</span>
                </div>
                <div class="billing-table_head-item mod-fiscal">
                    <span>{{__('billing','Billing invoice head 5')}}</span>
                </div>
                <div class="billing-table_head-item mod-payment mod-desktop">
                    <span>{{__('billing','Billing invoice head 6')}}</span>
                </div>
                <div class="billing-table_head-item mod-download"></div>

            </div>

            <div class="billing-invoice_table-content">
                <div class="billing-invoice_table-row" v-for="item in 2">
                    <div class="billing-invoice_table-row-cells">
                        <div class="billing-table_item mod-add_btn" @click="toggleRowList(item)">
                            <svg v-if="item !== rowList" class="mod-add_btn-icon">
                                <use xlink:href="#plus-add"></use>
                            </svg>

                            <svg v-else class="mod-add_btn-icon">
                                <use xlink:href="#minus"></use>
                            </svg>
                        </div>
                        <div class="billing-table_item mod-invoice">
                            <span>25152</span>
                        </div>
                        <div class="billing-table_item mod-transaction mod-desktop">
                            <span>25326453</span>
                        </div>
                        <div class="billing-table_item  mod-price mod-desktop">
                            <span>15 €</span>
                        </div>
                        <div class="billing-table_item mod-date">
                            <span>12/08/2019</span>
                        </div>
                        <div class="billing-table_item mod-fiscal">
                            <span class="mod-mobile">{{__('billing','Billing invoice table content 1')}}</span>
                            <span class="mod_desktop">{{__('billing','Billing invoice table content 3')}}</span>
                        </div>
                        <div class="billing-table_item mod-payment mod-desktop">
                            <span>{{__('billing','Billing invoice table content 5')}}</span>
                        </div>
                        <div class="billing-table_item mod-download">
                            <svg class="billing-table_icon-download">
                                <use xlink:href="#download"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="billing-table_list" v-if="item === rowList">
                        <div class="billing-table_list-item">
                            <span class="billing-table_list-title">{{__('billing','Billing invoice head 2')}}</span>
                            <span class="billing-table_list-val"> : 25326453</span>
                        </div>
                        <div class="billing-table_list-item">
                            <span class="billing-table_list-title">{{__('billing','Billing invoice head 3')}}</span>
                            <span class="billing-table_list-val">: 15 €</span>
                        </div>
                        <div class="billing-table_list-item">
                            <span class="billing-table_list-title">{{__('billing','Billing invoice head 6')}}</span>
                            <span class="billing-table_list-val"> : {{__('billing','Billing invoice table content 7')}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./billing-invoice.js"></script>

<style lang='scss'>
    @import './billing-invoice.scss';
</style>
