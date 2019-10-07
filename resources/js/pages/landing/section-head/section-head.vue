<template>
    <div class="section-head">
            <div class="section-head_content">
                <div class="section-head_title">
                    <span v-html='__("landing", "Head-title")'></span>
                </div>

                <div class="section-head_subtitle">
                    <span v-html='__("landing", "Head-subtitle")'></span>
                    <span v-html='__("landing", "Head-subtitle_text")'></span>
                </div>
            </div>

        <div class="section-head_control">
            <input type="text" class="section-head_input" :placeholder='__("landing", "Head_input-placeholder")'>

            <div class="button mod_landing mod-blue">
                <span class="button_text">{{ __("landing", "Section-head button") }}</span>
            </div>
        </div>

        <div class="section-head_icon">
            <div class="head-icon_elem"></div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "section-head.scss";
</style>

<script src="./section-head.js"></script>
