<template>
  <q-layout view="lHh Lpr lFf">
    <router-view></router-view>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',

  components: {
  },

  data() {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
