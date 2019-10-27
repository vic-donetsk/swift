<template>
    <div>
<!--        <div v-if="settingsMode === true" class="statistics_tableColumns-modal" @click="closeSettings">-->
<!--        </div>-->
        <div v-if="settingsMode === true" class="statistics_tableColumns">
            <div v-for="oneColumn in tableColumns">
                <input class="tableColumns_checkbox" type="checkbox" :id="oneColumn" :value="oneColumn"
                       v-model="checkedNames">
                <label class="tableColumns_label" :for="oneColumn">
                    <p class="tableColumns_label-square"></p>
                    <p class="tableColumns_label-text">{{oneColumn}}</p>
                </label>
            </div>
        </div>
        <div>
            <div v-for="oneColumn in tableColumns" v-if="checkedNames.indexOf(oneColumn) !== -1"> {{oneColumn}}</div>
        </div>
    </div>
</template>

<script src="./journal.js"></script>

<style lang='scss'>
    @import 'journal.scss';
</style>
