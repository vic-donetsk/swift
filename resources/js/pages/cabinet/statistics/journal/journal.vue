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
                <input class="tableColumns_checkbox" type="checkbox" :id="oneColumn.var" :value="oneColumn.var"
                       v-model="checkedNames">
                <label class="tableColumns_label" :for="oneColumn.var">
                    <p class="tableColumns_label-square"></p>
                    <p class="tableColumns_label-text">{{__('statistics', oneColumn.text)}}</p>
                </label>
            </div>
        </div>
        <table class="statistics_tableColumns">
            <th v-for="oneColumn in tableColumns" v-if="checkedNames.indexOf(oneColumn.var) !== -1"> {{__('statistics',
                oneColumn.text)}}
            </th>
            <tr v-for="oneRecord in list">
                <td v-if="checkedNames.indexOf('date') !== -1">{{oneRecord.date}}</td>
                <td v-if="checkedNames.indexOf('time') !== -1">{{oneRecord.time}}</td>
                <td v-if="checkedNames.indexOf('callStatus') !== -1">
                    <div class="withImage" v-if="oneRecord.callStatus === true">
                        <span class="statistics_tableColumns-callImage"><img src="/img/charts/success.svg" alt=""></span>
                        <span> {{__('statistics', 'Success')}}</span>
                    </div>
                    <div class="withImage" v-else>
                        <span class="statistics_tableColumns-callImage"><img src="/img/charts/lost.svg" alt=""></span>
                        <span> {{__('statistics', 'Lost')}}</span>
                    </div>
                </td>
                <td v-if="checkedNames.indexOf('duration') !== -1">
                    <div v-if="oneRecord.callStatus === true" class="withImage">
                        <span>{{oneRecord.duration}}</span>
                        <span class="statistics_tableColumns-soundImage">
                            <svg>
                                <use xlink:href="#volume-up-solid"></use>
                            </svg>
                        </span>
                    </div>
                </td>
                <td v-if="checkedNames.indexOf('clientNumber') !== -1">{{oneRecord.clientNumber}}</td>
                <td v-if="checkedNames.indexOf('managerNumber') !== -1">{{oneRecord.managerNumber}}</td>
                <td v-if="checkedNames.indexOf('clientName') !== -1">{{oneRecord.clientName}}</td>
                <td v-if="checkedNames.indexOf('email') !== -1">{{oneRecord.email}}</td>
                <td v-if="checkedNames.indexOf('source') !== -1">
                    <a :href="oneRecord.source" target="_blank">{{oneRecord.source}}</a></td>
                <td v-if="checkedNames.indexOf('homePage') !== -1">
                    <a :href="oneRecord.homePage" target="_blank">{{oneRecord.homePage}}</a>
                </td>
                <td v-if="checkedNames.indexOf('callPage') !== -1">
                    <a :href="oneRecord.callPage" target="_blank">{{oneRecord.callPage}}</a>
                </td>
                <td v-if="checkedNames.indexOf('ip') !== -1">{{oneRecord.ip}}</td>
                <td v-if="checkedNames.indexOf('notes') !== -1">{{oneRecord.notes}}</td>
                <td v-if="checkedNames.indexOf('region') !== -1">{{oneRecord.region}}</td>
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
