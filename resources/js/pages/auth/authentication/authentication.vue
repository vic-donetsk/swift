<template>
    <section class="auth">
        <div class="auth_logo">
            <div class="Logo_title">{{ __("authentication", "Swift") }}</div>
            <div class="Logo_function">{{ __("authentication", "Callback") }}</div>
        </div>
        <div class="auth_method">
            <span class="method_login" @click="gotoAuth()">{{ __("authentication", "Login") }}</span>
            /
            <span class="method_registration" @click="gotoReg()">{{ __("authentication", "Registration") }}</span>
        </div>
        <div class="auth_authMode" v-if="authMode === 0">
            <input class="auth-input" :placeholder="__('authentication', 'Email or phone number')" id="login">
            <input class="auth-input" :placeholder=" __('authentication', 'Password')" id="password">
            <div class="button mod-blue">{{ __("authentication", "Login") }}</div>
            <div class="auth-passwordForgot">{{ __("authentication", "Forgot your password?") }}</div>
        </div>

        <div class="auth_regMode" v-else-if="authMode === 1">
            <div class="regMode_step-active">1</div>
            <div class="regMode_step-passive">2</div>
            <input class="auth-input" :placeholder="Email" id="email">
            <input class="auth-input" :placeholder="__('authentication', 'Password')" name="newPassword">
            <input class="auth-input" :placeholder="__('authentication', 'Phone number')" name="newPhone">
            <div class="button mod-blue" @click="continueReg()">{{ __("authentication", "Create an account") }}</div>
            <div class="regMode-text">{{ __("authentication", "By submitting this form, you accept") }}</div>
            <span class="regMode-link">{{ __("authentication", "Terms of use") }}</span>
            <span class="regMode-text">{{ __("authentication", "and") }}</span>
            <span class="regMode-link">{{ __("authentication", "Privacy policy") }}</span>
        </div>

        <div class="auth_regMode" v-else>
            <div class="regMode_step-passive">1</div>
            <div class="regMode_step-active">2</div>
            <input class="auth-input" :placeholder="__('authentication', 'First name')" id="email">
            <input class="auth-input" :placeholder="__('authentication', 'Last name')" name="newPassword">
            <input class="auth-input" :placeholder="__('authentication', 'Your site')" name="newPhone">
            <div class="button mod-blue">{{ __("authentication", "Log In") }}</div>
            <div class="regMode-text">{{ __("authentication", "By submitting this form, you accept") }}</div>
            <span class="regMode-link">{{ __("authentication", "Terms of use") }}</span>
            <span class="regMode-text">{{ __("authentication", "and") }}</span>
            <span class="regMode-link">{{ __("authentication", "Privacy policy") }}</span>
        </div>





    </section>
</template>

<style lang='scss'>
    @import 'authentication';
</style>


<script src="./authentication.js"></script>
