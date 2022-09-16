<template>
    <div class="personal">
        <div class="personal_container">
            <form class="personal_form" @submit.prevent="saveChanges">
                <div class="personal_header">
                    <input type="text" placeholder="Логин" id="login" required class="personal_login" :value="userData.login" @change="setValue('login')">
                    <input type="email" placeholder="Email" id="email" required class="personal_email" :value="userData.email" @change="setValue('email')">
                </div>
                <div class="personal_body">
                    <input type="text" placeholder="Имя" id="name" required class="personal_name" :value="userData.name" @change="setValue('name')">
                    <input type="text" placeholder="Фамилия" id="surname" required class="personal_surname" :value="userData.surname" @change="setValue('surname')">
                </div>
                <div class="personal_footer">
                    <input type="phone" placeholder="Телефон" id="phone" required maxLength="11" class="personal_phone" :value="userData.phone" @change="setValue('phone')">
                    <div class="personal_date">
                        <input type="text" placeholder="ДД" id="day" required class="personal_day" maxlength="2" :value="userData.day"
                        @change="setValue('day')">
                        <input type="text" placeholder="MM" id="month" required class="personal_month" maxLength="2" :value="userData.month"
                        @change="setValue('month')">
                        <input type="text" placeholder="ГГГГ" id="year" required class="personal_year" maxLength="4"  :value="userData.year"
                        @change="setValue('year')">
                    </div>
                </div>
                <button class="personal_button" type="submit" >Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            login: "",
            email: "",
            name: "",
            surname: "",
            phone: "",
            day: "",
            month: "",
            year: "",
            userData: null
        }
    },
    created() {
        this.userData = this.$store.getters.getUserData
    },
    methods: {
        setValue(item) {
            if(item === 'login') {
                this.login = document.getElementById(item).value
            } else if (item === "email") {
                this.email = document.getElementById(item).value
            } else if(item === 'name') {
                this.name = document.getElementById(item).value
            } else if(item === 'surname') {
                this.surname = document.getElementById(item).value
            } else if(item === 'phone') {
                this.phone = document.getElementById(item).value
            } else if(item === 'day') {
                this.day = document.getElementById(item).value
            } else if(item === "month") {
                this.month = document.getElementById(item).value
            } else if(item === "year") {
                this.year = document.getElementById(item).value
            }
        },
        saveChanges() {
            const data = {
                login: '',
                email: '',
                name: '',
                surname: '',
                phone: '',
                day: '',
                month: '',
                year: ''
            }

            if(this.login !== "" && this.login !== this.userData.login) {
                data.login = this.login
            } else {
                data.login = this.userData.login
            }

            if(this.email !== "" && this.email !== this.userData.email) {
                data.email = this.email
            } else {
                data.email = this.userData.email
            }

            if(this.name !== "" && this.name !== this.userData.name) {
                data.name = this.name
            } else {
                data.name = this.userData.name
            }

            if(this.surname !== "" && this.surname !== this.userData.surname) {
                data.surname = this.surname
            } else {
                data.surname = this.userData.surname
            }

            if(this.phone !== "" && this.phone !== this.userData.phone) {
                data.phone = this.phone
            } else {
                data.phone = this.userData.phone
            }

            if(this.day !== "" && this.day !== this.userData.day) {
                data.day = this.day
            } else {
                data.day = this.userData.day
            }

            if(this.month !== "" && this.month !== this.userData.month) {
                data.month = this.month
            } else {
                data.month = this.userData.month
            }

            if(this.year !== "" && this.year !== this.userData.year) {
                data.year = this.year
            } else {data.year = this.userData.year}
            console.log(data)
            this.$store.dispatch('setUserData', data)
            this.$emit('onSave')
        }
    }
}
</script>

<style lang="scss">
.personal {
    width: 500px;
    .personal_container {
        padding: 30px 30px 20px 30px;
        background: #FFFFFF;
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.03);
        border-radius: 10px;
        .personal_form {
            display: flex;
            flex-direction: column;
            .personal_header{
                .personal_login {
                    width: 100%;
                    border-top: 0;
                    border-left: 0;
                    border-right: 0;
                    border-bottom: solid 1px #cbcbcb;
                    padding-left: 5px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    line-height: 18px;
                    color: #000;
                        &::placeholder {
                        font-size: 13px;
                        line-height: 18px;
                        color:#888888
                    }
                }
                .personal_email {
                    margin-top: 25px;
                    width: 100%;
                    border-top: 0;
                    border-left: 0;
                    border-right: 0;
                    border-bottom: solid 1px #cbcbcb;
                    padding-left: 5px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    line-height: 18px;
                    color: #000;
                        &::placeholder {
                        font-size: 13px;
                        line-height: 18px;
                        color:#888888
                    }
                }
            }
            .personal_body{
                margin-top: 25px;
                display: flex;
                justify-content: space-between;
                .personal_name {
                    width: 42%;
                    border-top: 0;
                    border-left: 0;
                    border-right: 0;
                    border-bottom: solid 1px #cbcbcb;
                    padding-left: 5px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    line-height: 18px;
                    color: #000;
                        &::placeholder {
                        font-size: 13px;
                        line-height: 18px;
                        color:#888888
                    }
                }
                .personal_surname {
                    width: 42%;
                    border-top: 0;
                    border-left: 0;
                    border-right: 0;
                    border-bottom: solid 1px #cbcbcb;
                    padding-left: 5px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    line-height: 18px;
                    color: #000;
                        &::placeholder {
                        font-size: 13px;
                        line-height: 18px;
                        color:#888888
                    }
                }
            }
            .personal_footer {
                margin-top: 25px;
                display: flex;
                justify-content: space-between;
                .personal_phone {
                    width: 49%;
                    border-top: 0;
                    border-left: 0;
                    border-right: 0;
                    border-bottom: solid 1px #cbcbcb;
                    padding-left: 5px;
                    padding-bottom: 10px;
                    font-size: 13px;
                    line-height: 18px;
                    color: #000;
                        &::placeholder {
                        font-size: 13px;
                        line-height: 18px;
                        color:#888888
                    }
                }
                .personal_date{
                    width: 35%;
                    display: flex;
                    justify-content: space-between;
                    .personal_day {
                        width: 20%;
                        padding-bottom: 10px;
                        border-top: 0;
                        border-left: 0;
                        border-right: 0;
                        border-bottom: solid 1px #cbcbcb;
                        font-size: 13px;
                        line-height: 18px;
                        color: #000;
                        &::placeholder {
                            text-align: center;
                            font-size: 13px;
                            line-height: 18px;
                            color:#888888;
                        }
                    }
                    .personal_month {
                        width: 20%;
                        padding-bottom: 10px;
                        border-top: 0;
                        border-left: 0;
                        border-right: 0;
                        border-bottom: solid 1px #cbcbcb;
                        font-size: 13px;
                        line-height: 18px;
                        color: #000;
                        &::placeholder {
                            text-align: center;
                            font-size: 13px;
                            line-height: 18px;
                            color:#888888;
                        }
                    }
                }
                .personal_year {
                        width: 42%;
                        padding-bottom: 10px;
                        border-top: 0;
                        border-left: 0;
                        border-right: 0;
                        border-bottom: solid 1px #cbcbcb;
                        font-size: 13px;
                        line-height: 18px;
                        color: #000;
                        &::placeholder {
                            text-align: center;
                            font-size: 13px;
                            line-height: 18px;
                            color:#888888;
                        }
                }
            }
            .personal_button {
                margin-top: 80px;
                align-self: flex-end;
                padding: 9px 21px;
                text-align: center;
                background: #3D88F8;
                border: 0px;
                border-radius: 5px;
                font-size: 13px;
                line-height: 18px;
                color: #fff;
                cursor: pointer;
            }
        }
    }
}
</style>