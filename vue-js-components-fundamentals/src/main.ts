import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

// import '@/assets/planpicker.scss'; // uncomment for plan picker

const app = createApp(App);

app.use(createPinia());

app.mount('#app');
