<template>
    <div>
        <div class="diagram_header">
            <div class="diagram_header-title">
                <div class="title_numbers">
                    <div class="title_numbers-total">{{dataSet.total}}</div>
                    <div class="title_numbers-percent"
                         :class="(dataSet.isIncrease) ? 'mod_increase' : 'mod_decrease'">{{dataSet.percentage}}%
                    </div>
                </div>
                <div class="title_name">{{__('statistics', dataSet.chartTitle)}}</div>

            </div>
            <div class="diagram_header-avatar">
                <img :src="dataSet.avatar" alt="">
            </div>
        </div>
        <div class="diagram_canvas-container">

            <line-chart :id="dataSet.chartId" :chartData="chartDatas" :chartTitle="dataSet.chartTitle" class="diagram_chart"></line-chart>

        </div>
    </div>
</template>

<script src="./chart-js.js"></script>

<style lang='scss'>
    @import 'chart-js.scss';
</style>
