<template>
    <div class="cabinet_page" :class="currentPageClass">
        <nav class="settings_navMobile">
            <div class="settings_nav-item mod_active mod_mobile mod_select" @click="showModes()">
                <svg class="nav-item_svg">
                    <use :xlink:href="'#' + billingSteps[settingsMode].icon"></use>
                </svg>
                <div class="nav-item_text">
                    {{__('billing', `Billing menu text ${settingsMode + 1}`)}}
                </div>
            </div>
            <div v-for="(item, index) in billingSteps"
                 class="settings_nav-item mod_mobile mod_option"
                 @click="changeMobileMode(item,index)">
                <svg class="nav-item_svg">
                    <use :xlink:href="'#' + item.icon"></use>
                </svg>
                <div class="nav-item_text">
                    {{__('billing', `Billing menu text ${index + 1}`)}}
                </div>
            </div>
        </nav>

        <div class="billing_container">
            <div class="cabinet-steps" v-if="currentComponent !== 'widgetMain'">
                <div class="cabinet-steps_item"
                     v-for="(item, key) in billingSteps"
                     @click.stop="nextWidgetComponent(item, key)"
                     :class="{mod_active:currentComponent === item.component}">
                    <svg class="cabinet-steps_icon">
                        <use :xlink:href="`#${item.icon}`"></use>
                    </svg>
                    <span class="cabinet-steps_text">{{__('billing',`Billing menu text ${key+1}`)}}</span>
                </div>
            </div>
            <component :is="currentComponent"></component>
        </div>
    </div>
</template>

<script src="./billing.js"></script>

<style lang='scss'>
    @import './billing.scss';
</style>
