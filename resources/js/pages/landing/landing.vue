<template>
    <div class="landing">
        <header>
            <landing-header></landing-header>
            <landing-menu></landing-menu>
        </header>
        <landing-head></landing-head>
        <landing-main></landing-main>
        <landing-offers></landing-offers>
        <landing-cabinet></landing-cabinet>
        <landing-plan></landing-plan>

        <footer>
            <landing-footer>
                <landing-footer-top></landing-footer-top>
                <landing-footer-bottom></landing-footer-bottom>
            </landing-footer>
        </footer>

        <!--{{ getTitle }}-->

        <!--<div class="button" @click="goToAuth()">Go to auth</div>-->

        <!--<router-link to="/authentication">Auth</router-link>-->
    </div>
</template>

<script src="./landing.js"></script>

<style lang='scss'>
    @import './landing.scss';
</style>
