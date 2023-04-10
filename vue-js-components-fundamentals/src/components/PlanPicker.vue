<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import PlanPickerItem from '@/components/PlanPickerItem.vue';

const plans = ['The Single', 'The Curious', 'The Addict'];
const selectedPlan: Ref<string | null> = ref(null);

const selectPlan = (plan: string) => {
    selectedPlan.value = plan;
}
</script>
<template>
    <div class="plans">
        <PlanPickerItem
            v-for="plan in plans"
            :key="JSON.stringify(plan)"
            :name="plan"
            :selected="plan === selectedPlan"
            @select="selectPlan"
        ></PlanPickerItem>
    </div>
</template>
<style scoped lang="scss"></style>
