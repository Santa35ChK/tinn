<template>
    <div class="page">
        <div class="page_container">
            <PageSwitcher/>
            <ChatComponent/>
        </div>
    </div>
</template>

<script>
import PageSwitcher from '@/components/PageSwitcher'
import ChatComponent from '@/components/ChatComponent'
export default {
    components: {PageSwitcher, ChatComponent},
}
</script>
