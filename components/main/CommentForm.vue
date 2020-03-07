<template>
  <v-form ref="form" v-model="valid" class="text-left">
    <h2 class>Добавить комментарий</h2>

    <v-text-field
      label="Ваше имя"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>

    <v-textarea
      label="Текст комментария"
      v-model="text"
      :rules="textRules"
      rows="2"
      filled
      auto-grow
    ></v-textarea>

    <v-btn
      class="mb-8"
      @click="validate"
      :disabled="!valid"
      color="success"
      rounded
      :loading="loading"
      >Добавить комментарий</v-btn
    >
  </v-form>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Имя не должно быть пустым'],

    text: '',
    textRules: [
      v => !!v || 'Введите ваш комментарий',
      v => v.length <= 200 || 'Текст должен иметь максимум 200символов'
    ]
  }),
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const formData = {
          name: this.name,
          text: this.text,
          postId: '',
          postId: this.postId
        }
        try {
          const newComment = await this.$store.dispatch(
            'comment/create',
            formData
          )
          // this.$emit('created')
          // setTimeout(_ => {
          this.$emit('created', newComment)
          // }, 2000)
        } catch (e) {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style></style>
