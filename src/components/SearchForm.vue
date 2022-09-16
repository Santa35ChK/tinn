<template>
    <div class="search-form">
        <div class="search-form_container">
            <form class="search-form_form" @submit.prevent="onSearch">
                <input type="text" placeholder="Поиск" class="search_input" v-model="query">
                <img class="search_button" src="@/assets/img/search.svg" alt="Найти"  @click="onSearch(query)">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { query: "",}
    },
    methods: {
        onSearch() {
            this.$emit('onSearch', this.query)
        }
    }
}
</script>
<style lang="scss">
.search-form {
    .search-form_container {
        padding: 10px;
        .search-form_form {
            display: flex;
            align-items: center;
            .search_input{
                width: 247px;
                background: #F1F1F1;
                border-radius: 22.5px;
                border: 0;
                padding: 10px 15px;
                font-size: 14px;
                color: black;
                line-height: 15px;
                &::placeholder{
                    font-size: 12px;
                    line-height: 15px;
                    color: #888888;
                }
            }
            .search_button {
                margin-left: 10px;
                cursor: pointer;
            }
        }
    }
}
</style>