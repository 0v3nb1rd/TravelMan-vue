<template>
  <v-content class="indigo lighten-5 pa-0">
    <Paralax :paralax="paralax" />

    <v-container fluid>
      <v-row dense tag="ul" class="pa-0">
        <v-col v-for="post in posts" :key="post._id" tag="li" :cols="3">
          <Post :post="post" />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Post from '@/components/main/Post'
import Paralax from '@/components/main/Paralax'

export default {
  head: {
    title: `Технологии | ${process.env.appName}`
  },
  layout: 'category',
  components: {
    Post,
    Paralax
  },
  async asyncData({ store }) {
    const allPosts = await store.dispatch('post/fetch')
    const posts = allPosts.filter(post => post.category === 'technology')
    return { posts }
  },
  data: () => ({
    paralax: {
      picture: '/category/technology.jpg',
      category: 'Технологии',
      title: 'технологии, гаджеты программирование'
    }
  })
}
</script>