<template>
    <div class="personal">
        <div class="personal_container">
            <form class="personal_form" @submit.prevent="saveChanges">
                <div class="personal_header">
                    <input type="text" placeholder="Логин" id="login" :class="{ 'error': $v.copyUserData.login.$error }" class="personal_login" v-model.trim="$v.copyUserData.login.$model" >
                    <input type="email" placeholder="Email" id="email" required class="personal_email" v-model="copyUserData.email" >
                </div>
                <div class="personal_body">
                    <input type="text" placeholder="Имя" id="name" class="personal_name" :class="{ 'error': $v.copyUserData.name.$error }" v-model.trim="$v.copyUserData.name.$model">
                    <input type="text" placeholder="Фамилия" id="surname" required class="personal_surname" v-model="copyUserData.surname" >
                </div>
                <div class="personal_footer">
                    <input type="phone" v-mask="'+7 (###) ### ## ##'" placeholder="Телефон" id="phone"  class="personal_phone" v-model="copyUserData.phone">
                    <div class="personal_date">
                        <input type="text" placeholder="ДД" id="day" required class="personal_day" maxlength="2" v-model="copyUserData.day"
                        >
                        <input type="text" placeholder="MM" id="month" required class="personal_month" maxLength="2" v-model="copyUserData.month"
                        >
                        <input type="text" placeholder="ГГГГ" id="year" required class="personal_year" maxLength="4"  v-model="copyUserData.year"
                        >
                    </div>
                </div>
                <button class="personal_button" type="submit" >Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
import { required, alphaNum } from 'vuelidate/lib/validators'
import { helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яА-Я]*$/)

export default {
    data() {
        return {
            copyUserData: null,
            userData: null
        }
    },
    created() {
        this.userData = this.$store.getters.getUserData
        this.copyUserData = Object.assign({}, this.userData)
    },
    methods: {
        saveChanges() {
            this.$v.$touch();
            console.log(this.$v.$errors);
            if (this.$v.$invalid) {
                return
            }
            this.$store.dispatch('setUserData', this.copyUserData)
            this.$emit('onSave')
        }
    },
    validations: {
        copyUserData: {
            login: {
                required,
                alphaNum
            },
            name: {
                required,
                alpha
            }
        }
    }
}
</script>