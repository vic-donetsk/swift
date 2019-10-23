<template>
    <div class="cabinet_page statistics">
        <div class="statistics_container">
            <div class="statistics_header">
                <div class="statistics_header-title">
                    <div class="mod_active">
                        <svg class="title_icon">
                            <use xlink:href="#phone"></use>
                        </svg>
                        {{__('statistics', "CALLS")}}
                    </div>
                    <div>|</div>
                    <div>
                        <svg class="title_icon">
                            <use xlink:href="#mail-envelope-open"></use>
                        </svg>
                        {{__('statistics', "CHAT")}}
                    </div>
                </div>
                <div class="statistics_header-dates">
                    <div class="dates_periods">
                        <div class="onePeriod">{{__('statistics', "Today")}}</div>
                        <div class="onePeriod">{{__('statistics', "Yesterday")}}</div>
                        <div class="onePeriod mod_current">{{__('statistics', "7 days")}}</div>
                        <div class="onePeriod">{{__('statistics', "One month")}}</div>
                        <div class="onePeriod">{{__('statistics', "6 months")}}</div>
                        <div class="onePeriod">{{__('statistics', "1 year")}}</div>
                    </div>
                    <div class="dates_calendar">
                        <svg class="calendar_icon">
                            <use xlink:href="#calendar"></use>
                        </svg>
                        05/08/19 - 11/08/19
                    </div>

                </div>
            </div>

            <div class="statistics_diagrams">
                <div class="statistics_diagrams-big">
                    <div class="diagram_mod-big">
                        <div class="diagram">

                        </div>
                    </div>
                </div>
                <div class="statistics_diagrams-big">
                    <div class="diagram_mod-big">
                        <div class="diagram">

                        </div>
                    </div>
                </div>
                <div class="statistics_diagrams-small">
                    <div class="diagram_mod-small">
                        <div class="diagram">

                        </div>
                    </div>
                </div>
                <div class="statistics_diagrams-small">
                    <div class="diagram_mod-small">
                        <div class="diagram">

                        </div>
                    </div>
                </div>
                <div class="statistics_diagrams-small">
                    <div class="diagram_mod-small">
                        <div class="diagram">

                        </div>
                    </div>
                </div>
                <div class="statistics_diagrams-small">
                    <div class="diagram_mod-small">
                        <div class="diagram">

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script src="./statistics.js"></script>

<style lang='scss'>
    @import './statistics.scss';
</style>
