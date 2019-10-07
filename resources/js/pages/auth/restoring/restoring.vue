<template>
    <section class="auth">
        <div class="auth_wrapper">
            <logo class="restoreHeader" size="auth"></logo>


            <div class="auth_method">
                <span class="method_restore">{{ __("authentication", "Password recovery") }}</span>
            </div>
            <div class="auth_restoreMode">
                <div class="restoreMode_text">{{ __("authentication", "Enter your email for recover your password.")
                    }}
                </div>
                <input class="auth-input" placeholder="Email" id="restoreEmail">
                <div class="button mod-blue">{{ __("authentication", "Continue") }}</div>
                <div class="restoreMode_back">
                    <span class="restoreMode_backButton icon-arrow(left-back)" @click="gotoAuth()">{{ __("authentication", "Back") }}</span>
                </div>
            </div>
        </div>


    </section>
</template>

<script src="./restoring.js"></script>

<style lang='scss' scoped>
    @import '../authentication';
</style>
