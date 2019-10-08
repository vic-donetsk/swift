<template>
    <div class="landing">
        <header>
            <landing-header></landing-header>
            <landing-menu></landing-menu>
        </header>
        <landing-head></landing-head>

        <!--{{ getTitle }}-->

        <!--<div class="button" @click="goToAuth()">Go to auth</div>-->

        <!--<router-link to="/authentication">Auth</router-link>-->
    </div>
</template>

<script src="./landing.js"></script>

<style lang='scss'>
    @import './landing.scss';
</style>
