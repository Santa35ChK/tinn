import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import SettingsPage from '@/pages/SettingsPage.vue'
import ChatPage from "@/pages/ChatPage.vue"

export default new Router({
    routes: [{
            path: '/settings',
            component: SettingsPage
        },
        {
            path: '/chat',
            component: ChatPage
        }
    ]
})