<template>
    <section class="auth">
        <div class="auth_wrapper">
            <logo class="authHeader" size="auth"></logo>
            <div class="auth_method">
                <span>{{ __("authentication", "Login") }}</span>
                /
                <span class="mod_passive" @click="gotoReg()">{{ __("authentication", "Registration") }}</span>
            </div>
            <div class="auth_authMode" >
                <input class="auth-input" :placeholder="__('authentication', 'Email or phone number')" id="login">
                <input class="auth-input" :placeholder=" __('authentication', 'Password')" id="password">
                <div class="auth_button button mod-blue">{{ __("authentication", "Login") }}</div>
                <div class="auth-passwordForgot" @click="gotoRestore()">{{ __("authentication", "Forgot your password?")
                    }}
                </div>
            </div>


        </div>


    </section>
</template>

<style lang='scss' scoped>
    @import '../authentication';
</style>


<script src="./authentication.js"></script>
