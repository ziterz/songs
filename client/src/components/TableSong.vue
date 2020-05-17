<template>
  <div>
    <h1>Playlist</h1><br>
    <b-button variant="outline-primary" @click="add">Add New Playlist</b-button><br><br>
    <b-input-group prepend="delete" @click="deleted" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="give me id of list, then click button on left side" v-model="id"></b-input>
    </b-input-group><br><br>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: [],
      id: ''
    }
  },
  methods: {
    add () { this.$router.push({ path: '/add-playlist' }) },
    deleted () {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/songs/${this.id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(deleted => {
          this.load()
          this.id = ''
        })
        .catch(err => { console.log(err) })
    },
    load () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/songs',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          this.items = data.songs
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.load()
    } else {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>
