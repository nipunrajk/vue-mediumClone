<template>
  <!-- <div>Register Page</div> -->
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }"
              >Need an account?</router-link
            >
          </p>
          VALIDATION ERROR
          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign Up
            </button>
            {{ count }}
          </form>
          <button @click="incrementCount">Increment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRegister',
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    incrementCount() {
      this.$store.commit('increment')
    },
  },
}
</script>
