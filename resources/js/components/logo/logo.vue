<template>
    <router-link to="/" class="logo" :class="sizeClass" @click="gotoMain()">
        <div class="logo_title">SWIFT</div>
        <div class="logo_subtitle">callback</div>
    </router-link>
</template>

<script src="./logo.js"></script>

<style lang='scss' scoped>
    @import 'logo';
</style>
