<template>
  <v-container fluid>
    <h1 class="text-center">Travels</h1>

    <v-row dense tag="ul" class="pa-0">
      <v-col v-for="post in posts" :key="post._id" tag="li" :cols="3">
        <Post :post="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from '@/components/main/Post'
export default {
  head: {
    title: `Путишествие | ${process.env.appName}`
  },
  components: {
    Post
  },
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')
    // console.log(posts)
    return { posts }
  }
}
</script>