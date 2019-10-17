<template>
    <div class="cabinet-header">
        <div class="cabinet-header_content">
            <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 1')}}
            </span>

                <span class="cabinet-header_value">
                {{__('widget','Cabinet header value')}}
            </span>

                <div class="button mod-blue">
                    <span class="button_text">{{ __("widget", "Cabinet header button") }}</span>
                </div>

            </div>
            <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 2')}}
            </span>

                <div class="cabinet-header_progress-wrap">
                    <div class="cabinet-header_progress">

                    </div>
                </div>


            </div>

            <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 3')}}
            </span>

                <div class="cabinet-header_progress-wrap">
                    <div class="cabinet-header_progress mod-size">

                    </div>
                </div>


            </div>

            <div class="cabinet-header_item">
          <span class="cabinet-header_title">
                {{__('widget','Cabinet header title 4')}}
            </span>

                <span class="cabinet-header_value mod_margin">
                {{__('widget','Cabinet header value 2')}}
            </span>

            </div>

            <div class="cabinet-header_notify">
                <svg class="cabinet-header_icon">
                    <use xlink:href="#bell"></use>
                </svg>

                <div class="cabinet-header_icon-item">

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @import "cabinet-header.scss";
</style>

<script src="./cabinet-header.js"></script>
