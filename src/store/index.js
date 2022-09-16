import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        generalSettings: {
            showRecommends: true,
            showPopular: true,
        },
        userData: {
            login: "Example",
            email: "lorem@example.ru",
            phone: '79009999999',
            name: "Вася",
            surname: "Иванов",
            day: "10",
            month: "01",
            year: "1991"
        },
        notifications: [{
                name: "sound",
                title: "Звук в уведомлениях",
                isActive: true
            },
            {
                name: 'message',
                title: "Показывать текст сообщений",
                isActive: true
            }
        ],
        feedback: [{
                name: "likes",
                title: "Отметки Нравится",
                description: "Уведомления об отметках «Нравится» к комментариям.",
                isActive: true
            },
            {
                name: "comments",
                title: "Комментарии",
                description: "Ваше видео или комментарий прокомментировали.",
                isActive: true
            }
        ],
        chat: {
            users: [{
                    name: 'Lorem',
                    surname: 'Ipsum',
                    avatar: require("@/assets/img/avatar.svg")
                },
                {
                    name: 'example',
                    surname: "example",
                    avatar: require("@/assets/img/avatar.svg")
                }
            ]
        }
    },
    mutations: {
        setUserData(state, data) {
            state.userData = data
        }
    },
    actions: {
        setUserData({ commit }, data) {
            commit('setUserData', data)
        }
    },
    getters: {
        getNotifications(state) {
            return state.notifications
        },
        getFeedback(state) {
            return state.feedback
        },
        getGeneralSettings(state) {
            return state.generalSettings
        },
        getUserData(state) {
            return state.userData
        },
        getUsers(state) {
            return state.chat.users
        },
        getUser: (state) => (query) => {
            return state.chat.users.filter(user => user.name === query)
        }
    }
})