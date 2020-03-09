<template>
  <v-container fluid>
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
    title: `Главная | ${process.env.appName}`
  },
  components: {
    Post
  },
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetch')
    // console.log(posts)
    return { posts }
  },
  data: () => ({
    // cards: [
    //   {
    //     title: 'Pre-fab homes',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a explicabo, maiores unde odio magni excepturi soluta...',
    //     src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
    //     flex: 3,
    //     category: 'Петешествия',
    //     data: '27/01'
    //   },
    //   {
    //     title: 'Favorite road trips',
    //     description:
    //       'lorem ipsum is a very good teacher and very buauriful teacher',
    //     src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    //     flex: 3,
    //     data: '27/01',
    //     category: 'Петешествия'
    //   },
    //   {
    //     title: 'Best airlines',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a explicabo, maiores unde odio magni excepturi soluta...',
    //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    //     flex: 3,
    //     data: '27/01',
    //     category: 'Петешествия'
    //   },
    //   {
    //     title: 'Best airlines',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a explicabo, maiores unde odio magni excepturi soluta...',
    //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    //     flex: 3,
    //     data: '27/01',
    //     category: 'Петешествия'
    //   },
    //   {
    //     title: 'Best airlines',
    //     description:
    //       'lorem ipsum is a very good teacher and very buauriful teacher',
    //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    //     flex: 3,
    //     data: '27/01',
    //     category: 'Петешествия'
    //   },
    //   {
    //     title: 'Best airlines',
    //     description:
    //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a explicabo, maiores unde odio magni excepturi soluta...',
    //     src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    //     flex: 3,
    //     data: '27/01',
    //     category: 'Петешествия'
    //   }
    // ]
  })
}
</script>

<style lang="scss" scoped></style>
