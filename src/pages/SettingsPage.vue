<template>
    <div class="page">
        <div class="page_container">
            <PageSwitcher/>
        <!-- <button @click="showToast">button</button> -->
            <GeneralSettings v-if="general"/>
            <PersonalSettings v-if="personal" @onSave="showToast"/>
            <NotificationSettings v-if="notification"/>
            <SettingsSwitcher @onSwitch="handleSwitch"/>
        </div>
    </div>
</template>

<script>
import PageSwitcher from '@/components/PageSwitcher'
import GeneralSettings from '@/components/GeneralSettings'
import PersonalSettings from "@/components/PersonalSettings"
import NotificationSettings from "@/components/NotificationSettings"
import SettingsSwitcher from "@/components/SettingsSwitcher"

export default {
    components: {PageSwitcher, GeneralSettings, PersonalSettings, NotificationSettings, SettingsSwitcher},
    data() {
        return {
            general: true,
            personal: false,
            notification: false
        }
    },
    methods: {
        showToast(){
            this.$toast.success("Сохранено")
        },
        handleSwitch(name) {
            if (name == "general") {
                this.general = true
                this.personal = false
                this.notification = false
            } else if (name == "personal") {
                this.personal = true
                this.general = false
                this.notification = false
            } else if (name == "notification") {
                this.notification = true
                this.general = false
                this.personal = false
            }
        }
    }
}
</script>

<style lang="scss">
    .page {
        .page_container {
            padding: 30px 13vw;
            display: flex;
            justify-content: space-between;
            background: #FAFCFF
        }
    }
</style>