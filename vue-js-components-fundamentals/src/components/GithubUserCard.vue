<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import axios from 'axios';

export interface GithubUser {
    avatar_url: string;
    name: string;
    created_at: string;
    bio: string;
    followers: string;
}

const props = defineProps<{
    username: string;
}>();

const user: Ref<GithubUser> = ref({
    avatar_url: '',
    name: '',
    created_at: '',
    bio: '',
    followers: '',
});

onMounted(async () => {
    const response = await axios.get(`https://api.github.com/users/${props.username}`);
    user.value = response.data;
});
</script>
<template>
    <div class="ui card">
        <div class="image">
            <img :src="user.avatar_url" />
        </div>
        <div class="content">
            <a :href="`https://github.com/${username}`" class="header">{{ user.name }}</a>
            <div class="meta">
                <span class="date">Joined in {{ user.created_at }}</span>
            </div>
            <div class="description">{{ user.bio }}</div>
        </div>
        <div class="extra content">
            <a :href="`https://github.com/${username}?tab=followers`">
                <i class="user icon"></i>
                {{ user.followers }} Friends
            </a>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>
