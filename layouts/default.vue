<template>
  <v-app>
    <AppNavigation />

    <Paralax />

    <v-content class="indigo lighten-5 pa-0">
      <nuxt />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'
import Paralax from '@/components/main/Paralax'
import Footer from '@/components/Footer'
export default {
  components: {
    AppNavigation,
    Paralax,
    Footer
  }
}
</script>
