<template>
  <v-parallax :src="paralax.picture" class="image" :height="mobil">
    <!-- <v-parallax src="/test.jpg" class="image"> -->
    <v-overlay absolute opacity="0.6">
      <v-row align="center" justify="center">
        <v-col class="text-center main-text" cols="12">
          <p>{{ paralax.category}}</p>
          <h1>{{ paralax.title }}</h1>
          <!-- <p>Приключение того стоит</p>
          <h1>о жизни технологиях и путешествиях</h1>-->
        </v-col>
      </v-row>
    </v-overlay>
  </v-parallax>
</template>

<script>
export default {
  props: {
    paralax: {
      type: Object,
      default() {
        return {
          picture: '/category/main.jpg',
          category: 'Приключение того стоит',
          title: 'о жизни технологиях и путешествиях'
        }
      }
    }
  },
  computed: {
    mobil: function() {
      if (this.$vuetify.breakpoint.xs) {
        return 400
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-text p {
  margin-bottom: 10px;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
  @media screen and (max-width: $break-small) {
    font-size: 40px;
    line-height: 35px;
    padding: 0 15px;
    margin-bottom: 15px;
  }
}
.main-text h1 {
  text-transform: uppercase;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.25px;
  font-weight: 500;
  opacity: 0.6;
  @media screen and (max-width: $break-small) {
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 0.1px;
    padding: 0 15px;
  }
}
</style>
