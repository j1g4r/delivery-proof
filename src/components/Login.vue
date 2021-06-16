<template>

    <q-card square class="fullscreen">
      <q-card-section class="bg-deep-purple-7">
        <h4 class="text-h5 text-white q-my-md">Login</h4>
      </q-card-section>
      <q-card-section>
        <q-form class="q-px-sm q-pt-xl q-pb-lg">
          <q-input square clearable v-model="code" type="number" label="Code">
            <template v-slot:prepend>
              <q-icon name="email"/>
            </template>
          </q-input>
          <q-input square clearable v-model="name" type="username" label="Username">
            <template v-slot:prepend>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input square clearable v-model="pass" type="password" label="Password">
            <template v-slot:prepend>
              <q-icon name="lock"/>
            </template>
          </q-input>
        </q-form>
      </q-card-section>
      <q-card-actions class="q-px-lg">
        <q-btn unelevated size="lg" color="purple-4" class="full-width text-white" label="Login" @click="onSubmit"/>
      </q-card-actions>
    </q-card>
</template>

<script>
import erplyApi from "@/erply_api";
import router from '@/router';

export default {
  name: "Login",
  data() {
    return {
      code: '',
      name: '',
      pass: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.code !== '' && this.name !== '' && this.pass !== '') {
        erplyApi.verifyUser(this.code, this.name, this.pass).then((response) => {
          const status = response.data.status;
          if (status.responseStatus === "ok") {
            const record = response.data.records[0];
            sessionStorage.setItem('sessionKey', record.sessionKey);
            sessionStorage.setItem('code', this.code);
            router.push("/home");
          }else{
            console.log("Wrong Credentials")
          }
        }).catch((err) => {
          console.log(err);
        })
      } else {
        console.log('code', this.code);
        console.log('name', this.name);
        console.log('pass', this.pass);
      }
    }
  }
}
</script>

<style scoped>

</style>