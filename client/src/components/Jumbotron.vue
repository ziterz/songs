<template>
  <div>
  <b-jumbotron header="Songs" lead="Created by Irwan Syafani">
    <p>Create new Playlist</p>
    <b-button variant="primary" @click="register">Register</b-button><br><br>
    <b-button variant="primary" @click="signin">Sign In</b-button>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  methods: {
    register () {
      this.$router.push({ path: '/register' })
      this.$store.commit('set_routes', 'register')
    },
    signin () {
      this.$router.push({ path: '/signin' })
      this.$store.commit('set_routes', 'signin')
    }
  }
}
</script>

<style>
</style>
