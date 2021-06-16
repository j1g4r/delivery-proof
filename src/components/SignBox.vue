<template>
  <canvas id="canvas"></canvas>
  <q-btn color="primary" @click="takeSign">Confirm</q-btn>
</template>

<script>
import SignaturePad from "signature_pad";
import axiosApi from "@/axios_api";
import router from "@/router";

export default {
  name: "SignBox",
  props: ['signature'],
  data() {
    return {
      signaturePad: null,
      canvas: null
    }
  },
  methods: {
    takeSign() {
      const sign = this.signaturePad.toDataURL("image/jpeg");
      const image = sign.split(",")[1];
      this.submitSign(image);
    },
    submitSign(value) {
      axiosApi.saveSign(value).then((response) => {
        if (response.data.status) {
          sessionStorage.setItem('sign', response.data.id);
          router.push('/delivery');
        }
      }).catch((err) => {
        console.log(err);
      });
      this.signVisible = false;
    },
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.signaturePad = new SignaturePad(this.canvas);

  }
}
</script>

<style scoped>
#canvas {
  height: 80%;
  width: 100%;
  border: 1px solid #555;
}
</style>