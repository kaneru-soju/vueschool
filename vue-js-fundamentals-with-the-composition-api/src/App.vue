<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ShoppingListItem } from './entities/ShoppingListItem';
const title = 'Shopping List App';
const editing = ref(false);
const items = ref([
    {
        id: 1,
        label: '10 party hats',
        purchased: true,
        highPriority: false,
    },
    {
        id: 2,
        label: '2 board games',
        purchased: true,
        highPriority: false,
    },
    {
        id: 3,
        label: '20 cups',
        purchased: false,
        highPriority: true,
    },
]);
const reversedItems = computed(() => {
    return [...items.value].reverse();
});
const newItem = ref('');
const newItemHighPriority = ref(false);

const doEdit = (e: boolean) => {
    editing.value = e;
    newItem.value = '';
    newItemHighPriority.value = false;
};

const saveItem = () => {
    const newShopppingListItem: ShoppingListItem = {
        id: items.value.length + 1,
        label: newItem.value,
        purchased: false,
        highPriority: newItemHighPriority.value,
    };
    items.value.push(newShopppingListItem);
    newItem.value = '';
    newItemHighPriority.value = false;
};

const togglePurchased = (item: ShoppingListItem) => {
    item.purchased = !item.purchased;
};
</script>

<template>
    <div class="header">
        <h1>{{ title }}</h1>
        <button class="btn btn-cancel" v-if="editing" @click="doEdit(false)">Cancel</button>
        <button class="btn btn-primary" v-else @click="doEdit(true)">Add Item</button>
    </div>
    <form class="add-item-form" v-if="editing" @submit.prevent="saveItem">
        <input v-model.trim="newItem" type="text" placeholder="Add an item" />
        <label>
            <input type="checkbox" v-model="newItemHighPriority" />
            High Priority
        </label>
        <button class="btn btn-primary" @click="saveItem()" :disabled="newItem.length < 3">
            Save Item
        </button>
    </form>
    <ul id="shopping-list">
        <li
            v-for="item in reversedItems"
            @click="togglePurchased(item)"
            :key="item.id"
            class="static-class"
            :class="{ strikeout: item.purchased, priority: item.highPriority }"
        >
            {{ item.label }}
        </li>
    </ul>
    <p v-if="!items.length">Nothing to see here</p>
</template>

<style scoped lang="scss"></style>
