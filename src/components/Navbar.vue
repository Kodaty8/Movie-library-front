<script setup>
import { ref } from 'vue'
import { useAccountStore } from '../stores/account'

const store = useAccountStore()
</script>

<template>
  <nav class="nav-group">
    <RouterLink to="/"><h2>Movie Library</h2></RouterLink>
    <div v-if="store.loggedIn" class="nav-group">
      {{ store.user.username }}
      <button class="btn" @click="store.logout">Log out</button>
    </div>
    <div v-else class="nav-group">
      <RouterLink to="/users/login" class="btn">Log in</RouterLink>
      <RouterLink to="/users/signup" class="btn">Sign up</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2.6rem;
  display: inline-block;
}

.nav-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
