<template>
    <div class="chat">
        <div class="chat_container">
            <div class="chat_users">
                <SearchForm @onSearch="handleSearch"/>
                <div class="chat_list">
                    <div class="chat_user" v-for="(user,i) in users" :key="i" @click="selectUser(i)">
                        <img class="chat_avatar" :src="user.avatar"/>
                        <div class="chat_name">{{user.name}} {{user.surname}}</div>
                    </div>
                </div>
            </div>
            <div class="chat_messages">
                <div class="chat_user-window">
                    <div class="chat_user">
                        <img :src="selectedUser.avatar" class="chat_avatar">
                        <div class="chat_name">{{selectedUser.name}} {{selectedUser.surname}}</div>
                    </div>
                </div>
                <MessageForm/>
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
        }
    },
    components: {
        SearchForm, MessageForm, 
    },
    created() {
        this.users = this.$store.getters.getUsers
        this.selectUser(0)
    },
    methods: {
        handleSearch(query) {
            this.users = this.$store.getters.getUser(query)
            if(this.query === "") {
            this.users = this.$store.getters.getUsers
            }
        },
        selectUser(i) {
            this.selectedUser = this.users[i]
        },
        showEmoji(emoji) {
      this.emojisOutput = this.emojisOutput + emoji.native;
    }
  
    }
}
</script>

<style lang="scss">
.chat {
    .chat_container {
        display: flex;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 10px;
        .chat_users {
            border-right: 1px solid #D8D8D8;
            .chat_list {
                padding: 0 15px;
                .chat_user {
                    cursor: pointer;
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    .chat_name {
                        margin-left: 15px;
                    }
                }
            }
        }
        .chat_messages {
                .chat_user-window {
                    padding: 15px 20px;
                    width: 30vw;
                    border-bottom: 1px solid #D8D8D8;
                    .chat_user {
                    display: flex;
                    align-items: center;
                    .chat_name {
                        margin-left: 15px;
                    }
                }
                }
            }
    }
}
</style>