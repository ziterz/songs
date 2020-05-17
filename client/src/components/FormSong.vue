<template>
  <div>
    <h1>Add Song</h1>

    <label class="sr-only" for="inline-form-input-username">name</label>
    <b-input-group prepend="name" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="name" v-model="name"></b-input>
    </b-input-group><br><br>

    <label class="sr-only" for="inline-form-input-username">artist</label>
    <b-input-group prepend="artist" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="artist" v-model="artist"></b-input>
    </b-input-group><br><br>

    <b-button variant="primary" @click="onSubmit">Save</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FormUser',
  data () {
    return {
      name: '',
      artist: ''
    }
  },
  methods: {
    onSubmit () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/songs',
        headers: { access_token: localStorage.access_token },
        data: {
          name: this.name,
          artist: this.artist
        }
      })
        .then(({ data }) => {
          this.$router.push({ path: '/dashboard' })
          this.name = ''
          this.artist = ''
        })
        .catch(err => {
          console.log(err)
          this.name = ''
          this.artist = ''
        })
    }
  }
}
</script>

<style>
</style>
