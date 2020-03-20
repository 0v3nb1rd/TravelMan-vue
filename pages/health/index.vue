<template>
  <v-content class="indigo lighten-5 pa-0">
    <Paralax :paralax="paralax" />

    <v-container fluid>
      <v-row dense tag="ul" class="pa-0">
        <v-col v-for="post in posts" :key="post._id" tag="li" :cols="12" sm="6" md="4" lg="3">
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
    title: `Здоровье | ${process.env.appName}`
  },
  layout: 'category',
  components: {
    Post,
    Paralax
  },
  async asyncData({ store }) {
    const allPosts = await store.dispatch('post/fetch')
    const posts = allPosts.filter(post => post.category === 'health')
    return { posts }
  },
  data: () => ({
    paralax: {
      picture: '/category/health.jpeg',
      category: 'Здоровье',
      title: 'рецепты долголетия, продуктивность, и спорт'
    }
  })
}
</script>