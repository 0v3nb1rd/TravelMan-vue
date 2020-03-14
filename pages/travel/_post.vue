<template>
  <div class="header-wraper">
    <Paralax :paralax="paralax" />

    <v-content class="indigo lighten-5 pa-0">
      <v-container pt-0>
        <v-sheet tag="article" elevation="2" class="mx-auto justify-center post-article">
          <header class="post-article__action">
            <v-badge
              class="post-article__heart"
              :value="hover"
              color="deep-purple accent-4"
              content="999+"
              transition="scale-transition"
            >
              <v-hover v-model="hover">
                <v-btn fab dark color="pink">
                  <v-icon large>mdi-heart</v-icon>
                </v-btn>
              </v-hover>
            </v-badge>
            <div class="post-article__buttons">
              <v-btn color="#2196f3" class="white--text" large>Primary button</v-btn>
              <v-btn color="success" large>Default button</v-btn>
            </div>
          </header>

          <v-divider inset class="mx-auto mb-10"></v-divider>
          <section class="post__description">
            <!-- <h4 class="card-title">
            <strong>{{ post.title }}</strong>
          </h4>
          <h5 class="blue-text">
            <strong>Category</strong>
            </h5>-->

            <vue-markdown>{{ post.text }}</vue-markdown>
          </section>

          <footer class="post-article__footer">
            <!-- Form -->
            <CommentForm v-if="canAddComment" @created="createCommenHendler" :postId="post._id" />
            <v-snackbar top v-model="snackbar" color="success">
              {{
              textadd
              }}
            </v-snackbar>
            <div class="comments" v-if="post.comments.length">
              <Comment v-for="comment in post.comments" :key="comment._id" :comment="comment" />
            </div>
            <v-alert border="bottom" text color="blue" v-else>Комментариев нет ;(</v-alert>
          </footer>
        </v-sheet>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Paralax from '@/components/main/Paralax'
import Comment from '@/components/main/Comment'
import CommentForm from '@/components/main/CommentForm'
export default {
  layout: 'category',
  components: {
    Paralax,
    Comment,
    CommentForm
  },
  head() {
    return {
      title: `${this.post.title} | ${process.env.appName}`
    }
  },

  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchById', params.post)
    await store.dispatch('post/addView', post) // views
    return { post: { ...post, views: ++post.views } }
  },
  data: () => ({
    snackbar: false,
    textadd: 'Спасибо коммент додан',
    hover: false,
    canAddComment: true,
    paralax: {
      picture: '',
      category: 'Путишествие',
      title: 'истории о путешествиях, людях, и жизни за границей'
    }
  }),
  mounted() {
    this.paralax.picture = this.post.ImageUrl
    this.paralax.category = this.post.title
    this.paralax.title = this.post.categoryRu
  },
  methods: {
    createCommenHendler(comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
      this.snackbar = true
    }
  }
}
</script>

<style>
/* Style here =>  @/assets/main.scss */
</style> 