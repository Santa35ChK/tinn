<template>
<div class="header">
    <div class="header_container">
        <div class="header_logo logo">
            <img src="../assets/img/LOGO.svg" alt="TINN">
        </div>
        <div class="header_menu">
            <div class="header_buttons">
                <img class="header_button" src="../assets/img/upload-5.svg" alt="Загрузить" @click="$emit('openPopup')">
                <router-link to="/chat" class="header_button">
                    <img  src="../assets/img/notification_bell.svg" alt="Уведомления">
                </router-link>
                <router-link to="/settings" class="header_button">
                    <img  src="../assets/img/more_circle_vertical.svg" alt="Ещё">
                </router-link>
            </div>
            <div class="header_profile">
                <img src="../assets/img/profile.png" alt="Профиль">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>
