<template>
    <div class="cabinet_page billing-invoice">

        <div class="cabinet_mobile-button button mod-blue">
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#invoice"></use>
            </svg>
            <span class="cabinet_mobile-button_text">{{__('billing','Billing menu text 2')}}</span>
            <svg class="cabinet_mobile-button_icon">
                <use xlink:href="#arrow"></use>
            </svg>
        </div>

        <div class="billing_container">
            <billing-steps></billing-steps>

            <div class="billing-invoice_content">
                <h2 class="cabinet-page_title">
                    <svg class="cabinet-page_title-icon">
                        <use xlink:href="#invoice"></use>
                    </svg>
                    <span>{{__('billing','Billing menu text 2')}}</span>
                </h2>


                    <div class="widget-chat_table">
                        <div class="widget-chat_table-head">

                            <div class="widget-table_head-item mod-add_btn">

                            </div>
                            <div class="widget-table_head-item mod-invoice">
                                <span>{{__('billing','Billing invoice head 1')}}</span>
                            </div>
                            <div class="widget-table_head-item mod-transaction mod-desktop">
                                <span>{{__('billing','Billing invoice head 2')}}</span>
                            </div>
                            <div class="widget-table_head-item mod-price mod-desktop">
                                <span>{{__('billing','Billing invoice head 3')}}</span>
                            </div>
                            <div class="widget-table_head-item mod-date">
                                <span>{{__('billing','Billing invoice head 4')}}</span>
                            </div>
                            <div class="widget-table_head-item mod-fiscal">
                                <span>{{__('billing','Billing invoice head 5')}}</span>
                            </div>
                            <div class="widget-table_head-item mod-payment mod-desktop">
                                <span>{{__('billing','Billing invoice head 6')}}</span>
                            </div>
                            <div class="widget-table_head-item mod-download"></div>

                        </div>

                        <div class="widget-chat_table-content">
                            <div class="widget-chat_table-row" v-for="item in 2">
                                <div class="widget-chat_table-row-cells">
                                    <div class="widget-table_item mod-add_btn" @click="toggleRowList(item)">
                                        <svg v-if="item !== rowList" class="mod-add_btn-icon">
                                            <use xlink:href="#plus-add"></use>
                                        </svg>

                                        <svg v-else class="mod-add_btn-icon">
                                            <use xlink:href="#minus"></use>
                                        </svg>
                                    </div>
                                    <div class="widget-table_item mod-invoice">
                                        <span>25152</span>
                                    </div>
                                    <div class="widget-table_item mod-transaction mod-desktop">
                                        <span>25326453</span>
                                    </div>
                                    <div class="widget-table_item  mod-price mod-desktop">
                                        <span>15 €</span>
                                    </div>
                                    <div class="widget-table_item mod-date">
                                        <span>12/08/2019</span>
                                    </div>
                                    <div class="widget-table_item mod-fiscal">
                                        <span class="mod-mobile">{{__('billing','Billing invoice table content 1')}}</span>
                                        <span class="mod_desktop">{{__('billing','Billing invoice table content 3')}}</span>
                                    </div>
                                    <div class="widget-table_item mod-payment mod-desktop">
                                            <span>{{__('billing','Billing invoice table content 5')}}</span>
                                    </div>
                                    <div class="widget-table_item mod-download">
                                        <svg class="widget-table_icon-download">
                                            <use xlink:href="#download"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="widget-table_list" v-if="item === rowList">
                                    <div class="widget-table_list-item">
                                        <span class="widget-table_list-title">{{__('widget','Widget chat head 2')}}</span>
                                        <span class="widget-table_list-val"> : ionascu@pi.md</span>
                                    </div>
                                    <div class="widget-table_list-item">
                                        <span class="widget-table_list-title">{{__('widget','Widget chat head 3')}}</span>
                                        <span class="widget-table_list-val">: +373 (78) 792000</span>
                                    </div>
                                    <div class="widget-table_list-item">
                                        <span class="widget-table_list-title">{{__('widget','Widget chat head 4')}}</span>
                                        <span class="widget-table_list-val"> : #21412</span>
                                    </div>

                                    <div class="widget-table_list-item">
                                        <span class="widget-table_list-title">{{__('widget','Widget chat head 7')}}</span>
                                        <span class="widget-table_list-val"> : 21/08/2019</span>
                                    </div>

                                    <div class="widget-table_list-item">
                                        <span class="widget-table_list-title">{{__('widget','Widget chat head 6')}}</span>
                                        <span class="widget-table_list-val offline"> : {{__('widget','Widget chat state 1')}}</span>
                                    </div>
                                    <div class="widget-table_list-item mod_center" @click="rowList = null">
                                        <svg class="widget-table_list-icon">
                                            <use xlink:href="#cross"></use>
                                        </svg>
                                        <span class="widget-table_list-title">{{__('widget','Widget table list close btn')}}</span>
                                    </div>
                                </div>
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
