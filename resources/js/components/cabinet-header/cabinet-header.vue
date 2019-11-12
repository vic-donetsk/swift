<template>
    <header>
        <div class="cabinet-header">
            <div class="cabinet-header_content">
                <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 1')}}
            </span>

                    <span class="cabinet-header_value" @mouseover="showChart('showTariffMinutes')"
                          @mouseleave="hideChart('showTariffMinutes')">
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

                    <div class="cabinet-header_progress-wrap" @mouseover="showChart('showCurrentMinutes')"
                         @mouseleave="hideChart('showCurrentMinutes')"
                    >
                        <div class="cabinet-header_progress"
                             :style="'width:' + abonementData.currentMinutes.percent + '%; background-color:'
                             +  abonementData.currentMinutes.color">

                        </div>
                    </div>


                </div>

                <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 3')}}
            </span>

                    <div class="cabinet-header_progress-wrap" @mouseover="showChart('showCurrentSMS')"
                         @mouseleave="hideChart('showCurrentSMS')">
                        <div class="cabinet-header_progress mod-sms"
                             :style="'width:' + abonementData.currentSMS.percent + '%; background-color:'
                             +  abonementData.currentSMS.color">
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

            <!--             charts block-->

            <div :class="{mod_active: showTariffMinutes}" class="cabinet-header_dropdown mod_tariffMinutes"
                 @click="hideChart('showTariffMinutes')">
                <div class="cabinet-header_dropdown-container">
                    <canvas id="tariffMinutes" class="cabinet-header_dropdown-chart"></canvas>
                    <div class="chart-title">{{abonementData.tariffMinutes.percent}}%</div>
                </div>
                <div class="cabinet-header_dropdown-information">
                    <div class="dropdown-information_item">{{__('widget', 'Total')}}&nbsp:&nbsp<span>{{abonementData.tariffMinutes.total}} minute</span>
                    </div>
                    <div class="dropdown-information_item">{{__('widget', 'Consumed')}}&nbsp:&nbsp<span>{{abonementData.tariffMinutes.consumed}} minute</span>
                    </div>
                    <div class="dropdown-information_item">{{__('widget', 'Remained')}}&nbsp:&nbsp<span>{{abonementData.tariffMinutes.total - abonementData.tariffMinutes.consumed}} minute</span>
                    </div>
                </div>
            </div>
            <div :class="{mod_active: showCurrentMinutes}" class="cabinet-header_dropdown mod_currentMinutes"
                 @click="hideChart('showCurrentMinutes')">
                <div class="cabinet-header_dropdown-container">
                    <canvas id="currentMinutes" class="cabinet-header_dropdown-chart"></canvas>
                    <div class="chart-title">{{abonementData.currentMinutes.percent}}%</div>
                </div>
                <div class="cabinet-header_dropdown-information">
                    <div class="dropdown-information_item">{{__('widget', 'Total')}}&nbsp:&nbsp<span>{{abonementData.currentMinutes.total}} minute</span>
                    </div>
                    <div class="dropdown-information_item">{{__('widget', 'Consumed')}}&nbsp:&nbsp<span>{{abonementData.currentMinutes.consumed}} minute</span>
                    </div>
                    <div class="dropdown-information_item">{{__('widget', 'Remained')}}&nbsp:&nbsp<span>{{abonementData.currentMinutes.total - abonementData.currentMinutes.consumed}} minute</span>
                    </div>
                </div>
            </div>
            <div :class="{mod_active: showCurrentSMS}" class="cabinet-header_dropdown mod_currentSMS"
                 @click="hideChart('showCurrentSMS')">
                <div class="cabinet-header_dropdown-container">
                    <canvas id="currentSMS" class="cabinet-header_dropdown-chart"></canvas>
                    <div class="chart-title">{{abonementData.currentSMS.percent}}%</div>
                </div>
                <div class="cabinet-header_dropdown-information">
                    <div class="dropdown-information_item">{{__('widget', 'Total')}}&nbsp:&nbsp<span>{{abonementData.currentSMS.total}} SMS</span>
                    </div>
                    <div class="dropdown-information_item">{{__('widget', 'Consumed')}}&nbsp:&nbsp<span>{{abonementData.currentSMS.consumed}} SMS</span>
                    </div>
                    <div class="dropdown-information_item">{{__('widget', 'Remained')}}&nbsp:&nbsp<span>{{abonementData.currentSMS.total - abonementData.currentSMS.consumed}} SMS</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    @import "cabinet-header.scss";
</style>

<script src="./cabinet-header.js"></script>
