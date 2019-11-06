<template>
    <div class="widget-call_input">
        <svg class="widget-call_cross-icon mod_desktop">
            <use xlink:href="#cross"></use>
        </svg>
        <flag-phone @updatePhone="updatePhone" class="widget-calls_flag"></flag-phone>
        <input type="text"
               class="widget-input"
               :placeholder='__("widget", "Widget chat head 1")'>
        <el-checkbox v-model="checked" class="mod-desktop"></el-checkbox>

        <div class="widget-call_mobile-block">
            <div class="widget-checkbox_mobile">
                <el-checkbox v-model="checked"></el-checkbox>
                <span>{{__('widget','Widget call checkbox 1')}}</span>
            </div>

            <div class="widget-cross_mobile">
                <svg class="widget-call_cross-icon">
                    <use xlink:href="#cross"></use>
                </svg>
                <span>{{__('widget','Widget call input close')}}</span>
            </div>

        </div>
    </div>
</template>

<script>
    import FlagPhone from './../../../components/flag-phone/flag-phone.vue';

    export default {
        components: {
            'flag-phone': FlagPhone
        },
        data() {
            return {
                phoneNumber: '',
                checked: false
            }
        },
        methods: {
            updatePhone(value) {
                this.phoneNumber = value;
            }
        }
    }
</script>