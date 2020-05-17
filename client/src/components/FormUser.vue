<template>
  <div>
    <h1>{{ (this.routes).toUpperCase() }}</h1>

    <label class="sr-only" for="inline-form-input-username">Email</label>
    <b-input-group prepend="email" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="email" v-model="email"></b-input>
    </b-input-group><br><br>

    <label class="sr-only" for="inline-form-input-username">password</label>
    <b-input-group prepend="password" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input type="password" id="inline-form-input-username" placeholder="password" v-model="password"></b-input>
    </b-input-group><br><br>

    <b-button variant="primary" @click="onSubmit">Go</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormUser',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: { routes () { return this.$store.state.routes } },
  methods: {
    onSubmit () {
      if (this.routes === 'register') {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/register',
          data: {
            email: this.email,
            password: this.password
          }
        })
          .then(({ data }) => {
            this.$router.push({ path: '/signin' })
            this.$store.commit('set_routes', 'signin')
            this.email = ''
            this.password = ''
          })
          .catch(err => {
            console.log(err)
          })
      } else if (this.routes === 'signin') {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/login',
          data: {
            email: this.email,
            password: this.email
          }
        })
          .then(({ data }) => {
            this.$router.push({ path: '/dashboard' })
            this.$store.commit('set_routes', '')
            this.email = ''
            this.password = ''
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  },
  created () {
    if (this.routes === '') {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>
