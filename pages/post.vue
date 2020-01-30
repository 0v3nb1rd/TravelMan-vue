<template>
  <!--Card content-->
  <v-container pt-0>
    <v-sheet tag="section" elevation="2" class="text-center mx-auto justify-center post">
      <!--Title-->
      <!-- <v-card-actions class="justify-center buttons__nav"> -->
      <!-- <v-btn color="error" large>Primary button</v-btn>
        <v-btn color="success" large>Secondary button</v-btn>
      <v-btn color="primary" large>Default button</v-btn>-->
      <!-- <v-badge avatar bordered overlap :content="messages" :value="messages" color="green"> -->
      <div class="post__action">
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
          <v-btn color="#2196f3" class="white--text" large>Primary button</v-btn>
          <!-- <v-btn color="success" large>Secondary button</v-btn> -->
          <v-btn color="success" large>Default button</v-btn>
        </div>
      </div>

      <!-- </v-card-actions> -->

      <v-divider inset class="mx-auto mb-10"></v-divider>
      <article class="post__description">
        <h4 class="card-title">
          <strong>My adventure</strong>
        </h4>
        <h5 class="blue-text">
          <strong>Photography</strong>
        </h5>

        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <h3>Hello</h3>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <p class="card-text">
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
      </article>
    </v-sheet>
  </v-container>

  <!--/.Card content-->
</template>

<script>
export default {
  data: () => ({
    hover: false
  })
}
</script>

<style lang="scss" scoped>
.post {
  margin-top: -64px;

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
</style>