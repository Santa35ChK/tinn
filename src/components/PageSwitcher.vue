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

<style lang="scss">
.page-switcher {
    .page-switcher_container {
        .page-switcher_list {
                .page-switcher_item {
                    text-decoration: none;
                width: 330px;
                display: flex;
                align-items: center;
                padding: 19px;
                background: #FFFFFF;
                box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.03);
                border-radius: 10px;
                .page-switcher_image {
                    margin-right: 15px;
                }
                .page-switcher_title {
                    font-size: 16px;
                    line-height: 22px;
                    color: #000;
                }
            }
            .page-switcher_item:not(:first-child) {
                margin-top: 16px
            }
            .active {
            background-color: #2D81FF;
                .page-switcher_title {
                    font-size: 16px;
                    line-height: 22px;
                    color: #fff;
                    margin-left: 15px;
                }
            }
        }
    }
}


</style>

