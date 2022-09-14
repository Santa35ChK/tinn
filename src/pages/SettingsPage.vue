<template>
    <div class="page">
        <div class="page_container">
            <PageSwitcher/>
        <!-- <button @click="showToast">button</button> -->
            <GeneralSettings/>
        </div>
    </div>
</template>

<script>
import PageSwitcher from '@/components/PageSwitcher'
import GeneralSettings from '@/components/GeneralSettings'

export default {
    components: {PageSwitcher, GeneralSettings},
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

<style lang="scss">
    .page {
        .page_container {
            padding: 30px 19vw;
            display: flex;
            justify-content: space-between;
        }
    }
</style>