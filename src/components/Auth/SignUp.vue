<template>
    <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
              <div v-if="error" >
                  Error happen while trying to register user
              </div>
            <h5 class="card-title text-center">Sign up</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="input" v-model="name" id="inputName" class="form-control" placeholder="Full Name" required autofocus>
                <label for="inputName">Full Name</label>
              </div>

              <div class="form-label-group">
                <input type="input" v-model="username" id="userName" class="form-control" placeholder="user name" required autofocus>
                <label for="inputName">User Name</label>
              </div>
              <div class="form-label-group">
                <input type="password" v-model="password"  id="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Password</label>
              </div>

              
              <button class="btn btn-lg btn-primary btn-block text-uppercase" @click.prevent="signUp()">Register</button>
              <hr class="my-4">
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "signup",
    data: () => ({
        name: '',
        username: '',
        password: '',
        error: false
    }),
    methods: {
        signUp() {
            console.log("login clicked");
            this.$store.dispatch("SIGNUP", {
                name: this.name,
                username: this.username,
                password: this.password
            })
            .then(() => {
                this.$router.push("/login");
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