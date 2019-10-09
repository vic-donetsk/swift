<template>
    <section class="page404">
        <div class="page404_title-block">
            <div class="page404_title">404</div>
            <div class="page404_subtitle">{{ __("404", "This page was not found") }}</div>
        </div>
        <div class="page404_button button mod-blue" @click="gotoMain()">{{ __("404", "Go to the main page") }}</div>
        <img class="page404_picture" src="/img/illustration/404.svg" alt='__("404", "This page was not found")'>

    </section>
</template>

<script src="./404.js"></script>

<style lang='scss' scoped>
    @import '404';
</style>
