<template>
    <div class="notification">
        <div class="notification_container">
            <div class="notification_notifications">
                <div class="notification_title">
                    Уведомления на сайте
                </div>
                <div class="notification_list">
                    <div class="notification_item" v-for="(notification,i) in notifications" :key="i">
                        <form class="notification_form">
                            <div :for="notification.name" class="notification_name">{{notification.title}}</div>
                            <label class="notification_checkbox">
                                <input type="checkbox" :id="notification.name" v-model="notification.isActive" >
                                <span class="notification_checkbox-switch"/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <div class="notification_feedback">
                <div class="notification_title">
                    Обратная связь
                </div>
                <div class="notification_list">
                    <div class="notification_item" v-for="(notification, i) in feedback" :key="i">
                        <form class="notification_form">
                            <div class="notification_name">
                                {{notification.title}}
                                <p class="notification_description">{{notification.description}}</p>
                            </div>
                            <label class="notification_checkbox">
                                <input type="checkbox" :id="notification.name" v-model="notification.isActive" >
                                <span class="notification_checkbox-switch"/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            notifications: null,
            feedback: null
        }
    },
    created() {
        this.notifications = this.$store.getters.getNotifications
        this.feedback = this.$store.getters.getFeedback
    }
}
</script>