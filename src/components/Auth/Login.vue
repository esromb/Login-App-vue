<template>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
              <div v-if="error" >
                  Username or password is wrong. Try again
              </div>
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="email" v-model="username" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputEmail">Email address or username</label>
              </div>

              <div class="form-label-group">
                <input type="password" v-model="password"  id="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Password</label>
              </div>

              
              <button class="btn btn-lg btn-primary btn-block text-uppercase" @click.prevent="login()">Sign in</button>
              <hr class="my-4">
               <router-link :to="'/signup'">
                 <strong>Sign Up</strong>
               </router-link>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "login",
    data: () => ({
        username: '',
        password: '',
        error: false
    }),
    methods: {
        login() {
            console.log("login clicked");
            this.$store.dispatch("LOGIN", {
                username: this.username,
                password: this.password
            })
            .then(() => {
                this.$store.state.userLoggedIn = true;
                this.$router.push("/");
            })
            .catch(() => {
                this.error = true;
            })
        }

    }
};
</script>

<style scoped>

</style>