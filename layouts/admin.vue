<template>
  <v-app id="inspire">
    <v-snackbar top v-model="snackbar" color="blue">{{ message }}</v-snackbar>
    <Aside />

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Aside from '@/components/admin/Aside'
export default {
  components: { Aside },
  // props: {
  //   source: String
  // },
  data: () => ({
    drawer: null,
    dialog: false,
    snackbar: false,
    message: ''
  }),
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(val) {
      // console.log(val)
      this.message = val.response.data.message
      this.snackbar = true
    }
  }
}
</script>
