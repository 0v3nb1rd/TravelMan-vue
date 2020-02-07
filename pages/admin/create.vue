<template>
  <v-form class="user__form mt-5" v-model="valid" ref="form">
    <v-snackbar top v-model="snackbar">{{ message }}</v-snackbar>
    <h1 class="mb-5">Create new post</h1>
    <v-text-field
      label="Enter post name"
      v-model.trim="title"
      :rules="titleRules"
      outlined
    ></v-text-field>
    <v-textarea
      label="Text in format .md or .html"
      v-model.trim="text"
      :rules="textRules"
      required
      outlined
      no-resize
      rows="10"
    ></v-textarea>

    <v-dialog class="d-flex justify-space-between" v-model="dialog">
      <template v-slot:activator="{ on }">
        <div class="d-flex justify-space-between">
          <v-btn
            @click="validate"
            rounded
            :disabled="!valid"
            color="green"
            :loading="loading"
            >Создать пост</v-btn
          >
          <v-btn color="primary" rounded dark v-on="on">Предпросмотр</v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title class="justify-center">
          <span class="headline">Предпросмотр</span>
        </v-card-title>
        <v-card-text :key="text">
          <vue-markdown>{{ text }}</vue-markdown>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data: () => ({
    dialog: false,

    loading: false,
    valid: true,
    snackbar: false,
    message: '',

    title: '',
    titleRules: [v => !!v || "Post name can't be empty"],

    text: '',
    textRules: [v => !!v || "Text can't be empty"],

    breadcrumbs: [
      {
        text: 'Посты',
        disabled: false,
        href: '/admin/list',
        exact: true
      },
      {
        text: '',
        disabled: true
      }
    ]
  }),
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const formData = {
          title: this.title,
          text: this.text
        }
        try {
          await this.$store.dispatch('post/create', formData)
          this.title = ''
          this.text = ''
          this.message = 'Post is olready created.! :)'
          this.snackbar = true
        } catch (e) {
          console.log(e)
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user__form {
  width: 600px;
  margin: 30px 30px;
}
</style>
