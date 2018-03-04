<template>
  <div id="user">
    <h3>L'User</h3>
    <p>Il mio username è {{ username}}</p>    
  </div>
</template>

<script>
export default {
  data() {
    return {
        username: 'Simone'
    }
  }
}
</script>

<style>
    p {
        font-style: italic;
    }
</style>
