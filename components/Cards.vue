<template>
  <!-- <v-row dense tag="ul" class="pa-0">
    <v-col v-for="card in cards" :key="card.title" tag="li" :cols="card.flex">
      <v-card>
				
        <v-img
          :src="card.src"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="card.title"></v-card-title>
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
				
      </v-card>
    </v-col>
  </v-row> -->

  <v-row dense tag="ul" class="pa-0">
    <v-col v-for="card in cards" :key="card.title" tag="li" :cols="card.flex">
      <v-card to="#" class="card">
        <figure>
          <v-img
            :src="card.src"
            class="white--text align-end card__image"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img>
          <v-card-subtitle class="card__meta">
            <span class="card__date"
              ><span>27<em>мая</em></span></span
            >
            <span class="card__category">Путишествие</span>
          </v-card-subtitle>
          <figcaption class="card__description">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </figcaption>
        </figure>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'Pre-fab homes',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a explicabo, maiores unde odio magni excepturi soluta...',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 3,
        category: 'Петешествия',
        data: '27/01'
      },
      {
        title: 'Favorite road trips',
        description:
          'lorem ipsum is a very good teacher and very buauriful teacher',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 3,
        data: '27/01',
        category: 'Петешествия'
      },
      {
        title: 'Best airlines',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a explicabo, maiores unde odio magni excepturi soluta...',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 3,
        data: '27/01',
        category: 'Петешествия'
      },
      {
        title: 'Best airlines',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a explicabo, maiores unde odio magni excepturi soluta...',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 3,
        data: '27/01',
        category: 'Петешествия'
      },
      {
        title: 'Best airlines',
        description:
          'lorem ipsum is a very good teacher and very buauriful teacher',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 3,
        data: '27/01',
        category: 'Петешествия'
      },
      {
        title: 'Best airlines',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nesciunt molestiae debitis impedit fugiat itaque hic consequuntur a explicabo, maiores unde odio magni excepturi soluta...',
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        flex: 3,
        data: '27/01',
        category: 'Петешествия'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.card {
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

    .card__image {
      transform: scale(1.3);
      opacity: 0.6;
    }
    .card__meta {
      height: 50%;
    }
    .card__description {
      top: 50%;

      p {
        opacity: 1;
      }
    }
  }
}
</style>
