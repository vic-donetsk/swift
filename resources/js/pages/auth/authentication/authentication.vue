<template>
    <section class="auth">
        <div class="auth_logo">
            <div class="Logo_title">{{ __("authentication", "Swift") }}</div>
            <div class="Logo_function">{{ __("authentication", "Callback") }}</div>
        </div>
        <div class="auth_method">
            <span class="method_login">{{ __("authentication", "Login") }}</span>
            /
            <span class="method_regostration">{{ __("authentication", "Registration") }}</span>
        </div>
        <div class="auth_data">
            <input class="auth_data-input" :placeholder="__('authentication', 'Email or phone number')" name="login">
            <input class="auth_data-input" :placeholder=" __('authentication', 'Password')" name="password">
            <div class="button">{{ __("authentication", "Login") }}</div>
            <div class="auth_data-forgot">{{ __("authentication", "Forgot your password?") }}</div>
        </div>



    </section>
</template>

<style lang='scss'>
    @import 'authentication';
</style>


<script src="./authentication.js"></script>
