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


        </div>
            <statistics-journal v-if="isCalls" :isCalls="true" :list="journalData"></statistics-journal>
            <statistics-journal v-else :isCalls="false" :list="journalChatsData"></statistics-journal>
    </div>
</template>

<script src="./statistics.js"></script>

<style lang='scss'>
    @import './statistics.scss';
</style>


