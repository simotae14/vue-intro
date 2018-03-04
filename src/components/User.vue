<template>
  <div id="user">
    <h3>L'User</h3>
    <p>Il mio username è {{ username}}</p>
    <app-info></app-info>    
  </div>
</template>

<script>
    import Info from './Info.vue';
    export default {
        data() {
            return {
                username: 'Simone'
            }
        },
        components: {
            'app-info': Info
        }
    }
</script>
<style scoped>
    p {
        font-style: italic;
    }
</style>
