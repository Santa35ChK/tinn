<template>
    <div class="modal_mask">
        <div class="modal_container">
            <vue-dropzone
            ref="dropzone"
            id="drop1"
            :include-styling="false"
            :useCustomSlot="true"
            :options="dropOptions"
            @vdropzone-file-added="sendingEvent"
            @vdropzone-complete="afterComplete"
            >
                <div class="modal_header">
                    <div class="modal_title">
                        Загрузка видео
                    </div>
                    <img class="modal_close-button" src="../assets/img/primary.svg" alt="Закрыть" @click="$emit('closePopup')"/>
                </div>
                <div class="modal_body">
                    <img class="modal_image" src="../assets/img/LoadImg.svg" alt="Загрузить файл"/>
                    <div class="modal_description">
                    Выберите или перетащите файл для загрузки
                    </div>
                    <button type="button" class="modal_load-button">
                    Выбрать файл
                    </button>
                </div>
            </vue-dropzone>
        </div>
    </div>
</template>

<script>
import vueDropzone from "vue2-dropzone"
import axios from "axios"

export default {
    components: {vueDropzone},
    data() {
        return {
            dropOptions: {
                url: "https://tinn.re-work.pro/api/video/test",
                previewsContainer: false,
                autoProcessQueue: false,
                headers: {
                    "accept": "application/json",
                    "Content-Type": "multipart/form-data",
                }
            }
    }
    },
    methods: {
        sendingEvent(file) {
            const url = "https://tinn.re-work.pro/api/video/test"
            let data = new FormData()
            data.append('video', file)
            axios.post(url, data, {headers: this.headers})
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err.data.message)
            })
        },
        afterComplete() {
            console.log("complete")
        }
    }
}
</script>
