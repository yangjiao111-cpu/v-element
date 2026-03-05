<script setup lang="ts">
import {ref,computed,inject} from 'vue'
import type {ButtonProps,ButtonEmits,ButtonInstance} from './types';
import { throttle } from 'lodash-es';
import { BUTTON_GROUP_CTX_KEY } from './constans';
import ErIcon from '../Icon/Icon.vue'

defineOptions({
    name:'ErButton'
});
const props = withDefaults(defineProps<ButtonProps>(),{
    tag:"button",
    nativeType:"button",
    useThrottle:true,
    throttleDuration:500
});
const emit = defineEmits<ButtonEmits>();

const slots = defineSlots();
const ctx = inject(BUTTON_GROUP_CTX_KEY,void 0)

const _ref = ref<HTMLButtonElement>();
const size = computed(()=> ctx?.size ?? props.size ?? "");
const type = computed(()=> ctx?.type ?? props.type ?? "")
const disabled = computed(()=> ctx?.disabled ?? props.disabled ?? "")
const iconStyle = computed(() => {
    marginRight:slots.default?"6px" : '0px'
})

const handleBtnClick = (e:MouseEvent) => emit('click',e);
const handleBtnClickThrottle = throttle(handleBtnClick,props.throttleDuration,{trailing:false})

defineExpose<ButtonInstance>({
    ref:_ref
})
</script>

<template>
    <component
        :is="props.tag"
        :autofocus="autofocus"
        ref="_ref"
        class="er-button"
        :type="tag==='button'?nativeType : void 0"
        :disabled="disabled || loading?true:void 0"
        :class="{
            [`er-button--${type}`]:type,
            [`er-button--${size}`]:size,
            'is-plain':plain,
            'is-round':round,
            'is-circle':circle,
            'is-disabled':disabled,
            'is-loading':loading
        }"
        @click="(e:MouseEvent) => {
            useThrottle?handleBtnClickThrottle(e):handleBtnClick(e)
        }"
    >
        <template v-if="loading">
            <slot name="loading">
                <er-icon
                    :style="iconStyle"
                    class="loading-icon"
                    :icon="loadingIcon ?? 'spinner'"
                    size="1x"
                    spin
                ></er-icon>
            </slot>
        </template>
        <er-icon 
            v-if="icon && !loading"
            :icon="icon"
            size="1x"
            style="iconStyle"
        />

        <slot></slot>
    </component>
</template>

<style scoped>
@import './style.css';
</style>