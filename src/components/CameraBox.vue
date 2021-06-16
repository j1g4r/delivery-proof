<template>
  <div></div>
</template>

<script>
import {Camera} from '@ionic-native/camera';
import axiosApi from "@/axios_api";
import router from "@/router";

export default {
  name: "CameraBox",
  data() {
    return {
      options: null,
      camera: null
    }
  },
  methods: {
    takePic(value) {
      axiosApi.save(value).then((response) => {
        if (response.data.status) {
          sessionStorage.setItem('pic', response.data.id);
          router.push('/delivery');
        }
      }).catch((err) => {
        console.log(err);
      });
      this.picVisible = false;
    },
  },
  mounted() {
    this.camera = Camera;
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(this.options).then((imageData) => {
      this.takePic(imageData);
    }, (err) => {
      console.log(err);
    });
  }
}
</script>

<style scoped>

</style>