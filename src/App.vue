<template>
  <div id="app">
    <router-view></router-view>
    <p>
      Questo è un test!
    </p>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
