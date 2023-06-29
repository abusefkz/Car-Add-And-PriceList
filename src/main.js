import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import "@/assets/bootstrap.min.css"
import "@/assets/style.css"
import NavbarPage from "@/components/NavbarPage.vue"
import { loadFonts } from './plugins/webfontloader'
import router from './vueRouter'


loadFonts()

const app =createApp(App)
app.component('NavbarPage', NavbarPage)
app.use(router)

app.use(vuetify)
app.mount('#app')
