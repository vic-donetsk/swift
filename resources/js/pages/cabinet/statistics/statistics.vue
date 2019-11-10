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

            <div v-show="isCalls" class="statistics_diagrams">
                <div class="statistics_diagram mod_big">

                    <chart-js class="diagram"
                              chartId="total"
                              total="300"
                              :chartTitle="__('statistics', 'TOTAL CALLS')"
                              isIncrease=true
                              percentage=12
                              avatar="/img/charts/total.svg"
                              :gradientFrom=generalCallsData.totalCalls.gradientFrom
                              :gradientTo=generalCallsData.totalCalls.gradientTo
                              :chartLabels=generalCallsData.totalCalls.chartLabels
                              :chartData=generalCallsData.totalCalls.chartData>

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
                              :gradientFrom=generalCallsData.visitors.gradientFrom
                              :gradientTo=generalCallsData.visitors.gradientTo
                              :chartLabels=generalCallsData.visitors.chartLabels
                              :chartData=generalCallsData.visitors.chartData>

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
                              :gradientFrom=generalCallsData.successCalls.gradientFrom
                              :gradientTo=generalCallsData.successCalls.gradientTo
                              :chartLabels=generalCallsData.successCalls.chartLabels
                              :chartData=generalCallsData.successCalls.chartData>

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
                              :gradientFrom=generalCallsData.lostCalls.gradientFrom
                              :gradientTo=generalCallsData.lostCalls.gradientTo
                              :chartLabels=generalCallsData.lostCalls.chartLabels
                              :chartData=generalCallsData.lostCalls.chartData>

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
                              :gradientFrom=generalCallsData.durationAverage.gradientFrom
                              :gradientTo=generalCallsData.durationAverage.gradientTo
                              :chartLabels=generalCallsData.durationAverage.chartLabels
                              :chartData=generalCallsData.durationAverage.chartData>

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
                              :gradientFrom=generalCallsData.durationTotal.gradientFrom
                              :gradientTo=generalCallsData.durationTotal.gradientTo
                              :chartLabels=generalCallsData.durationTotal.chartLabels
                              :chartData=generalCallsData.durationTotal.chartData>
                    </chart-js>
                </div>

            </div>

            <div v-show="!isCalls" class="statistics_diagrams">
                <div class="statistics_diagram mod_medium">

                    <chart-js class="diagram"
                              chartId="totalChats"
                              total="258"
                              :chartTitle="__('statistics', 'CHATS IN TOTAL')"
                              isIncrease=true
                              percentage=12
                              avatar="/img/charts/chat-total.svg"
                              :gradientFrom=generalChatsData.totalChats.gradientFrom
                              :gradientTo=generalChatsData.totalChats.gradientTo
                              :chartLabels=generalChatsData.totalChats.chartLabels
                              :chartData=generalChatsData.totalChats.chartData>

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
                              :gradientFrom=generalChatsData.successChats.gradientFrom
                              :gradientTo=generalChatsData.successChats.gradientTo
                              :chartLabels=generalChatsData.successChats.chartLabels
                              :chartData=generalChatsData.successChats.chartData>

                    </chart-js>
                </div>
                <div class="statistics_diagram mod_medium">
                    <chart-js class="diagram"
                              chartId="failChats"
                              total="8"
                              :chartTitle="__('statistics', 'CHATS WITHOUT FEEDBACK')"
                              isIncrease=true
                              percentage=8
                              avatar="/img/charts/chat-fail.svg"
                              :gradientFrom=generalChatsData.failChats.gradientFrom
                              :gradientTo=generalChatsData.failChats.gradientTo
                              :chartLabels=generalChatsData.failChats.chartLabels
                              :chartData=generalChatsData.failChats.chartData>
                    </chart-js>
                </div>

            </div>


        </div>
            <statistics-journal v-if="isCalls" :isCalls="true" :list="journalData"></statistics-journal>
            <statistics-journal v-else :isCalls="false" :list="journalChatsData"></statistics-journal>
    </div>
</template>

<script src="./statistics.js"></script>

<style lang='scss'>
    @import './statistics.scss';
</style>


