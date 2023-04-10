<script setup lang="ts">
import { ref } from 'vue';

export interface Props {
    type?: string;
    header?: string;
}
const props = withDefaults(defineProps<Props>(), {
    type: 'info',
    header: 'Information',
});

const hidden = ref(false);

function hide() {
    hidden.value = true;
}
</script>
<template>
    <!-- Notification Message Markup -->
    <!-- Types: info, warning, error, success -->
    <div class="ui message" :class="props.type" v-if="!hidden">
        <i class="close icon" @click="hide"></i>
        <div class="header">{{ props.header }}</div>
        <slot></slot>
    </div>
</template>
<script setup lang="scss"></script>
