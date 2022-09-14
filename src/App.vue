<template>
  <div id="app">
    <TheHeader  @openPopup="showPopup = true"/>
    <ModalComponent v-if="showPopup" @closePopup="showPopup = false"/>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader"
import ModalComponent from "@/components/ModalComponent"

export default {
  name: 'App',
  components: {
    TheHeader, ModalComponent
  },
  data() {
    return{
      showPopup: false
    }
  }
}
</script>

