import {createApp} from 'vue'
import App from './App.vue'
import {Quasar} from 'quasar'

import router from './router'

import './styles/quasar.sass'
import '@quasar/extras/material-icons/material-icons.css'



createApp(App)
    .use(router)
    .use(Quasar, {
        config: {},
        plugins: {}
    })
    .mount('#app')
