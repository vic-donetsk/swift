<template>
    <div>
        <div class="diagram_header">
            <div class="diagram_header-title">
                <div class="title_numbers">
                    <div class="title_numbers-total">{{total}}</div>
                    <div class="title_numbers-percent"
                         :class="(isIncrease == 'true') ? 'mod_increase' : 'mod_decrease'">{{percentage}}%
                    </div>
                </div>
                <div class="title_name">{{chartTitle}}</div>

            </div>
            <div class="diagram_header-avatar">
                <img :src="avatar" alt="">
            </div>
        </div>
        <div class="diagram_canvas-container">
            <canvas :id="chartId" class="diagram_chart">

            </canvas>
        </div>
    </div>
</template>

<script src="./chart-js.js"></script>

<style lang='scss'>
    @import './chart-js.scss';
</style>
