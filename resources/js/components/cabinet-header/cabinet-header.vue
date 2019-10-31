<template>
    <header>
        <div class="cabinet-header">
            <div class="cabinet-header_content">
                <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 1')}}
            </span>

                    <span class="cabinet-header_value" @mouseover="toggleTariffMinutes">
                {{__('widget','Cabinet header value')}}
            </span>

                    <div class="button mod-blue">
                        <span class="button_text">{{ __("widget", "Cabinet header button") }}</span>
                    </div>

                </div>
                <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 2')}}
            </span>

                    <div class="cabinet-header_progress-wrap" @mouseover="toggleCurrentMinutes">
                        <div class="cabinet-header_progress" style="width: 23%">

                        </div>
                    </div>


                </div>

                <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 3')}}
            </span>

                    <div class="cabinet-header_progress-wrap" @mouseover="toggleCurrentSMS">
                        <div class="cabinet-header_progress mod-sms" style="width: 83%">

                        </div>
                    </div>


                </div>

                <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 4')}}
            </span>

                    <span class="cabinet-header_value mod_margin">
                {{__('widget','Cabinet header value 2')}}
            </span>

                </div>

                <div class="cabinet-header_notify mod_active">
                    <svg class="cabinet-header_icon">
                        <use xlink:href="#bell"></use>
                    </svg>
                </div>
            </div>

            <div v-if="showTariffMinutes" class="cabinet-header_dropdown mod_tariffMinutes"
                 @click="toggleTariffMinutes">
                <div class="cabinet-header_dropdown-container">
                    <canvas id="tariffMinutes" class="cabinet-header_dropdown-chart">

                    </canvas>
                </div>
                <div class="cabinet-header_dropdown-information">
                    <div class="dropdown-information_item">{{__('widget', 'Total')}}&nbsp:&nbsp<span>{{abonementData.tariff.total}}</span>
                    </div>
                    <div class="dropdown-information_item">{{__('widget', 'Consumed')}}&nbsp:&nbsp<span>{{abonementData.tariff.consumed}}</span>
                    </div>
                    <div class="dropdown-information_item">{{__('widget', 'Remained')}}&nbsp:&nbsp<span>{{abonementData.tariff.total - abonementData.tariff.consumed}}</span>
                    </div>
                </div>
            </div>
            <div v-if="showCurrentMinutes" class="cabinet-header_dropdown mod_currentMinutes"
                 @click="toggleCurrentMinutes"></div>
            <div v-if="showCurrentSMS" class="cabinet-header_dropdown mod_currentSMS" @click="toggleCurrentSMS"></div>
        </div>
    </header>
</template>

<style lang="scss">
    @import "cabinet-header.scss";
</style>

<script src="./cabinet-header.js"></script>
