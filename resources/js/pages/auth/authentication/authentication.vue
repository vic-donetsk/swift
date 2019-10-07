<template>
    <section class="auth">
        <div class="auth_wrapper">
            <logo :class="headerClass" size="auth"></logo>
            <div class="auth_method" v-if="authMode !== 3">
                <span :class="{mod_passive: (authMode === 1 || authMode === 2)}" @click="gotoAuth()">{{ __("authentication", "Login") }}</span>
                /
                <span :class="{mod_passive: (authMode === 0)}" @click="gotoReg()">{{ __("authentication", "Registration") }}</span>
            </div>
            <div class="auth_authMode" v-if="authMode === 0">
                <input class="auth-input" :placeholder="__('authentication', 'Email or phone number')" id="login">
                <input class="auth-input" :placeholder=" __('authentication', 'Password')" id="password">
                <div class="auth_button button mod-blue">{{ __("authentication", "Login") }}</div>
                <div class="auth-passwordForgot" @click="gotoRestore()">{{ __("authentication", "Forgot your password?")
                    }}
                </div>
            </div>

            <div class="auth_regMode" v-if="authMode === 1">
                <div class="regMode_steps">
                    <div class="regMode_step mod_active">1</div>
                    <div class="regMode_step">2</div>
                </div>
                <input class="auth-input" placeholder="Email" id="email">
                <input class="auth-input" :placeholder="__('authentication', 'Password')" name="newPassword">
                <input class="auth-input" :placeholder="__('authentication', 'Phone number')" name="newPhone">
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
                <input class="auth-input" :placeholder="__('authentication', 'First name')" id="firstNme">
                <input class="auth-input" :placeholder="__('authentication', 'Last name')" name="lastName">
                <input class="auth-input" :placeholder="__('authentication', 'Your site')" name="site">
                <div class="button mod-blue">{{ __("authentication", "Log In") }}</div>

                <div class="regMode-agree">{{ __("authentication", "By submitting this form, you accept") }}
                    <a href="#" target="_blank" class="regMode-link">{{ __("authentication", "Terms of use") }}</a>&nbsp;
                    {{ __("authentication", "and") }}&nbsp;
                    <a href="#" target="_blank" class="regMode-link">{{ __("authentication", "Privacy policy") }}</a>
                </div>

            </div>

            <div class="auth_method" v-if="authMode === 3">
                <span class="method_restore">{{ __("authentication", "Password recovery") }}</span>
            </div>
            <div class="auth_restoreMode" v-if="authMode === 3">
                <div class="restoreMode_text">{{ __("authentication", "Enter your email for recover your password.")
                    }}
                </div>
                <input class="auth-input" placeholder="Email" id="restoreEmail">
                <div class="button mod-blue">{{ __("authentication", "Continue") }}</div>
                <div class="restoreMode_back">
                    <span class="leftArrow"></span>
                    <span class="restoreMode_back-button" @click="gotoAuth()">{{ __("authentication", "Back") }}</span>
                </div>
            </div>
        </div>


    </section>
</template>

<style lang='scss' scoped>
    @import 'authentication';
</style>


<script src="./authentication.js"></script>
