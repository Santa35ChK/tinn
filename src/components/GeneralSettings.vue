<template>
    <div class="general">
        <div class="general_container">
            <div class="general_info">
                <div class="general_content">
                    <div class="general_title">
                        Настройки контента
                    </div>
                    <div class="general_checkboxes">
                        <form class="general_form">
                            <input type="checkbox" class="general_checkbox" id="recommended" v-model="generalSettings.showRecommends">
                            <label for="recommended" class="general_label">Показывать блок "Рекомендуемые"</label>
                        </form>
                        <form class="general_form">
                            <input type="checkbox" class="general_checkbox" id="popular" v-model="generalSettings.showPopular">
                            <label for="popular" class="general_label">Показывать блок "Популярное"</label>
                        </form>
                    </div>
                </div>
                <div class="general_post">
                    <div class="general_title">
                        Электронная почта
                    </div>
                    <div class="general_text">
                        {{userData.email}}
                    </div>
                </div>
                <div class="general_phone">
                    <div class="general_title">
                        Телефон
                    </div>
                    <div class="general_text">
                        {{userData.phone  | VMask('+7 (###) ###-####') }}
                    </div>
                </div>
                <div class="general_address">
                    <div class="general_title">
                        Адрес профиля
                    </div>
                    <div class="general_text">
                        Lorem ipsum
                    </div>
                </div>
                <div class="general_lang">
                    <div class="general_title">
                        Язык
                    </div>
                    <div class="general_text">
                        Русский
                    </div>
                </div>
            </div>
            <div class="general_delete">
                Вы можете <span>удалить</span> свой аккаунт
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            generalSettings: null,
            userData: null
        }
    },
    created() {
        this.generalSettings = this.$store.getters.getGeneralSettings
        this.userData = this.$store.getters.getUserData
    }
}
</script>