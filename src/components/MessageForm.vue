<template>
    <div class="message-form">
        <form class="message-form_container" >
            <img class="message_smile" src="@/assets/img/Emoji-smile.svg"/>
            <input type="text" class="message_input" v-model="message">
            <div class="message_button">
                Отправить
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return{
            message: ""
            
        }
        
    }
}
</script>

<style lang="scss">
.message-form {
    margin-top: 29vw;;
    padding: 0px 20px 15px;
    .message-form_container {
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 22.5px;
        padding: 7px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .message_smile {
            cursor: pointer;
        }
        .message_input {
            width: 70%;
            border: 0;
        }
        .message_button {
            border: 0;
            background: #fff;
            font-size: 14px;
            line-height: 19px;
            color: #3E8BFF;
            cursor: pointer;
        }
    }
}
</style>