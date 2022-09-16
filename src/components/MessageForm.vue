<template>
    <div class="message-form">
        <EmojiPicker v-if="showEmoji" @emoji_click="handleEmoji"/>
        <form class="message-form_container" >
            <img class="message_smile" src="@/assets/img/Emoji-smile.svg" @click="onClick"/>
            <input type="text" class="message_input" v-model="message">
            <div class="message_button" >
                Отправить
            </div>
        </form>
    </div>
</template>

<script>
import EmojiPicker from '@/components/EmojiPicker/EmojiPicker'
export default {
    components: {
        EmojiPicker
    },
    data() {
        return{
            message: "",
            showEmoji: false
        }
    },
    methods: {
        onClick() {
            console.log(this.showEmoji);
            this.showEmoji = !this.showEmoji
        },
        handleEmoji(emoji) {
            this.message = this.message + emoji
        }
    }
}
</script>