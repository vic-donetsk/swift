<template>
    <div class="statistics-journal">
        <div class="statistics_journal-title">
            <svg class="title_icon">
                <use xlink:href="#phone"></use>
            </svg>
            {{__('statistics', "CALL JOURNAL")}}
        </div>
        <div class="statistics_journal-export">
            {{__('statistics', "Export table in format:")}}
            <span class="export-format">.xls</span>
            <span> / </span>
            <span class="export-format">.csv</span>
        </div>
        <div class="statistics_tableColumns-settings" @click="openSettings">
            <svg class="settings_settings">
                <use xlink:href="#settings"></use>
            </svg>
            <img src="/img/charts/dropdown.svg" class="settings_dropdown" alt="">
        </div>
        <div v-if="settingsMode === true" class="statistics_tableColumns-customize">
            <div v-for="oneColumn in tableColumns">
                <input class="tableColumns_checkbox" type="checkbox" :id="oneColumn" :value="oneColumn"
                       v-model="checkedNames">
                <label class="tableColumns_label" :for="oneColumn">
                    <p class="tableColumns_label-square"></p>
                    <p class="tableColumns_label-text">{{oneColumn}}</p>
                </label>
            </div>
        </div>
        <table class="statistics_tableColumns">
            <th v-for="oneColumn in tableColumns" v-if="checkedNames.indexOf(oneColumn) !== -1"> {{__('statistics', oneColumn)}}</th>
            <tr v-for="oneRecord in list">
                <td class="td-dark">{{oneRecord.date}}</td>
            </tr>
        </table>
    </div>
</template>

{ date:  time:  callStatus: true, duration: , clientNumber:  managerNumber: ',
clientName:  email: , source: homePage: , callPage: , ip: , notes:  region:  },

<script src="./journal.js"></script>

<style lang='scss'>
    @import 'journal.scss';
</style>
