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
                    <img class="modal_image" src="../assets/img/LoadImg.svg"/>
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
             addRemoveLinks: true,
            autoProcessQueue: false,
            headers: {
                        "accept": "application/json",
                        "Content-Type": "multipart/form-data",
                        'Cache-Control': null,
                        'X-Requested-With': null
//                         // "Access-Control-Allow-Origin" : "*",
// // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
}
            }
    }
},
methods: {
    sendingEvent(file) {

        const url = "https://tinn.re-work.pro/api/video/test";
        let headers = {
                       
                };
                axios({method: 'post', url: url, headers: headers, data: { name:file.name, type: file.type}})
                .then(x=> {
                    var options = { headers: {
                        'Content-Type': file.type,
                        'Cache-Control': null,
                        'X-Requested-With': null,
                        "accept": "application/json",
                    }}
                    axios.put(x.data.uploadURL, file, options)
                })
                .then(status => {
                        this.status = status;
                    })
                    .catch(err => {
                        this.error = err;
                    })

    },
    afterComplete() {
        console.log("complete")
    }
}
}
</script>

<style lang="scss">
.modal_mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(61, 136, 248, 0.25);
    backdrop-filter: blur(400px);
    transition: opacity 0.3s ease;
    padding: 76px 385px ;
    .modal_container {
        padding: 20px 30px;
        background: #FFFFFF;
        box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.07);
        border-radius: 15px;
        .modal_header{
            display: flex;
            justify-content: space-between;
            .modal_title {
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
            }
            .modal_close-button {
                cursor: pointer;
            }
        }
        .modal_body {
            padding: 21vh 0px 25vh;
            text-align: center;
            .modal_description {
                margin: 25px 0 40px;
                font-size: 18px;
                line-height: 22px;
                font-weight: 700;
            }
            .modal_load-button {
                padding: 14px 36px;
                background: #2D81FF;
                border-radius: 8px;
                color:#fff;
                font-size: 16px;
                line-height: 19px;
                cursor: pointer;
            }
        }
    }
}
</style>