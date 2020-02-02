<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title class="mx-auto">Login form</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form @submit.native.prevent="onSubmit" ref="form">
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                required
              />

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <!-- <v-btn color="primary">Login</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Имя не должно быть пустым'],
    // login: '',
    // loginRules: [v => !!v || 'Логин не должeн быть пустым'],

    password: '',
    passwordRules: [v => !!v || 'Введите пароль']
  }),
  methods: {
    onSubmit(e) {
      console.log('e')
    }
    // validate() {
    //   if (this.$refs.form.validate()) {
    //     console.log('validate')
    //   }
    // }
  }
}
</script>

<script>
export default {
  layout: 'empty'
}
</script>

<style>
</style>