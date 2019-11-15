<template>
    <div class="cabinet_page statistics">
        <div class="statistics_container">

            <div class="statistics_header">
                <div class="statistics_header-title">
                    <div class="title_item" :class="{mod_active: isCalls}" @click="switchStats(1)">
                        <svg class="title_icon">
                            <use xlink:href="#phone"></use>
                        </svg>
                        {{__('statistics', "CALLS")}}
                    </div>
                    <div>|</div>
                    <div class="title_item" :class="{mod_active: !isCalls}" @click="switchStats(0)">
                        <svg class="title_icon">
                            <use xlink:href="#mail-envelope-open"></use>
                        </svg>
                        {{__('statistics', "CHAT")}}
                    </div>
                </div>
                <div class="statistics_header-dates">
                    <div class="dates_periods">
                        <div class="onePeriod" @click="changePeriod(1)"
                             :class="(activeMenuItem === 1) ? 'mod_current' : ''">
                            {{__('statistics', "Today")}}
                        </div>
                        <div class="onePeriod" @click="changePeriod(2)"
                             :class="(activeMenuItem === 2) ? 'mod_current' : ''">
                            {{__('statistics', "Yesterday")}}
                        </div>
                        <div class="onePeriod" @click="changePeriod(3)"
                             :class="(activeMenuItem=== 3) ? 'mod_current' : ''">
                            {{__('statistics', "7 days")}}
                        </div>
                        <div class="onePeriod" @click="changePeriod(4)"
                             :class="(activeMenuItem=== 4) ? 'mod_current' : ''">
                            {{__('statistics', "One month")}}
                        </div>
                        <div class="onePeriod" @click="changePeriod(5)"
                             :class="(activeMenuItem=== 5) ? 'mod_current' : ''">
                            {{__('statistics', "6 months")}}
                        </div>
                        <div class="onePeriod" @click="changePeriod(6)"
                             :class="(activeMenuItem=== 6) ? 'mod_current' : ''">
                            {{__('statistics', "1 year")}}
                        </div>
                    </div>
                    <div class="dates_calendar">
                        <svg class="calendar_icon">
                            <use xlink:href="#calendar"></use>
                        </svg>
                        {{period}}
                    </div>

                </div>
            </div>

            <div class="statistics_diagrams">
                <div v-for="oneChart in layoutData" class="statistics_diagram" :class="oneChart.chartSize">
                    <chart-js class="diagram"
                              :dataSet="oneChart"
                    />
                </div>
            </div>


            <div class="statistics_mobileInfo" @click="showMobileInfo">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                     xml:space="preserve" fill="#88A5DB">
                    <g>
                        <g>
                            <path d="M285.172,331.453c-12.453,13.25-20.547,18.781-26.094,18.781c-3.859,0-5.172-3.422-4.312-11.142
                                c2.593-20.062,17.531-84.578,21.781-107.625c4.266-19.719,3-29.953-2.562-29.953c-10.641,0-36.733,17.516-53.827,35.016
                                c-0.875,1.344-2.562,8.578-1.688,11.125c0,0.875,1.266,1.312,1.266,1.312c10.266-8.125,18.391-12.844,23.109-12.844
                                c2.109,0,2.938,3.406,1.688,9.406c-5.125,25.625-13.672,65.405-20.078,98.28c-5.984,28.672-2.172,40.188,6.812,40.188
                                s33.766-11.983,53.906-38.906c0.812-2.094,1.641-10.188,1.25-12.358C286.422,331.906,285.172,331.453,285.172,331.453z"/>
                            <path d="M281.281,128c-7.297,0-16.25,3.414-20.516,7.703c-1.688,2.141-3.406,8.539-3.859,11.945
                                c0.453,7.711,2.578,11.984,6.859,14.562c2.108,1.68,16.219,0.414,19.219-1.312c5.188-3.398,9.828-10.25,10.703-18.375
                                c0.375-3.82-0.438-8.984-2.142-11.531C290.688,129.719,287.25,128,281.281,128z"/>
                            <path d="M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256
                                C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472
                                z"/>
                        </g>
                    </g>
                </svg>
            </div>




        </div>

        <div class="statistics_mobileDiagrams">
            <svg class="statistics_mobileDiagrams-close" @click="showMobileInfo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.873 19.708">
                <g id="cross" transform="translate(-19.35 -35.087)">
                    <line id="Line_149" data-name="Line 149" x2="18.045" y2="16.881" transform="translate(20.764 36.5)" fill="none" stroke="#4C638F" stroke-linecap="round" stroke-width="2"/>
                    <line id="Line_150" data-name="Line 150" x1="18.045" y2="16.881" transform="translate(20.764 36.5)" fill="none" stroke="#4C638F" stroke-linecap="round" stroke-width="2"/>
                </g>
            </svg>
            <div class="statistics_mobileDiagrams-header">
                <div class="header-title">SWIFT</div>
                <div class="header-subtitle">callback</div>
            </div>

            <div class="statistics_mobileDiagrams-tarif">
                <div class="tarif-text mod_upper">ABONAMENT&nbsp;:&nbsp;<span>STARTER</span></div>
                <div class="tarif-button">{{__('statistics', 'UPGRADE')}}</div>
                <div class="tarif-text">{{__('statistics', 'Valid until')}}&nbsp;:&nbsp;<span>09/10/19</span></div>
            </div>

            <doughnut-chart id="currentMinutes" :chartData="chartData" class="diagram_chart"></doughnut-chart>

        </div>

        <statistics-journal v-if="isCalls" :isCalls="true" :list="journalData"></statistics-journal>
        <statistics-journal v-else :isCalls="false" :list="journalChatsData"></statistics-journal>
    </div>

</template>

<script src="./statistics.js"></script>

<style lang='scss'>
    @import './statistics.scss';
</style>


