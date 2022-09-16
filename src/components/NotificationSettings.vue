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

<style lang="scss">
.notification{
    .notification_container {
        padding: 25px 30px;
        background: #FFFFFF;
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.03);
        border-radius: 10px;
        .notification_notifications{
            .notification_title{ 
                margin-right: 264px;
            }
        }
        .notification_feedback {
            .notification_title{
                margin-top: 40px;
            }
            .notification_list{
                .notification_item:last-child {
                    margin-bottom: 10vw;
                }
            }
        }
    }
}

.notification_title {
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 10px;
    color:#000;
}
.notification_name {
    font-size: 13px;
    line-height: 18px;
    color: #525252;
}
.notification_description {
    font-size: 12px;
    line-height: 16px;
    color: #676767;
}
.notification_form {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #DDDDDD;
}

.notification_checkbox {
	display: inline-block;     
	position: relative;
    .notification_checkbox-switch {
        display: inline-block;	
        width: 28px;
        height: 12px;
        border-radius: 6.5px;
        position: relative;
        top: 6px;
        vertical-align: top;
        background: #D9D9D9;
        transition: .2s;
    }
    .notification_checkbox-switch:before {
        content: '';
        display: inline-block;	
        width: 18px;
        height: 18px;
        position: absolute;
        top: -3px;
        left: -4px;
        background: gray;
        border-radius: 50%;
        transition: .15s;
    }
}

.notification_checkbox input[type=checkbox] {
	display: block;
	width: 0;
	height: 0;	
	position: absolute;
	z-index: -1;
	opacity: 0;
}

.notification_checkbox input[type=checkbox]:checked + .notification_checkbox-switch {
	background: #D9D9D9;
}
.notification_checkbox input[type=checkbox]:checked + .notification_checkbox-switch:before {
    background: #2D81FF;
	transform:translateX(20px);
}
.notification_checkbox input[type="checkbox"]:not(:disabled) + .notification_checkbox-switch {
	cursor: pointer;
	border-color: rgba(0, 0, 0, .3);
}
</style>