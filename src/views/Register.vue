<template>
  <!-- <div>Register Page</div> -->
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">Have an account?</router-link>
          </p>
          <AppValidationErrors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          ></AppValidationErrors>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Username"
                v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              :disabled="isSubmitting"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppValidationErrors from '@/components/ValidationErrors.vue'
import { actionTypes } from '@/store/modules/auth'

export default {
  name: 'AppRegister',
  components: {
    AppValidationErrors,
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  computed: {
    //mapstate is a helper that helps to get property from the state.
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
    }),
    //     isSubmitting() {
    //       return this.$store.state.auth.isSubmitting
    //     },
    //     validationErrors() {
    //       return this.$store.state.auth.validationErrors
    // },
  },
  methods: {
    onSubmit() {
      console.log('onSubmit')
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'home' })
        })
    },
  },
}
</script>
