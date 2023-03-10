<script setup></script>

<template>
  <nav class="nav-group">
    <RouterLink to="/"><h1>Movie Library</h1></RouterLink>
    <div class="nav-group">
      <RouterLink to="/about" class="btn">Sign in</RouterLink>
      <RouterLink to="/about" class="btn">Register</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

h1 {
  display: inline-block;
}

.nav-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
