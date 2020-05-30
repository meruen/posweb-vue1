<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: 'App',
  components: {
    login: Login
  },
  data() {
    return {
      msg: 'WELCOME!'
    }
  }
}
</script>