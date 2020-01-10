<template>
<nav class="navbar container" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <strong class="is-size-4">Warm up portal</strong>
    </a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
      <router-link to="/Users" class="navbar-item">Users</router-link>
         <router-link to="/UserData" class="navbar-item">Add a team member</router-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div v-if="logged" class="buttons">
          <a class="button is-dark" href="/">
            <strong>Logout</strong>
          </a>
        </div>
        <div v-if="!logged" class="buttons">
         <router-link :to="'/login'">
          <strong>Login</strong>
        </router-link>

        </div>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }
  }
</style>