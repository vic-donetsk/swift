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
            <tr>
                <th v-for="(oneColumn) in tableColumns" v-if="checkedNames.indexOf(oneColumn.var) !== -1">
                    {{__('statistics', oneColumn.text)}}
                </th>
            </tr>
            <tr v-for="(oneRecord, index) in list">
                <td v-if="checkedNames.indexOf('date') !== -1">{{oneRecord.date}}</td>
                <td v-if="checkedNames.indexOf('time') !== -1">{{oneRecord.time}}</td>
                <td v-if="checkedNames.indexOf('callStatus') !== -1">
                    <div class="withImage" v-if="oneRecord.callStatus === true">
                        <span class="statistics_tableColumns-callImage"><img src="/img/charts/success.svg"
                                                                             alt=""></span>
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
                            <svg @click="playAudio(index)">
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

        <!--         audio (wavesurfer.js) block-->

        <div v-if="audioFlag" class="wavesurfer" :style="{'top': audioPlayerTop + 'px'}">
            <div id="wavesurfer-playPause" class="wavesurfer-button">
                <svg v-if="!playMode" @click="playClick">
                    <use xlink:href="#playAudio"></use>
                </svg>
                <svg v-if="playMode" @click="playClick">
                    <use xlink:href="#pauseAudio"></use>
                </svg>
            </div>
            <div id="wavesurfer-stop" class="wavesurfer-button">
                <svg @click="stopClick">
                    <use xlink:href="#stopAudio"></use>
                </svg>
            </div>
            <div id="wavesurfer-volume" class="wavesurfer-button">
                <svg @click="muteClick">
                    <use xlink:href="#volumeAudio"></use>
                </svg>
            </div>
            <div id="wavesurfer-download" class="wavesurfer-button">
                <svg @click="downloadClick">
                    <use xlink:href="#downloadAudio"></use>
                </svg>
            </div>
            <div class="wavesurfer-container">
                test
            </div>
            <div class="wavesurfer-timer">
                <div id="wavesurfer-played" class="wavesurfer-timer-item">1:24</div>
                <div class="wavesurfer-timer-item">/</div>
                <div id="wavesurfer-total" class="wavesurfer-timer-item">2:36</div>
                <div class="wavesurfer-copy">
                    <svg @click="">
                    <use xlink:href="#copyAudio"></use>
                </svg>
                </div>
            </div>
            <div class="wavesurfer-close">
                <svg @click="closeAudio">
                    <use xlink:href="#closeAudio"></use>
                </svg>
            </div>
        </div>

<!--        svg for audio block-->

        <svg xmlns="http://www.w3.org/2000/svg" class="audio-sprite" style="display: none">

            <symbol id="closeAudio">
                <svg viewBox="0 0 21.59 21.59">
                    <g transform="translate(-1883.803 -945.879)">
                        <line id="Line_129" data-name="Line 129" x2="17.347" y2="17.347"
                              transform="translate(1885.923 948)" fill="none" stroke="#00215f" stroke-linecap="round"
                              stroke-width="3"/>
                        <line id="Line_130" data-name="Line 130" x1="17.347" y2="17.347"
                              transform="translate(1885.923 948)" fill="none" stroke="#00215f" stroke-linecap="round"
                              stroke-width="3"/>
                    </g>
                </svg>
                d="Path_508" data-name="Path 508" d="M331.5,36.608l4.13,4.13,4.13-4.13" transform="translate(-330.793
                -35.901)" fill="none" stroke="#00215f" stroke-width="2"/>
            </symbol>

            <symbol id="copyAudio">
                <svg viewBox="0 0 14.316 17.347">
                    <path id="Path_705" data-name="Path 705"
                          d="M30.744,0H23.457a1.922,1.922,0,0,0-1.92,1.92v.236h-1.27a1.922,1.922,0,0,0-1.92,1.92V15.427a1.922,1.922,0,0,0,1.92,1.92h7.288a1.922,1.922,0,0,0,1.92-1.92v-.236h1.27a1.922,1.922,0,0,0,1.92-1.92V1.92A1.922,1.922,0,0,0,30.744,0ZM28.236,15.427a.682.682,0,0,1-.681.681H20.267a.682.682,0,0,1-.681-.681V4.075a.682.682,0,0,1,.681-.681h7.288a.682.682,0,0,1,.681.681V15.427Zm3.19-2.156a.682.682,0,0,1-.681.681h-1.27V4.075a1.922,1.922,0,0,0-1.92-1.92h-4.78V1.92a.682.682,0,0,1,.681-.681h7.288a.682.682,0,0,1,.681.681Z"
                          transform="translate(-18.347)" fill="#4c638f"/>
                </svg>
            </symbol>

            <symbol id="downloadAudio">
                <svg viewBox="0 0 31.066 31.067">
                    <g transform="translate(1325.336 -2.083)">
                        <g id="volume" transform="translate(-1707 -938.667)">
                            <circle id="Ellipse_28" data-name="Ellipse 28" cx="15.534" cy="15.534" r="15.534"
                                    transform="translate(381.664 940.75)" fill="#00215f"/>
                            <g id="download-2" data-name="download" transform="translate(374.987 949.665)">
                                <g id="Group_276" data-name="Group 276" transform="translate(18.896)">
                                    <g id="Group_275" data-name="Group 275">
                                        <path id="Path_1481" data-name="Path 1481"
                                              d="M134.581,6.035a.413.413,0,0,0-.377-.242h-1.655V.414A.414.414,0,0,0,132.136,0h-1.655a.414.414,0,0,0-.414.414V5.793h-1.655a.414.414,0,0,0-.311.686l2.9,3.31a.413.413,0,0,0,.622,0l2.9-3.31A.413.413,0,0,0,134.581,6.035Z"
                                              transform="translate(-127.998)" fill="#fff"/>
                                    </g>
                                </g>
                                <g id="Group_278" data-name="Group 278" transform="translate(16 9.103)">
                                    <g id="Group_277" data-name="Group 277">
                                        <path id="Path_1482" data-name="Path 1482"
                                              d="M26.758,352v2.483h-9.1V352H16v3.31a.827.827,0,0,0,.828.828H27.585a.827.827,0,0,0,.828-.828V352Z"
                                              transform="translate(-16 -352)" fill="#fff"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </symbol>

            <symbol id="pauseAudio">
                <svg viewBox="0 0 31.066 31.067">
                    <g transform="translate(-381.664 -940.75)">
                        <circle id="Ellipse_28" data-name="Ellipse 28" cx="15.534" cy="15.534" r="15.534"
                                transform="translate(381.664 940.75)" fill="#00215f"/>
                        <line id="Line_43" data-name="Line 43" y2="11.023" transform="translate(394.479 950.712)"
                              fill="none" stroke="#f8fbfd" stroke-width="3"/>
                        <line id="Line_44" data-name="Line 44" y2="11.023" transform="translate(398.888 950.712)"
                              fill="none" stroke="#f8fbfd" stroke-width="3"/>
                    </g>
                </svg>
            </symbol>

            <symbol id="playAudio">
                <svg viewBox="0 0 31.066 31.067">
                    <g transform="translate(-381.664 -940.75)">
                        <circle id="Ellipse_28" data-name="Ellipse 28" cx="15.534" cy="15.534" r="15.534"
                                transform="translate(381.664 940.75)" fill="#00215f"/>
                        <g id="play-button" transform="translate(393.221 950.834)">
                            <g id="Group_265" data-name="Group 265" transform="translate(0)">
                                <path id="Path_703" data-name="Path 703"
                                      d="M20.971,10.9a.559.559,0,0,1-.559-.559V.559A.559.559,0,0,1,20.971,0l9.084,5.031a.581.581,0,0,1,0,.839C29.636,6.289,20.971,10.9,20.971,10.9Z"
                                      transform="translate(-20.412)" fill="#f8fbfd"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </symbol>

            <symbol id="stopAudio">
                <svg viewBox="0 0 31.066 31.067">
                    <g transform="translate(-381.664 -940.75)">
                        <circle id="Ellipse_28" data-name="Ellipse 28" cx="15.534" cy="15.534" r="15.534"
                                transform="translate(381.664 940.75)" fill="#00215f"/>
                        <g id="play-button" transform="translate(394.221 952.834)">
                            <g id="Group_265" data-name="Group 265" transform="translate(-1)">
                                <rect id="Rectangle_285" data-name="Rectangle 285" width="9" height="9" rx="1"
                                      transform="translate(-0.221 -0.834)" fill="#f8fbfd"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </symbol>

            <symbol id="volumeAudio">
                <svg viewBox="0 0 31.066 31.067">
                    <g transform="translate(1325.336 -2.083)">
                        <g id="volume-2" data-name="volume" transform="translate(-1707 -938.667)">
                            <circle id="Ellipse_28" data-name="Ellipse 28" cx="15.534" cy="15.534" r="15.534"
                                    transform="translate(381.664 940.75)" fill="#00215f"/>
                            <path id="Path_704" data-name="Path 704"
                                  d="M7.254,19.843a.658.658,0,0,1-1.079.507l-3.6-2.983H.658A.658.658,0,0,1,0,16.709V14.086a.659.659,0,0,1,.658-.659H2.576l3.6-2.983a.659.659,0,0,1,1.079.507v8.892Zm2.53-1.029-.047,0a.658.658,0,0,1-.465-.193l-.088-.088a.658.658,0,0,1-.064-.858,3.829,3.829,0,0,0-.1-4.692.658.658,0,0,1,.045-.88l.088-.088a.644.644,0,0,1,.5-.192.659.659,0,0,1,.477.241,5.273,5.273,0,0,1,.137,6.486A.659.659,0,0,1,9.784,18.814Zm2.722,2.035a.659.659,0,0,1-.476.233H12a.658.658,0,0,1-.466-.193l-.086-.086a.659.659,0,0,1-.038-.889,7.017,7.017,0,0,0-.116-9.168.659.659,0,0,1,.026-.9l.086-.086a.641.641,0,0,1,.485-.194.658.658,0,0,1,.473.221,8.454,8.454,0,0,1,.139,11.063Z"
                                  transform="translate(390 941.074)" fill="#f8fbfd"/>
                        </g>
                    </g>
                </svg>
            </symbol>

        </svg>

    </div>
</template>

<script src="./journal.js"></script>

<style lang='scss'>
    @import 'journal.scss';
</style>
