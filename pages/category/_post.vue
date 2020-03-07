<template>
  <v-container pt-0>
    <v-sheet tag="article" elevation="2" class="mx-auto justify-center post">
      <header class="post__action">
        <v-badge
          class="post__heart"
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
        <div class="post__buttons">
          <v-btn color="#2196f3" class="white--text" large
            >Primary button</v-btn
          >
          <v-btn color="success" large>Default button</v-btn>
        </div>
      </header>

      <v-divider inset class="mx-auto mb-10"></v-divider>
      <main class="post__description">
        <h4 class="card-title">
          <strong>{{ post.title }}</strong>
        </h4>
        <h5 class="blue-text">
          <strong>Category</strong>
        </h5>

        <vue-markdown>{{ post.text }}</vue-markdown>

        <!-- <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <h3>Hello</h3>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam.
        </p> -->
      </main>

      <footer>
        <!-- Form -->
        <CommentForm
          v-if="canAddComment"
          @created="createCommenHendler"
          :postId="post._id"
        />
        <v-snackbar top v-model="snackbar" color="success">{{
          textadd
        }}</v-snackbar>
        <div class="comments" v-if="post.comments.length">
          <Comment
            v-for="comment in post.comments"
            :key="comment._id"
            :comment="comment"
          />
        </div>
        <v-alert border="bottom" text color="blue" v-else
          >Комментариев нет ;(</v-alert
        >
      </footer>
    </v-sheet>
  </v-container>
</template>

<script>
import Comment from '@/components/main/Comment'
import CommentForm from '@/components/main/CommentForm'
export default {
  components: {
    Comment,
    CommentForm
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
    canAddComment: true
  }),
  methods: {
    createCommenHendler(comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
      this.snackbar = true
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-top: -64px;
  text-align: center;

  &__heart {
    top: -32px;
  }
}
.card-title {
  font-size: 36px;
  font-weight: 500;
}
.card-text {
  font-size: 19px;
}

.post__action {
  position: relative;
  padding: 4px 0;
  padding-bottom: 25px;
  margin-bottom: 5px;
}
.post__buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
footer {
  padding: 2rem 0;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
