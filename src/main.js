// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// Import FontAwesome Library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import Speific icons
import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faPhone, faMapMarkerAlt, faIdCard, faMapMarker } from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the library
library.add(faUser, faEnvelope, faLock, faEye, faEyeSlash, faPhone, faMapMarkerAlt, faIdCard, faMapMarker);

const app = createApp(App);

// Register the FontAwesome Component Globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');