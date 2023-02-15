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
  <div v-for="(user,i) in users" :key="user.id">
    <p>{{user.name}} + <button @click="deleteTodo(user,i)">Remove</button></p>
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
import fetch from 'node-fetch'
const baseUrl = 'http://localhost:3000/api'
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
      // headers: [
      //   {text: 'NAME', value: 'name'},
      //   {text: 'USERNAME', value: 'username'}
      // ]
    }
  },
  setup () {
  },


  computed:{
   
  },

    async asyncData () {
      let { data } = await axios.get(`${baseUrl}/users`)
      return { users: data }
    },



  methods: {
       async asyncDatas () {
      const response = await axios.get(`${baseUrl}/users`)
      const datas = await response.data
      this.users = datas
            return {users: this.users}
    },

    async addUser () {
      this.$nuxt.$loading.start()
      
      await axios.post(`${baseUrl}/adduser`, {
        name:this.name,
        username:this.username,
        password:this.password
      });
      this.asyncDatas();
      this.$nuxt.$loading.finish()
    },

    async deleteTodo (user, i) {
      this.$nuxt.$loading.start();
      console.log(user.id)
      await axios.delete(`${baseUrl}/deleteuser/` + user.id)
      this.asyncDatas();
      this.$nuxt.$loading.finish()
     
    }
  }
}
</script>

