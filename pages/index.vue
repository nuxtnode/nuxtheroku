<template>
<div>
      <v-form v-model="valid">
    <v-container>
 
          <v-text-field
            v-model="name"
            label="First Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="username"
            label="Last Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>

        <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="addUser"
      >
        Validate
    </v-btn>
    </v-container>
  </v-form>
  <h1>List</h1>
  <div v-for="user in users" :key="user.id">
    <h1>{{user.fullname}}</h1>
  </div>
      <!-- <v-data-table
      :headers="headers"
      :items="users"
      hide-default-header
      class="elevation-1"
    ></v-data-table> -->
</div>
</template>

<script>
import axios from 'axios'
const baseUrl = 'https://nuxtnode.herokuapp.com/api'
export default{
  head () {
    return {
      title: 'Noli'
    }
  },
  data () {
    return {
      valid: true,
      users: [],
      name: '',
      username: '',
      password: '',
      todos: {},
      headers: [
        {text: 'NAME', value: 'name'},
        {text: 'USERNAME', value: 'username'}
      ]
    }
  },
  setup () {
  },
  created() {
    this.asyncData();
  },
  methods: {
    async asyncData () {
      const response = await axios.get(`${baseUrl}/users`)
      const datas = await response.data
      this.users = datas
    },
    async addUser () {
      this.$nuxt.$loading.start()
      
      await axios.post(`${baseUrl}/adduser`, {
        name:this.name,
        username:this.username,
        password:this.password
      });
      this.asyncData();
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

