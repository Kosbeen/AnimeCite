import { createApp } from 'vue';


import App from './App.vue';
import BaseCard from './components/BaseComponents/BaseCard.vue'
import BaseButton from './components/BaseComponents/BaseButton.vue'
import BaseDialog from './components/BaseComponents/BaseDialog.vue'

const app = createApp(App);

app.component('base-card', BaseCard),
app.component('base-btn', BaseButton)
app.component('base-dialog', BaseDialog)
app.mount('#app');
