<template>
  <v-parallax src="/test.jpg" class="image">
    <v-overlay absolute opacity="0.6">
      <v-row align="center" justify="center">
        <v-col class="text-center main-text" cols="12">
          <p>Приключение того стоит</p>
          <h1>о жизни технологиях и путешествиях</h1>
        </v-col>
      </v-row>
    </v-overlay>
  </v-parallax>
</template>

<style lang="scss" scoped>
.main-text p {
  margin-bottom: 10px;
  font-size: 48px;
  font-weight: 800;
  line-height: 48px;
}
.main-text h1 {
  text-transform: uppercase;
  font-size: 17px;
  line-height: 17px;
  letter-spacing: 0.25px;
  font-weight: 500;
  opacity: 0.6;
}
</style>
