<template>
    <section class="auth">
        <div class="auth_wrapper">
            <logo class="regHeader" size="auth"></logo>
            <div class="auth_method">
                <span class="mod_passive" @click="gotoAuth()">{{ __("authentication", "Login") }}</span>
                /
                <span @click="gotoReg()">{{ __("authentication", "Registration") }}</span>
            </div>

            <div class="auth_regMode" v-if="authMode === 1">
                <div class="regMode_steps">
                    <div class="regMode_step mod_active">1</div>
                    <div class="regMode_step">2</div>
                </div>
                <input class="auth-input" placeholder="Email" id="newEmail">
                <input class="auth-input" :placeholder="__('authentication', 'Password')" id="newPassword">
                <input class="auth-input" :placeholder="__('authentication', 'Phone number')" id="newPhone">
                <div class="button mod-blue" @click="continueReg()">{{ __("authentication", "Create an account") }}
                </div>

                <div class="regMode-agree">{{ __("authentication", "By submitting this form, you accept") }}
                    <a href="#" target="_blank" class="regMode-link">{{ __("authentication", "Terms of use") }}</a>&nbsp;
                    {{ __("authentication", "and") }}&nbsp;
                    <a href="#" target="_blank" class="regMode-link">{{ __("authentication", "Privacy policy") }}</a>
                </div>
            </div>

            <div class="auth_regMode" v-if="authMode === 2">
                <div class="regMode_steps">
                    <div class="regMode_step">1</div>
                    <div class="regMode_step mod_active">2</div>
                </div>
                <input class="auth-input" :placeholder="__('authentication', 'First name')" id="firstName">
                <input class="auth-input" :placeholder="__('authentication', 'Last name')" id="lastName">
                <input class="auth-input" :placeholder="__('authentication', 'Your site')" id="site">
                <div class="button mod-blue">{{ __("authentication", "Log In") }}</div>

                <div class="regMode-agree">{{ __("authentication", "By submitting this form, you accept") }}
                    <a href="#" target="_blank" class="regMode-link">{{ __("authentication", "Terms of use") }}</a>&nbsp;
                    {{ __("authentication", "and") }}&nbsp;
                    <a href="#" target="_blank" class="regMode-link">{{ __("authentication", "Privacy policy") }}</a>
                </div>

            </div>

        </div>

    </section>
</template>

<script src="./registration.js"></script>

<style lang='scss' scoped>
    @import '../authentication';
</style>
