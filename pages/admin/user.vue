<template>
  <v-form ref="form" v-model="valid" class="text-left user-form">
    <h2 class>Создать пользователя</h2>

    <v-snackbar v-model="snackbar">{{ message }}</v-snackbar>

    <v-text-field
      label="Login"
      v-model="login"
      :rules="loginRules"
      required
      prepend-icon="mdi-account"
      type="text"
    ></v-text-field>

    <v-text-field
      label="Password"
      v-model="password"
      :rules="passwordRules"
      required
      prepend-icon="mdi-lock"
      type="password"
    ></v-text-field>

    <v-btn
      class="mb-8"
      @click.prevent="validate"
      :disabled="!valid"
      color="success"
      rounded
      :loading="loading"
      type="submit"
    >Создать</v-btn>
  </v-form>
</template>

<script>
export default {
  layout: 'admin',
  head: {
    title: `Создать пользователя | ${process.env.appName}`
  },
  middleware: ['admin-auth'],
  data: () => ({
    loading: false,
    valid: true,
    snackbar: false,
    message: '',
    login: '',
    loginRules: [v => !!v || 'Имя не должно быть пустым'],

    password: '',
    passwordRules: [v => !!v || 'Введите ваш пароль']
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const formData = {
          login: this.login,
          password: this.password
        }
        try {
          await this.$store.dispatch('auth/createUser', formData)
          this.message = 'Новый пользуватель добавлен'
          this.snackbar = true
          this.login = ''
          this.password = ''
          this.loading = false

          // setTimeout(_ => {
          //   this.$emit('created', formData)
          // }, 2000)
        } catch (e) {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-form {
  width: 500px;
  margin: 50px;
}
</style
>>
