<template>
  <div id="app">
    <AppTopbar></AppTopbar>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store/store'
import AppTopbar from './components/Topbar.vue'

export default {
  name: 'App',
  components: {
    AppTopbar,
  },
}
</script>
<style scoped></style>
