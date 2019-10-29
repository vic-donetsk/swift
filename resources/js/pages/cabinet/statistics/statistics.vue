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

            <div v-if="isCalls" class="statistics_diagrams">
                <div class="statistics_diagram mod_big">

                    <chart-js class="diagram"
                              chartId="total"
                              total="300"
                              :chartTitle="__('statistics', 'TOTAL CALLS')"
                              isIncrease=true
                              percentage=12
                              avatar="/img/charts/total.svg"
                              gradientFrom="rgba(110,166,242,0.58)"
                              gradientTo="rgba(186,199,252,0.2)"
                              :chartLabels=generalChartsData.totalCalls.chartLabels
                              :chartData=generalChartsData.totalCalls.chartData>

                    </chart-js>

                </div>
                <div class="statistics_diagram mod_big">
                    <chart-js class="diagram"
                              chartId="visitors"
                              total="150"
                              :chartTitle="__('statistics', 'VISITORS')"
                              isIncrease=false
                              percentage=4.2
                              avatar="/img/charts/visitors.svg"
                              gradientFrom="rgba(146,110,242,0.58)"
                              gradientTo="rgba(211,204,251,0.2)"
                              :chartLabels=generalChartsData.visitors.chartLabels
                              :chartData=generalChartsData.visitors.chartData>

                    </chart-js>
                </div>
                <div class="statistics_diagram mod_small">
                    <chart-js class="diagram"
                              chartId="successCalls"
                              total="280"
                              :chartTitle="__('statistics', 'SUCCESS CALLS')"
                              isIncrease=true
                              percentage=8
                              avatar="/img/charts/success.svg"
                              gradientFrom="rgba(87,230,131,0.58)"
                              gradientTo="rgba(185,253,205,0.2)"
                              :chartLabels=generalChartsData.successCalls.chartLabels
                              :chartData=generalChartsData.successCalls.chartData>

                    </chart-js>
                </div>
                <div class="statistics_diagram mod_small">
                    <chart-js class="diagram"
                              chartId="lostCalls"
                              total="20"
                              :chartTitle="__('statistics', 'LOST CALLS')"
                              isIncrease=false
                              percentage=5.1
                              avatar="/img/charts/lost.svg"
                              gradientFrom="rgba(242,110,110,0.58)"
                              gradientTo="rgba(250,196,199,0.2)"
                              :chartLabels=generalChartsData.lostCalls.chartLabels
                              :chartData=generalChartsData.lostCalls.chartData>

                    </chart-js>
                </div>
                <div class="statistics_diagram mod_small">
                    <chart-js class="diagram"
                              chartId="durationAverage"
                              total="5"
                              :chartTitle="__('statistics', 'AVERAGE CALL DURATION (HOURS)')"
                              isIncrease=true
                              percentage=7.8
                              avatar="/img/charts/duration.svg"
                              gradientFrom="rgba(245,239,80,0.61)"
                              gradientTo="rgba(252,248,169,0.24)"
                              :chartLabels=generalChartsData.durationAverage.chartLabels
                              :chartData=generalChartsData.durationAverage.chartData>

                    </chart-js>
                </div>
                <div class="statistics_diagram mod_small">
                    <chart-js class="diagram"
                              chartId="durationTotal"
                              total="489"
                              :chartTitle="__('statistics', 'TOTAL DURATION OF CALLS (HOURS)')"
                              isIncrease=false
                              percentage=4.3
                              avatar="/img/charts/duration.svg"
                              gradientFrom="rgba(242,196,110,0.58)"
                              gradientTo="rgba(247,221,170,0.24)"
                              :chartLabels=generalChartsData.durationTotal.chartLabels
                              :chartData=generalChartsData.durationTotal.chartData>
                    </chart-js>
                </div>

                <statistics-journal :list="journalData"></statistics-journal>

            </div>

            <div v-else class="statistics_diagrams">
                <div class="statistics_diagram mod_medium">

                    <chart-js class="diagram"
                              chartId="totalChats"
                              total="258"
                              :chartTitle="__('statistics', 'CHATS IN TOTAL')"
                              isIncrease=true
                              percentage=12
                              avatar="/img/charts/chat-total.svg"
                              gradientFrom="rgba(110,166,242,0.58)"
                              gradientTo="rgba(186,199,252,0.2)"
                              :chartLabels=generalChartsData.totalChats.chartLabels
                              :chartData=generalChartsData.totalChats.chartData>

                    </chart-js>

                </div>
                <div class="statistics_diagram mod_medium">
                    <chart-js class="diagram"
                              chartId="successChats"
                              total="250"
                              :chartTitle="__('statistics', 'FEEDBACK CHATS')"
                              isIncrease=false
                              percentage=4.2
                              avatar="/img/charts/chat-success.svg"
                              gradientFrom="rgba(87,230,131,0.58)"
                              gradientTo="rgba(185,253,205,0.2)"
                              :chartLabels=generalChartsData.successChats.chartLabels
                              :chartData=generalChartsData.successChats.chartData>

                    </chart-js>
                </div>
                <div class="statistics_diagram mod_medium">
                    <chart-js class="diagram"
                              chartId="failChats"
                              total="8"
                              :chartTitle="__('statistics', 'CHAT-URI FĂRĂ FEEDBACK')"
                              isIncrease=true
                              percentage=8
                              avatar="/img/charts/chat-fail.svg"
                              gradientFrom="rgba(242,110,110,0.58)"
                              gradientTo="rgba(250,196,199,0.2)"
                              :chartLabels=generalChartsData.failChats.chartLabels
                              :chartData=generalChartsData.failChats.chartData>
                    </chart-js>
                </div>


            </div>


        </div>
    </div>
</template>

<script src="./statistics.js"></script>

<style lang='scss'>
    @import './statistics.scss';
</style>
