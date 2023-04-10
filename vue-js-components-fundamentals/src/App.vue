<script setup lang="ts">
// import ClickCounter from '@/components/ClickCounter.vue'; // uncomment for click counter
// import PlanPicker from '@/components/PlanPicker.vue'; // uncomment for plan picker
// import GithubUserCard from '@/components/GithubUserCard.vue'; // uncomment for github user card
import NotificationMessage from '@/components/NotificationMessage.vue';

// const usernames = ['danielkellyio', 'hootlex', 'rahaug', 'akryum', 'kaneru-soju']; // uncomment for github user card
</script>

<template>
    <!-- UNCOMMENT BELOW FOR CLICK COUNTER -->
    <!-- <div id="app">
        <h1>Vue.js Components Fundamentals</h1>
        <ClickCounter></ClickCounter>
    </div> -->

    <!-- UNCOMMENT BELOW FOR PLAN PICKER -->
    <!-- <div id="app" class="container mx-auto py-6">
        <div class="content">
            <h1 class="title">Coffee Plans</h1>
            <h2 class="subtitle">
                We travel the world to source the very best single origin coffee for you
            </h2>
            <PlanPicker></PlanPicker>
        </div>
    </div> -->

    <!-- UNCOMMENT BELOW FOR GITHUB USER CARD -->
    <!-- <div id="app" class="ui container">
        <h1>GitHub Profiles</h1>
        <GithubUserCard v-for="username in usernames" :key="JSON.stringify(username)" :username="username"></GithubUserCard>
    </div> -->

    <!-- UNCOMMENT BELOW FOR NOTIFICATION MESSAGE -->
    <div id="app" class="ui container">
        <h1>Notification Center</h1>
        
        <NotificationMessage type="error" header="Oh no!">
            <p>Your flight has been <b>canceled</b></p>
        </NotificationMessage>

        <NotificationMessage type="warning" header="Oh dear!">
            <p>Your flight has been <b>delayed</b></p>
        </NotificationMessage>
        
        <NotificationMessage type="success" header="Oh yeah!">
            <p>Your flight is on time!</p>
        </NotificationMessage>
        
        <NotificationMessage>
            <p>Good morning (:</p>
        </NotificationMessage>
    </div>
</template>

<style scoped></style>
