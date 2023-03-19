<script setup>
import { inject, ref } from 'vue'
import axios from 'axios'
import { useAccountStore } from '../stores/account'
import router from '../router';

const props = defineProps({
  action: String
})

const baseUrl = inject('backendUrl') + '/users/'

var username = ""
var password = ""
var password2 = ""
const errorMessage = ref("")

async function submit() {
  if (username.length < 1 || password.length < 1){
    errorMessage.value = "username and password cannot be empty"
    return
  }
  if (password != password2 && props.action == "signup"){
    errorMessage.value = "Failed to confirm password"
    return
  }
  const url = baseUrl + props.action
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)

  axios.post(url, params).then((response) => {
    const store = useAccountStore()
    store.token = response.data.access_token

    axios.get(baseUrl + 'me', store.headers).then((user) => {
      store.setUser(user.data)
      router.push("/")
    })
  }).catch((error) => {
    errorMessage.value = error.response.statusText + ": " + error.response.data.detail
  })
}
</script>

<template>
  <main>
    <h1>{{ action }}</h1>
    <form @submit.prevent="submit">
      <div class="field">
        <label for="username">Username: </label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="field">
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div v-if="props.action=='signup'" class="field">
        <label for="password2">Confirm assword: </label>
        <input type="password" id="password2" v-model="password2" />
      </div>
      <div class="error">{{ errorMessage }}</div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </main>
</template>

<style scoped>
.error {
  margin-top: 2em;
}

.field {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

form {
  min-width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 1em;
}

main {
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
