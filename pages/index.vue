<template>
<div>
      <v-form v-model="valid">
    <v-container>
 
          <v-text-field
            v-model="name"
            label="First name"
            required
          ></v-text-field>
          <v-text-field
            v-model="username"
            label="Last name"
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
  <div v-for="user in users" :key="user.id">
    {{user.name}}
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
const baseUrl = 'http://localhost:3000/api'
export default{
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

