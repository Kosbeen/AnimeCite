import { createApp } from 'vue';


import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue';
import BaseCard from './components/BaseComponents/BaseCard.vue'
import BaseButton from './components/BaseComponents/BaseButton.vue'
import BaseDialog from './components/BaseComponents/BaseDialog.vue'
import AnimeList from './components/Page/AnimeList.vue'
import GenresPage from './components/Page/GenresPage.vue'


const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/animelist', component: AnimeList},
        {path: '/genres', component: GenresPage}
    ]
})

app.component('base-card', BaseCard),
app.component('base-btn', BaseButton)
app.component('base-dialog', BaseDialog)
app.use(router)
app.mount('#app');
