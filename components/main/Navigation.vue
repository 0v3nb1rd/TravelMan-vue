<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-lg-and-up"
      />
      <v-toolbar-title class="logo logo-letter">
        <nuxt-link to="/">Travel-<span>Man</span> </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- NAVBAR FOR MEDIUM AND UP SCREEN SIZES -->
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat to="/services">
          <v-icon class="primary--text navbar-icons"
            >fas fa-hands-helping</v-icon
          >&nbsp;
          <span class="nav-text primary--text">Путишествие</span>
        </v-btn>
        <v-btn flat to="/store">
          <v-icon class="primary--text navbar-icons">fas fa-store</v-icon>&nbsp;
          <span class="nav-text primary--text">Технологии</span>
        </v-btn>
        <v-btn flat to="/sponsors">
          <v-icon class="primary--text navbar-icons">fas fa-address-card</v-icon
          >&nbsp;
          <span class="nav-text primary--text">Психология</span>
        </v-btn>
        <v-btn flat to="/events">
          <v-icon class="primary--text navbar-icons">fas fa-calendar-alt</v-icon
          >&nbsp;
          <span class="nav-text primary--text">Здоровье</span>
        </v-btn>
        <v-btn flat to="/about">
          <v-icon class="primary--text navbar-icons">fas fa-user-circle</v-icon
          >&nbsp;
          <span class="nav-text primary--text">Про нас</span>
        </v-btn>
      </v-toolbar-items>

      <!-- NAVBAR FOR SMALL AND EXTRA SMALL SCREEN SIZES -->
    </v-app-bar>

    <v-navigation-drawer
      clipped
      temporary
      v-model="drawer"
      class="hidden-lg-and-up"
      fixed
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
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
    drawer: null
  })
}
</script>
