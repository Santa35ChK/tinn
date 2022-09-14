<template>
    <div>
        <p>Settings</p>
        <button @click="showToast">button</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        showToast(){
            this.$toast.success("Сохранено")
        }
    }
}
</script>