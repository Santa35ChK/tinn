<template>
    <div class="settings-switcher">
        <div class="settings-switcher_container">
            <div class="settings-switcher_list">
                <div class="settings-switcher_item" v-for="(setting,i) in settings" :key="i" v-bind:class="{'settings-active': setting.isActive}">
                    <div class="settings-switcher_name" @click="switchSetting(i)">
                        {{setting.title}}
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
            settings: [
                {   name: "general",
                    title: "Общее",
                    isActive: true
                },
                {   name: 'personal',
                    title: "Личные данные",
                    isActive: false
                },
                {   name: "notification",
                    title: "Уведомления",
                    isActive: false
                }
            ]
        }
    },
    methods: {
        switchSetting(i) {
            this.settings.forEach(setting => {
                setting.isActive = false
            })
            this.settings[i].isActive = true
            this.$emit('onSwitch', this.settings[i].name)
        }
    }
}
</script>