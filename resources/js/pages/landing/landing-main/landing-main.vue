<template>
    <div class="landing-main">
        <div class="landing-main_container">
            <div class="landing-main_numbering">

            </div>
            <div class="landing-main_browser">
                <div class="landing-browser_head">
                    <div class="browser-head_buttons">
                        <div class="browser-head-item red"></div>
                        <div class="browser-head-item yellow"></div>
                        <div class="browser-head-item green"></div>
                    </div>
                    <div class="browser-head_buttons">
                        <div class="browser-head-elem"></div>
                        <div class="browser-head-elem"></div>
                    </div>

                    <div class="browser-head_search">
                        <span>{{ __("landing", "Browser search placeholder") }}</span>
                    </div>

                    <div class="browser-head_buttons">
                        <div class="browser-head-elem"></div>
                        <div class="browser-head-elem"></div>
                        <div class="browser-head-elem"></div>
                    </div>
                </div>

                <div class="landing-browser_content">

                </div>
            </div>

            <div class="landing-main-message">

            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "landing-main.scss";
</style>

<script src="./landing-main.js"></script>
