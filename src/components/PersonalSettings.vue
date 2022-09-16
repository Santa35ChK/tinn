<template>
    <div class="personal">
        <div class="personal_container">
            <form class="personal_form" @submit.prevent="saveChanges">
                <div class="personal_header">
                    <input placeholder="Логин" id="login" :class="{ 'input-error': $v.copyUserData.login.$error }" class="personal_login" v-model.trim="$v.copyUserData.login.$model" >
                    <div class="error" v-if="!$v.copyUserData.login.required">Поле обязательно для заполнения</div>
                    <div class="error" v-if="!$v.copyUserData.login.alphaNum">Допускается ввод только латинских букв и чисел</div>
                    <input placeholder="Email" id="email" class="personal_email" :class="{ 'input-error': $v.copyUserData.email.$error }" v-model.trim="$v.copyUserData.email.$model">
                    <div class="error" v-if="!$v.copyUserData.email.required">Поле обязательно для заполнения</div>
                    <div class="error" v-if="!$v.copyUserData.email.email">Введите email-адрес в формате: example@mail.com</div>
                </div>
                <div class="personal_body">
                    <input placeholder="Имя" id="name" class="personal_name" :class="{ 'input-error': $v.copyUserData.name.$error }" v-model.trim="$v.copyUserData.name.$model">
                    <div class="error" v-if="!$v.copyUserData.name.required">Поле обязательно для заполнения</div>
                    <div class="error" v-if="!$v.copyUserData.name.alpha">Только буквы русского и латинского алфавита</div>
                    <input placeholder="Фамилия" id="surname" class="personal_surname" :class="{ 'input-error': $v.copyUserData.surname.$error }" v-model.trim="$v.copyUserData.surname.$model">
                    <div class="error" v-if="!$v.copyUserData.surname.required">Поле обязательно для заполнения</div>
                    <div class="error" v-if="!$v.copyUserData.surname.alpha">Только буквы русского и латинского алфавита</div>
                </div>
                <div class="personal_footer">
                    <input v-mask="'+7 (###) ### ## ##'" placeholder="Телефон" id="phone" class="personal_phone" :class="{ 'input-error': $v.copyUserData.phone.$error }" v-model="$v.copyUserData.phone.$model">
                    <div class="error" v-if="!$v.copyUserData.phone.required">Поле обязательно для заполнения</div>
                    <div class="error" v-if="!$v.copyUserData.phone.minLength">Введите номер в формате 900-000-00-00</div>
                    <div class="personal_date">
                        <div class="error" v-if="!$v.copyUserData.day.required || !$v.copyUserData.day.between">!</div>
                        <input placeholder="ДД" id="day" v-mask="'##'" class="personal_day" :class="{ 'input-error': $v.copyUserData.day.$error }" v-model.trim="$v.copyUserData.day.$model"
                        >
                        <div class="error" v-if="!$v.copyUserData.month.required || !$v.copyUserData.month.between">!</div>
                        <input  placeholder="MM" id="month" v-mask="'##'" class="personal_month" :class="{ 'input-error': $v.copyUserData.month.$error }" v-model.trim="$v.copyUserData.month.$model"
                        >
                        <div class="error" v-if="!$v.copyUserData.year.required || !$v.copyUserData.year.between">!</div>
                        <input placeholder="ГГГГ" v-mask="'####'" id="year" class="personal_year" :class="{ 'input-error': $v.copyUserData.year.$error }" v-model.trim="$v.copyUserData.year.$model"
                        >
                    </div>
                </div>
                <button class="personal_button" type="submit" >Сохранить</button>
            </form>
        </div>
    </div>
</template>

<script>
import { required, alphaNum, email, minLength, maxLength, numeric, between} from 'vuelidate/lib/validators'
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
            email: {
                required,
                email
            },
            name: {
                required,
                alpha
            },
            surname: {
                required,
                alpha
            },
            phone: {
                required,
                minLength: minLength(18)
            },
            day: {
                required,
                numeric,
                between: between(0, 31),
                maxLength: maxLength(2)
            },
            month: {
                required,
                maxLength: maxLength(2),
                between: between(0, 12),
            },
            year: {
                required,
                maxLength: maxLength(4),
                between: between(1900,2022)
            }
        }
    }
}
</script>