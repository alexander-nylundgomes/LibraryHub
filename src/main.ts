import { createApp, type InjectionKey } from 'vue'
import App from './App.vue'
import router from './router'
import "./style.css";
import type { Store } from 'vuex/types/index.js';
import type { RootState } from './interfaces/root-state';
import { createPinia } from 'pinia';



const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
