<template>
    <div class="chat ">
        <div class="chat_container">
            <div class="chat_users ">
                <SearchForm @onSearch="handleSearch"/>
                <div class="chat_list ">
                    <div class="chat_user" v-for="(user,i) in users" :key="i" @click="selectUser(i)">
                        <img class="chat_avatar" :src="user.avatar"/>
                        <div class="chat_name">{{user.name}} {{user.surname}}</div>
                    </div>
                </div>
            </div>
            <div class="chat_messages">
                <div class="chat_user-window">
                    <div class="chat_user">
                        <div class="chat_button" @click="showUsers">&#8592;</div>
                        <img :src="selectedUser.avatar" class="chat_avatar">
                        <div class="chat_name">{{selectedUser.name}} {{selectedUser.surname}}</div>
                    </div>
                </div>
                <MessageForm />
            </div>
        </div>
    </div>
</template>


<script>
import SearchForm from "@/components/SearchForm"
import MessageForm from "@/components/MessageForm"

export default {
    data() {
        return {
            users: '',
            selectedUser:'',
            screenWidth: window.screen.width
        }
    },
    components: {
        SearchForm, MessageForm,
    },
    created() {
        this.users = this.$store.getters.getUsers
    },
    mounted() {
        if(this.screenWidth <= 1024) {
            document.querySelector(".chat_messages").classList.add("closed")
        }
        this.selectedUser = this.users[0]
    }
    ,
    methods: {
        handleSearch(query) {
            this.users = this.$store.getters.getUser(query)
            if(this.query === "") {
            this.users = this.$store.getters.getUsers
            }
        },
        selectUser(i) {
            this.selectedUser = this.users[i]
            if(this.screenWidth <= 1024) {
                document.querySelector(".chat_messages").classList.remove("closed");
                document.querySelector(".chat_users").classList.add("closed")
            }
        },
        showUsers() {
            if(this.screenWidth <= 1024) {
                document.querySelector(".chat_users").classList.remove("closed");
                document.querySelector(".chat_messages").classList.add("closed")
            }
        }
    }
}
</script>