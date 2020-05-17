<template>
  <div>
    <h1>Playlist</h1><br>
    <b-button variant="outline-primary" @click="add">Add New Playlist</b-button><br><br>
    <b-table striped hover :items="items">
            <template v-slot:cell(actions)="data">
        <span v-html="data.value"></span>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    add () { this.$router.push({ path: '/add-playlist' }) }
  },
  created () {
    if (localStorage.access_token) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/songs',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          data.songs.map(el => {
            el.actions = '<b-button variant="outline-danger" @click="deleteSong"><span v-html="data.value"></span></b-button>'
          })
          this.items = data.songs
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
</style>
