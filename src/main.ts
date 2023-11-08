import { createApp } from 'vue';
import App from './App.vue';
import router from './components/router/router';

/* CSS */
import './assets/css/fonts.css';
import './assets/css/header.css';
import './assets/css/tabs.css';
import './assets/css/content.css';
import './assets/css/scrollbar.css';
import './assets/css/animation.css';
import './assets/css/footer.css';
import './assets/css/media-queries.css';

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);

app.use(router);

app.mount('#app');
