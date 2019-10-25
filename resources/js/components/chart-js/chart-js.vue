<template>
    <div >
        <div class="diagram_header">

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
