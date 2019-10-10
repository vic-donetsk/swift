<template>
    <div class="landing-main">
        <div class="landing-main_block mod_1">
            <div class="landing-main_numbering">
                <span class="landing-main_number">1</span>
            </div>
            <div class="landing-main_content">
                <img src="/img/illustration/1-step.svg"
                     class="landing-main_browser">
                <img src="/img/illustration/1-step-mobi.svg"
                     class="landing-main_browser mod_mobi">
                <div class="landing-main_message-wrap">
                    <div class="landing-main_message">
                        <p>{{ __("landing", "Message 1") }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="landing-main_block mod_2">
            <div class="landing-main_numbering">
                <span class="landing-main_number">2</span>
            </div>
            <div class="landing-main_content mod_reverse">
                <img src="/img/illustration/2-step.svg"
                     class="landing-main_browser">
                <img src="/img/illustration/2-step-mobi.svg"
                     class="landing-main_browser mod_mobi">
                <div class="landing-main_message-wrap">
                    <div class="landing-main_message"
                         v-html='__("landing", "Message 2")'></div>
                </div>
            </div>
        </div>

        <div class="landing-main_block mod_3">
            <div class="landing-main_numbering">
                <span class="landing-main_number">3</span>
            </div>
            <div class="landing-main_content">
                <img src="/img/illustration/3-step.svg"
                     class="landing-main_browser">
                <div class="landing-main_message-wrap">
                    <div class="landing-main_message"
                         v-html='__("landing", "Message 3")'></div>
                </div>
            </div>
        </div>
        <div class="landing-main_block mod_4">
            <div class="landing-main_numbering">
                <span class="landing-main_number">4</span>
            </div>
            <div class="landing-main_content mod_reverse">
                <img src="/img/illustration/4-step.svg"
                     class="landing-main_browser">
                <div class="landing-main_message-wrap">
                    <div class="landing-main_message">
                        <p>{{ __("landing", "Message 4") }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "landing-main.scss";
</style>

<script src="./landing-main.js"></script>
