<script setup lang="ts">
export interface Props {
    name: string;
    selected?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    selected: false,
});
const emit = defineEmits<{
    (e: 'select', plan: string): void;
}>();
</script>
<template>
    <div class="plan" :class="{ 'active-plan': props.selected }" @click="emit('select', props.name)">
        <div class="description">
            <span class="title">
                {{ props.name }}
            </span>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>
