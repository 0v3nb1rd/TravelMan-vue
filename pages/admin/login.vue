<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-alert v-model="alert" dense type="info">
          Для начала нужно войти
          <strong>type</strong> of info
        </v-alert>

        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title class="mx-auto">Login form</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field
                label="Login"
                v-model="login"
                :rules="loginRules"
                required
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                label="Password"
                v-model="password"
                :rules="passwordRules"
                required
                prepend-icon="mdi-lock"
                type="password"
              />
              <v-btn
                @click="validate"
                rounded
                :disabled="!valid"
                color="primary"
                :loading="loading"
              >Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  data: () => ({
    loading: false,
    valid: true,
    alert: false,

    login: '',
    loginRules: [v => !!v || 'Имя не должно быть пустым'],
    password: '',
    passwordRules: [v => !!v || 'Имя не должно быть пустым']
  }),
  mounted() {
    const { message } = this.$route.query
    console.log(message)
    if (message === 'login') {
      console.log('object')
      //   // debugger
      this.alert = true
    }
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.loading = true

        try {
          const formData = {
            login: this.login,
            password: this.password
          }
          await this.$store.dispatch('auth/login', formData)
          this.$router.push('/admin')
        } catch (e) {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style>
</style>