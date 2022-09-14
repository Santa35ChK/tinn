<template>
    <div class="general">
        <div class="general_container">
            <div class="general_info">
                <div class="general_content">
                    <div class="general_title">
                        Настройки контента
                    </div>
                    <div class="general_checkboxes">
                        <div class="general_form">
                            <input type="checkbox" class="general_checkbox" id="recommended">
                            <label for="recommended" class="general_label">Показывать блок "Рекомендуемые"</label>
                        </div>
                        <div class="general_form">
                            <input type="checkbox" class="general_checkbox" id="popular">
                            <label for="popular" class="general_label">Показывать блок "Популярное"</label>
                        </div>
                    </div>
                </div>
                <div class="general_post">
                    <div class="general_title">
                        Электронная почта
                    </div>
                    <div class="general_text">
                        lore...m@gmail.com
                    </div>
                </div>
                <div class="general_phone">
                    <div class="general_title">
                        Телефон
                    </div>
                    <div class="general_text">
                        + 7 ********
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
                            margin-right: 4px;
                        }
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