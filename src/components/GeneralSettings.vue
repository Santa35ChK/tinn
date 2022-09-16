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
                        + {{userData.phone}}
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
<style lang="scss">
.general {
    .general_container {
        padding: 63px 30px 20px 30px;
        background: #FFFFFF;
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.03);
        border-radius: 10px;
        .general_info {
            .general_content {
                padding: 20px 0;
                border-top: 1px solid #DDDDDD;
                border-bottom: 1px solid #DDDDDD;
                display: flex;
                .general_checkboxes {
                    display: flex;
                    flex-direction: column;
                    margin-left: 65px;
                    .general_form {
                        font-size: 13px;
                        line-height: 18px;
                        color: #000;
                        display: flex;
                        align-items: center;
                        .general_checkbox {
                            position: absolute;
                            z-index: -1;
                            opacity: 0;
                        }
                        .general_checkbox+label {
                            display: inline-flex;
                            align-items: center;
                            user-select:none;
                        }
                        .general_checkbox+label::before{
                            content: '';
                            display: inline-block;
                            width: 15px;
                            height: 15px;
                            flex-shrink: 0;
                            flex-grow: 0;
                            border: 1px solid #000;
                            border-radius:4px;
                            margin-right: 4px;
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: 50% 50%;
                            cursor: pointer;
                        }
                        .general_checkbox:checked+label::before {
                            border-color: #3D88F8;
                            background-color: #3D88F8;
                            background-image: url("@/assets/img/checkbox.svg")
                        }
                    }
                    .general_form:not(:first-child) {
                        margin-top: 8px;
                    }
                }
            }
            .general_post {
                padding: 20px 0;
                display: flex;
                border-bottom: 1px solid #DDDDDD;
                .general_text {
                    margin-left: 71px;
                }
            }
            .general_phone {
                padding: 20px 0;
                display: flex;
                border-bottom: 1px solid #DDDDDD;
                .general_text {
                    margin-left: 136px;
                }
            }
            .general_address{
                padding: 20px 0;
                display: flex;
                border-bottom: 1px solid #DDDDDD;
                .general_text {
                    margin-left: 93px;
                }
            }
            .general_lang {
                padding-top: 20px;
                display: flex;
                .general_text {
                    margin-left: 158px
                }
            }
        }
        .general_delete {
            margin-top: 155px;
            font-size: 13px;
            line-height: 18px;
            color: #525252;
            text-align: center;
            span {
                color:#FF1414;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
}

.general_title {
    font-size: 13px;
    line-height: 18px;
    color: #525252;
}

.general_text {
    font-size: 13px;
    line-height: 18px;
    color: #000
}
</style>