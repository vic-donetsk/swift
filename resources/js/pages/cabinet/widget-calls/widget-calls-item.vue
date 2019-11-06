<template>
    <div class="widget-call_input">
        <svg class="widget-call_cross-icon">
            <use xlink:href="#cross"></use>
        </svg>
        <flag-phone @updatePhone="updatePhone" class="widget-calls_flag"></flag-phone>
        <el-checkbox v-model="checked"></el-checkbox>
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