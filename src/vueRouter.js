import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue"
import NewPage from "@/newpage/AddAd.vue"

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'NewPage',
        path: '/new',
        component: NewPage
    }
]


const router = createRouter({
    routes,
    history: createWebHashHistory()
}) 

export default router;