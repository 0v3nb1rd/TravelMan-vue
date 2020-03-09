<template>
  <v-form class="user__form mt-5" v-model="valid" ref="form">
    <v-snackbar top v-model="snackbar">{{ message }}</v-snackbar>
    <h1 class="mb-5">Create new post</h1>
    <v-text-field label="Enter post name" v-model.trim="title" :rules="titleRules" outlined></v-text-field>
    <v-textarea
      label="Text in format .md or .html"
      v-model.trim="text"
      :rules="textRules"
      required
      outlined
      no-resize
      rows="10"
      clear-icon
    ></v-textarea>

    <v-file-input
      flat
      single-line
      show-size
      v-model="files"
      :rules="titleRules"
      placeholder="Select your photo"
    ></v-file-input>

    <v-dialog class="d-flex justify-space-between" v-model="dialog">
      <template v-slot:activator="{ on }">
        <div class="d-flex justify-space-between">
          <v-btn
            @click.prevent="validate"
            rounded
            :disabled="!valid"
            color="green"
            :loading="loading"
            type="submit"
          >Создать пост</v-btn>
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
  head: {
    title: `Новый пост | ${process.env.appName}`
  },
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

    files: null,
    filesRules: [v => !!v || 'You mast add picture.!'],

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
          text: this.text,
          image: this.files
        }
        try {
          await this.$store.dispatch('post/create', formData)
          this.message = 'Post is olready created.! :)'
          this.snackbar = true
          this.title = ''
          this.text = ''
          this.files = null
        } catch (e) {
          // console.log(e)
        } finally {
          this.loading = false
          // this.valid = false
        }
      } else {
        console.log('not valid')
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
