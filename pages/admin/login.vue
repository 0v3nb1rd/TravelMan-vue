<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-snackbar top v-model="snackbar" color="blue">{{ message }}</v-snackbar>
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
    snackbar: false,
    message: '',

    login: '',
    loginRules: [v => !!v || 'Имя не должно быть пустым'],
    password: '',
    passwordRules: [v => !!v || 'Имя не должно быть пустым']
  }),
  mounted() {
    const { message } = this.$route.query
    switch (message) {
      case 'login':
        this.message = 'Для начала нужно войти'
        this.snackbar = true
        break
      case 'logout':
        this.message = 'Вы успешно вышли из системы'
        this.snackbar = true
        break
      case 'session':
        this.message = 'Время сессии истекло, пожалуйста зайдите заново'
        this.snackbar = true
        break
    }
    if (message === 'login') {
      this.snackbar = true
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