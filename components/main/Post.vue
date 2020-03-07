<template>
  <!-- <v-card to="#" class="card">
    <figure>
      <v-img
        :src="card.src"
        class="white--text align-end card__image"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      ></v-img>
      <v-card-subtitle class="card__meta">
        <span class="card__date">
          <span>
            27
            <em>мая</em>
          </span>
        </span>
        <span class="card__category">Путишествие</span>
      </v-card-subtitle>
      <figcaption class="card__description">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </figcaption>
    </figure>
  </v-card>-->

  <v-card @click="openPost" class="post">
    <figure>
      <v-img
        :src="post.ImageUrl"
        class="white--text align-end post__image"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
      ></v-img>
      <v-card-subtitle class="post__meta">
        <span class="post__date">
          <span>
            {{ new Date(post.date).getDate() }}
            <em>мая</em>
          </span>
        </span>
        <span class="post__category">Путишествие</span>
      </v-card-subtitle>
      <figcaption class="post__description">
        <h3>{{ post.title }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a
          explicabo, maiores unde odio magni excepturi soluta...
        </p>
      </figcaption>
    </figure>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost() {
      const postName = this.post._id
      this.$router.push(`/category/${postName}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  background: #111;

  figure {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  &__image {
    width: 100%;
    min-height: 550px;
    transform: scale(1.1);
    transition: 0.2s all ease;
    border-style: none;
  }
  &__meta {
    position: absolute;
    height: 75%;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.2s all ease;
  }
  &__date,
  &__category {
    position: absolute;
    display: inline-block;
    font-weight: bold;
    background-color: $accent;
    color: #fff;
    text-transform: uppercase;
  }
  &__date {
    box-sizing: content-box;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 50%;
    text-align: center;
    span {
      line-height: 0.8px;
      em {
        display: block;
        padding-top: 2px;
        font-size: 70%;
        font-style: normal;
      }
    }
  }
  &__category {
    bottom: 0;
    left: 0;
    padding: 2px 10px 2px 5px;
    font-size: 16px;
    // font-style: italic;
    line-height: 1.3;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &__description {
    position: absolute;
    left: 0;
    right: 0;
    top: 75%;
    bottom: 0;
    padding: 20px;
    background: $dark-blue;
    transition: 0.2s all ease;
    h3 {
      margin: 0;
      padding: 0;
      color: #fff;
      font-size: 26px;
      font-weight: 700;
    }
    p {
      color: $textDesk;
      font-size: 15px;
      line-height: 1.8em;
      opacity: 0;
      transition: 0.4s all ease;
    }
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);

    .post__image {
      transform: scale(1.3);
      opacity: 0.6;
    }
    .post__meta {
      height: 50%;
    }
    .post__description {
      top: 50%;

      p {
        opacity: 1;
      }
    }
  }
}
</style>
