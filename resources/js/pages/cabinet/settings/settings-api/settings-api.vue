<template>
    <div class="settings_api">

        <div class="settings_api-item">

            <div class="item_header">
                <svg class="item_header-svg">
                    <use xlink:href="#api_gear"></use>
                </svg>
                <div class="item_header-value">API KEY</div>
            </div>

            <div class="item_element">
                {{apiKey}}
            </div>
            <el-switch
                style="display: block"
                v-model="isApiOn"
                width="45"
                active-color="#00215F"
                active-text="ON"
                inactive-text="OFF">
            </el-switch>

<!--                inactive-color="#ff4949"-->

        </div>

        <div class="settings_api-item">

            <div class="item_header">
                <svg class="item_header-svg">
                    <use xlink:href="#user"></use>
                </svg>
                <div class="item_header-value">ID</div>
            </div>

            <div class="item_element">
                {{ID}}
            </div>


        </div>

    </div>
</template>

<script src="./settings-api.js"></script>

<style lang='scss'>
    @import 'settings-api.scss';
</style>
