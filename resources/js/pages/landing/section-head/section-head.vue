<template>
    <div class="section-head">
        <div class="section-head_content">
            <h1 class="section-head_title">
                {{__("landing", "Head title")}}
            </h1>

            <p class="section-head_subtitle">
                {{__("landing", "Head subtitle")}}
            </p>
        </div>
        <div class="section-head_control">
            <input type="text" class="section-head_input"
                   :placeholder='__("landing", "Head input placeholder")'>
            <div class="button mod_landing mod-blue">
                <span class="button_text">{{ __("landing", "Head button") }}</span>
            </div>
        </div>
        <div class="section-head_mouse">
            <div class="head-icon_elem"></div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "section-head.scss";
</style>

<script src="./section-head.js"></script>
