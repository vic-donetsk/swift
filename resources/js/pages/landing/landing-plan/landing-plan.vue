<template>
    <div class="landing-plan">
        <h2 class="landing-plan_title">
            <span>{{__("landing", "Plan title")}}</span>
        </h2>
        <div class="landing-plan_container">
            <div class="landing-plan_block left">
                <img src="/img/illustration/Starter.svg" class="landing-plan_image">
                <h3 class="landing-plan_name">STARTER</h3>
            </div>

            <div class="landing-plan_block middle">
                <img src="/img/illustration/Profesional.svg" class="landing-plan_image">
                <h3 class="landing-plan_name">PROFESIONAL</h3>
            </div>
            <div class="landing-plan_block right">
                <img src="/img/illustration/Premium.svg" class="landing-plan_image">
                <h3 class="landing-plan_name">PREMIUM</h3>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
    @import "landing-plan.scss";
</style>

<script src="./landing-plan.js"></script>