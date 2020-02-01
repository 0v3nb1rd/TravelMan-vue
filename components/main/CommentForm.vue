<template>
  <v-form ref="form" v-model="valid" lazy-validation class="text-left">
    <v-text-field label="Ваше имя" v-model="name" :rules="nameRules" required></v-text-field>

    <v-textarea
      label="Текст комментария"
      v-model="text"
      :rules="textRules"
      rows="2"
      filled
      auto-grow
    ></v-textarea>

    <!-- <v-checkbox :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox> -->

    <v-btn
      class="mb-8"
      @click="validate"
      :disabled="!valid"
      color="success"
      rounded
    >Добавить комментарий</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Имя не должно быть пустым'],

    text: '',
    textRules: [
      v => !!v || 'Введите ваш комментарий',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        console.log('object')
      }
    }
  }
}
</script>

<style>
</style>