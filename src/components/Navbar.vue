<script setup></script>

<template>
  <nav class="nav-group">
    <RouterLink to="/"><h2>Movie Library</h2></RouterLink>
    <div class="nav-group">
      <RouterLink to="/about" class="btn">Sign in</RouterLink>
      <RouterLink to="/about" class="btn">Register</RouterLink>
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
