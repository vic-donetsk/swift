<template>
    <div class="landing-head">
        <div class="landing-head_content">
            <h1 class="landing-head_title">
                {{__("landing", "Head title")}}
            </h1>

            <p class="landing-head_subtitle">
                {{__("landing", "Head subtitle")}}
            </p>
        </div>
        <div class="landing-head_control">
            <input type="text" class="landing-head_input"
                   :placeholder='__("landing", "Head input placeholder")'>
            <div class="button mod_landing mod-blue">
                <span class="button_text">{{ __("landing", "Head button") }}</span>
            </div>
        </div>
        <div class="landing-head_mouse">
            <div class="head-icon_elem"></div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "landing-head.scss";
</style>

<script src="./landing-head.js"></script>
