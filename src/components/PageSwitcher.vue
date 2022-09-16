<template>
    <div class="page-switcher">
        <div class="page-switcher_container">
            <div class="page-switcher_list">
                    <router-link v-for="(page,i) in pages" :key="i" :to="page.link" class="page-switcher_item" v-bind:class="{active: page.link === currentRouteName}">
                            <img :src="page.imgUrl" class="page-switcher_image" v-if="page.link != currentRouteName"/>
                            <img :src="page.activeImgUrl" v-if="page.link === currentRouteName"/>
                            <div class="page-switcher_title">{{page.name}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                {
                    name: 'Настройки',
                    imgUrl: require("@/assets/img/settings.svg"),
                    activeImgUrl: require("@/assets/img/settings-active.svg"),
                    link: '/settings',
                },
                {
                    name: 'Чат',
                    imgUrl: require("@/assets/img/conversation.svg"),
                    activeImgUrl: require("@/assets/img/conversation-active.svg"),
                    link: "/chat",
                }
            ]
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.path
        }
    }
}
</script>