import './assets/main.scss'

import { createApp } from 'vue'


import App from './App.vue'
import router from './router'

//PLUGINS

import vuetify from './plugins/Vuetify'
import globalComponents from './plugins/GlobalComponents'
import { i18n } from './plugins/i18n'

const app = createApp(App)

app.config.globalProperties.mode = 'prod'

//PLUGINS
app.use(globalComponents)
app.use(vuetify)
app.use(i18n)

//PROJECT BASE
app.use(router)

app.mount('#app')
