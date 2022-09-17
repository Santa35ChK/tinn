<template>
    <div class="search-form">
        <div class="search-form_container">
            <form class="search-form_form" @keyup="onSearch">
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