<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Warm Up Portal      
        </h1>
        <h2 class="subtitle">
           Welcome to the portal, please check below options
        </h2>
      </div>
    </div>
  </section>
  <div v-if="isUserLogin"> 

     <router-link to="/addSkill" class="navbar-item">Add skill</router-link>
     <router-link to="/addRole" class="navbar-item">Add role</router-link>
     <router-link to="/createTeamMember" class="navbar-item">Add a team member</router-link>
     <router-link to="/createESA" class="navbar-item">Request ESA</router-link>
     <router-link to="/createEBS" class="navbar-item">Request EBS</router-link>

  </div>
   <div v-if="!isUserLogin" class="buttons">
      PLEASE LOGIN TO ACCESS THIS SITE
   </div>
      
</div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'home',
   computed: mapGetters(['isUserLogin']),
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
  .card {
    height: 200px;
    background-position: center;
    background-size: cover;
    text-align: center;
  }
  .card-content {
    padding-top: 50px;
    position: absolute;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.35);
    top: 0;
    padding: 10px;
    height: 200px;
    width: 100%;
    span {
      font-size: 18px;
      text-align: center;
      width: 100%;
      position: absolute;
      bottom: 10px;
      right: 0;
    }
    h2 {
      margin-top: 10px;
    }
  }
  .event-date {
    background-color: #151515;
    color: #FFF;
    font-size: .75em;
    padding: 2px 10px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>