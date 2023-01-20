<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <form>
          <v-text-field
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Senha"
            type="password"
            required
          ></v-text-field>
          <v-btn
            class="mr-4"
            @click="login"
          >
            submit
          </v-btn>
        </form>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
  import axios from 'axios'
  import router from '@/router'
  import { API } from '@/utils/globals'
  import { setUserToken, setUser } from '@/store/modules/session'

  export default {
    data () {
      return {
        email: '',
        password: '',
        api: API
      }
    },

    methods: {
        async login () {
          const payload = {
            email: this.email,
            password: this.password
          }

          try{
            const response = await axios.post('http://localhost:8000/api/login', payload)
            const token = response.data.authorization.token
            const user = response.data.user
            setUserToken(token)
            setUser(user)
            router.push({name: 'Home'}).catch((error) => {
            console.error(error)
            })
           console.log(response)  
          } catch (error) {
              console.error(error)
          }
    },
  }
}
</script>