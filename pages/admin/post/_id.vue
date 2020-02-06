<template>
  <div class="page-wrap">
    <v-snackbar top v-model="snackbar">{{ message }}</v-snackbar>

    <v-breadcrumbs class="mb-2" divider=">" :items="breadcrumbs">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.href"
          :disabled="item.disabled"
        >{{ item.text || post.title }}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <v-form class="ml-5 page__form" v-model="valid" ref="form">
      <v-textarea
        label="Text in format .md or .html"
        v-model.trim="text"
        :rules="textRules"
        required
        outlined
        no-resize
        rows="10"
      ></v-textarea>
      <v-btn
        @click="validate"
        rounded
        :disabled="!valid"
        color="primary"
        :loading="loading"
      >Обновить</v-btn>
      <span class="post__text">
        <v-chip>
          <v-icon left small>mdi-eye</v-icon>
          {{ post.views }}
        </v-chip>
        <v-chip class="ml-3">
          <v-icon left small>mdi-clock</v-icon>
          {{ new Date(post.date).toLocaleString() }}
        </v-chip>
      </span>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Пост || ${this.post.title}`
    }
  },
  validate({ params }) {
    return Boolean(params.id)
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    // console.log({ post })
    return { post }
  },
  data: () => ({
    loading: false,
    valid: true,
    snackbar: false,
    message: '',

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
          id: this.post._id,
          text: this.text
        }
        try {
          await this.$store.dispatch('post/update', formData)
          this.message = 'Everything is OK :)'
          this.snackbar = true
          this.loading = false
        } catch (e) {
          console.log(e)
          this.loading = false
        }
      }
      // this.$refs.form.validate(valid => {
      //   console.log('object')
      //   if (valid) {
      //     console.log('valid')
      //   } else {
      //     console.log('not valid')
      //   }
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrap {
  width: 600px;
}
.post__text {
  text-align: right;
  float: right;
}
</style>