<template>
    <section class="auth">
        <div class="auth_logo" :class="headerClass">
            <div class="logo_title">{{ __("authentication", "Swift") }}</div>
            <div class="logo_function">{{ __("authentication", "Callback") }}</div>
        </div>
        <div class="auth_method" v-if="authMode !== 3">
            <span class="method_login" @click="gotoAuth()">{{ __("authentication", "Login") }}</span>
            /
            <span class="method_registration" @click="gotoReg()">{{ __("authentication", "Registration") }}</span>
        </div>
        <div class="auth_authMode" v-if="authMode === 0">
            <input class="auth-input" :placeholder="__('authentication', 'Email or phone number')" id="login">
            <input class="auth-input" :placeholder=" __('authentication', 'Password')" id="password">
            <div class="button mod-blue">{{ __("authentication", "Login") }}</div>
            <div class="auth-passwordForgot" @click="gotoRestore()">{{ __("authentication", "Forgot your password?") }}</div>
        </div>

        <div class="auth_regMode" v-if="authMode === 1">
            <div class="regMode_step-active">1</div>
            <div class="regMode_step-passive">2</div>
            <input class="auth-input" placeholder="Email" id="email">
            <input class="auth-input" :placeholder="__('authentication', 'Password')" name="newPassword">
            <input class="auth-input" :placeholder="__('authentication', 'Phone number')" name="newPhone">
            <div class="button mod-blue" @click="continueReg()">{{ __("authentication", "Create an account") }}
            </div>
        </div>
        <div class="auth_regMode" v-if="authMode === 2">
            <div class="regMode_step-passive">1</div>
            <div class="regMode_step-active">2</div>
            <input class="auth-input" :placeholder="__('authentication', 'First name')" id="firstNme">
            <input class="auth-input" :placeholder="__('authentication', 'Last name')" name="lastName">
            <input class="auth-input" :placeholder="__('authentication', 'Your site')" name="site">
            <div class="button mod-blue">{{ __("authentication", "Log In") }}</div>
        </div>

        <div class="auth_method" v-if="authMode === 3">
            <span class="method_restore">{{ __("authentication", "Password recovery") }}</span>
        </div>
        <div class="auth_restoreMode" v-if="authMode === 3">
            <div class="restoreMode_text">{{ __("authentication", "Enter your email for recover your password.") }}</div>
            <input class="auth-input" placeholder="Email" id="restoreEmail">
            <div class="button mod-blue">{{ __("authentication", "Continue") }}</div>
            <div class="restoreMode_back">
                <span class="leftArrow"></span>
                <span class="restoreMode_back-button" @click="gotoAuth()">{{ __("authentication", "Back") }}</span>
            </div>
        </div>


    </section>
</template>

<style lang='scss'>
    @import 'authentication';
</style>


<script src="./authentication.js"></script>
