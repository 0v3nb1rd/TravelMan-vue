<template>
  <v-container fluid>
    <v-row dense tag="ul" class="pa-0">
      <v-col v-for="post in posts" :key="post._id" tag="li" :cols="12" sm="6" md="4" lg="3">
        <Post :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from '@/components/main/Post'
export default {
  head: {
    title: `Главная | ${process.env.appName}`
  },
  components: {
    Post
  },
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')
    return { posts }
  }
}
</script>
