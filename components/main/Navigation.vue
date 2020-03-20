<template>
  <div>
    <v-app-bar class="vv-toolbar" dark color="rgba(32,34,34,.7)" hide-on-scroll app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <nuxt-link class="logo v-toolbar-title" to="/">
        <img src="~/assets/img/logo1.png" alt="Travel-man Logo" />
      </nuxt-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down menu-list">
        <v-btn
          class="menu-list__item white--text"
          text
          v-for="(li, i) in menu"
          :key="i"
          :to="li.link"
        >{{ li.text }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer :value="drawer" temporary app class="hidden-md-and-up">
      <v-list>
        <v-list-item v-for="(li, i) in menu" :key="i" :to="li.link">
          <v-list-item-title class="subheading">
            {{
            li.text
            }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
    menu: [
      { text: 'Путишествие', link: '/travel', icon: 'mdi-clock' },
      { text: 'Технологии', link: '/technology', icon: 'mdi-account' },
      { text: 'Психология', link: '/psihology', icon: 'mdi-flag' },
      { text: 'Здоровье', link: '/health', icon: 'mdi-flag' },
      { text: 'Про нас', link: '/about', icon: 'mdi-flag' }
    ]
  }),
  methods: {
    toggleDrawer(event) {
      this.drawer = event
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
  @media screen and (max-width: $break-medium) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    max-width: 180px;
    margin-right: 10px;
    @media screen and (max-width: $break-medium) {
      margin: 0;
    }
  }
}
</style>
